import { AstNode, MaybePromise } from "langium";
import { AbstractSignatureHelpProvider } from "langium/lsp";
import {
    CancellationToken,
    MarkupContent,
    MarkupKind,
    SignatureHelp,
    SignatureHelpOptions,
    SignatureInformation,
} from "vscode-languageserver";
import {
    isFunctionExpression,
    isFunction_invoke_or_assign,
    isFunctionBlock,
    isInvoke_subrule,
    isStFunction,
    isVarDeclarationInit,
    VarDeclarationInit,
    VarInput,
    VarOutput,
} from "./generated/ast.js";
import { basicDataType, FunctionElement, VarDeclaration } from "./util/tool.js";
import { getRelatedElementAndLangiumDoc } from "./util/transform.js";

export class CacheSignatureHelpProvider extends AbstractSignatureHelpProvider {
    protected getSignatureFromElement(
        element: AstNode,
        cancelToken: CancellationToken
    ): MaybePromise<SignatureHelp | undefined> {
        if (isInvoke_subrule(element)) {
            let container = element.$container;
            if (isFunction_invoke_or_assign(container)) {
                let assignPrefix = container.assignPrefix;
                let cacheName = assignPrefix?.varEnchanceDecl.$refText;
                let refNode = assignPrefix?.varEnchanceDecl.ref;
                if (refNode) {
                    if (isStFunction(refNode)) {
                        let varInputs = refNode.varInputs;
                        let varOutputs = refNode.varOutputs;
                        let inMax = findMaxVariablesLength(varInputs);
                        let outMax = findMaxVariablesLength(varOutputs);
                        let max = Math.max(inMax, outMax);
                        let functionName = refNode.name;
                        let returnTypeName = refNode.variable_type;
                        let returnType: string | undefined = "";
                        returnType = basicDataType(returnType, returnTypeName);
                        if (returnType === undefined) {
                            returnType = returnTypeName.Identifier?.$refText;
                        }
                        let signatureInformationArr: SignatureInformation[] = [];
                        let signatureInformationLabel = "";
                        varInputs.forEach((varInput) => {
                            let items = varInput.items;
                            for (let i = 0; i < items.length; i++) {
                                const item = items[i];
                                let nextVariableArr = item.nextVariables;
                                let padding = getPadding(item.variables, max);
                                let expectType: string | undefined = "";
                                let typeName = item.typeName;
                                expectType = basicDataType(expectType, typeName);
                                signatureInformationLabel += `\nVAR_INPUT${" ".repeat(8)}${
                                    item.variables
                                }${" ".repeat(padding)}${expectType}`;
                                if (nextVariableArr.length > 0) {
                                    nextVariableArr.forEach((nextVariable) => {
                                        let nextVarPadding = getPadding(nextVariable, max);
                                        signatureInformationLabel += `\nVAR_INPUT${" ".repeat(
                                            8
                                        )}${nextVariable}${" ".repeat(
                                            nextVarPadding
                                        )}${expectType}`;
                                    });
                                }
                            }
                        });
                        varOutputs.forEach((varOutput) => {
                            let items = varOutput.items;
                            for (let i = 0; i < items.length; i++) {
                                const item = items[i];
                                let nextVariableArr = item.nextVariables;
                                let padding = getPadding(item.variables, max);
                                let expectType: string | undefined = "";
                                let typeName = item.typeName;
                                expectType = basicDataType(expectType, typeName);
                                signatureInformationLabel += `\nVAR_OUTPUT${" ".repeat(7)}${
                                    item.variables
                                }${" ".repeat(padding)}${expectType}`;
                                if (nextVariableArr.length > 0) {
                                    nextVariableArr.forEach((nextVariable) => {
                                        let nextVarPadding = getPadding(nextVariable, max);
                                        signatureInformationLabel += `\nVAR_OUTPUT${" ".repeat(
                                            7
                                        )}${nextVariable}${" ".repeat(
                                            nextVarPadding
                                        )}${expectType}`;
                                    });
                                }
                            }
                        });
                        /**
                         * vscode默认的字体宽度不同(启动插件就不同,虽然平时测试貌似字体宽度相同),
                         * 导致无法设置空格规则,所需要写到markdown块里面，使得宽度相同
                         */
                        let markdown: MarkupContent = {
                            kind: MarkupKind.Markdown,
                            value: ["```typescript", signatureInformationLabel, "```"].join(
                                "\n"
                            ),
                        };
                        let signatureInformation: SignatureInformation = {
                            label: `FUNCTION ${functionName}:${returnType}\n`,
                            documentation: markdown,
                        };
                        signatureInformationArr.push(signatureInformation);
                        let signatureHelp: SignatureHelp = {
                            signatures: signatureInformationArr,
                        };
                        return signatureHelp;
                    } else if (isVarDeclarationInit(refNode)) {
                        let typeName = refNode.typeName;
                        let identifier = typeName.Identifier;
                        if (identifier) {
                            let refFbNode = identifier.ref;
                            if (isFunctionBlock(refFbNode)) {
                                let varInputs = refFbNode.varInputs;
                                let varOutputs = refFbNode.varOutputs;
                                let signatureInformationArr: SignatureInformation[] = [];
                                let signatureInformationLabel = "";
                                let inMax = findMaxVariablesLength(varInputs);
                                let outMax = findMaxVariablesLength(varOutputs);
                                let max = Math.max(inMax, outMax);
                                varInputs.forEach((varInput) => {
                                    let items = varInput.items;
                                    for (let i = 0; i < items.length; i++) {
                                        const item = items[i];
                                        let nextVariableArr = item.nextVariables;
                                        let padding = getPadding(item.variables, max);
                                        let expectType: string | undefined = "";
                                        let typeName = item.typeName;
                                        expectType = basicDataType(expectType, typeName);
                                        signatureInformationLabel += `\nVAR_INPUT${" ".repeat(8)}${
                                            item.variables
                                        }${" ".repeat(padding)}${expectType}`;
                                        if (nextVariableArr.length > 0) {
                                            nextVariableArr.forEach((nextVariable) => {
                                                let nextVarPadding = getPadding(nextVariable, max);
                                                signatureInformationLabel += `\nVAR_INPUT${" ".repeat(
                                                    8
                                                )}${nextVariable}${" ".repeat(
                                                    nextVarPadding
                                                )}${expectType}`;
                                            });
                                        }
                                    }
                                });
                                varOutputs.forEach((varOutput) => {
                                    let items = varOutput.items;
                                    for (let i = 0; i < items.length; i++) {
                                        const item = items[i];
                                        let nextVariableArr = item.nextVariables;
                                        let padding = getPadding(item.variables, max);
                                        let expectType: string | undefined = "";
                                        let typeName = item.typeName;
                                        expectType = basicDataType(expectType, typeName);
                                        signatureInformationLabel += `\nVAR_OUTPUT${" ".repeat(7)}${
                                            item.variables
                                        }${" ".repeat(padding)}${expectType}`;
                                        if (nextVariableArr.length > 0) {
                                            nextVariableArr.forEach((nextVariable) => {
                                                let nextVarPadding = getPadding(nextVariable, max);
                                                signatureInformationLabel += `\nVAR_OUTPUT${" ".repeat(
                                                    7
                                                )}${nextVariable}${" ".repeat(
                                                    nextVarPadding
                                                )}${expectType}`;
                                            });
                                        }
                                    }
                                });
                                /**
                                 * vscode默认的字体宽度不同(启动插件就不同,虽然平时测试貌似字体宽度相同),
                                 * 导致无法设置空格规则,所需要写到markdown块里面，使得宽度相同
                                 */
                                let markdown: MarkupContent = {
                                    kind: MarkupKind.Markdown,
                                    value: [
                                        "```typescript",
                                        signatureInformationLabel,
                                        "```",
                                    ].join("\n"),
                                };
                                let signatureInformation: SignatureInformation = {
                                    label: `FUNCTION_BLOCK ${refFbNode.name}\n`,
                                    documentation: markdown,
                                };
                                signatureInformationArr.push(signatureInformation);
                                let signatureHelp: SignatureHelp = {
                                    signatures: signatureInformationArr,
                                };
                                return signatureHelp;
                            }
                        }
                        let cacheSignatureHelp = this.getCacheSignatureHelp(
                            this.getVarDeclarationCacheName(refNode)
                        );
                        if (cacheSignatureHelp) {
                            return cacheSignatureHelp;
                        }
                    }
                }
                let cacheSignatureHelp = this.getCacheSignatureHelp(cacheName);
                if (cacheSignatureHelp) {
                    return cacheSignatureHelp;
                }
            } else if (isFunctionExpression(container)) {
                let refFunctionName = container.refFunctionName;
                let refNode = refFunctionName.refFunctionName?.ref;
                let cacheName = refFunctionName.refFunctionName?.$refText ?? refFunctionName.Cache_type_name;
                if (refNode) {
                    if (isStFunction(refNode)) {
                        let varInputs = refNode.varInputs;
                        let varOutputs = refNode.varOutputs;
                        let inMax = findMaxVariablesLength(varInputs);
                        let outMax = findMaxVariablesLength(varOutputs);
                        let max = Math.max(inMax, outMax);
                        let functionName = refNode.name;
                        let returnTypeName = refNode.variable_type;
                        let returnType: string | undefined = "";
                        returnType = basicDataType(returnType, returnTypeName);
                        if (returnType === undefined) {
                            returnType = returnTypeName.Identifier?.$refText;
                        }
                        let signatureInformationArr: SignatureInformation[] = [];
                        let signatureInformationLabel = "";
                        varInputs.forEach((varInput) => {
                            let items = varInput.items;
                            for (let i = 0; i < items.length; i++) {
                                const item = items[i];
                                let nextVariableArr = item.nextVariables;
                                let padding = getPadding(item.variables, max);
                                let expectType: string | undefined = "";
                                let typeName = item.typeName;
                                expectType = basicDataType(expectType, typeName);
                                signatureInformationLabel += `\nVAR_INPUT${" ".repeat(8)}${
                                    item.variables
                                }${" ".repeat(padding)}${expectType}`;
                                if (nextVariableArr.length > 0) {
                                    nextVariableArr.forEach((nextVariable) => {
                                        let nextVarPadding = getPadding(nextVariable, max);
                                        signatureInformationLabel += `\nVAR_INPUT${" ".repeat(
                                            8
                                        )}${nextVariable}${" ".repeat(
                                            nextVarPadding
                                        )}${expectType}`;
                                    });
                                }
                            }
                        });
                        varOutputs.forEach((varOutput) => {
                            let items = varOutput.items;
                            for (let i = 0; i < items.length; i++) {
                                const item = items[i];
                                let nextVariableArr = item.nextVariables;
                                let padding = getPadding(item.variables, max);
                                let expectType: string | undefined = "";
                                let typeName = item.typeName;
                                expectType = basicDataType(expectType, typeName);
                                signatureInformationLabel += `\nVAR_OUTPUT${" ".repeat(7)}${
                                    item.variables
                                }${" ".repeat(padding)}${expectType}`;
                                if (nextVariableArr.length > 0) {
                                    nextVariableArr.forEach((nextVariable) => {
                                        let nextVarPadding = getPadding(nextVariable, max);
                                        signatureInformationLabel += `\nVAR_OUTPUT${" ".repeat(
                                            7
                                        )}${nextVariable}${" ".repeat(
                                            nextVarPadding
                                        )}${expectType}`;
                                    });
                                }
                            }
                        });
                        let markdown: MarkupContent = {
                            kind: MarkupKind.Markdown,
                            value: ["```typescript", signatureInformationLabel, "```"].join(
                                "\n"
                            ),
                        };
                        let signatureInformation: SignatureInformation = {
                            label: `FUNCTION ${functionName}:${returnType}\n`,
                            documentation: markdown,
                        };
                        signatureInformationArr.push(signatureInformation);
                        let signatureHelp: SignatureHelp = {
                            signatures: signatureInformationArr,
                        };
                        return signatureHelp;
                    } else if (isVarDeclarationInit(refNode)) {
                        let typeName = refNode.typeName;
                        let identifier = typeName.Identifier;
                        if (identifier) {
                            let refFbNode = identifier.ref;
                            if (isFunctionBlock(refFbNode)) {
                                let varInputs = refFbNode.varInputs;
                                let varOutputs = refFbNode.varOutputs;
                                let signatureInformationArr: SignatureInformation[] = [];
                                let signatureInformationLabel = "";
                                let inMax = findMaxVariablesLength(varInputs);
                                let outMax = findMaxVariablesLength(varOutputs);
                                let max = Math.max(inMax, outMax);
                                varInputs.forEach((varInput) => {
                                    let items = varInput.items;
                                    for (let i = 0; i < items.length; i++) {
                                        const item = items[i];
                                        let nextVariableArr = item.nextVariables;
                                        let padding = getPadding(item.variables, max);
                                        let expectType: string | undefined = "";
                                        let typeName = item.typeName;
                                        expectType = basicDataType(expectType, typeName);
                                        signatureInformationLabel += `\nVAR_INPUT${" ".repeat(8)}${
                                            item.variables
                                        }${" ".repeat(padding)}${expectType}`;
                                        if (nextVariableArr.length > 0) {
                                            nextVariableArr.forEach((nextVariable) => {
                                                let nextVarPadding = getPadding(nextVariable, max);
                                                signatureInformationLabel += `\nVAR_INPUT${" ".repeat(
                                                    8
                                                )}${nextVariable}${" ".repeat(
                                                    nextVarPadding
                                                )}${expectType}`;
                                            });
                                        }
                                    }
                                });
                                varOutputs.forEach((varOutput) => {
                                    let items = varOutput.items;
                                    for (let i = 0; i < items.length; i++) {
                                        const item = items[i];
                                        let nextVariableArr = item.nextVariables;
                                        let padding = getPadding(item.variables, max);
                                        let expectType: string | undefined = "";
                                        let typeName = item.typeName;
                                        expectType = basicDataType(expectType, typeName);
                                        signatureInformationLabel += `\nVAR_OUTPUT${" ".repeat(7)}${
                                            item.variables
                                        }${" ".repeat(padding)}${expectType}`;
                                        if (nextVariableArr.length > 0) {
                                            nextVariableArr.forEach((nextVariable) => {
                                                let nextVarPadding = getPadding(nextVariable, max);
                                                signatureInformationLabel += `\nVAR_OUTPUT${" ".repeat(
                                                    7
                                                )}${nextVariable}${" ".repeat(
                                                    nextVarPadding
                                                )}${expectType}`;
                                            });
                                        }
                                    }
                                });
                                let markdown: MarkupContent = {
                                    kind: MarkupKind.Markdown,
                                    value: [
                                        "```typescript",
                                        signatureInformationLabel,
                                        "```",
                                    ].join("\n"),
                                };
                                let signatureInformation: SignatureInformation = {
                                    label: `FUNCTION_BLOCK ${refFbNode.name}\n`,
                                    documentation: markdown,
                                };
                                signatureInformationArr.push(signatureInformation);
                                let signatureHelp: SignatureHelp = {
                                    signatures: signatureInformationArr,
                                };
                                return signatureHelp;
                            }
                        }
                        let cacheSignatureHelp = this.getCacheSignatureHelp(
                            this.getVarDeclarationCacheName(refNode)
                        );
                        if (cacheSignatureHelp) {
                            return cacheSignatureHelp;
                        }
                    }
                }
                let cacheSignatureHelp = this.getCacheSignatureHelp(cacheName);
                if (cacheSignatureHelp) {
                    return cacheSignatureHelp;
                }
            }
        }
        return undefined;
    }

