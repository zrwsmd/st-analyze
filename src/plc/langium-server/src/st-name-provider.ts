import { AstNode, AstUtils, CstNode, DefaultNameProvider } from 'langium';
import path from 'node:path';
import { GlobalVarList, isGlobalVarList } from './generated/ast.js';

export class StNameProvider extends DefaultNameProvider {
    override getName(node: AstNode): string | undefined {
        if (isGlobalVarList(node)) {
            return getGlobalVarListName(node);
        }
        return super.getName(node);
    }

    override getNameNode(node: AstNode): CstNode | undefined {
        if (isGlobalVarList(node)) {
            return node.$cstNode;
        }
        return super.getNameNode(node);
    }
}

export function getGlobalVarListName(node: GlobalVarList): string {
    const document = AstUtils.getDocument(node);
    const fileName = path.posix.basename(document.uri.path);
    return fileName.replace(/\.st$/i, '');
}
