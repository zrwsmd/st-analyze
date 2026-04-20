import {
    AstNode,
    AstNodeDescription,
    AstUtils,
    CstNode,
    DefaultLinker,
    DocumentState,
    LangiumCoreServices,
    LangiumDocument,
    LinkingError,
    Reference,
    ReferenceInfo,
    isAstNode,
    isAstNodeDescription,
    isLinkingError
} from 'langium';
import { isRefFunctionOrBlockName } from './generated/ast.js';
import { noBasicAllCacheStr } from './util/tool.js';
import { StUri, getRelatedElementInfoToOuter } from './util/transform.js';

interface DefaultReference extends Reference {
    _ref?: AstNode | LinkingError;
    _nodeDescription?: AstNodeDescription;
}

export class StLinker extends DefaultLinker {
    constructor(public services: LangiumCoreServices) {
        super(services);
    }

    private getOuterCacheElement(refText: string) {
        return getRelatedElementInfoToOuter(refText);
    }

    private isOuterCacheReference(refText: string): boolean {
        return this.getOuterCacheElement(refText) !== undefined;
    }

    private createOuterCacheDescription(refText: string): AstNodeDescription {
        let outerElement = this.getOuterCacheElement(refText);
        let descriptionType = 'FunctionElement';
        if (outerElement) {
            if (outerElement.elementType === 'alias') {
                descriptionType = 'Alias';
            } else if (outerElement.elementType === 'enum') {
                descriptionType = 'StEnum';
            } else if (outerElement.elementType === 'struct') {
                descriptionType = 'StructsList';
            } else if (outerElement.elementType === 'functionBlock') {
                descriptionType = 'FunctionBlock';
            }
        }
        return {
            type: descriptionType,
            name: refText,
            documentUri: StUri,
            path: 'st-cache'
        };
    }

    override getCandidate(refInfo: ReferenceInfo): AstNodeDescription | LinkingError {
        const refText = refInfo.reference.$refText;
        const referenceType = this.reflection.getReferenceType(refInfo);
        // If we don't override this, external cache symbols such as TON will fail to link.
        if (noBasicAllCacheStr.includes(refText.toUpperCase())) {
            return this.createOuterCacheDescription(refText);
        }
        // External alias/struct/functionBlock types from data.json can also appear as ComposeElement references.
        if ((referenceType === 'ComposeElement' || referenceType === 'Universe') && this.isOuterCacheReference(refText)) {
            return this.createOuterCacheDescription(refText);
        }
        return super.getCandidate(refInfo);
    }

    override buildReference(node: AstNode, property: string, refNode: CstNode | undefined, refText: string): Reference {
        // See behavior description in doc of Linker, update that on changes in here.
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const linker = this;
        const reference: DefaultReference = {
            $refNode: refNode,
            $refText: refText,

            get ref() {
                if (isAstNode(this._ref)) {
                    return this._ref;
                } else if (isAstNodeDescription(this._nodeDescription)) {
                    const linkedNode = linker.loadAstNode(this._nodeDescription);
                    const outerElement = linker.getOuterCacheElement(refText);
                    this._ref = linkedNode ?? outerElement;
                    if (!this._ref && !noBasicAllCacheStr.includes(refText.toUpperCase())) {
                        this._ref = linker.createLinkingError({ reference, container: node, property }, this._nodeDescription);
                    }
                } else if (this._ref === undefined) {
                    const refData = linker.getLinkedNode({ reference, container: node, property });
                    if (refData.error && AstUtils.getDocument(node).state < DocumentState.ComputedScopes) {
                        return undefined;
                    }
                    this._ref = refData.node ?? refData.error;
                    this._nodeDescription = refData.descr;
                }
                return isAstNode(this._ref) ? this._ref : undefined;
            },
            get $nodeDescription() {
                return this._nodeDescription;
            },
            get error() {
                return isLinkingError(this._ref) ? this._ref : undefined;
            }
        };
        return reference;
    }

    protected override doLink(refInfo: ReferenceInfo, document: LangiumDocument): void {
        const ref = refInfo.reference as DefaultReference;
        if (ref._ref === undefined) {
            try {
                const description = this.getCandidate(refInfo);
                if (isLinkingError(description)) {
                    ref._ref = description;
                } else {
                    ref._nodeDescription = description;
                    if (this.langiumDocuments().hasDocument(description.documentUri)) {
                        const linkedNode = this.loadAstNode(description);
                        const outerElement = this.getOuterCacheElement(ref.$refText);
                        if (linkedNode || outerElement) {
                            ref._ref = linkedNode ?? outerElement;
                        } else if (description.documentUri.toString() !== document.uri.toString()) {
                            ref._ref = this.createLinkingError(refInfo, description);
                        }
                    }
                }
            } catch (err) {
                ref._ref = {
                    ...refInfo,
                    message: `An error occurred while resolving reference to '${ref.$refText}': ${err}`
                };
            }
        }
        document.references.push(ref);
    }

    protected override getLinkedNode(refInfo: ReferenceInfo): { node?: AstNode; descr?: AstNodeDescription; error?: LinkingError } {
        try {
            const description = this.getCandidate(refInfo);
            if (isLinkingError(description)) {
                return { error: description };
            }
            const linkedNode = this.loadAstNode(description);
            if (linkedNode) {
                return { node: linkedNode, descr: description };
            }
            const element = this.getOuterCacheElement(refInfo.reference.$refText);
            if (element) {
                return { node: element, descr: description };
            }
            if (description.documentUri.toString() === AstUtils.getDocument(refInfo.container).uri.toString()) {
                return { descr: description };
            }
            return {
                descr: description,
                error: this.createLinkingError(refInfo, description)
            };
        } catch (err) {
            return {
                error: {
                    ...refInfo,
                    message: `An error occurred while resolving reference to '${refInfo.reference.$refText}': ${err}`
                }
            };
        }
    }

    protected override createLinkingError(refInfo: ReferenceInfo, targetDescription?: AstNodeDescription): LinkingError {
        const document = AstUtils.getDocument(refInfo.container);
        if (document.state < DocumentState.ComputedScopes) {
            console.warn(`Attempted reference resolution before document reached ComputedScopes state (${document.uri}).`);
        }
        let referenceType = this.reflection.getReferenceType(refInfo);
        const container = refInfo.container;
        if (isRefFunctionOrBlockName(container)) {
            referenceType = '功能块或函数';
            return {
                ...refInfo,
                message: `不能引用的${referenceType}'${refInfo.reference.$refText}'.`,
                targetDescription
            };
        }
        return {
            ...refInfo,
            message: `Could not resolve reference to ${referenceType} named '${refInfo.reference.$refText}'.`,
            targetDescription
        };
    }
}