    private getVarDeclarationCacheName(
        refNode: VarDeclarationInit
    ): string | undefined {
        let typeName = refNode.typeName;
        if (typeName.Cache_type_name) {
            return typeName.Cache_type_name;
        }
        return typeName.Identifier?.$refText;
    }

    private getCacheSignatureHelp(
        cacheName: string | undefined
    ): SignatureHelp | undefined {
        if (!cacheName) {
            return undefined;
        }
        let result = getRelatedElementAndLangiumDoc(cacheName);
        if (result) {
            let [cacheElement] = result;
            let signatureInformationArr: SignatureInformation[] = [];
            if (cacheElement) {
                let signatureHelp = this.getSignatureInfo(
                    cacheElement,
                    signatureInformationArr,
                    "usage"
                );
                if (signatureHelp) {
                    return signatureHelp;
                }
                return this.getSignatureInfo(
                    cacheElement,
                    signatureInformationArr,
                    "comment"
                );
            }
        }
        return undefined;
    }

    override get signatureHelpOptions(): SignatureHelpOptions {
        return {
            triggerCharacters: ["(", ","],
            retriggerCharacters: [","],
        };
    }

    //将varDecls的输入输出转化为VAR_INPUT VAR_OUTUT的形式
    private getSignatureInfo(
        cacheElement: FunctionElement,
        signatureInformationArr: SignatureInformation[],
        isEmptyField: "comment" | "usage"
    ) {
        let field = cacheElement[isEmptyField];
        let transFormArr = parseSignalDeclaration(cacheElement.varDecls);
        let transSignatureInformation = "";
        let max = findSignalMaxVariablesLength(transFormArr);
        transFormArr.forEach((transform) => {
            let padding = getPadding(transform.variable, max);
            //VAR_INPUT VAR_OUTUT只差一个字符，VAR_INPUT基准的空格偏移量是8，所以另一个VAR_OUTUT是7
            let num = transform.varType === "VAR_INPUT" ? 8 : 7;
            transSignatureInformation += `\n${transform.varType}${" ".repeat(num)}${
                transform.variable
            }${" ".repeat(padding)} ${transform.type}`;
        });
        if (field) {
            let elementType =
                cacheElement.elementType === "functionBlock"
                    ? "FUNCTION_BLOCK"
                    : "FUNCTION";
            let desc =
                cacheElement.elementType === "functionBlock"
                    ? "功能块说明: "
                    : "函数说明: ";
            let markdown: MarkupContent = {
                kind: MarkupKind.Markdown,
                value: [
                    "```typescript",
                    `${desc}${cacheElement.comment}`,
                    transSignatureInformation,
                    "```",
                ].join("\n"),
            };
            let signatureInformation: SignatureInformation = {
                label: `${elementType} ${cacheElement.elementName}\n`,
                documentation: markdown,
            };
            signatureInformationArr.push(signatureInformation);
            let signatureHelp: SignatureHelp = {
                signatures: signatureInformationArr,
            };
            return signatureHelp;
        }

        return undefined;
    }
}

