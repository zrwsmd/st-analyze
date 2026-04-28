import { DefaultScopeProvider, LangiumCoreServices, ReferenceInfo, Scope, ScopeOptions, StreamScope, stream } from 'langium';
import { isCacheType, isFunctionBlockType, isGlobalVarListType, isStructType } from './descriptions.js';
import {
    Function_invoke_or_assign,
    FunctionBlock,
    FunctionExpression,
    GlobalVarList,
    Invoke_subrule,
    MemberCall,
    Param_assignment,
    Struct_Var_Decl_Init,
    StructsList,
    VarDeclarationInit,
    VarInput,
    VarLocal,
    VarOutput,
    VariableExpression,
    isFunctionExpression,
    isFunction_invoke_or_assign,
    isInvoke_subrule,
    isNative_Type_Name,
    isParam_assignment,
    isVarDeclarationInit,
    isVariableExpression
} from './generated/ast.js';
import { inferType } from './infer.js';
import { handleNoAcceptNativeTypeName } from './util/tool.js';
import { getRelatedElementAndLangiumDoc, getRelatedEnumElementAndLangiumDoc } from './util/transform.js';

export class StScopeProvider extends DefaultScopeProvider {
    constructor(services: LangiumCoreServices) {
        super(services);
    }

    override getScope(context: ReferenceInfo): Scope {
        if (context.property === 'element') {
            const memberCall = context.container as MemberCall;
            const previous = memberCall.previous ?? memberCall.prior;
            if (!previous) {
                return super.getScope(context);
            }
            const previousType = inferType(previous, new Map());
            if (isStructType(previousType)) {
                return this.scopeStructMembers(previousType.literal);
            }
            if (isGlobalVarListType(previousType)) {
                return this.scopeGlobalVarListMembers(previousType.literal);
            }
            if (isFunctionBlockType(previousType)) {
                return this.scopeFunctionBlockMembers(previousType.literal);
            }
            if (isCacheType(previousType)) {
                let cacheScope = this.scopeCache(previousType.literal);
                if (cacheScope) {
                    return cacheScope;
                }
            }
            //console.log(previousType);
        } else if (context.property === 'variable') {
            const enumScope = this.scopeEnumMembersForExpectedParam(context);
            if (enumScope) {
                return enumScope;
            }
            return super.getScope(context);
        }
        //重名函数处理，有问题
        // else if (context.property === 'refFunctionName') {
        //     if (isFunctionExpression(context.container)) {
        //         let functionExpression = context.container as FunctionExpression;
        //         let refNode = functionExpression.refFunctionName.ref;
        //         if (isStFunction(refNode)) {
        //             let typeDescription = createFunctionType(refNode);
        //             if (isFunctionType(typeDescription)) {
        //                 return this.scopeFunctionMembers(typeDescription.literal);
        //             }
        //         }
        //     } else {
        //         return super.getScope(context);
        //     }
        // }
        // else if (context.property === "Identifier") {
        //   //productId
        //   let refNode = context.reference.ref;
        //   if (refNode) {
        //     const previousType = inferType(refNode, new Map());
        //     if (isStructType(previousType)) {
        //       return this.scopeStructMembers(previousType.literal);
        //     }
        //   }
        // }

        return super.getScope(context);
    }

    private scopeEnumMembersForExpectedParam(context: ReferenceInfo): Scope | undefined {
        const container = context.container;
        if (!isVariableExpression(container)) {
            return undefined;
        }
        const enumType = this.getExpectedEnumTypeForVariable(container);
        if (!enumType) {
            return undefined;
        }
        const result = getRelatedEnumElementAndLangiumDoc(enumType);
        if (!result) {
            return undefined;
        }
        const [enumElement] = result;
        const members = enumElement?.enumChild.map(item => item.enumVarName) ?? [];
        if (members.length === 0) {
            return undefined;
        }
        const enumDescriptions = stream(members)
            .map(member => this.descriptions.createDescription(container, member))
            .nonNullable();
        return this.createScope(enumDescriptions, super.getScope(context));
    }

    private getExpectedEnumTypeForVariable(container: VariableExpression): string | undefined {
        const expression = container.$container;
        const paramAssignment = expression?.$container;
        const invoke = paramAssignment?.$container;
        const call = invoke?.$container;
        if (!isParam_assignment(paramAssignment) || !isInvoke_subrule(invoke)) {
            return undefined;
        }
        const paramName = paramAssignment.ParamName;
        if (!paramName) {
            return undefined;
        }
        const callType = this.getInvokedTypeName(call);
        if (!callType) {
            return undefined;
        }
        const result = getRelatedElementAndLangiumDoc(callType);
        const [elementNode] = result ?? [];
        const expectedDecl = elementNode?.varDecls.find(varDecl => varDecl.varName === paramName);
        return expectedDecl?.varType;
    }

