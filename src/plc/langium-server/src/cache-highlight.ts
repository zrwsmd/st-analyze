import { AstUtils, CstUtils, FindReferencesOptions, LangiumDocument, MaybePromise, UriUtils } from 'langium';
import { DefaultDocumentHighlightProvider, LangiumServices } from 'langium/lsp';
import { DocumentHighlight, DocumentHighlightParams } from 'vscode-languageserver-protocol';

export class CacheHighLight extends DefaultDocumentHighlightProvider {
    constructor(public services: LangiumServices) {
        super(services);
    }

    override getDocumentHighlight(
        document: LangiumDocument,
        params: DocumentHighlightParams
    ): MaybePromise<DocumentHighlight[] | undefined> {
        const rootNode = document.parseResult.value.$cstNode;
        if (!rootNode) {
            return undefined;
        }
        const selectedNode = CstUtils.findDeclarationNodeAtOffset(
            rootNode,
            document.textDocument.offsetAt(params.position),
            this.grammarConfig.nameRegexp
        );
        if (!selectedNode) {
            return undefined;
        }
        const targetAstNode = this.references.findDeclaration(selectedNode);
        if (targetAstNode) {
            const refs: DocumentHighlight[] = [];
            if (targetAstNode.$type === 'VarDeclaration' || targetAstNode.$type === 'FunctionElement') {
                /**
                 * 解决外部变量声明报错AST node has no document,因为下面的AstUtils.getDocument(targetAstNode)报这个错
                 * VAR
                     t1:TON;
                   END_VAR
                 IF t1.Q THEN
                 END_IF;
                 下面这样声明，箭头定位到t1.Q后面，就报AST node has no document
                 */
                return refs;
            } else {
                const includeDeclaration = UriUtils.equals(AstUtils.getDocument(targetAstNode).uri, document.uri);
                const options: FindReferencesOptions = { documentUri: document.uri, includeDeclaration };
                const references = this.references.findReferences(targetAstNode, options);
                return references.map(ref => this.createDocumentHighlight(ref)).toArray();
            }
        }
        return undefined;
    }
}
