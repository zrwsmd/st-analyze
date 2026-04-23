/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import { AstNode, AstUtils, GrammarUtils, RootCstNode, ValidationAcceptor, isReference, type ValidationChecks } from 'langium';
import {
    Alias,
    Arr_string,
    Array_liters,
    AssignPrefix,
    Assignment_subrule,
    Constant,
    EnumeratedValue,
    Expression,
    FunctionBlock,
    FunctionExpression,
    Function_invoke_or_assign_statement,
    If_statement,
    InputsListSingle,
    Invoke_subrule,
    Iteration_statement,
    MemberCall,
    Methods,
    NamedElement,
    Native_Type_Name,
    Param_assignment,
    Program,
    ReqParams,
    Selection_statement,
    St,
    StAstType,
    StEnum,
    StFunction,
    Statement,
    Struct_Var_Decl_Init,
    StructsList,
    UnionsList,
    Universe,
    VarDeclarationInit,
    VariableExpression,
    isArr_string,
    isAssignPrefix,
    isConstant,
    isEnumeratedValue,
    isExpression,
    isFor_statement,
    isFunctionBlock,
    isFunctionExpression,
    isMemberCall,
    isMethods,
    isNamedElement,
    isRepeat_statement,
    isReturnParse,
    isStFunction,
    isStructsList,
    isVarDeclarationInit,
    isVariableExpression,
    isWhile_statement
} from './generated/ast.js';
import type { StatemachineServices } from './ld-module.js';
import {
    AliasElement,
    FunctionBlockElement,
    FunctionElement,
    VarDeclaration,
    determineVariableType,
    handleNativeTypeName,
    handleNoAcceptNativeTypeName,
    isDecimal,
    isFloatOrDouble,
    isInteger,
    judgeNeedToHint,
    validateTimeFormat
} from './util/tool.js';
import { getRelatedElementAndLangiumDoc, getRelatedEnumElementAndLangiumDoc } from './util/transform.js';

export function registerValidationChecks(services: StatemachineServices) {
    let documentValidator = services.validation.DocumentValidator;
    // documentValidator.validateDocument()
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.StValidator;
    const checks: ValidationChecks<StAstType> = {
        St: validator.checkElement
    };
    registry.register(checks, validator);
}

export class StValidator {
    checkElement(st: St, accept: ValidationAcceptor): void {
        let programArr = st.program;
        let functionArr = st.st_function;
        let functionBlockArr = st.function_block;
        let types_struct = st.types_struct;
        let types_alias = st.types_alias;
        let types_enum = st.types_enum;
        let types_union = st.types_union;
        //this.saveDataTypeVarInfo(types_struct, types_alias, types_enum, types_union, accept);
        //this.saveFunctionOrBlockInfo(functionArr, accept, 'function');
        //this.saveFunctionOrBlockInfo(functionBlockArr, accept, 'functionBlock');
        programArr.forEach(programItem => {
            this.saveProgramVarInfo(programItem.inputs, accept);
        });
        this.checkPrograms(st, accept);
        this.checkFunctions(functionArr, accept);
        this.checkFunctionBlocks(functionBlockArr, accept);
        this.checkDateTypes(types_struct, types_alias, types_enum, types_union, accept);
    }
    checkPrograms(st: St, accept: ValidationAcceptor): void {
        this.judgeWhetherHasDuplicateName('program', st.program, accept);
        this.judgeCapital('program', st.program, accept);
        this.checkProgramVarRef(st, accept);
    }
    checkFunctions(functionArr: StFunction[], accept: ValidationAcceptor): void {
        this.judgeWhetherHasDuplicateName('function', functionArr, accept);
        //this.judgeCapital('function', functionArr, accept);
        this.handleFunctionOrBlockInfo(functionArr, accept);
    }
    checkFunctionBlocks(functionBlockArr: FunctionBlock[], accept: ValidationAcceptor): void {
        this.judgeWhetherHasDuplicateName('functionBlock', functionBlockArr, accept);
        this.judgeCapital('functionBlock', functionBlockArr, accept);
        this.handleFunctionOrBlockInfo(functionBlockArr, accept);
    }

    checkDateTypes(
        types_struct: StructsList[],
        types_alias: Alias[],
        types_enum: StEnum[],
        types_union: UnionsList[],
        accept: ValidationAcceptor
    ): void {
        this.handleDataTypeVarInfo(types_struct, types_alias, types_enum, types_union, accept);
    }

    judgeCapital(typeName: string, typeArr: Program[] | StFunction[] | FunctionBlock[], accept: ValidationAcceptor) {
        if (typeArr) {
            typeArr.forEach(item => {
                if (item.name) {
                    const firstChar = item.name.substring(0, 1);
                    const regex = /^[a-zA-Z]/;
                    if (regex.test(firstChar)) {
                        if (firstChar.toUpperCase() !== firstChar) {
                            accept('warning', `${typeName} name should start with a capital letter`, {
                                node: item,
                                property: 'name'
                            });
                        }
                    }
                    // const isStartsWithNumber = /^\d/.test(program.name);
                    // if (isStartsWithNumber) {
                    //     accept('error', 'program name should not start with a digital', { node: program, property: 'name' });
                    // }
                }
            });
        }
    }

    judgeWhetherHasDuplicateName(
        typeName: string,
        typeArr: Program[] | StFunction[] | FunctionBlock[] | NamedElement[],
        accept: ValidationAcceptor
    ) {
        let filterProgramArr: any = [];
        if (typeArr) {
            const nameMap: { [key: string]: number } = {};
            typeArr.forEach(item => {
                // if (programArr.length > 1) {
                //     accept('warning', 'program type should better only define once in a st file.', { node: item, property: 'name' });
                // }
                let propertyArr: string[] = [];
                if (isNamedElement(item)) {
                    propertyArr.push(item.variables);
                    if (item.nextVariables) {
                        propertyArr.push(...item.nextVariables);
                    }
                } else {
                    propertyArr.push(item.name);
                }
                propertyArr.forEach(property => {
                    if (nameMap[property]) {
                        nameMap[property]++;
                        filterProgramArr.push(item);
                    } else {
                        nameMap[property] = 1;
                    }
                });
            });
            const duplicateNames: string[] = Object.keys(nameMap).filter(name => nameMap[name] > 1);
            filterProgramArr.forEach((item: any) => {
                if (duplicateNames.length > 0) {
                    accept('error', `重复定义的${typeName}:${duplicateNames[0]}`, {
                        node: item,
                        property: 'name'
                    });
                }
            });
        }
    }

    checkProgramVarRef(st: St, accept: ValidationAcceptor) {
        let programArr = st.program;
        programArr.forEach(programItem => {
            //console.log(varNameSet);
            let stStatements = programItem.stStatements;
            if (stStatements) {
                let statementsArr = stStatements.statements;
                this.handleStatements(statementsArr, accept);
            }
        });
    }