    private getInvokedTypeName(call: unknown): string | undefined {
        if (isFunction_invoke_or_assign(call) && call.assignPrefix) {
            const refNode = call.assignPrefix.varEnchanceDecl.ref;
            if (isVarDeclarationInit(refNode)) {
                return handleNoAcceptNativeTypeName(refNode.typeName, '');
            }
            return call.assignPrefix.varEnchanceDecl.$refText;
        }
        if (isFunctionExpression(call) && call.refFunctionName.refFunctionName) {
            const refNode = call.refFunctionName.refFunctionName.ref;
            if (isVarDeclarationInit(refNode)) {
                return handleNoAcceptNativeTypeName(refNode.typeName, '');
            }
            return call.refFunctionName.refFunctionName.$refText;
        }
        return undefined;
    }

    private scopeCache(cacheName: string): Scope | undefined {
        //cacheName=> e.g CacheFb2
        let result = getRelatedElementAndLangiumDoc(cacheName);
        let cacheScope: Scope | undefined;
        if (result) {
            let [libraryElement, langiumDocument] = result;
            if (libraryElement) {
                let cacheVarDecls = libraryElement.varDecls;
                const cacheDesc = stream(cacheVarDecls)
                    .map(cacheVarDecl => {
                        //cacheVarDecl.$document=
                        return this.descriptions.createDescription(cacheVarDecl, cacheVarDecl.varName, langiumDocument);

                        // return undefined;
                    })
                    .nonNullable();
                let scopeOptions: ScopeOptions = {
                    caseInsensitive: false
                };
                cacheScope = this.createScope(cacheDesc, cacheScope, scopeOptions);
            }
        }
        if (cacheScope) {
            return cacheScope;
        }
    }

    protected override getGlobalScope(referenceType: string, context: ReferenceInfo): Scope {
        // the global scope contains all elements known to the language server
        const globalScope = super.getGlobalScope(referenceType, context);
        return globalScope;
    }

    private scopeStructMembers(struct: StructsList): Scope {
        const allMembers = this.getStructChain(struct).flatMap(e => e.items);
        const s = stream(allMembers)
            .map(e => {
                return this.descriptions.createDescription(e, e.variables);
            })
            .nonNullable();
        const ss = stream(allMembers)
            .map(e => {
                let nextVariables = e.nextVariables;
                if (nextVariables.length > 0) {
                    for (let i = 0; i < nextVariables.length; i++) {
                        const nextVariable = nextVariables[i];
                        return this.descriptions.createDescription(e, nextVariable);
                    }
                }
            })
            .nonNullable();
        let s1 = new StreamScope(s);
        let s2 = new StreamScope(ss);
        return s1;
    }

    private scopeGlobalVarListMembers(globalVarList: GlobalVarList): Scope {
        const members = globalVarList.items;
        const firstScope = stream(members)
            .map(item => this.descriptions.createDescription(item, item.variables))
            .nonNullable();
        const nextScope = stream(members)
            .flatMap(item =>
                stream(item.nextVariables).map(nextVariable => this.descriptions.createDescription(item, nextVariable))
            )
            .nonNullable();
        return new StreamScope(firstScope.concat(nextScope));
    }

    //每个变量的第一个
    private scopeFirstFunctionBlockMembers(functionBlock: FunctionBlock): Scope {
        const allDecl = this.getFunctionBlockDecl(functionBlock);
        const s = stream(allDecl)
            .map(e => {
                const name = this.nameProvider.getName(e);
                if (name) {
                    return this.descriptions.createDescription(e, name);
                } else {
                    return this.descriptions.createDescription(e, e.variables);
                }
            })
            .nonNullable();
        return new StreamScope(s);
    }

    //三种类型in,out,local的后面的变量
    private scopeNextFunctionBlockMembers(functionBlock: FunctionBlock): Scope {
        let inScope = this.singleVarScope(functionBlock, 'input');
        let outScope = this.singleVarScope(functionBlock, 'output');
        let localScope = this.singleVarScope(functionBlock, 'local');
        return new StreamScope(inScope.getAllElements().concat(outScope.getAllElements()).concat(localScope.getAllElements()));
    }

