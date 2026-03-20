import { AstNode } from 'langium';

import { createCacheType, createErrorType, createFunctionBlockType, createStructType, TypeDescription } from './descriptions.js';
import {
    Expression,
    isExpression,
    isFunctionBlock,
    isMemberCall,
    isNative_Type_Name,
    isStruct_Var_Decl_Init,
    isStructsList,
    isVarDeclarationInit,
    Struct_Var_Decl_Init,
    VariableExpression
} from './generated/ast.js';

export function inferType(node: AstNode, cache: Map<AstNode, TypeDescription | undefined>): TypeDescription {
    let type: TypeDescription | undefined;
    // if (!node) {
    //     return createErrorType('Could not infer type for undefined', node);
    // }
    const existing = cache.get(node);
    if (existing) {
        return existing;
    }
    // Prevent recursive inference errors
    cache.set(node, createErrorType('Recursive definition', node));
    if (isMemberCall(node)) {
        let currentNode = node.element?.ref;
        if (currentNode) {
            if (isStruct_Var_Decl_Init(currentNode)) {
                type = inferStructDeclaration(currentNode, cache);
            }
        }
    } else if (isExpression(node)) {
        type = inferExpressionRef(node, cache);
    } else if (isVarDeclarationInit(node)) {
        let typeName = node.typeName;
        if (isNative_Type_Name(typeName)) {
            let identifier = typeName.Identifier;
            if (identifier) {
                let refNode = identifier.ref;
                if (refNode) {
                    type = inferType(refNode, cache);
                }
            } else if (typeName.Cache_type_name) {
                type = createCacheType(typeName.Cache_type_name);
            }
        }
    } else if (isStruct_Var_Decl_Init(node)) {
        type = inferStructDeclaration(node, cache);
    } else if (isStructsList(node)) {
        type = createStructType(node);
    } else if (isFunctionBlock(node)) {
        type = createFunctionBlockType(node);
    }
    if (!type) {
        type = createErrorType('Could not infer type for ' + node.$type, node);
    }
    cache.set(node, type);
    return type;
}

function inferStructDeclaration(node: Struct_Var_Decl_Init, cache: Map<AstNode, TypeDescription | undefined>) {
    let typeName = node.typeName;
    if (isNative_Type_Name(typeName)) {
        let identifier = typeName.Identifier;
        if (identifier) {
            let refNode = identifier.ref;
            if (refNode) {
                return inferType(refNode, cache);
            }
        }
    }
}

function inferExpressionRef(node: Expression, cache: Map<AstNode, TypeDescription | undefined>): TypeDescription {
    let p = node.prior as VariableExpression;
    let type = inferVariableExpressionCall(p, cache);
    return type;
}
// function inferMemberCall(node: MemberCall, cache: Map<AstNode, string | undefined>): string | undefined {
//     const element = node.element?.ref;
//     if (element) {
//         return inferType(element, cache);
//     }
//     return 'unknown-type';
// }
function inferVariableExpressionCall(node: VariableExpression, cache: Map<AstNode, TypeDescription | undefined>): TypeDescription {
    const refVarNameNode = node.variable.ref;
    if (refVarNameNode) {
        return inferType(refVarNameNode, cache);
    }

    //nameProvider.getName(e);
    // if (element) {
    //     return inferType(element, cache);
    // }
    return createErrorType('Could not infer type for this reference', node);
}