class Signal {
    constructor(
        public varType: string | undefined, //VAR_INPUT
        public variable: string, //aa
        public type: string //INT
    ) {}
}

function parseSignalDeclaration(varDecls: VarDeclaration[]): Signal[] {
    const signals: Signal[] = [];
    varDecls.forEach((decl) => {
        let globalType = decl.varGlobalType;
        let varName = decl.varName;
        let varType = decl.varType;
        const signal = new Signal(globalType, varName, varType);
        signals.push(signal);
    });
    return signals;
}

/**
 * VAR_INPUT
 equejoqnd:INT;
 bb:INT;
 mmmm:INT;
 brttfhaijmakljdfnajk:STRING;
 END_VAR
 VAR_OUTPUT
 kkkkk:INT;
 mmty:INT;
 qijdq:INT;
 oqkmcxa:INT;
 END_VAR
 1.遍历VAR_INPUT和VAR_OUTPUT找出变量名最长的那个，最后发现是brttfhaijmakljdfnajk
 2.加一个基准的偏移量8,相当于brttfhaijmakljdfnajk最后一个字母k
 到STRING的S的距离   VAR_INPUT        brttfhaijmakljdfnajk        STRING
 3.这个距离加上本身brttfhaijmakljdfnajk的长度20，一共是28，即brttfhaijmakljdfnajk的首字母b到STRING的s的距离
 4.其他变量名到变量类型的距离和这个一样，所以需要28减去其他变量的距离即可算出其他变量需要偏移多少个空格长度
 5.比如上面的equejoqnd变量，长度是9，所以需要19个空格，这个方法就返回19
 6.这样的话就是这样
 VAR_INPUT        equejoqnd                   INT

 VAR_INPUT        bb                          INT

 VAR_INPUT        mmmm                        INT

 VAR_INPUT        brttfhaijmakljdfnajk        STRING

 VAR_OUTPUT       kkkkk                       INT
 * @param name
 * @param max
 * @returns
 */
