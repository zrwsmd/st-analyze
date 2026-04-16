import type { IToken } from 'chevrotain';
import { AstNode, AstNodeDescription, AstUtils, GrammarAST, GrammarUtils, LangiumDocument, MaybePromise, TextDocument } from 'langium';
import {
    CompletionAcceptor,
    CompletionContext,
    CompletionProviderOptions,
    CompletionValueItem,
    DefaultCompletionProvider,
    LangiumServices,
    NextFeature,
    findFirstFeatures,
    findNextFeatures
} from 'langium/lsp';
import { CompletionItemKind, CompletionList, CompletionParams, Position, Range } from 'vscode-languageserver-protocol';
import {
    NamedElement,
    Native_Type_Name,
    Struct_Var_Decl_Init,
    VarDeclarationInit,
    VarInput,
    VarLocal,
    VarOutput,
    isAssignPrefix,
    isExpression,
    isFunctionBlock,
    isMemberCall,
    isStruct_Var_Decl_Init,
    isStructsList,
    isVarDeclarationInit,
    isVariableExpression
} from './generated/ast.js';
import {
    VarDeclaration,
    allFunctionStr,
    basicDataType,
    handleNoAcceptNativeTypeName,
    matchAllCacheStrings,
    matchFunctionStrings,
    matchNoBasicAllCacheStrings,
    refOuterFunctionBlockStr
} from './util/tool.js';
import { getRelatedElementAndLangiumDoc } from './util/transform.js';
interface InterpretationContext {
    tokens: IToken[];
    stacks: NextFeature[][];
}

export class CacheCompletionProvider extends DefaultCompletionProvider {
    constructor(public services: LangiumServices) {
        super(services);
    }

    override getCompletion(document: LangiumDocument<AstNode>, params: CompletionParams): Promise<CompletionList | undefined> {
        return super.getCompletion(document, params);
    }

    readonly completionOptions: CompletionProviderOptions = {
        triggerCharacters: ['.']
        //allCommitCharacters: ['.']
    };

    hintFunctionBlockDecl(declVarArr: VarInput[] | VarOutput[] | VarLocal[], acceptor: CompletionAcceptor, context: CompletionContext) {
        declVarArr.forEach(decl => {
            let itemArr = decl.items;
            itemArr.forEach(item => {
                let {
                    expectedType,
                    variable,
                    typeName,
                    nextVariables
                }: {
                    expectedType: string | undefined;
                    variable: string;
                    typeName: Native_Type_Name;
                    nextVariables: string[];
                } = this.getDataType(item);
                this.handleStructOrFunctionBlockVarDecl(expectedType, acceptor, context, variable, typeName);
                nextVariables.forEach(nextVariable => {
                    this.handleStructOrFunctionBlockVarDecl(expectedType, acceptor, context, nextVariable, typeName);
                });
            });
        });
    }

    private getVarDeclDetail(varDecl: VarDeclaration): string {
        let varGlobalType = varDecl.varGlobalType;
        if (varGlobalType === 'VAR_INPUT' || varGlobalType === 'VAR_OUTPUT') {
            let type = varGlobalType === 'VAR_INPUT' ? '输入参数' : '输出参数';
            return `${type}, 类型是${varDecl.varType}`;
        }
        return `${varDecl.varType}`;
    }

    private hintCacheVarDecls(
        cacheVarDecls: VarDeclaration[] | undefined,
        acceptor: CompletionAcceptor,
        context: CompletionContext,
        sortText = '1'
    ) {
        cacheVarDecls?.forEach(varDecl => {
            acceptor(context, {
                label: varDecl.varName,
                kind: CompletionItemKind.Field,
                detail: this.getVarDeclDetail(varDecl),
                sortText
            });
        });
    }

