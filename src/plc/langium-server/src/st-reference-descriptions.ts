import { AstNode, DefaultReferenceDescriptionProvider, LangiumCoreServices, ReferenceDescription } from 'langium';
import { CancellationToken } from 'vscode-languageserver';
import { GlobalVarList, Program, St, VarDeclarationInit, isGlobalVarList } from './generated/ast.js';

export class StReferenceDescriptionProvider extends DefaultReferenceDescriptionProvider {
    protected readonly indexManager;

    constructor(services: LangiumCoreServices) {
        super(services);
        this.indexManager = services.shared.workspace.IndexManager;
    }

    override async createDescriptions(document: any, cancelToken = CancellationToken.None): Promise<ReferenceDescription[]> {
        const descriptions = await super.createDescriptions(document, cancelToken);
        const root = document.parseResult.value as St;
        const globalVarListDescriptions = this.getGlobalVarListDescriptions(root);
        if (globalVarListDescriptions.length === 0) {
            return descriptions;
        }
        const externalDeclarations = this.collectExternalDeclarations(root);
        externalDeclarations.forEach(declaration => {
            if (!declaration.$cstNode) {
                return;
            }
            globalVarListDescriptions.forEach(target => {
                descriptions.push({
                    sourceUri: document.uri,
                    sourcePath: this.nodeLocator.getAstNodePath(declaration),
                    targetUri: target.documentUri,
                    targetPath: target.path,
                    segment: this.toDocumentSegment(declaration.$cstNode),
                    local: target.documentUri.toString() === document.uri.toString()
                });
            });
        });
        return descriptions;
    }

    private collectExternalDeclarations(root: St): VarDeclarationInit[] {
        const declarations: VarDeclarationInit[] = [];
        root.program.forEach(program => {
            declarations.push(...this.getProgramExternalDeclarations(program));
        });
        root.function_block.forEach(functionBlock => {
            functionBlock.varExternals.forEach(block => declarations.push(...block.items));
        });
        return declarations;
    }

    private getProgramExternalDeclarations(program: Program): VarDeclarationInit[] {
        const declarations: VarDeclarationInit[] = [];
        const seen = new Set<VarDeclarationInit>();
        program.inputs
            .filter(input => input.definition === 'VAR_EXTERNAL')
            .forEach(input => {
                input.items.forEach(item => {
                    if (!seen.has(item)) {
                        seen.add(item);
                        declarations.push(item);
                    }
                });
            });
        program.varExternals.forEach(block => {
            block.items.forEach(item => {
                if (!seen.has(item)) {
                    seen.add(item);
                    declarations.push(item);
                }
            });
        });
        return declarations;
    }

    private getGlobalVarListDescriptions(root: St) {
        const descriptions = [...this.indexManager.allElements('GlobalVarList').toArray()];
        root.globalVarLists.forEach(globalVarList => {
            if (!globalVarList.$document) {
                return;
            }
            const path = this.nodeLocator.getAstNodePath(globalVarList);
            const existing = descriptions.find(
                description => description.documentUri.toString() === globalVarList.$document?.uri.toString() && description.path === path
            );
            if (!existing) {
                descriptions.push({
                    node: globalVarList as AstNode,
                    name: '',
                    documentUri: globalVarList.$document.uri,
                    path,
                    nameSegment: this.toDocumentSegment(globalVarList.$cstNode ?? globalVarList.$document.parseResult.value.$cstNode),
                    selectionSegment: this.toDocumentSegment(globalVarList.$cstNode ?? globalVarList.$document.parseResult.value.$cstNode),
                    type: 'GlobalVarList'
                });
            }
        });
        return descriptions.filter(description => description.type === 'GlobalVarList');
    }

    private toDocumentSegment(node: any) {
        return {
            range: node.range,
            offset: node.offset,
            length: node.length,
            end: node.end
        };
    }
}