function getPadding(name: string, max: number): number {
    let base = 8;
    let currentVarLen = name.length;
    let total = max + base;
    return total - currentVarLen;
}

/**
 * 获取输入，输出变量名字最长的那个
 * @param varPuts
 * @returns
 * VAR_INPUT
 equejoqnd:INT;
 // Aegeyqhiuqeqyeehquehjiq:BOOL;
 bbbb:INT;
 mmmm:INT;
 brtt:STRING;
 END_VAR
 返回的就是Aegeyqhiuqeqyeehquehjiq这个的长度
 *
 */
function findMaxVariablesLength(varPuts: VarInput[] | VarOutput[]): number {
    let maxLen = 0;
    varPuts.forEach((varput) => {
        varput.items.forEach((item) => {
            let nextVariables = item.nextVariables;
            maxLen = Math.max(maxLen, item.variables.length);
            if (nextVariables.length > 0) {
                nextVariables.forEach((nextVariable) => {
                    maxLen = Math.max(maxLen, nextVariable.length);
                });
            }
        });
    });
    return maxLen;
}

function findSignalMaxVariablesLength(varPuts: Signal[]): number {
    let maxLen = 0;
    varPuts.forEach((varput) => {
        maxLen = Math.max(maxLen, varput.variable.length);
    });
    return maxLen;
}