    override createReferenceCompletionItem(nodeDescription: AstNodeDescription): CompletionValueItem {
        let detail: string | undefined = '';
        if (nodeDescription) {
            if (nodeDescription.node) {
                if ('Struct_Var_Decl_Init' === nodeDescription.type) {
                    let node = nodeDescription.node as Struct_Var_Decl_Init;
                    let typeName = node.typeName;
                    let expectedType: string | undefined = '';
                    detail = basicDataType(expectedType, typeName);
                    if (!detail) {
                        //引用类型
                        detail = handleNoAcceptNativeTypeName(typeName, expectedType);
                    }
                    if (!detail) {
                        if ('Array_liters' === typeName.$type) {
                            //字段是array类型 param1: ARRAY [9..10] OF INT:=[1,2,3,4,5];
                            detail = 'Array';
                        }
                    }
                }
                if (nodeDescription.node.$type === 'VarDeclaration') {
                    let varDecl = nodeDescription.node as VarDeclaration;
                    return {
                        nodeDescription,
                        kind: CompletionItemKind.Field,
                        detail: this.getVarDeclDetail(varDecl),
                        sortText: '0'
                    };
                } else if (nodeDescription.node.$type === 'VarDeclarationInit') {
                    let node = nodeDescription.node as VarDeclarationInit;
                    let typeName = node.typeName;
                    let expectedType: string | undefined = '';
                    expectedType = basicDataType(expectedType, typeName);
                    if (expectedType !== '' && expectedType) {
                        let result = getRelatedElementAndLangiumDoc(expectedType);
                        if (result) {
                            let [cacheElement, langiumDocument] = result;
                            let elementType = cacheElement?.elementType;
                            if (elementType === 'functionBlock' || elementType === 'struct') {
                                let varDecls = cacheElement?.varDecls;
                                varDecls?.forEach(varDecl => {
                                    return {
                                        nodeDescription,
                                        kind: CompletionItemKind.Field,
                                        detail: this.getVarDeclDetail(varDecl),
                                        sortText: '0'
                                    };
                                });
                            }
                        }
                    }
                }
            }
        }
        return {
            nodeDescription,
            kind: CompletionItemKind.Reference,
            detail: detail,
            sortText: '0'
        };
    }

    private getRangeText(context: CompletionContext) {
        let position = context.position;
        let startPosition = Position.create(position.line, 0);
        let range: Range = {
            start: startPosition,
            end: context.position
        };
        let textDocument = context.textDocument;
        let text = textDocument.getText(range);
        return text;
    }

