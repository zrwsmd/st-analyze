import { AstNode, CstNode, CstUtils, DefaultReferences, GenericAstNode, GrammarUtils, isReference } from 'langium';
import { LangiumServices } from 'langium/lsp';
import { referenceStr } from './util/tool.js';
import { getRelatedElementAndLangiumDoc } from './util/transform.js';

export class CacheReference extends DefaultReferences {
    constructor(public services: LangiumServices) {
        super(services);
    }

    override findDeclaration(sourceCstNode: CstNode): AstNode | undefined {
        if (sourceCstNode) {
            const assignment = GrammarUtils.findAssignment(sourceCstNode);
            const nodeElem = sourceCstNode.astNode;
            if (assignment && nodeElem) {
                const reference = (nodeElem as GenericAstNode)[assignment.feature];

                if (isReference(reference)) {
                    if (referenceStr.includes(reference.$refText.toUpperCase())) {
                        let result = getRelatedElementAndLangiumDoc(reference.$refText.toUpperCase());
                        if (result) {
                            let [cacheElement, langiumDocument] = result;
                            return cacheElement;
                        }
                    }
                    return reference.ref;
                } else if (Array.isArray(reference)) {
                    for (const ref of reference) {
                        if (
                            isReference(ref) &&
                            ref.$refNode &&
                            ref.$refNode.offset <= sourceCstNode.offset &&
                            ref.$refNode.end >= sourceCstNode.end
                        ) {
                            return ref.ref;
                        }
                    }
                }
            }
            if (nodeElem) {
                const nameNode = this.nameProvider.getNameNode(nodeElem);
                // Only return the targeted node in case the targeted cst node is the name node or part of it
                if (nameNode && (nameNode === sourceCstNode || CstUtils.isChildNode(sourceCstNode, nameNode))) {
                    return nodeElem;
                }
            }
        }
        return undefined;
    }
}