    private handleStatements(statementsArr: Statement[], accept: ValidationAcceptor) {
        if (statementsArr.length === 0) {
            return;
        }
        statementsArr.forEach(statement => {
            let type = statement.$type;
            if (type === 'Selection_statement') {
                let actualStatement = statement as Selection_statement;
                let ifClause = actualStatement.if;
                let caseClause = actualStatement.case;
                if (ifClause) {
                    let statements_list = ifClause.ifStatement;
                    let condition = ifClause.ifCondition;
                    let else_ifConditionArr = ifClause.elsifConditions;
                    this.checkIfWhitespace(ifClause, accept);
                    this.checkWhitespace(ifClause, accept);
                    let else_ifstatements_list = ifClause.elsifStatements;
                    let else_statements_list = ifClause.elseStatement;
                    if (condition) {
                        let expressionType = condition.$type;
                        this.handleCondition(expressionType, condition, accept);
                    }

                    else_ifConditionArr.forEach(eachCondition => {
                        let else_ifExpressionType = eachCondition.$type;
                        this.handleCondition(else_ifExpressionType, eachCondition, accept);
                    });
                    if (statements_list) {
                        let statementsArr = statements_list.statements;
                        this.handleStatements(statementsArr, accept);
                    }
                    if (else_ifstatements_list) {
                        let statementsArr = else_ifstatements_list.statements;
                        this.handleStatements(statementsArr, accept);
                    }
                    if (else_statements_list) {
                        let statementsArr = else_statements_list.statements;
                        this.handleStatements(statementsArr, accept);
                    }
                }
                if (caseClause) {
                    let expression = caseClause.caseExpression;
                    let statements_list = caseClause.elseStatements;
                    let caseElements = caseClause.caseElements;
                    let caseExpectType: string | undefined = '';
                    if (isVariableExpression(expression)) {
                        let variableParent = expression.variable;
                        //this.handleVariableHint(variableParent, varNameSet, varNameMap, accept, false);
                        caseExpectType = this.judgeRefNodeType(variableParent.ref, caseExpectType);
                    } else if (isEnumeratedValue(expression)) {
                        caseExpectType = this.validateEnumeratedValue(expression, undefined, accept);
                    } else if (isExpression(expression)) {
                        let prior = expression.prior;
                        if (isVariableExpression(prior)) {
                            caseExpectType = this.judgeRefNodeType(prior.variable.ref, caseExpectType);
                        } else if (isEnumeratedValue(prior)) {
                            caseExpectType = this.validateEnumeratedValue(prior, undefined, accept);
                        }
                    }
                    if (statements_list) {
                        let statementsArr = statements_list.statements;
                        this.handleStatements(statementsArr, accept);
                    }
                    caseElements.forEach(element => {
                        let caseList = element.caseList;
                        let caseListElements = caseList.caseListElement;
                        let case_statements_list = element.statements;
                        if (case_statements_list) {
                            this.handleStatements(this.normalizeStatements(case_statements_list), accept);
                        }
                        if (caseListElements.length > 0) {
                            caseListElements.forEach(caseListElement => {
                                let numCaseStart = caseListElement.numCaseStart;
                                let numericCaseEnd = caseListElement.numericCaseEnd;
                                let enumCase = caseListElement.enumCase;
                                let simpleEnumCase = caseListElement.simpleEnumCase;
                                if (numCaseStart && numericCaseEnd) {
                                    if (typeof numCaseStart === 'string' && typeof numericCaseEnd === 'string') {
                                        numCaseStart = parseInt(numCaseStart);
                                        numericCaseEnd = parseInt(numericCaseEnd);
                                        if (numCaseStart > numericCaseEnd) {
                                            accept('error', '左侧值不能大于右侧值!', {
                                                node: caseListElement,
                                                property: 'numCaseStart'
                                            });
                                        }
                                    }
                                }
                                if (enumCase && isEnumeratedValue(enumCase)) {
                                    this.validateEnumeratedValue(enumCase, caseExpectType, accept);
                                }
                                if (simpleEnumCase && caseExpectType) {
                                    let enumMembers = this.getEnumMembers(caseExpectType, caseListElement);
                                    if (enumMembers) {
                                        let hasMember = enumMembers.some(item => item.toLowerCase() === simpleEnumCase.toLowerCase());
                                        if (!hasMember) {
                                            accept('error', `'${simpleEnumCase}' is not a member of enum '${caseExpectType}'.`, {
                                                node: caseListElement,
                                                property: 'simpleEnumCase'
                                            });
                                        }
                                    }
                                }
                            });
                        }
                    });
                }
            } else if (type === 'Iteration_statement') {
                let actualStatement = statement as Iteration_statement;
                let state = actualStatement.statement;
                if (state !== 'EXIT') {
                    let statements_list = state.statementList;
                    if (statements_list) {
                        let statementsArr = statements_list.statements;
                        this.handleStatements(statementsArr, accept);
                        if (isFor_statement(state)) {
                            let refNode = state.controlVariable.ref;
                            let expectType: string | undefined = '';
                            if (isVarDeclarationInit(refNode)) {
                                expectType = this.judgeRefNodeType(refNode, expectType);
                            }
                            let forList = state.forList;
                            let forExpression = forList.forExpr;
                            let forPrior = forExpression.prior;
                            let byExpression = forList.byExpr;
                            let byPrior = byExpression?.prior;
                            let toExpression = forList.toExpr;
                            let toPrior = toExpression?.prior;
                            this.handleExpressionPrior(forPrior, expectType, accept, forPrior);
                            this.handleExpressionPrior(byPrior, expectType, accept, byPrior);
                            this.handleExpressionPrior(toPrior, expectType, accept, toPrior);
                        } else if (isRepeat_statement(state)) {
                            //statements_list属性上面的公共的已经处理过了
                            let expression = state.untilExpr;
                            this.handleSingleVariableExpression(expression, accept);
                        } else if (isWhile_statement(state)) {
                            let expression = state.whileExpr;
                            this.handleSingleVariableExpression(expression, accept);
                        }
                    }
                }
            } else if (type === 'Function_invoke_or_assign_statement') {
                this.handleFunctionInvokeOrAssign(statement, accept);
            }
        });
    }

    private normalizeStatements(statementsNode?: { statements?: Statement[] | Statement }): Statement[] {
        if (!statementsNode || statementsNode.statements === undefined) {
            return [];
        }
        return Array.isArray(statementsNode.statements) ? statementsNode.statements : [statementsNode.statements];
    }

    private handleCondition(expressionType: string, condition: Expression, accept: ValidationAcceptor) {
        if (expressionType === 'Expression') {
            let left = condition.left;
            let right = condition.right;
            this.handleConditionExpression(left, right, accept);
        } else if (expressionType === 'Constant') {
        } else if (expressionType === 'FunctionExpression') {
        } else if (expressionType === 'VariableExpression') {
            let varExpression = condition as VariableExpression;
            let variableParent = varExpression.variable;
            //this.handleVariableHint(variableParent, varNameSet, varNameMap, accept, false);
        } else if (expressionType === 'Function_invoke_or_assign_statement') {
            this.handleFunctionInvokeOrAssign(condition, accept);
        }
    }

    private handleFunctionInvokeOrAssign(statement: Statement | Expression, accept: ValidationAcceptor) {
        let actualStatement = statement as Function_invoke_or_assign_statement;
        let state = actualStatement.statement;
        //statement=(Function_invoke_or_assign | 'RETURN');
        if (!isReturnParse(state)) {
            let variableParent = state.id;
            let assign = state.assign;
            let param = state.params;
            let assignPrefix = state.assignPrefix;
            this.handleVariableHint(variableParent, accept, false, assign, param, assignPrefix);
        }
        // if (state !== 'RETURN') {
        // }
    }

    private handleVariableHint(
        variableParent: Expression | undefined,
        accept: ValidationAcceptor,
        hasCalled: boolean,
        assign?: Assignment_subrule,
        param?: Invoke_subrule[],
        assignPrefix?: AssignPrefix
    ) {
        let expectType: string | undefined = '';
        let astNode: MemberCall | VariableExpression | Expression | AssignPrefix | undefined;
        let universe: Universe | undefined;
        if (variableParent) {
            if (isFunctionExpression(variableParent)) {
                this.handleFunctionExpression(variableParent, accept, variableParent, expectType);
            } else if (isMemberCall(variableParent)) {
                let memberCall = variableParent as MemberCall;
                astNode = memberCall;
                // let previousNode = memberCall.previous as MemberCall;
                let currentElement = memberCall.element;
                let previous = memberCall.previous;
                if (currentElement) {
                    let currentElementRef = currentElement.ref;
                    let currentElementRefText = currentElement.$refText;
                    if (currentElementRef) {
                        expectType = this.handleRef(currentElementRef, currentElementRefText, expectType, previous);
                    }
                }
            } else if (isExpression(variableParent)) {
                let expression = variableParent as Expression;
                let prior = expression.prior;
                if (isVariableExpression(prior)) {
                    let varExpression = prior as VariableExpression;
                    let refNode = varExpression.variable.ref;
                    astNode = prior;
                    expectType = this.judgeRefNodeType(refNode, expectType);
                } else if (isFunctionExpression(prior)) {
                    //e.g 直接声明函数AddNumbers(5,7);
                    let refNode = this.handleFunctionExpression(prior, accept, expression, expectType);
                }
            }
        }
        if (assignPrefix) {
            astNode = assignPrefix;
            let varEnchanceDeclRef = assignPrefix.varEnchanceDecl;
            let currentElementRef = varEnchanceDeclRef.ref;
            universe = currentElementRef;
            let currentElementRefText = varEnchanceDeclRef.$refText;
            if (currentElementRef) {
                expectType = this.handleRef(currentElementRef, currentElementRefText, expectType);
                this.handleParam(param, expectType, accept, assignPrefix);
            } else {
                expectType = currentElementRefText;
                this.handleParam(param, expectType, accept);
            }
        }
        if (assign) {
            let expression = assign.expression;
            let expressionType = expression?.$type;
            if (expressionType === 'Constant') {
                let constExpression = expression as Constant;
                //true
                let varValue = constExpression.constant;

                //可能有多个
                this.handleDataTypeMatch(varValue, expectType, accept, astNode);
            } else if (expressionType === 'EnumeratedValue') {
                let enumeratedValue = expression as EnumeratedValue;
                this.validateEnumeratedValue(enumeratedValue, expectType, accept);
            } else if (expressionType === 'Expression') {
                let originalExpression = expression as Expression;
                let prior = originalExpression?.prior;
                let left = originalExpression.left;
                let right = originalExpression.right;
                if (prior) {
                    this.handleExpressionPrior(prior, expectType, accept, astNode);
                }
                if (left && right) {
                    let leftPrior = left.prior;
                    let rightPrior = right.prior;
                    this.handleExpressionPrior(leftPrior, expectType, accept, astNode);
                    this.handleExpressionPrior(rightPrior, expectType, accept, astNode);
                }
            } else if (expressionType === 'MemberCall') {
                let memberCall = expression as MemberCall;
                let currentElement = memberCall.element;
                let paramArguments = memberCall.arguments;
                if (currentElement) {
                    let currentElementRef = currentElement.ref;
                    if (currentElementRef) {
                        if (isMethods(currentElementRef)) {
                            let method = currentElementRef as Methods;
                            let nativeTypeName = method.variable_type;
                            let reqParams = method.reqParams;
                            let paramTypeArr: any[] = [];
                            this.handleFunctionBlockMethodReqparam(reqParams, accept, paramTypeArr);
                            if (paramArguments.length !== reqParams.length) {
                                accept('error', `期望${reqParams.length}个参数,但是实际${paramArguments.length}个`, {
                                    node: memberCall,
                                    property: 'arguments'
                                });
                            } else {
                                for (let i = 0; i < paramArguments.length; i++) {
                                    let parameter = paramArguments[i];
                                    let expectType = paramTypeArr[i];
                                    let prior = parameter.prior;
                                    let rightVariableName = '';
                                    let actualType: string | undefined = '';
                                    // let actualVariableName = rightVariableName ;
                                    this.handlePrior(prior, rightVariableName, actualType, expectType, accept);
                                }
                            }
                            let actualType: any;
                            actualType = handleNativeTypeName(nativeTypeName, actualType, accept);
                            if (actualType) {
                                if (expectType !== '') {
                                    let [normalizedActualType, normalizedExpectType] = this.getComparableTypes(actualType, expectType);
                                    if (
                                        normalizedActualType &&
                                        normalizedExpectType &&
                                        normalizedActualType.toLowerCase() !== normalizedExpectType.toLowerCase()
                                    ) {
                                        accept('error', `不能将类型'${actualType}'转化为类型'${expectType}'`, {
                                            node: memberCall,
                                            property: 'element'
                                        });
                                    }
                                }
                            }
                            // accept('error', `qwer${currentElementRef}`, {
                            //     node: memberCall,
                            //     property: 'element'
                            // });
                        }

                        // if(isFunctionBlock(currentElementRef)){

                        // }
                    }
                }
            }
        }
        if (param) {
            if (param.length > 0) {
                if (universe) {
                    if (isStFunction(universe)) {
                        let paramTypeArr: any[] = [];
                        this.validateStFunctionRule(universe, astNode, expectType, accept, paramTypeArr, param[0]);
                    }
                }
            }
        }
    }