    override completionForKeyword(
        context: CompletionContext,
        keyword: GrammarAST.Keyword,
        acceptor: CompletionAcceptor
    ): MaybePromise<void> {
        try {
            let node = context.node;
            // if (isNative_Type_Name(node)) {
            //   let typeName = node as Native_Type_Name;
            //   let identifier = typeName.Identifier;
            //   let cache_type_name = typeName.Cache_type_name;
            //   if (identifier) {
            //     //不完整的，比如CT
            //     let refText = identifier.$refText;
            //     this.getCacheHint(refText, acceptor, context);
            //   } else if (cache_type_name) {
            //     //完整的输入，比如CTU，后面的自动补全出来
            //     this.getCacheHint(cache_type_name, acceptor, context);
            //   }
            // }
            if (isAssignPrefix(node)) {
                let ref = node.varEnchanceDecl.ref;
                let refText = node.varEnchanceDecl.$refText;
                if (isVarDeclarationInit(ref)) {
                    let typeName = ref.typeName;
                    let expectedType: string | undefined = '';
                    expectedType = basicDataType(expectedType, typeName);
                    if (expectedType !== '' && expectedType) {
                        let result = getRelatedElementAndLangiumDoc(expectedType);
                        if (result) {
                            let [cacheElement, langiumDocument] = result;
                            let elementType = cacheElement?.elementType;
                            if (elementType === 'functionBlock' || elementType === 'struct') {
                                this.hintCacheVarDecls(cacheElement?.varDecls, acceptor, context);
                            }
                        }
                    } else {
                        //return super.completionForKeyword(context, keyword, acceptor);
                        let identifier = typeName.Identifier;
                        if (identifier) {
                            let ref = identifier.ref;
                            if (isStructsList(ref)) {
                                let items = ref.items;
                                items.forEach(item => {
                                    let {
                                        expectedType,
                                        variable,
                                        typeName,
                                        nextVariables
                                    }: {
                                        expectedType: string | undefined;
                                        variable: string;
                                        typeName: Native_Type_Name;
                                        nextVariables: string[];
                                    } = this.getDataType(item);
                                    this.handleStructOrFunctionBlockVarDecl(expectedType, acceptor, context, variable, typeName);
                                    nextVariables.forEach(nextVariable => {
                                        this.handleStructOrFunctionBlockVarDecl(expectedType, acceptor, context, nextVariable, typeName);
                                    });
                                });
                            } else if (isFunctionBlock(ref)) {
                                let inputs = ref.varInputs;
                                let outputs = ref.varOutputs;
                                let locals = ref.varLocals;
                                this.hintFunctionBlockDecl(inputs, acceptor, context);
                                this.hintFunctionBlockDecl(outputs, acceptor, context);
                                this.hintFunctionBlockDecl(locals, acceptor, context);
                            }
                        }
                    }
                } else {
                    //输入CT,再输入U的时候也会提示
                    let matchArr = matchNoBasicAllCacheStrings(refText);
                    matchArr.forEach(cacheName => {
                        let result = getRelatedElementAndLangiumDoc(cacheName);
                        if (result) {
                            let [cacheElement, langiumDocument] = result;
                            acceptor(context, {
                                label: cacheElement?.elementName,
                                kind: CompletionItemKind.Reference,
                                detail: cacheElement?.usage,
                                sortText: '1'
                            });
                        }
                    });
                }
            }
            //  else if (isMemberCall(node)) {
            //   let content = node.element?.$refText;
            //   let prior = node.previous?.prior;
            //   if (isVariableExpression(prior)) {
            //     let ref = prior.variable.ref;
            //     if (isVarDeclarationInit(ref)) {
            //       let typeName = ref.typeName;
            //       let expectedType: string | undefined = "";
            //       expectedType = basicDataType(expectedType, typeName);
            //       if (expectedType !== "" && expectedType) {
            //         let result = getRelatedElementAndLangiumDoc(expectedType);
            //         if (result) {
            //           let [cacheElement, langiumDocument] = result;
            //           let elementType = cacheElement?.elementType;
            //           if (elementType === "functionBlock") {
            //             let varDecls = cacheElement?.varDecls;
            //             varDecls?.forEach((varDecl) => {
            //               acceptor(context, {
            //                 label: varDecl.varName,
            //                 kind: CompletionItemKind.Field,
            //                 detail: "qwer" + varDecl?.varType,
            //                 sortText: "1",
            //               });
            //             });
            //           }
            //         }
            //       }
            //     }
            //   }
            // }
            else {
                let refText = this.getRangeText(context);
                refText = refText.trim();
                //形如t1:CTD_
                let index = refText.indexOf(':');
                let content = refText.substring(index + 1);
                content = content.trim();
                let matchArr = matchAllCacheStrings(content);
                matchArr.forEach(match => {
                    if (refOuterFunctionBlockStr.includes(match) || allFunctionStr.includes(match)) {
                        let result = getRelatedElementAndLangiumDoc(match);
                        if (result) {
                            let [cacheElement, langiumDocument] = result;
                            acceptor(context, {
                                label: match,
                                kind: CompletionItemKind.Reference,
                                detail: cacheElement?.elementType,
                                sortText: '1'
                            });
                        }
                    } else {
                        acceptor(context, {
                            label: match,
                            kind: CompletionItemKind.Keyword,
                            detail: 'Keyword',
                            sortText: '1'
                        });
                    }
                });
            }
            // return super.completionForKeyword(context, keyword, acceptor);
        } catch (error) {}
    }

    private handleStructOrFunctionBlockVarDecl(
        expectedType: string | undefined,
        acceptor: CompletionAcceptor,
        context: CompletionContext,
        variable: string,
        typeName: Native_Type_Name
    ) {
        if (expectedType !== '' && expectedType) {
            acceptor(context, {
                label: variable,
                kind: CompletionItemKind.Reference,
                detail: expectedType,
                sortText: '1'
            });
        } else {
            let identifier = typeName.Identifier;
            if (identifier) {
                acceptor(context, {
                    label: variable,
                    kind: CompletionItemKind.Reference,
                    detail: identifier.$refText,
                    sortText: '1'
                });
            }
        }
    }