    private singleVarScope(functionBlock: FunctionBlock, type: string): Scope {
        let allMembers: any;
        if ('input' === type) {
            allMembers = this.getFunctionBlockChain(functionBlock).flatMap(e => e.varInputs);
        } else if ('output' === type) {
            allMembers = this.getFunctionBlockChain(functionBlock).flatMap(e => e.varOutputs);
        } else if ('local' === type) {
            allMembers = this.getFunctionBlockChain(functionBlock).flatMap(e => e.varLocals);
        }
        const allDecl = this.getFunctionBlockDecl(functionBlock);
        let hasNextDecl = allDecl.filter(item => item.nextVariables.length > 0);
        let allScope: any;
        for (let i = 0; i < hasNextDecl.length; i++) {
            const item = hasNextDecl[i];
            let nextVariables = item.nextVariables;
            let nextScope = this.handleNextVariables(item, nextVariables);
            let innerScope = this.createScopeForNodes(allMembers, nextScope);
            if (!allScope) {
                allScope = innerScope.getAllElements();
            } else {
                allScope = allScope.concat(innerScope.getAllElements());
            }
        }
        return new StreamScope(allScope);
    }

    private scopeFunctionBlockMembers(functionBlock: FunctionBlock): Scope {
        let firstScope = this.scopeFirstFunctionBlockMembers(functionBlock);
        let nextScope = this.scopeNextFunctionBlockMembers(functionBlock);
        return new StreamScope(firstScope.getAllElements().concat(nextScope.getAllElements()));
    }

    private handleNextVariables(element: VarDeclarationInit | Struct_Var_Decl_Init, nextVariables: string[]) {
        const nextDesc = stream(nextVariables)
            .map(item => {
                return this.descriptions.createDescription(element, item);
            })
            .nonNullable();
        let nextScope = new StreamScope(nextDesc);
        return nextScope;
    }

    getStructDecl(struct: StructsList): Struct_Var_Decl_Init[] {
        let structVarDecl: Struct_Var_Decl_Init[] = [];
        let allDeclArr: VarDeclarationInit[] = [];
        let items = struct.items as unknown as Struct_Var_Decl_Init[];
        return items;
    }

    getFunctionBlockDecl(functionBlock: FunctionBlock): VarDeclarationInit[] {
        let allDeclArr: VarDeclarationInit[] = [];
        let varInputs = functionBlock.varInputs;
        let varOutputs = functionBlock.varOutputs;
        let varLocals = functionBlock.varLocals;
        this.addDecl(varInputs, allDeclArr);
        this.addDecl(varOutputs, allDeclArr);
        this.addDecl(varLocals, allDeclArr);
        return allDeclArr;
    }

    private addDecl(declVarArr: VarInput[] | VarOutput[] | VarLocal[], declArr: VarDeclarationInit[]) {
        declVarArr.forEach(varInput => {
            let inputDecl = varInput.items;
            declArr.push(...inputDecl);
        });
    }

    getStructChain(structChain: StructsList): StructsList[] {
        let set = new Set<StructsList>();
        set.add(structChain);
        const structItemArr = structChain.items;
        structItemArr.forEach(structItem => {
            let typeName = structItem.typeName;
            // /let varName = structItem.variables;
            if (isNative_Type_Name(typeName)) {
                let identifier = typeName.Identifier;
                if (identifier) {
                    let refNode = identifier.ref as StructsList;
                    if (refNode) {
                        this.getStructChain(refNode);
                    }
                } else {
                }
            }
        });
        return Array.from(set);
    }

    getFunctionBlockChain(functionBlock: FunctionBlock): FunctionBlock[] {
        let set = new Set<FunctionBlock>();
        set.add(functionBlock);
        // const structItemArr = structChain.items;
        // structItemArr.forEach((structItem) => {
        //   let typeName = structItem.typeName;
        //   // /let varName = structItem.variables;
        //   if (isNative_Type_Name(typeName)) {
        //     let identifier = typeName.Identifier;
        //     if (identifier) {
        //       let refNode = identifier.ref as StructsList;
        //       if (refNode) {
        //         this.getStructChain(refNode);
        //       }
        //     } else {
        //       //console.log(varName);
        //       //   let eachVarTypeName =
        //       //     typeName.Real_type_name ||
        //       //     typeName.Bit_string_type_name ||
        //       //     typeName.Identifier ||
        //       //     typeName.Integer_type_name ||
        //       //     typeName.Unsigned_integer_type_name ||
        //       //     typeName.String_type_name;
        //     }
        //   }
        // });
        return Array.from(set);
    }
}
