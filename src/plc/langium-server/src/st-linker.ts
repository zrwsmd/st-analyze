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
    override getCandidate(refInfo: ReferenceInfo): AstNodeDescription | LinkingError {
        //不重写会报错类似于Could not resolve reference to Universe named 'TON'
        if (noBasicAllCacheStr.includes(refInfo.reference.$refText.toUpperCase())) {
            let description: AstNodeDescription = {
                type: 'FunctionElement',
                name: refInfo.reference.$refText,
                /** URI to the document containing the AST node */
                documentUri: StUri,
                /** Navigation path inside the document */
                path: 'st-cache'
            };
            return description;
        } else {
            // let refNode = refInfo.reference.ref;
            // if (refNode) {
            //     if (isVarDeclarationInit(refNode)) {
            //         let typeName = refNode.typeName;
            //         let expectedType: string | undefined = '';
            //         expectedType = basicDataType(expectedType, typeName);
            //         if (expectedType) {
            //             if (allCacheStr.includes(expectedType.toUpperCase())) {
            //                 let description: AstNodeDescription = {
            //                     type: 'VarDeclDescription',
            //                     name: expectedType.toUpperCase(),
            //                     /** URI to the document containing the AST node */
            //                     documentUri: StUri,
            //                     /** Navigation path inside the document */
            //                     path: 'st-cache'
            //                 };
            //                 return description;
            //             }
            //         }
            //     }
            // }
            return super.getCandidate(refInfo);
        }
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
                    // Most frequent case: the target is already resolved.
                    return this._ref;
                } else if (isAstNodeDescription(this._nodeDescription)) {
                    // A candidate has been found before, but it is not loaded yet.
                    const linkedNode = linker.loadAstNode(this._nodeDescription);
                    //修改,不包含在这个数组里面才报错，这个数组里面的是特殊的外部function,不用报错
                    if (!noBasicAllCacheStr.includes(refText.toUpperCase())) {
                        this._ref =
                            linkedNode ?? linker.createLinkingError({ reference, container: node, property }, this._nodeDescription);
                    }
                    //
                } else if (this._ref === undefined) {
                    // The reference has not been linked yet, so do that now.
                    const refData = linker.getLinkedNode({ reference, container: node, property });
                    if (refData.error && AstUtils.getDocument(node).state < DocumentState.ComputedScopes) {
                        // Document scope is not ready, don't set `this._ref` so linker can retry later.
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
        // The reference may already have been resolved lazily by accessing its `ref` property.
        if (ref._ref === undefined) {
            try {
                const description = this.getCandidate(refInfo);
                if (isLinkingError(description)) {
                    ref._ref = description;
                } else {
                    ref._nodeDescription = description;
                    if (this.langiumDocuments().hasDocument(description.documentUri)) {
                        // The target document is already loaded
                        const linkedNode = this.loadAstNode(description);
                        ref._ref = linkedNode ?? this.createLinkingError(refInfo, description);
                    }
                }
            } catch (err) {
                ref._ref = {
                    ...refInfo,
                    message: `An error occurred while resolving reference to '${ref.$refText}': ${err}`
                };
            }
        }
        // Add the reference to the document's array of references
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
            } else {
                let element = getRelatedElementInfoToOuter(refInfo.reference.$refText.toUpperCase());
                if (element) {
                    return { node: element, descr: description };
                } else {
                    return {
                        descr: description,
                        error: this.createLinkingError(refInfo, description)
                    };
                }
            }
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
        // Check whether the document is sufficiently processed by the DocumentBuilder. If not, this is a hint for a bug
        // in the language implementation.
        const document = AstUtils.getDocument(refInfo.container);
        if (document.state < DocumentState.ComputedScopes) {
            console.warn(`Attempted reference resolution before document reached ComputedScopes state (${document.uri}).`);
        }
        let referenceType = this.reflection.getReferenceType(refInfo);
        let container = refInfo.container;
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