    protected override completionForCrossReference(
        context: CompletionContext,
        next: NextFeature<GrammarAST.CrossReference>,
        acceptor: CompletionAcceptor
    ): MaybePromise<void> {
        let node = context.node;
        if (isVariableExpression(node)) {
            let refText = node.variable.$refText;
            let matchArr = matchFunctionStrings(refText);
            matchArr.forEach(cacheName => {
                let result = getRelatedElementAndLangiumDoc(cacheName);
                if (result) {
                    let [cacheElement, langiumDocument] = result;
                    acceptor(context, {
                        label: cacheElement?.elementName,
                        kind: CompletionItemKind.Reference,
                        detail: cacheElement?.usage,
                        sortText: '1'
                    });
                }
            });
        } else if (isMemberCall(node)) {
            /**
             * 校验比如链式调用，最后一个是基础类型，再.就不应该有提示了,e.g china.province.city.cityId
             */
            let previous = node.previous;
            if (isMemberCall(previous)) {
                //isMemberCall(previous) china.province.city
                let element = previous.element;
                let ref = element?.ref;
                if (isStruct_Var_Decl_Init(ref) || isVarDeclarationInit(ref)) {
                    let typeName = ref.typeName;
                    let expectedType: string | undefined = '';
                    expectedType = basicDataType(expectedType, typeName);
                    if (expectedType) {
                        return;
                    } else {
                        return super.completionForCrossReference(context, next, acceptor);
                    }
                }
            } else if (isExpression(previous)) {
                //isExpression(previous) china.
                // let prior = previous.prior;
                // if (isVariableExpression(prior)) {
                //     let ref = prior.variable.ref;
                //     if (isStruct_Var_Decl_Init(ref) || isVarDeclarationInit(ref)) {
                //         let typeName = ref.typeName;
                //         let expectedType: string | undefined = '';
                //         expectedType = basicDataType(expectedType, typeName);
                //         if (expectedType) {
                //             //普通类型不能自动`.`了
                //             return;
                //         } else {
                //             return super.completionForCrossReference(context, next, acceptor);
                //         }
                //     }
                // }
                return super.completionForCrossReference(context, next, acceptor);
            }
        } else {
            return super.completionForCrossReference(context, next, acceptor);
        }
    }

    protected override findFeaturesAt(document: TextDocument, offset: number): NextFeature[] {
        const text = document.getText({
            start: Position.create(0, 0),
            end: document.positionAt(offset)
        });
        const parserResult = this.completionParser.parse(text);
        const tokens = parserResult.tokens;
        // If the parser didn't parse any tokens, return the next features of the entry rule
        if (parserResult.tokenIndex === 0) {
            const parserRule = GrammarUtils.getEntryRule(this.grammar)!;
            const firstFeatures = findFirstFeatures({
                feature: parserRule.definition,
                type: GrammarUtils.getExplicitRuleType(parserRule)
            });
            if (tokens.length > 0) {
                // We have to skip the first token
                // The interpreter will only look at the next features, which requires every token after the first
                tokens.shift();
                return findNextFeatures(
                    firstFeatures.map(e => [e]),
                    tokens
                );
            } else {
                return firstFeatures;
            }
        }
        const leftoverTokens = [...tokens].splice(parserResult.tokenIndex);
        const features = this.findLocalNextFeatures([parserResult.elementStack.map(feature => ({ feature }))], leftoverTokens);
        return features;
    }

    findLocalNextFeatures(featureStack: NextFeature[][], unparsedTokens: IToken[]): NextFeature[] {
        const context: InterpretationContext = {
            stacks: featureStack,
            tokens: unparsedTokens
        };
        // interpretTokens(context);
        // Reset the container property
        context.stacks.flat().forEach(feature => {
            feature.property = undefined;
        });
        const nextStacks = this.findNextFeatureStacks(context.stacks);
        // We only need the last element of each stack
        return nextStacks.map(e => e[e.length - 1]);
    }

    findNextFeatureStacks(stacks: NextFeature[][], token?: IToken): NextFeature[][] {
        const newStacks: NextFeature[][] = [];
        for (const stack of stacks) {
            newStacks.push(...this.interpretStackToken(stack, token));
        }
        return newStacks;
    }

    interpretStackToken(stack: NextFeature[], token?: IToken): NextFeature[][] {
        const cardinalities = new Map<GrammarAST.AbstractElement, GrammarUtils.Cardinality>();
        const plus = new Set<GrammarAST.AbstractElement>(stack.map(e => e.feature).filter(this.isPlusFeature));
        const newStacks: NextFeature[][] = [];
        while (stack.length > 0) {
            const top = stack.pop()!;
            const allNextFeatures = this.findNextFeaturesInternal({
                next: top,
                cardinalities,
                plus,
                visited: new Set()
            }).filter(next => (token ? this.featureMatches(next.feature, token) : true));
            for (const nextFeature of allNextFeatures) {
                newStacks.push([...stack, nextFeature]);
            }
            if (
                !allNextFeatures.every(
                    e =>
                        GrammarUtils.isOptionalCardinality(e.feature.cardinality, e.feature) ||
                        GrammarUtils.isOptionalCardinality(cardinalities.get(e.feature))
                )
            ) {
                break;
            }
        }
        return newStacks;
    }