    private handleParam(
        param: Invoke_subrule[] | undefined,
        expectType: string | undefined,
        accept: ValidationAcceptor,
        assignPrefix?: AssignPrefix
    ) {
        let astNode;
        let varEnchanceDecl;
        if (assignPrefix) {
            varEnchanceDecl = assignPrefix.varEnchanceDecl;
            astNode = varEnchanceDecl.ref;
        }
        if (param) {
            if (param.length > 0) {
                let parameters = param[0].parameters;
                if (expectType) {
                    //库里面的功能块或者自定义功能块
                    let result = getRelatedElementAndLangiumDoc(expectType);
                    if (result) {
                        this.validateLibraryFunction(result, parameters, accept);
                    } else {
                        if (isVarDeclarationInit(astNode)) {
                            let typeName = astNode.typeName;
                            if (typeName) {
                                let Identifier = typeName.Identifier;
                                if (Identifier) {
                                    let ref = Identifier.ref;
                                    //ast功能块转为FunctionBlockElement,方便调用公共方法validateLibraryFunction
                                    if (isFunctionBlock(ref)) {
                                        let functionBlockElement: FunctionBlockElement = {
                                            $type: 'FunctionBlockElement',
                                            elementType: 'functionBlock',
                                            elementName: ref.name,
                                            varDecls: [],
                                            rootName: '',
                                            comment: '',
                                            usage: ''
                                        };
                                        ref.varInputs.forEach(input => {
                                            let items = input.items;
                                            items.forEach(item => {
                                                let expectedType = '';
                                                let varDecl: VarDeclaration = {
                                                    $type: 'VarDeclaration',
                                                    varName: item.variables,
                                                    varType: handleNoAcceptNativeTypeName(item.typeName, expectedType),
                                                    //VAR VAR_INPUT  VAR_OUTPUT
                                                    varGlobalType: 'VAR_INPUT'
                                                };
                                                functionBlockElement.varDecls.push(varDecl);
                                            });
                                        });
                                        ref.varOutputs.forEach(output => {
                                            let items = output.items;
                                            items.forEach(item => {
                                                let expectedType = '';
                                                let varDecl: VarDeclaration = {
                                                    $type: 'VarDeclaration',
                                                    varName: item.variables,
                                                    varType: handleNoAcceptNativeTypeName(item.typeName, expectedType),
                                                    //VAR VAR_INPUT  VAR_OUTPUT
                                                    varGlobalType: 'VAR_OUTPUT'
                                                };
                                                functionBlockElement.varDecls.push(varDecl);
                                            });
                                        });
                                        this.validateLibraryFunction(functionBlockElement, parameters, accept, true);
                                    } else if (isStructsList(ref)) {
                                        if (assignPrefix) {
                                            accept('error', `无法调用类型'TYPE'的对象`, {
                                                node: assignPrefix,
                                                property: 'varEnchanceDecl'
                                            });
                                        }
                                    }
                                } else {
                                    //基本类型,比如BYTE,INT等
                                    if (assignPrefix) {
                                        accept('error', `需要程序名,函数或功能块实例替代${assignPrefix?.varEnchanceDecl.$refText}`, {
                                            node: assignPrefix,
                                            property: 'varEnchanceDecl'
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    private handleRef(
        currentElementRef: Universe,
        currentElementRefText: string,
        expectType: string | undefined,
        previous?: Expression | undefined
    ) {
        if (isStructsList(currentElementRef.$container)) {
            let ultimateRef = currentElementRef.$container as StructsList;
            let structItems = ultimateRef.items;
            let originalStructDeclVariableData = structItems.find(item => item.variables === currentElementRefText);
            if (originalStructDeclVariableData) {
                let innerTypeName = originalStructDeclVariableData.typeName;
                expectType = this.judgeType(expectType, innerTypeName);
                // accept('error', `${expectType} `, {
                //     node: memberCall,
                //     property: 'element'
                // });
            }
        } else if (isVarDeclarationInit(currentElementRef)) {
            let ultimateRef = currentElementRef as VarDeclarationInit;
            let typeName = ultimateRef.typeName;
            expectType = this.judgeType(expectType, typeName);
        } else {
            //get from cache
            if (previous) {
                let prior = previous.prior;
                if (isVariableExpression(prior)) {
                    //astNode = prior;
                    let refNode = prior.variable.ref;
                    if (isVarDeclarationInit(refNode)) {
                        let typeName = refNode.typeName;
                        if (typeName.Cache_type_name) {
                            let refCacheName = typeName.Cache_type_name;
                            //currentElementRefText ccc
                            let result = getRelatedElementAndLangiumDoc(refCacheName);
                            if (result) {
                                let [elementNode, langiumDocument] = result;
                                if (elementNode) {
                                    let filterVarDecl = elementNode.varDecls.find(varDecl => varDecl.varName === currentElementRefText);
                                    expectType = filterVarDecl?.varType;
                                }
                            }
                        }
                    }
                    // accept('error', `${refNode?.$type} `, {
                    //     node: memberCall,
                    //     property: 'element'
                    // });
                }
            }
        }
        return expectType;
    }

    private judgeRefNodeType(refNode: NamedElement | undefined, expectType: string | undefined) {
        if (isVarDeclarationInit(refNode)) {
            let typeName = refNode.typeName;
            expectType = handleNoAcceptNativeTypeName(typeName, expectType);
        }
        return expectType;
    }

    private judgeType(expectType: string | undefined, typeName: Native_Type_Name) {
        expectType = handleNoAcceptNativeTypeName(typeName, expectType);
        return expectType;
    }

    private getCurrentRoot(node: AstNode | undefined): St | undefined {
        if (!node) {
            return undefined;
        }
        if (node.$type === 'St') {
            return node as St;
        }
        return AstUtils.getContainerOfType(node, (item): item is St => item.$type === 'St');
    }

    private getLocalEnumByName(enumName: string | undefined, node: AstNode | undefined): StEnum | undefined {
        if (!enumName) {
            return undefined;
        }
        let root = this.getCurrentRoot(node);
        return root?.types_enum.find(item => item.name.toLowerCase() === enumName.toLowerCase());
    }

    private getEnumMembers(enumName: string | undefined, node: AstNode | undefined): string[] | undefined {
        if (!enumName) {
            return undefined;
        }
        let localEnum = this.getLocalEnumByName(enumName, node);
        if (localEnum) {
            return localEnum.enum.map(item => item.variable_name);
        }
        let result = getRelatedEnumElementAndLangiumDoc(enumName);
        if (result) {
            let [enumElement] = result;
            return enumElement?.enumChild.map(item => item.enumVarName);
        }
        return undefined;
    }

    private getEnumeratedValueTypeName(enumValue: EnumeratedValue): string | undefined {
        if (enumValue.enumCacheTypeName) {
            return enumValue.enumCacheTypeName;
        }
        let refNode = enumValue.enumType?.ref;
        if (refNode) {
            if (refNode.$type === 'StEnum') {
                return refNode.name;
            }
            if ('elementType' in refNode && refNode.elementType === 'enum' && 'elementName' in refNode) {
                let elementName = refNode.elementName;
                if (typeof elementName === 'string') {
                    return elementName;
                }
            }
        }
        return enumValue.enumType?.$refText;
    }

    private validateEnumeratedValue(
        enumValue: EnumeratedValue,
        expectType: string | undefined,
        accept: ValidationAcceptor
    ): string | undefined {
        let enumTypeName = this.getEnumeratedValueTypeName(enumValue);
        let enumMembers = this.getEnumMembers(enumTypeName, enumValue);
        if (enumTypeName && enumMembers) {
            let hasMember = enumMembers.some(item => item.toLowerCase() === enumValue.enumValue.toLowerCase());
            if (!hasMember) {
                accept('error', `'${enumValue.enumValue}' is not a member of enum '${enumTypeName}'.`, {
                    node: enumValue,
                    property: 'enumValue'
                });
            }
        }
        if (enumTypeName && expectType) {
            let [normalizedActualType, normalizedExpectType] = this.getComparableTypes(enumTypeName, expectType);
            if (normalizedActualType && normalizedExpectType && normalizedActualType.toLowerCase() !== normalizedExpectType.toLowerCase()) {
                accept('error', `Cannot convert enum type '${enumTypeName}' to type '${expectType}'.`, {
                    node: enumValue,
                    property: 'enumValue'
                });
            }
        }
        return enumTypeName;
    }

    private handleExpressionPrior(
        prior: Expression | undefined,
        expectType: string | undefined,
        accept: ValidationAcceptor,
        astNode: MemberCall | VariableExpression | Expression | AssignPrefix | undefined
    ) {
        if (prior) {
            //handleVariableHint的id为variableParent.varEnchanceDecl
            if (!astNode) {
                astNode = prior;
            }
            let expressionType = prior?.$type;
            if (expressionType === 'Constant') {
                let constExpression = prior as Constant;
                //true
                let varValue = constExpression.constant;
                // if (!isArr_string(varValue)) {
                //     let value = varValue as string;
                //     let isIntegerFlag = isInteger(value);
                //     if (!isIntegerFlag && !isFloatOrDouble(value)) {
                //         //诸如088 0067这种0开头的
                //         if (value !== '') {
                //             accept('error', `${value}不是一个整数`, {
                //                 node: constExpression,
                //                 property: 'constant'
                //             });
                //         }
                //     }
                // }

                this.handleDataTypeMatch(varValue, expectType, accept, astNode);
            } else if (expressionType === 'EnumeratedValue') {
                let enumeratedValue = prior as EnumeratedValue;
                this.validateEnumeratedValue(enumeratedValue, expectType, accept);
            } else if (expressionType === 'FunctionExpression') {
                let refNode = this.handleFunctionExpression(prior, accept, astNode, expectType);
            } else if (expressionType === 'VariableExpression') {
                let variableExpression = prior as VariableExpression;
                let refNode = variableExpression.variable.ref;
                let actualType: string | undefined = '';
                actualType = this.judgeRefNodeType(refNode, actualType);
                if (actualType && expectType) {
                    let [normalizedActualType, normalizedExpectType] = this.getComparableTypes(actualType, expectType);
                    if (
                        normalizedActualType &&
                        normalizedExpectType &&
                        normalizedActualType.toLowerCase() !== normalizedExpectType.toLowerCase()
                    ) {
                        accept('error', `不能将类型'${actualType}'转化为类型'${expectType}'`, {
                            node: variableExpression,
                            property: 'variable'
                        });
                    }
                }
            }
        }
    }

    private handleFunctionExpression(
        prior: Expression,
        accept: ValidationAcceptor,
        astNode: MemberCall | VariableExpression | Expression | AssignPrefix | undefined,
        expectType: string | undefined
    ) {
        let functionExpression = prior as FunctionExpression;
        let selectRefFunctionName = functionExpression.refFunctionName;
        let params = functionExpression.params;
        if (selectRefFunctionName.refFunctionName) {
            let refNode = selectRefFunctionName.refFunctionName.ref;
            let params = functionExpression.params;
            let paramTypeArr: any[] = [];
            if (refNode) {
                if (isStFunction(refNode)) {
                    this.validateStFunctionRule(refNode, astNode, expectType, accept, paramTypeArr, params);
                } else if (isVarDeclarationInit(refNode)) {
                    expectType = this.judgeRefNodeType(refNode, expectType);
                    if (expectType) {
                        let result = getRelatedElementAndLangiumDoc(expectType);
                        if (result) {
                            if (params) {
                                let parameters = params.parameters;
                                this.validateLibraryFunction(result, parameters, accept);
                            }
                        }
                    }
                }
            }
        } else if (selectRefFunctionName.Cache_type_name) {
            //有可能是ToN这种，需要都转化为大写TON
            let cacheName = selectRefFunctionName.Cache_type_name;
            let returnType = this.getCacheFunctionReturnType(cacheName);
            this.validateReturnTypeCompatibility(returnType, expectType, accept, functionExpression, 'refFunctionName');
            if (params) {
                let parameters = params.parameters;
                let result = getRelatedElementAndLangiumDoc(cacheName);
                if (result) {
                    this.validateLibraryFunction(result, parameters, accept);
                } else {
                    // let refNode = refCacheName.ref;
                    // if (isVarDeclarationInit(refNode)) {
                    //     expectType = this.judgeRefNodeType(refNode, expectType);
                    //     if (expectType) {
                    //         let result = getRelatedElementAndLangiumDoc(expectType);
                    //         if (result) {
                    //             this.validateLibraryFunction(result, parameters, accept);
                    //         }
                    //     }
                    // }
                }
            }
        }
    }

    private validateStFunctionRule(
        refNode: StFunction,
        astNode: Expression | VariableExpression | MemberCall | AssignPrefix | undefined,
        expectType: string | undefined,
        accept: ValidationAcceptor,
        paramTypeArr: any[],
        params: Invoke_subrule
    ) {
        let typeName = refNode.variable_type;
        let varInputs = refNode.varInputs;
        let actualType: any;
        let varDecl: any[] = [];
        varInputs.forEach(varInput => {
            let items = varInput.items;
            items.forEach(item => {
                let nextVariables = item.nextVariables;
                if (nextVariables.length > 0) {
                    nextVariables.forEach(nextVariable => {
                        varDecl.push(nextVariable);
                    });
                }
            });
            varDecl.push(...varInput.items);
        });
        if (typeName) {
            actualType = handleNoAcceptNativeTypeName(typeName, actualType);
            if (astNode) {
                if (actualType && expectType) {
                    let [normalizedActualType, normalizedExpectType] = this.getComparableTypes(actualType, expectType);
                    if (
                        normalizedActualType &&
                        normalizedExpectType &&
                        normalizedActualType.toLowerCase() !== normalizedExpectType.toLowerCase()
                    ) {
                        accept('error', `不能将类型'${actualType}'转化为类型'${expectType}'`, {
                            node: astNode,
                            property: isAssignPrefix(astNode) ? 'varEnchanceDecl' : 'prior'
                        });
                    }
                }
            }
        }
        this.handleFunctionReqparam(varDecl, accept, paramTypeArr);
        if (params) {
            let parameters = params.parameters;
            if (varDecl.length !== parameters.length) {
                accept('error', `期望${varDecl.length}个输入,但是实际${parameters.length}个`, {
                    node: params,
                    property: 'parameters'
                });
            } else {
                /**
                 * 校验函数的每个入参和实际的形参类型是否匹配，result := AddNumbers('qwe', 7);不匹配报错
                 * AddNumbers2个形参都是INT类型，因此这个函数的第一个入参'qwer'不匹配，报类型错误
                 */
                for (let i = 0; i < parameters.length; i++) {
                    let parameter = parameters[i];
                    let expectType = paramTypeArr[i];
                    let paramValue = parameter.ParamValue;
                    if (paramValue) {
                        let prior = paramValue.prior;
                        let rightVariableName = '';
                        let actualType: string | undefined = '';
                        // let actualVariableName = rightVariableName ;
                        this.handlePrior(prior, rightVariableName, actualType, expectType, accept);
                    }
                }
            }
        }
    }

    private validateLibraryFunction(result: any, parameters: Param_assignment[], accept: ValidationAcceptor, isCustomFb?: boolean) {
        if (!isCustomFb) {
            let [elementNode, langiumDocument] = result;
            if (elementNode) {
                let elementType = elementNode.elementType;
                if (elementType === 'functionBlock') {
                    elementNode = elementNode as FunctionBlockElement;
                    this.validateFb(elementNode, parameters, accept);
                }
            }
        } else {
            this.validateFb(result, parameters, accept, isCustomFb);
        }
    }

    private validateFb(elementNode: any, parameters: Param_assignment[], accept: ValidationAcceptor, isCustomFb?: boolean) {
        let inputSet = this.judgeCacheNodeInputOutputVarDecl(':=', elementNode);
        let outputSet = this.judgeCacheNodeInputOutputVarDecl('=>', elementNode);
        parameters.forEach(parameter => {
            let paramName = parameter.ParamName;
            let paramValue = parameter.ParamValue;
            let inputOrOutputSign = parameter.InputOrOutputSign;
            let flag = false;
            //自定义的功能块名字就不需要转大写了
            let fbName = isCustomFb ? elementNode?.elementName : elementNode?.elementName.toUpperCase();
            if (inputOrOutputSign === ':=' && paramName) {
                if (!inputSet.has(paramName)) {
                    flag = true;
                    accept('error', `${paramName}不是${fbName}的输入参数`, {
                        node: parameter,
                        property: 'ParamName'
                    });
                }
            }
            if (inputOrOutputSign === '=>' && paramName) {
                if (!outputSet.has(paramName)) {
                    flag = true;
                    accept('error', `${paramName}不是${fbName}的输出参数`, {
                        node: parameter,
                        property: 'ParamName'
                    });
                }
            }
            if (!flag) {
                if (paramValue) {
                    this.handleCacheTypeMatch(paramName, paramValue, elementNode, accept, parameter);
                }
            }
        });
    }

    private normalizeTypeAlias(typeName: string | undefined, visitedAlias = new Set<string>()): string | undefined {
        if (!typeName) {
            return undefined;
        }
        let normalizedType = typeName.toUpperCase();
        if (normalizedType === 'DT') {
            return 'DATE_AND_TIME';
        }
        if (normalizedType === 'TOD') {
            return 'TIME_OF_DAY';
        }
        let result = getRelatedElementAndLangiumDoc(typeName);
        if (result) {
            let [elementNode] = result;
            if (elementNode?.elementType === 'alias') {
                let aliasElement = elementNode as AliasElement;
                let aliasName = aliasElement.elementName.toUpperCase();
                if (visitedAlias.has(aliasName)) {
                    return aliasName;
                }
                visitedAlias.add(aliasName);
                return this.normalizeTypeAlias(aliasElement.refName, visitedAlias) ?? normalizedType;
            }
        }
        return normalizedType;
    }

    private getComparableTypes(actualType: string | undefined, expectType: string | undefined): [string | undefined, string | undefined] {
        return [this.normalizeTypeAlias(actualType), this.normalizeTypeAlias(expectType)];
    }

    private getCacheFunctionReturnType(cacheName: string): string | undefined {
        let result = getRelatedElementAndLangiumDoc(cacheName);
        if (!result) {
            return undefined;
        }
        let [elementNode] = result;
        if (!elementNode || elementNode.elementType !== 'function') {
            return undefined;
        }
        let returnDecl =
            elementNode.varDecls.find(varDecl => varDecl.varGlobalType === 'VAR_OUTPUT' && varDecl.varName.toUpperCase() === 'OUT') ||
            elementNode.varDecls.find(varDecl => varDecl.varGlobalType === 'VAR_OUTPUT');
        let returnType = this.normalizeTypeAlias(returnDecl?.varType);
        if (!returnType || returnType === 'ANY' || returnType.startsWith('ANY_')) {
            return undefined;
        }
        return returnType;
    }

    private validateReturnTypeCompatibility(
        actualType: string | undefined,
        expectType: string | undefined,
        accept: ValidationAcceptor,
        node: FunctionExpression,
        property: 'refFunctionName'
    ) {
        let normalizedActualType = this.normalizeTypeAlias(actualType);
        let normalizedExpectType = this.normalizeTypeAlias(expectType);
        if (normalizedActualType && normalizedExpectType && normalizedActualType.toLowerCase() !== normalizedExpectType.toLowerCase()) {
            accept('error', `不能将类型'${normalizedActualType}'转化为类型'${normalizedExpectType}'`, {
                node,
                property
            });
        }
    }

    private judgeCacheNodeInputOutputVarDecl(
        inputOrOutputSign: string | undefined,
        elementNode: FunctionBlockElement | FunctionElement | undefined
    ): Set<string> {
        let set = new Set<string>();
        if (!inputOrOutputSign) {
            return set;
        }
        let varGlobalType = '';
        let varDecls = elementNode?.varDecls;
        if (inputOrOutputSign === ':=') {
            varGlobalType = 'VAR_INPUT';
        } else if (inputOrOutputSign === '=>') {
            varGlobalType = 'VAR_OUTPUT';
        }
        if (varDecls) {
            varDecls?.forEach(item => {
                if (item.varGlobalType === varGlobalType) {
                    set.add(item.varName);
                }
            });
        }
        return set;
    }

    private handleCacheTypeMatch(
        paramName: string | undefined,
        paramValue: Expression,
        elementNode: FunctionBlockElement | FunctionElement | undefined,
        accept: ValidationAcceptor,
        parameter: Param_assignment
    ) {
        if (!elementNode) {
            return;
        }
        let filterVarDecl = elementNode.varDecls.find(varDecl => varDecl.varName === paramName);
        let expectType: string = filterVarDecl?.varType;
        if (isConstant(paramValue.prior)) {
            let priorConstant = paramValue.prior as Constant;
            let constantValue = priorConstant.constant;
            this.handleDataTypeMatch(constantValue, expectType, accept, paramValue);
        } else if (isVariableExpression(paramValue.prior)) {
            let variableExpression = paramValue.prior as VariableExpression;
            let refNode = variableExpression.variable.ref;
            let actualType: string | undefined = '';
            actualType = this.judgeRefNodeType(refNode, actualType);
            if (actualType && expectType) {
                let [normalizedActualType, normalizedExpectType] = this.getComparableTypes(actualType, expectType);
                if (
                    normalizedActualType &&
                    normalizedExpectType &&
                    normalizedActualType.toLowerCase() !== normalizedExpectType.toLowerCase()
                ) {
                    accept('error', `不能将类型'${actualType}'转化为类型'${expectType}'`, {
                        node: variableExpression,
                        property: 'variable'
                    });
                }
            }
        } else if (isEnumeratedValue(paramValue.prior)) {
            let enumeratedValue = paramValue.prior as EnumeratedValue;
            this.validateEnumeratedValue(enumeratedValue, expectType, accept);
        } else if (isMemberCall(paramValue)) {
            let element = paramValue.element;
            let prior = paramValue.previous?.prior;
            let rightVarName = '';
            let rightExpectType: string | undefined = '';
            if (isVariableExpression(prior)) {
                let varExpression = prior as VariableExpression;
                let refNode = varExpression.variable.ref;
                if (isVarDeclarationInit(refNode)) {
                    rightVarName = refNode.variables;
                    rightExpectType = this.judgeRefNodeType(refNode, rightExpectType);
                }
                if (rightExpectType) {
                    let result = getRelatedElementAndLangiumDoc(rightExpectType.toUpperCase());
                    if (result && element) {
                        let [elementNode, langiumDocument] = result;
                        if (elementNode) {
                            let filterVarDecl = elementNode.varDecls.find(varDecl => varDecl.varName === element?.$refText);
                            //e.g ton888(IN := ton666.CV, PT := , Q => , ET => );,ton666.CV和IN的类型是否匹配
                            if (filterVarDecl) {
                                let actualType: string = filterVarDecl.varType;
                                if (actualType && expectType) {
                                    let [normalizedActualType, normalizedExpectType] = this.getComparableTypes(actualType, expectType);
                                    if (
                                        normalizedActualType &&
                                        normalizedExpectType &&
                                        normalizedActualType.toLowerCase() !== normalizedExpectType.toLowerCase()
                                    ) {
                                        accept('error', `不能将类型'${actualType}'转化为类型'${expectType}'`, {
                                            node: parameter,
                                            property: 'ParamName'
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (isFunctionExpression(paramValue.prior)) {
            let priorFunctionExpression = paramValue.prior as FunctionExpression;
            if (priorFunctionExpression.refFunctionName.refFunctionName) {
                let refFunNode = priorFunctionExpression.refFunctionName.refFunctionName.ref;
                if (refFunNode) {
                    // ton(IN :=addNumbers(), PT:= , Q=> FALSE , ET => );,比如这种，就是IN和addNumbers返回类型不匹配
                    if (isStFunction(refFunNode)) {
                        let typeName = refFunNode.variable_type;
                        let returnType: any;
                        returnType = handleNativeTypeName(typeName, returnType, accept);
                        this.validateReturnTypeCompatibility(returnType, expectType, accept, priorFunctionExpression, 'refFunctionName');
                    }
                } else {
                    //外部的function暂时不判断，比如ADD(),因为data.json目前没有一个明确的返回的类型
                    let cacheFunNode = priorFunctionExpression.refFunctionName.refFunctionName.$refText;
                }
            } else if (priorFunctionExpression.refFunctionName.Cache_type_name) {
                let cacheFunNode = priorFunctionExpression.refFunctionName.Cache_type_name;
                let returnType = this.getCacheFunctionReturnType(cacheFunNode);
                this.validateReturnTypeCompatibility(returnType, expectType, accept, priorFunctionExpression, 'refFunctionName');
            }
        }
    }

    private handleFunctionReqparam(reqParams: VarDeclarationInit[], accept: ValidationAcceptor, paramTypeArr?: any[]) {
        reqParams.forEach(item => {
            let typeName = item.typeName;
            let nextVariables = item.nextVariables;
            let eachParamTypeName: any;
            if (typeName) {
                eachParamTypeName = handleNativeTypeName(typeName, eachParamTypeName, accept);
                if (paramTypeArr) {
                    paramTypeArr.push(eachParamTypeName);
                    if (nextVariables.length > 0) {
                        //有几个变量就加几次 a,b,c:INT;
                        for (let i = 0; i < nextVariables.length; i++) {
                            paramTypeArr.push(eachParamTypeName);
                        }
                    }
                }
            }
        });
    }

    private handleFunctionBlockMethodReqparam(reqParams: ReqParams[], accept: ValidationAcceptor, paramTypeArr?: any[]) {
        reqParams.forEach(item => {
            let typeName = item.typeName;
            let eachParamTypeName: any;
            if (typeName) {
                eachParamTypeName = handleNativeTypeName(typeName, eachParamTypeName, accept);
                if (paramTypeArr) {
                    paramTypeArr.push(eachParamTypeName);
                }
            }
        });
    }

    private handleDataTypeMatch(
        varValue: string | number | Arr_string,
        expectType: string | undefined,
        accept: ValidationAcceptor,
        finalVariableName?: MemberCall | VariableExpression | Expression | AssignPrefix
    ) {
        if (!finalVariableName) {
            return;
        }
        expectType = this.normalizeTypeAlias(expectType);
        let actualType: string[] = [];
        if (isArr_string(varValue)) {
            let singleElements = varValue.arrElements;
            for (let i = 0; i < singleElements.length; i++) {
                let element = singleElements[i];
                actualType = determineVariableType(element.constant);
                varValue = this.handleDataTypeMatchHint(actualType, expectType, finalVariableName, accept, varValue);
            }
        } else {
            actualType = determineVariableType(varValue);
            varValue = this.handleDataTypeMatchHint(actualType, expectType, finalVariableName, accept, varValue);
        }
        return varValue;
    }

    private handleDataTypeMatchHint(
        actualType: string[],
        expectType: string | undefined,
        finalVariableName: MemberCall | Expression | VariableExpression | AssignPrefix,
        accept: ValidationAcceptor,
        varValue: string | number | Arr_string
    ) {
        expectType = this.normalizeTypeAlias(expectType);
        if (actualType.length === 1) {
            //consider upper lower case
            if (expectType && actualType) {
                if (expectType?.toLowerCase() !== actualType[0].toLowerCase()) {
                    let isJudgeNeedToHint = judgeNeedToHint(actualType[0], expectType, varValue as string | number);
                    let [flag, timeType] = this.checkTimeType(expectType);
                    if (flag && actualType[0].toLowerCase() === 'string') {
                        let validationMsg = validateTimeFormat(varValue.toString(), timeType);
                        if (isMemberCall(finalVariableName)) {
                            //不为空说明正则校验有问题，返回对应的提示信息
                            if (validationMsg !== '') {
                                accept('error', validationMsg, {
                                    node: finalVariableName,
                                    property: 'element'
                                });
                            }
                        } else if (isVariableExpression(finalVariableName)) {
                            if (validationMsg !== '') {
                                accept('error', validationMsg, {
                                    node: finalVariableName,
                                    property: 'variable'
                                });
                            }
                        } else if (isExpression(finalVariableName)) {
                            if (validationMsg !== '') {
                                accept('error', validationMsg, {
                                    node: finalVariableName,
                                    property: 'prior'
                                });
                            }
                        }
                    }
                    //不是4种time类型
                    if (!flag) {
                        if (isJudgeNeedToHint) {
                            if (isMemberCall(finalVariableName)) {
                                accept('error', `不能将类型'${actualType[0]}'转化为类型'${expectType}'`, {
                                    node: finalVariableName,
                                    property: 'element'
                                });
                            } else if (isVariableExpression(finalVariableName)) {
                                accept('error', `不能将类型'${actualType[0]}'转化为类型'${expectType}'`, {
                                    node: finalVariableName,
                                    property: 'variable'
                                });
                            } else if (isExpression(finalVariableName)) {
                                accept('error', `不能将类型'${actualType[0]}'转化为类型'${expectType}'`, {
                                    node: finalVariableName,
                                    property: 'prior'
                                });
                            }
                        }
                    }
                    if (!flag && isJudgeNeedToHint && isAssignPrefix(finalVariableName)) {
                        accept('error', `不能将类型'${actualType[0]}'转化为类型'${expectType}'`, {
                            node: finalVariableName,
                            property: 'varEnchanceDecl'
                        });
                    }
                }
            }
        } else {
            varValue = varValue as number;
            // if (isMemberCall(finalVariableName)) {
            //     accept('error', `aa${typeof varValue}===>${expectType} `, {
            //         node: finalVariableName,
            //         property: 'element'
            //     });
            // } else if (isExpression(finalVariableName)) {
            //     accept('error', `bb${typeof varValue}===>${expectType} `, {
            //         node: finalVariableName,
            //         property: 'variable'
            //     });
            // }
            let [msg, errorLevel] = this.convertValue(varValue, expectType);
            if (msg !== '' && msg !== '变量类型为undefined!') {
                if (isMemberCall(finalVariableName)) {
                    accept(errorLevel, msg, {
                        node: finalVariableName,
                        property: 'element'
                    });
                } else if (isVariableExpression(finalVariableName)) {
                    accept(errorLevel, msg, {
                        node: finalVariableName,
                        property: 'variable'
                    });
                } else if (isExpression(finalVariableName)) {
                    accept(errorLevel, msg, {
                        node: finalVariableName,
                        property: 'prior'
                    });
                } else if (isAssignPrefix(finalVariableName)) {
                    accept(errorLevel, msg, {
                        node: finalVariableName,
                        property: 'varEnchanceDecl'
                    });
                }
            }
            //整数这种的,int,word什么的
        }
        return varValue;
    }

    private handleSingleVariableExpression(expression: Expression | undefined, accept: ValidationAcceptor) {
        if (expression) {
            let condition = expression as Expression;
            let left = condition.left;
            let right = condition.right;
            this.handleConditionExpression(left, right, accept);
        }
    }

    private handleConditionExpression(left: Expression | undefined, right: Expression | undefined, accept: ValidationAcceptor) {
        if (left && right) {
            let leftExpressionType = left.$type;
            // this.handleExpression(leftExpressionType, left, varNameSet, varNameMap, accept);
            let rightExpressionType = right.$type;
            //this.handleExpression(rightExpressionType, right, varNameSet, varNameMap, accept);
            if (leftExpressionType === 'Expression') {
                let leftExpectType: string | undefined = '';
                let leftVariableName = '';
                let leftExpression = left as Expression;
                let prior = leftExpression.prior;
                let type = prior?.$type;
                if (isVariableExpression(prior)) {
                    let varExpression = prior as VariableExpression;
                    let refNode = varExpression.variable.ref;
                    if (isVarDeclarationInit(refNode)) {
                        leftVariableName = refNode.variables;
                        leftExpectType = this.judgeRefNodeType(refNode, leftExpectType);
                    }
                } else if (isEnumeratedValue(prior)) {
                    leftExpectType = this.validateEnumeratedValue(prior, undefined, accept);
                }
                if (rightExpressionType === 'Expression') {
                    let rightExpression = right as Expression;
                    let prior = rightExpression.prior;
                    let rightVariableName = '';
                    let rightExpectType: string | undefined = '';
                    // let actualVariableName = rightVariableName ;
                    this.handlePrior(prior, rightVariableName, rightExpectType, leftExpectType, accept);
                }
            }
        }
    }

    private handlePrior(
        prior: Expression | undefined,
        rightVariableName: string,
        rightExpectType: string | undefined,
        leftExpectType: string | undefined,
        accept: ValidationAcceptor
    ) {
        if (isVariableExpression(prior)) {
            let varExpression = prior as VariableExpression;
            let refNode = varExpression.variable.ref;
            if (isVarDeclarationInit(refNode)) {
                rightVariableName = refNode.variables;
                rightExpectType = this.judgeRefNodeType(refNode, rightExpectType);
            }
            if (leftExpectType && rightExpectType) {
                let [normalizedRightExpectType, normalizedLeftExpectType] = this.getComparableTypes(rightExpectType, leftExpectType);
                if (
                    normalizedLeftExpectType &&
                    normalizedRightExpectType &&
                    normalizedLeftExpectType.toLowerCase() !== normalizedRightExpectType.toLowerCase()
                ) {
                    if (normalizedLeftExpectType.toLowerCase() === 'string') {
                        accept('error', `不能将类型'${rightExpectType}'转化为类型'${leftExpectType}'`, {
                            node: prior,
                            property: 'variable'
                        });
                    }
                    let isJudgeNeedToHint = judgeNeedToHint(normalizedRightExpectType, normalizedLeftExpectType);
                    if (isJudgeNeedToHint) {
                        accept('error', `不能将类型'${rightExpectType}'转化为类型'${leftExpectType}'`, {
                            node: prior,
                            property: 'variable'
                        });
                    }
                }
            }
        } else if (isEnumeratedValue(prior)) {
            rightExpectType = this.validateEnumeratedValue(prior, leftExpectType, accept);
        } else if (isConstant(prior)) {
            let rightConstExpression = prior as Constant;
            let varValue = rightConstExpression.constant;
            let actualType: string[] = [];
            if (isArr_string(varValue)) {
                let singleElements = varValue.arrElements;
                for (let i = 0; i < singleElements.length; i++) {
                    let element = singleElements[i];
                    actualType = determineVariableType(element.constant);
                    varValue = this.handleConditionExpressionHint(actualType, leftExpectType, accept, rightConstExpression);
                }
            } else {
                actualType = determineVariableType(varValue);
                varValue = this.handleConditionExpressionHint(actualType, leftExpectType, accept, rightConstExpression);
            }
        }
        return { rightVariableName, rightExpectType };
    }

    private handleConditionExpressionHint(
        actualType: string[],
        expectType: string | undefined,
        accept: ValidationAcceptor,
        constExpression: Constant
    ) {
        expectType = this.normalizeTypeAlias(expectType);
        let varValue = constExpression.constant;
        if (actualType.length === 1) {
            //consider upper lower case
            if (expectType && actualType) {
                if (expectType?.toLowerCase() !== actualType[0].toLowerCase()) {
                    let isJudgeNeedToHint = judgeNeedToHint(actualType[0], expectType, varValue as string | number);
                    if (isJudgeNeedToHint) {
                        accept('error', `不能将类型'${actualType}'转化为类型'${expectType}'`, {
                            node: constExpression,
                            property: 'constant'
                        });
                    }
                }
            }
        } else {
            varValue = varValue as number;
            let flag = isInteger(varValue.toString());
            if (!flag && !isFloatOrDouble(varValue.toString())) {
                //诸如088 0067这种0开头的
                accept('error', `${varValue}不是一个整数`, {
                    node: constExpression,
                    property: 'constant'
                });
            }
            let [msg, errorLevel] = this.convertValue(varValue, expectType);
            if (msg !== '' && msg !== '变量类型为undefined!') {
                accept(errorLevel, msg, {
                    node: constExpression,
                    property: 'constant'
                });
            }
            //整数这种的,int,word什么的
        }
        return varValue;
    }

    convertValue(varValue: number | string, expectType: string | undefined): [string, 'error' | 'warning' | 'info' | 'hint'] {
        let result: [string, 'error' | 'warning' | 'info' | 'hint'] = ['', 'error'];
        interface TypeRange {
            min: number;
            max: number;
        }
        const typeRanges: { [key: string]: TypeRange } = {
            //codesys 中变量定义b: BOOL := 1也是可以的
            BOOL: { min: 0, max: 1 },
            SINT: { min: -128, max: 127 },
            BYTE: { min: 0, max: 255 },
            INT: { min: -32768, max: 32767 },
            UINT: { min: 0, max: 65535 },
            DINT: { min: -2147483648, max: 2147483647 },
            UDINT: { min: 0, max: 4294967295 },
            LINT: { min: -Math.pow(2, 63), max: Math.pow(2, 63) - 1 },
            WORD: { min: 0, max: 65535 },
            DWORD: { min: 0, max: 4294967295 },
            LWORD: { min: 0, max: Math.pow(2, 64) - 1 }
        };
        let closestType: string | undefined;
        expectType = this.normalizeTypeAlias(expectType);
        if (expectType === undefined) {
            return [`变量类型为undefined!`, 'error'];
        }
        //引用类型暂时不返回错误信息，后续可以添加
        if (expectType === '' || isReference(expectType)) {
            return result;
        }
        if (expectType.toUpperCase() === 'REAL' || expectType.toUpperCase() === 'LREAL') {
            if (typeof varValue === 'string') {
                if (!isDecimal(varValue)) {
                    let transVarInitialValue = parseInt(varValue, 10);
                    closestType = Object.keys(typeRanges).find(
                        key =>
                            transVarInitialValue >= typeRanges[key].min && transVarInitialValue <= typeRanges[key].max && key !== expectType
                    );
                    result = closestType
                        ? [`建议将类型'${closestType}'转化为'${expectType}'类型`, 'warning']
                        : ['No suitable conversion type found', 'warning'];
                }
            }
            return result;
        }

        if (typeRanges[expectType]) {
            const { min, max } = typeRanges[expectType];
            if (typeof varValue === 'number') {
                if (varValue >= min && varValue <= max) {
                    // result = [`Value within ${expectType} range`, 'hint'];
                } else {
                    closestType = Object.keys(typeRanges).find(
                        key => varValue >= typeRanges[key].min && varValue <= typeRanges[key].max && key !== expectType
                    );
                    let isJudgeNeedToHint = judgeNeedToHint(closestType, expectType, varValue);
                    if (closestType) {
                        if (isJudgeNeedToHint) {
                            result = [`不能将类型'${closestType}'转化为'${expectType}'类型`, 'error'];
                        }
                    } else {
                        result = ['No suitable conversion type found', 'error'];
                    }
                }
                return result;
            } else {
                let flag = isFloatOrDouble(varValue);
                if (!flag) {
                    //正常的整数字符串
                    let transVarInitialValue = parseInt(varValue, 10);
                    result = this.convertValue(transVarInitialValue, expectType);
                } else {
                    if (expectType) {
                        if (expectType.toLowerCase() !== 'REAL' || expectType.toLowerCase() !== 'LREAL') {
                            result = [`不能将类型'LREAL'转化为'${expectType}'类型`, 'error'];
                        }
                    }
                }
            }
        } else {
            if (typeof varValue === 'number') {
                closestType = Object.keys(typeRanges).find(
                    key => varValue >= typeRanges[key].min && varValue <= typeRanges[key].max && key !== expectType
                );
                if (closestType) {
                    if (expectType) {
                        let isJudgeNeedToHint = judgeNeedToHint(closestType, expectType, varValue);
                        if (expectType.toUpperCase() === 'STRING') {
                            if (closestType?.toLowerCase() !== expectType.toLowerCase()) {
                                result = [`不能将类型'${closestType}'转化为'${expectType}'类型`, 'error'];
                                return result;
                            }
                        } else {
                            //解决报错不能将SINT转化为InT类型这种错误(int不全是大写)
                            if (isJudgeNeedToHint) {
                                result = [`不能将类型'${closestType}'转化为'${expectType}'类型`, 'error'];
                                return result;
                            }
                        }
                    }
                } else {
                    result = ['No suitable conversion type found', 'error'];
                }
                return result;
            } else if (typeof varValue === 'string') {
                if (isDecimal(varValue)) {
                    let flag = isFloatOrDouble(varValue);
                    let transVarInitialValue = flag ? parseFloat(varValue) : parseInt(varValue, 10);
                    result = this.convertValue(transVarInitialValue, expectType);
                }
                return result;
            }
        }
        return result;
    }

    saveProgramVarInfo(programInputs: InputsListSingle[], accept: ValidationAcceptor) {
        programInputs.forEach(programInput => {
            let definition = programInput.definition as string;
            let eachScopeVars = programInput.items;
            let modifier = programInput.modifiers as string;
            let varType: string = '';
            if (modifier) {
                varType = definition.concat(modifier);
            } else {
                varType = definition;
            }
            this.judgeWhetherHasDuplicateName('局部变量', eachScopeVars, accept);
            eachScopeVars.forEach(item => {
                this.validateDeclarationVar(item, accept);
            });
        });
    }

    /**
     *
     * @param functionArr 校验变量类型匹配等 此时allTypeNameMap已经包含所有的值
     * @param accept
     */
    handleFunctionOrBlockInfo(functionArr: StFunction[] | FunctionBlock[], accept: ValidationAcceptor) {
        functionArr.forEach(eachFunction => {
            let varLocals = eachFunction.varLocals;
            let varInputs = eachFunction.varInputs;
            let varOutputs = eachFunction.varOutputs;
            let functionVarLocalArr: VarDeclarationInit[] = [];
            let functionVarInputArr: VarDeclarationInit[] = [];
            let functionVarOutArr: VarDeclarationInit[] = [];
            varLocals.forEach(varLocal => {
                functionVarLocalArr.push(...varLocal.items);
            });
            varInputs.forEach(varLocal => {
                functionVarInputArr.push(...varLocal.items);
            });
            varOutputs.forEach(varLocal => {
                functionVarOutArr.push(...varLocal.items);
            });
            this.handleEachVarTypeVariable(functionVarLocalArr, accept);
            this.handleEachVarTypeVariable(functionVarInputArr, accept);
            this.handleEachVarTypeVariable(functionVarOutArr, accept);

            //validate function block method
            if (isFunctionBlock(eachFunction)) {
                //let eachFunctionBlockMethodArr = eachFunction.methods;
                //checkDuplicateName(eachFunctionBlockMethodArr, accept);
                // eachFunctionBlockMethodArr.forEach(method => {
                //     let methodDeclVariableArr = method.inputs;
                //     let returnTypeName: any;
                //     let typeName = method.variable_type;
                //     let reqParams = method.reqParams;
                //     this.handleFunctionBlockMethodReqparam(reqParams, accept);
                //     returnTypeName = handleNativeTypeName(typeName, returnTypeName, accept);
                //     methodDeclVariableArr.forEach(methodDeclVariable => {
                //         let itemArr = methodDeclVariable.items;
                //         this.judgeWhetherHasDuplicateName('局部变量', itemArr, accept);
                //         itemArr.forEach(item => {
                //             this.validateDeclarationVar(item, accept);
                //         });
                //     });
                // });
            } else if (isStFunction(eachFunction)) {
                let typeName = eachFunction.variable_type;
                let varInputs = eachFunction.varInputs;
                let varDecl: any[] = [];
                varInputs.forEach(varInput => {
                    varDecl.push(varInput.items);
                });
                this.handleFunctionReqparam(varDecl, accept);
                let returnTypeName: any;
                returnTypeName = handleNativeTypeName(typeName, returnTypeName, accept);
            }
        });
    }

    handleDataTypeVarInfo(
        types_struct: StructsList[],
        types_alias: Alias[],
        types_enum: StEnum[],
        types_union: UnionsList[],
        accept: ValidationAcceptor
    ) {
        let dataTypeStructArr = types_struct;
        let dataTypeUnionArr = types_union;
        let dataTypeEnumArr = types_enum;
        let dataTypeAliasArr = types_alias;
        dataTypeStructArr.forEach(dataTypeStruct => {
            if (dataTypeStruct) {
                let structVarArr = dataTypeStruct.items;
                this.judgeWhetherHasDuplicateName('局部变量', structVarArr, accept);
                structVarArr?.forEach(structVar => {
                    this.validateDeclarationVar(structVar, accept);
                    let typeName = structVar.typeName;
                    let eachVarTypeName: any;
                    if (typeName) {
                        if (typeName.$type === 'Native_Type_Name') {
                            eachVarTypeName = handleNativeTypeName(typeName, eachVarTypeName, accept);
                        } else if (typeName.$type === 'Array_liters') {
                            let arrayLiters = typeName as Array_liters;
                            eachVarTypeName = arrayLiters.dataType;
                        }
                    }
                });
            }
        });
        dataTypeUnionArr.forEach(dataTypeUnion => {
            if (dataTypeUnion) {
                let unionVarArr = dataTypeUnion.items;
                this.judgeWhetherHasDuplicateName('局部变量', unionVarArr, accept);
                unionVarArr?.forEach(unionVar => {
                    this.validateDeclarationVar(unionVar, accept);
                    let typeName = unionVar.typeName;
                    let eachVarTypeName: any;
                    if (typeName) {
                        if (typeName.$type === 'Native_Type_Name') {
                            eachVarTypeName = handleNativeTypeName(typeName, eachVarTypeName, accept);
                        } else if (typeName.$type === 'Array_liters') {
                            let arrayLiters = typeName as Array_liters;
                            eachVarTypeName = arrayLiters.dataType;
                        }
                    }
                });
            }
        });
        dataTypeEnumArr.forEach(dataTypeEnum => {
            let enumArr = dataTypeEnum.enum;
        });
        dataTypeAliasArr.forEach(dataTypeAlias => {
            let aliasTypeName: any = '';
            aliasTypeName = handleNativeTypeName(dataTypeAlias.refName, aliasTypeName, accept);
            let aliasInitialValue = dataTypeAlias.initialValue;
            if (aliasInitialValue) {
                let actualType = determineVariableType(aliasInitialValue);
                this.handleVarDeclHint(actualType, aliasTypeName, accept, dataTypeAlias, aliasInitialValue);
            }
        });
    }

    private handleEachVarTypeVariable(functionVarArr: VarDeclarationInit[] | undefined, accept: ValidationAcceptor) {
        if (functionVarArr) {
            this.judgeWhetherHasDuplicateName('局部变量', functionVarArr, accept);
        }
        functionVarArr?.forEach(functionVar => {
            this.validateDeclarationVar(functionVar, accept);
            let typeName = functionVar.typeName;
            let eachVarTypeName: any;
            if (typeName) {
                if (typeName.$type === 'Native_Type_Name') {
                    eachVarTypeName = handleNativeTypeName(typeName, eachVarTypeName, accept);
                } else if (typeName.$type === 'Array_liters') {
                    let arrayLiters = typeName as Array_liters;
                    eachVarTypeName = arrayLiters.dataType;
                }
            }
        });
    }

    validateDeclarationVar(varDeclarationInit: VarDeclarationInit | Struct_Var_Decl_Init, accept: ValidationAcceptor) {
        let typeName = varDeclarationInit.typeName;
        let expectType: any;
        if (typeName) {
            if (typeName.$type === 'Native_Type_Name') {
                expectType = handleNativeTypeName(typeName, expectType, accept);
            } else if (typeName.$type === 'Array_liters') {
                let arrayLiters = typeName as Array_liters;
                let dataType = arrayLiters.dataType;
                expectType = handleNoAcceptNativeTypeName(dataType, expectType);
                let arrayElemets = arrayLiters.arrayElemets;
                arrayElemets.forEach(element => {
                    let left = element.left;
                    let right = element.right;
                    let leftValue = parseInt(left, 10);
                    let rightValue = parseInt(right, 10);
                    if (leftValue && rightValue) {
                        if (leftValue > rightValue) {
                            accept('error', '数组左侧值不能大于右侧值!', {
                                node: varDeclarationInit,
                                property: 'typeName'
                            });
                        }
                    }
                });
            }
        }
        let varInitialValue = varDeclarationInit.initialValue;
        let actualType: string[] = [];
        if (varInitialValue) {
            let constantType = varInitialValue.constant;
            if (isArr_string(constantType)) {
                let singleElements = constantType.arrElements;
                for (let i = 0; i < singleElements.length; i++) {
                    let element = singleElements[i];
                    actualType = determineVariableType(element.constant);
                    this.handleVarDeclHint(actualType, expectType, accept, varDeclarationInit, element.constant);
                }
            } else {
                actualType = determineVariableType(varInitialValue);
                this.handleVarDeclHint(actualType, expectType, accept, varDeclarationInit, varInitialValue);
            }
        }
    }

    private handleVarDeclHint(
        actualType: string[],
        expectType: any,
        accept: ValidationAcceptor,
        varDeclarationInit: Struct_Var_Decl_Init | VarDeclarationInit | Alias,
        varInitialValue: Constant | string | number | boolean | Arr_string
    ) {
        if (typeof expectType === 'string') {
            expectType = this.normalizeTypeAlias(expectType);
        }
        if (actualType.length === 1) {
            //expectType可能为Reference<ComposeElement>，这个肯定没有toLowerCase方法，所以判断一下
            if (expectType !== undefined && !isReference(expectType)) {
                if (expectType && actualType[0]) {
                    if (expectType.toLowerCase() !== actualType[0].toLowerCase()) {
                        let currentInitialValue = isConstant(varInitialValue)
                            ? (varInitialValue.constant as string | number)
                            : (varInitialValue as string | number);
                        let isJudgeNeedToHint = judgeNeedToHint(actualType[0], expectType, currentInitialValue);
                        /**
                         * 对应TIME,DATE,DATE_AND_TIME,TIME_OF_DAY类型，这儿具体定位是哪里的问题
                         * 如果actualType是string类型，expectType是时间类型的其中一种，那么进一步进行判断
                         * 定位到具体错误地方
                         */
                        let [flag, timeType] = this.checkTimeType(expectType);
                        if (flag && actualType[0].toLowerCase() === 'string') {
                            let initialValueText = isConstant(varInitialValue)
                                ? varInitialValue.constant.toString()
                                : varInitialValue.toString();
                            let validationMsg = validateTimeFormat(initialValueText, timeType);
                            //不为空说明正则校验有问题，返回对应的提示信息
                            if (validationMsg !== '') {
                                accept('error', validationMsg, {
                                    node: varDeclarationInit,
                                    property: 'initialValue'
                                });
                            }
                        }
                        //不是4种time类型
                        if (!flag) {
                            if (isJudgeNeedToHint) {
                                accept('error', `不能将类型'${actualType[0]}'转化为类型'${expectType}'`, {
                                    node: varDeclarationInit,
                                    property: 'initialValue'
                                });
                            }
                        }
                    }
                }
            }
        } else {
            if (isConstant(varInitialValue)) {
                let value = varInitialValue.constant as string;
                this.handleInnerVarDeclHint(value, expectType, accept, varDeclarationInit);
                let isIntegerFlag = isInteger(value);
                //float可能有0，比如3600.7,所以保证不是float/double
                if (!isIntegerFlag && !isFloatOrDouble(value)) {
                    //诸如088 0067这种0开头的
                    accept('error', `${value}不是一个整数`, {
                        node: varInitialValue,
                        property: 'constant'
                    });
                }
            } else {
                let value = varInitialValue as string;
                this.handleInnerVarDeclHint(value, expectType, accept, varDeclarationInit);
                let isIntegerFlag = isInteger(value);
                if (!isIntegerFlag && !isFloatOrDouble(value)) {
                    //诸如088 0067这种0开头的
                    accept('error', `${value}不是一个整数`, {
                        node: varDeclarationInit,
                        property: 'initialValue'
                    });
                }
            }
        }
    }

    private handleInnerVarDeclHint(
        value: string,
        expectType: any,
        accept: ValidationAcceptor,
        varDeclarationInit: VarDeclarationInit | Struct_Var_Decl_Init | Alias
    ) {
        if (isFloatOrDouble(value)) {
            let [msg, errorLevel] = this.convertValue(value, expectType);
            if (msg !== '' && msg !== '变量类型为undefined!') {
                accept(errorLevel, msg, {
                    node: varDeclarationInit,
                    property: 'initialValue'
                });
            }
        } else {
            //整数这种的,int,word什么的
            let transVarInitialValue = parseInt(value, 10);
            let [msg, errorLevel] = this.convertValue(transVarInitialValue, expectType);
            if (msg !== '' && msg !== '变量类型为undefined!') {
                accept(errorLevel, msg, {
                    node: varDeclarationInit,
                    property: 'initialValue'
                });
            }
        }
    }

    checkTimeType(str: string): [boolean, string] {
        const timeTypes = ['TIME', 'DATE', 'DATE_AND_TIME', 'TIME_OF_DAY'];
        // if (StTerminals.Function_block_type_name.test(str)) {
        //     return [false, 'function block type'];
        // }
        const upperCaseStr = str.toUpperCase();
        if (timeTypes.includes(upperCaseStr)) {
            return [true, upperCaseStr];
        } else {
            return [false, 'unmatched time type'];
        }
    }
    checkIfWhitespace(ifStatement: If_statement | undefined, accept: ValidationAcceptor): void {
        if (ifStatement) {
            const text = (AstUtils.getDocument(ifStatement).parseResult.value.$cstNode as RootCstNode).fullText;
            const thenKeyword = GrammarUtils.findNodeForKeyword(ifStatement.$cstNode, 'THEN');
            if (thenKeyword) {
                const index = thenKeyword.offset;
                const previousChar = text.charAt(index - 1);
                if (previousChar !== ' ') {
                    accept('warning', 'THEN前面需要有空格', {
                        node: ifStatement,
                        property: 'ifCondition',
                        index: 0
                    });
                }
            }
        }
    }

    checkWhitespace(ifStatement: If_statement | undefined, accept: ValidationAcceptor): void {
        if (ifStatement) {
            const text = (AstUtils.getDocument(ifStatement).parseResult.value.$cstNode as RootCstNode).fullText;
            const thenKeywordArr = GrammarUtils.findNodesForKeyword(ifStatement.$cstNode, 'THEN');
            for (let i = 0; i < thenKeywordArr.length; i++) {
                if (i === 0) {
                    continue;
                }
                let thenKeyword = thenKeywordArr[i];
                const index = thenKeyword.offset;
                const previousChar = text.charAt(index - 1);
                if (previousChar !== ' ') {
                    accept('warning', `THEN前面需要有空格`, {
                        node: ifStatement,
                        property: 'elsifConditions',
                        index: i - 1
                    });
                }
            }
        }
    }
}