    isPlusFeature(feature: GrammarAST.AbstractElement): boolean {
        if (feature.cardinality === '+') {
            return true;
        }
        const assignment = AstUtils.getContainerOfType(feature, GrammarAST.isAssignment);
        if (assignment && assignment.cardinality === '+') {
            return true;
        }
        return false;
    }

    findNextFeaturesInternal(options: {
        next: NextFeature;
        cardinalities: Map<GrammarAST.AbstractElement, GrammarUtils.Cardinality>;
        visited: Set<GrammarAST.AbstractElement>;
        plus: Set<GrammarAST.AbstractElement>;
    }): NextFeature[] {
        const { next, cardinalities, visited, plus } = options;
        const features: NextFeature[] = [];
        const feature = next.feature;
        if (visited.has(feature)) {
            return [];
        } else {
            visited.add(feature);
        }
        let parent: GrammarAST.Group | undefined;
        let item = feature;
        while (item.$container) {
            if (GrammarAST.isGroup(item.$container)) {
                parent = item.$container;
                break;
            } else if (GrammarAST.isAbstractElement(item.$container)) {
                item = item.$container;
            } else {
                break;
            }
        }
        // First try to iterate the same element again
        if (GrammarUtils.isArrayCardinality(item.cardinality)) {
            const repeatingFeatures = this.findFirstFeaturesInternal({
                next: {
                    feature: item,
                    type: next.type
                },
                cardinalities,
                visited,
                plus
            });
            for (const repeatingFeature of repeatingFeatures) {
                plus.add(repeatingFeature.feature);
            }
            features.push(...repeatingFeatures);
        }
        if (parent) {
            const ownIndex = parent.elements.indexOf(item);
            // Find next elements of the same group
            if (ownIndex !== undefined && ownIndex < parent.elements.length - 1) {
                features.push(
                    ...this.findNextFeaturesInGroup(
                        {
                            feature: parent,
                            type: next.type
                        },
                        ownIndex + 1,
                        cardinalities,
                        visited,
                        plus
                    )
                );
            }
            // Try to find the next elements of the parent
            // Only do this if every following element is either optional or has been parsed as +
            if (
                features.every(
                    e =>
                        GrammarUtils.isOptionalCardinality(e.feature.cardinality, e.feature) ||
                        GrammarUtils.isOptionalCardinality(cardinalities.get(e.feature)) ||
                        plus.has(e.feature)
                )
            ) {
                features.push(
                    ...this.findNextFeaturesInternal({
                        next: {
                            feature: parent,
                            type: next.type
                        },
                        cardinalities,
                        visited,
                        plus
                    })
                );
            }
        }
        return features;
    }
    featureMatches(feature: GrammarAST.AbstractElement, token: IToken): boolean {
        if (GrammarAST.isKeyword(feature)) {
            const content = feature.value;
            return content === token.image;
        } else if (GrammarAST.isRuleCall(feature)) {
            return this.ruleMatches(feature.rule.ref, token);
        } else if (GrammarAST.isCrossReference(feature)) {
            const crossRefTerminal = GrammarUtils.getCrossReferenceTerminal(feature);
            if (crossRefTerminal) {
                return this.featureMatches(crossRefTerminal, token);
            }
        }
        return false;
    }

    findFirstFeaturesInternal(options: {
        next: NextFeature;
        cardinalities: Map<GrammarAST.AbstractElement, GrammarUtils.Cardinality>;
        visited: Set<GrammarAST.AbstractElement>;
        plus: Set<GrammarAST.AbstractElement>;
    }): NextFeature[] {
        const { next, cardinalities, visited, plus } = options;
        if (next === undefined) {
            return [];
        }
        const { feature, type } = next;
        if (GrammarAST.isGroup(feature)) {
            if (visited.has(feature)) {
                return [];
            } else {
                visited.add(feature);
            }
        }
        if (GrammarAST.isGroup(feature)) {
            return this.findNextFeaturesInGroup(next as NextFeature<GrammarAST.Group>, 0, cardinalities, visited, plus).map(e =>
                this.modifyCardinality(e, feature.cardinality, cardinalities)
            );
        } else if (GrammarAST.isAlternatives(feature) || GrammarAST.isUnorderedGroup(feature)) {
            return feature.elements
                .flatMap(e =>
                    this.findFirstFeaturesInternal({
                        next: {
                            feature: e,
                            type,
                            property: next.property
                        },
                        cardinalities,
                        visited,
                        plus
                    })
                )
                .map(e => this.modifyCardinality(e, feature.cardinality, cardinalities));
        } else if (GrammarAST.isAssignment(feature)) {
            const assignmentNext = {
                feature: feature.terminal,
                type,
                property: next.property ?? feature.feature
            };
            return this.findFirstFeaturesInternal({
                next: assignmentNext,
                cardinalities,
                visited,
                plus
            }).map(e => this.modifyCardinality(e, feature.cardinality, cardinalities));
        } else if (GrammarAST.isAction(feature)) {
            return this.findNextFeaturesInternal({
                next: {
                    feature,
                    type: GrammarUtils.getTypeName(feature),
                    property: next.property ?? feature.feature
                },
                cardinalities,
                visited,
                plus
            });
        } else if (GrammarAST.isRuleCall(feature) && GrammarAST.isParserRule(feature.rule.ref)) {
            const rule = feature.rule.ref;
            const ruleCallNext = {
                feature: rule.definition,
                type: rule.fragment || rule.dataType ? undefined : GrammarUtils.getExplicitRuleType(rule) ?? rule.name,
                property: next.property
            };
            return this.findFirstFeaturesInternal({
                next: ruleCallNext,
                cardinalities,
                visited,
                plus
            }).map(e => this.modifyCardinality(e, feature.cardinality, cardinalities));
        } else {
            return [next];
        }
    }

    findNextFeaturesInGroup(
        next: NextFeature<GrammarAST.Group>,
        index: number,
        cardinalities: Map<GrammarAST.AbstractElement, GrammarUtils.Cardinality>,
        visited: Set<GrammarAST.AbstractElement>,
        plus: Set<GrammarAST.AbstractElement>
    ): NextFeature[] {
        const features: NextFeature[] = [];
        let firstFeature: NextFeature;
        while (index < next.feature.elements.length) {
            const feature = next.feature.elements[index++];
            firstFeature = {
                feature,
                type: next.type
            };
            features.push(
                ...this.findFirstFeaturesInternal({
                    next: firstFeature,
                    cardinalities,
                    visited,
                    plus
                })
            );
            if (
                !GrammarUtils.isOptionalCardinality(
                    firstFeature.feature.cardinality ?? cardinalities.get(firstFeature.feature),
                    firstFeature.feature
                )
            ) {
                break;
            }
        }
        return features;
    }

    ruleMatches(rule: GrammarAST.AbstractRule | undefined, token: IToken): boolean {
        if (GrammarAST.isParserRule(rule)) {
            const ruleFeatures = findFirstFeatures(rule.definition);
            return ruleFeatures.some(e => this.featureMatches(e.feature, token));
        } else if (GrammarAST.isTerminalRule(rule)) {
            // We have to take keywords into account
            // e.g. most keywords are valid IDs as well
            // Only return 'true' if this terminal does not match a keyword. TODO
            return GrammarUtils.terminalRegex(rule).test(token.image);
        } else {
            return false;
        }
    }

    modifyCardinality(
        next: NextFeature,
        cardinality: GrammarUtils.Cardinality,
        cardinalities: Map<GrammarAST.AbstractElement, GrammarUtils.Cardinality>
    ): NextFeature {
        cardinalities.set(next.feature, cardinality);
        return next;
    }

    getDataType(item: NamedElement) {
        let variable = item.variables;
        let nextVariables = item.nextVariables;
        let typeName = item.typeName;
        let expectedType: string | undefined = '';
        expectedType = basicDataType(expectedType, typeName);
        return { expectedType, variable, typeName, nextVariables };
    }

    // getDataType(item: NamedElement) {
    //     let variable = item.variables;
    //     let nextVariables = item.nextVariables;
    //     let typeName = item.typeName;
    //     let expectedType: string | undefined = '';
    //     expectedType = basicDataType(expectedType, typeName);
    //     return { expectedType, variable, typeName, nextVariables };
    // }
}
