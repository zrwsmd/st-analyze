import { LangiumDocumentFactory, LangiumDocuments, TextDocument } from 'langium';
import Multimap from 'multimap';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as vscode from 'vscode';
import { TextDocument as LSTextDocument } from 'vscode-languageserver-textdocument';
import { shared } from '../../langium-server/main.js';
import {
    Alias,
    FunctionBlock,
    Program,
    St,
    StEnum,
    StFunction,
    Struct_Var_Decl_Init,
    StructsList,
    UnionsList,
    VarDeclarationInit,
    VarInput,
    VarLocal,
    VarOutput,
    isVarInput,
    isVarLocal,
    isVarOutput
} from '../../langium-server/src/generated/ast.js';
import {
    AliasElement,
    ComposeNode,
    EnumChild,
    EnumElement,
    EventType,
    FunctionElement,
    ParamChild,
    SingleElement,
    VarDeclaration,
    basicDataType,
    extractPathAfterPercent3A,
    handleNoAcceptNativeTypeName,
    removeBeforeColon
} from '../../langium-server/src/util/tool.js';

/**
 * [{
		"fileName": "D://xx/projectName/workspace/main2.st",
		"elements": [{
				"elementType": "program",
				"elementName": "PLC_PRG",
				"varDecls": [{
						"varName": "state",
						"varType": "INT"
					},
					{
						"varName": "tempConverter",
						"varType": "TemperatureConverter2",
						"refFile": "D://xx/projectName/workspace/functionblock2.st@TemperatureConverter2"
					}
				]
			}
		]

	},
	{
		"fileName": "D://xx/projectName/workspace/functionblock2.st",
		"elements": [{
			"elementType": "functionBlock",
			"elementName": "TemperatureConverter2",
			"varDecls": [{
				"varName": "state",
				"varType": "R_TRIG"
			}]
		}]

	}
]
 */

let allElements: ComposeNode[] = [];
// const _onResultChanged = new vscode.EventEmitter<any>();
// export const onResultChanged = _onResultChanged.event;
// let globalResult: ComposeNode[] = [];
export const rootPath = path.resolve(__dirname);
export const variablePath = path.join(rootPath, 'variable.json');
let currentType: EventType = 'basic';

// export const variablePath = 'D://st-analyze-20241024//src//plc//extension//src//variable.json';
export function registerShowStFilesCommand(context: vscode.ExtensionContext) {
    // let isOther = false;
    const langiumDocumentFactory = shared.workspace.LangiumDocumentFactory; // 假设shared已在其他地方定义
    let fileSuffix = '.st';
    // 注册命令
    const command = vscode.commands.registerCommand('exportAllDeclInfo', async () => {
        // console.log(currentType);
        if (currentType === 'basic') {
            let files = await loadInitializeAvaiableFile(fileSuffix);
            allElements = await handleBusiness(allElements, files, currentType, langiumDocumentFactory);
            // if (allElements !== undefined) {
            //     console.log('init', allElements);
            // }
            allElements = uniqueObjects(allElements, 'filePath', 'basic') ?? [];
            fs.writeFileSync(variablePath, JSON.stringify(allElements));
            return allElements;
        } else {
            allElements = uniqueObjects(allElements, 'filePath', currentType) ?? [];
            fs.writeFileSync(variablePath, JSON.stringify(allElements));
            //console.log(`after ${currentType}`, allElements);
            return allElements;
        }
    });

    // 重命名文件事件
    // const renameDisposable = vscode.workspace.onDidRenameFiles(async event => {
    //     const renamedStFiles = event.files.filter(file => file.oldUri.path.endsWith(fileSuffix) || file.newUri.path.endsWith(fileSuffix));
    //     if (renamedStFiles.length === 0) return;
    //     currentType = 'onRename';

    //     let refreshedFiles = await loadInitializeAvaiableFile(fileSuffix);
    //     const renamedFiles = renamedStFiles.map(file => ({
    //         oldUri: file.oldUri,
    //         newUri: file.newUri
    //     }));

    //     const result = await handleBusiness(allElements, refreshedFiles, currentType, langiumDocumentFactory, undefined, renamedFiles);
    //     if (result !== undefined) {
    //         // globalResult = result;
    //         fs.writeFileSync(variablePath, JSON.stringify(result));
    //     }
    // });

    const stFileWatcher = vscode.workspace.createFileSystemWatcher('**/*.st', false, false, false);

    stFileWatcher.onDidCreate(async uri => {
        //console.log('文件被创建:', uri.fsPath);
        currentType = 'onCreate';
        let incrementFiles = [uri];
        allElements = await handleBusiness(allElements, incrementFiles, currentType, langiumDocumentFactory);
        if (allElements !== undefined) {
            // globalResult = result;
            fs.writeFileSync(variablePath, JSON.stringify(allElements));
            vscode.commands.executeCommand('devUni.prjView.syncStVarsToLd');
        }
    });

    // 监听文件修改
    stFileWatcher.onDidChange(async uri => {
        //console.log('文件被修改:', uri.fsPath);
        currentType = 'onSave';
        let files = await loadInitializeAvaiableFile(fileSuffix);
        let doc = await vscode.workspace.openTextDocument(uri);
        allElements = await handleBusiness(allElements ?? [], files, currentType, langiumDocumentFactory, convertToLSTextDocument(doc));
        if (allElements !== undefined) {
            //console.log('save', allElements);
            fs.writeFileSync(variablePath, JSON.stringify(allElements));
            vscode.commands.executeCommand('devUni.prjView.syncStVarsToLd');
        }
    });

    // 监听文件删除
    stFileWatcher.onDidDelete(async uri => {
        //console.log('文件被删除:', uri.fsPath);
        currentType = 'onDelete';
        const deleteFileUri = uri.toString();
        //console.log('文件被删除前:', allElements);
        allElements = allElements.filter(item => item.filePath !== deleteFileUri);
        //console.log('文件被删除后:', allElements);
        if (allElements !== undefined) {
            fs.writeFileSync(variablePath, JSON.stringify(allElements));
            vscode.commands.executeCommand('devUni.prjView.syncStVarsToLd');
        }
    });

    // 将所有 disposable 都添加到上下文订阅中
    context.subscriptions.push(command);
}

//加载所以没有错误的st文件
export async function loadInitializeAvaiableFile(fileSuffix: string) {
    let allFiles = await vscode.workspace.findFiles(`**/*${fileSuffix}`);
    let files: vscode.Uri[] = [];
    for (const file of allFiles) {
        const document = await vscode.workspace.openTextDocument(file);
        const diagnostics = vscode.languages.getDiagnostics(document.uri);
        const errorDiagnostics = diagnostics.filter(diagnostic => diagnostic.severity === vscode.DiagnosticSeverity.Error);
        if (errorDiagnostics) {
            if (errorDiagnostics.length === 0) {
                files.push(file);
            } else {
                errorFiles.add(file.fsPath);
            }
        }
    }

    return files;
}

// const globalMap = new Map<string, string>();
const globalMap = new Multimap<string, string>();
const errorFiles = new Set<string>();

function uniqueObjects(array: ComposeNode[], key: 'filePath', type?: string) {
    // console.log('uniqueObjects============', array);
    if (array === undefined) return [];
    const seen = new Set();
    return array.filter(item => {
        const val = item[key];
        return seen.has(val) ? false : seen.add(val);
    });
}

export async function handleBusiness(
    allElements: ComposeNode[],
    files: vscode.Uri[],
    eventType: EventType,
    langiumDocumentFactory: LangiumDocumentFactory,
    change?: TextDocument,
    reNamefiles?: { oldUri: vscode.Uri; newUri: vscode.Uri }[]
): Promise<ComposeNode[]> {
    let langiumDocs = shared.workspace.LangiumDocuments;

    if (eventType === 'basic' || eventType === 'onDelete' || eventType === 'onCreate') {
        await preSaveRefInfo(files, eventType);
        allElements = await saveAsJson(files, langiumDocs, allElements, eventType);
        let data = uniqueObjects(allElements, 'filePath', eventType);
        return data;
    } else if (eventType === 'onSave') {
        if (change) {
            let filterFiles;
            const changedFileName = extractPathAfterPercent3A(change.uri);
            filterFiles = files.filter(item => {
                const eachFilename = removeBeforeColon(item.path);
                if (eachFilename !== changedFileName) {
                    return item;
                }
            });
            await preSaveRefInfo(filterFiles, eventType);
            let document = langiumDocumentFactory.fromTextDocument(change);
            const root = document.parseResult.value as St;
            // if (file.toString().includes('enum')) {
            let historyComposeNode = allElements.filter(item => item.filePath !== change.uri);
            allElements = await handleRoot(root, eventType, historyComposeNode);
            // const jsonStr = JSON.stringify(allElements);
            // let jsonObj = JSON.parse(jsonStr);
            if (allElements) {
                const data = uniqueObjects(allElements, 'filePath', eventType);
                return data;
            }
        }
    } else if (eventType === 'onRename') {
        if (reNamefiles) {
            let newFiles = await preSaveRenameRefInfo(files, eventType);
            //第一次进来保存过，所以重置为空
            // allElements = [];
            allElements = await saveAsJson(newFiles, langiumDocs, allElements, eventType);
            allElements = uniqueObjects(allElements, 'filePath', eventType);
            return allElements;
        }
    }
    return [];
}

async function saveAsJson(files: vscode.Uri[], langiumDocs: LangiumDocuments, allElements: ComposeNode[], eventType: EventType) {
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        const document = await langiumDocs.getOrCreateDocument(file);
        const root = document.parseResult.value as St;
        if (eventType === 'basic' || eventType === 'onCreate') {
            allElements = await handleRoot(root, eventType);
        } else if (eventType === 'onRename' || eventType === 'onDelete') {
            allElements = await handleRoot(root, eventType, undefined, i);
        }
        if (i === files.length - 1) {
            const jsonStr = JSON.stringify(allElements);
            let jsonObj = JSON.parse(jsonStr);
            return allElements;
        }
    }
    return [];
}

async function preSaveRefInfo(files: vscode.Uri[], eventType: EventType) {
    let langiumDocs = shared.workspace.LangiumDocuments;
    if (eventType === 'basic') {
        for (const file of files) {
            await saveData(langiumDocs, file);
        }
    } else if (eventType === 'onSave' || eventType === 'onRename' || eventType === 'onDelete') {
        globalMap.clear();
        for (const file of files) {
            await saveData(langiumDocs, file);
        }
    } else if (eventType === 'onCreate') {
        for (const file of files) {
            //files 只是新创建的文件,增量的，其他事件类型files是全量的,所以不用清空map
            await saveData(langiumDocs, file);
        }
    }
    return files;
}

async function preSaveRenameRefInfo(historyFiles: vscode.Uri[], eventType: EventType): Promise<vscode.Uri[]> {
    //historyFiles已经包含了改名后的文件
    let files = preSaveRefInfo(historyFiles, eventType);
    return files;
}

async function saveData(langiumDocs: LangiumDocuments, file: vscode.Uri) {
    const document = await langiumDocs.getOrCreateDocument(file);
    const st = document.parseResult.value as St;
    let filePath: string = getCurrentStFilePath(st);
    let programArr = st.program;
    let functionArr = st.st_function;
    let functionBlockArr = st.function_block;
    let types_struct = st.types_struct;
    let types_alias = st.types_alias;
    let types_enum = st.types_enum;
    let types_union = st.types_union;
    programArr.forEach(program => {
        globalMap.set(program.name, filePath.concat('@program'));
    });
    functionArr.forEach(stFunction => {
        globalMap.set(stFunction.name, filePath.concat('@function'));
    });
    functionBlockArr.forEach(functionBlock => {
        globalMap.set(functionBlock.name, filePath.concat('@functionBlock'));
    });
    types_struct.forEach(struct => {
        globalMap.set(struct.name, filePath.concat('@struct'));
    });
    types_alias.forEach(alias => {
        globalMap.set(alias.refName, filePath.concat('@alias'));
    });
    types_enum.forEach(stEnum => {
        globalMap.set(stEnum.name, filePath.concat('@enum'));
    });
    types_union.forEach(union => {
        globalMap.set(union.name, filePath.concat('@union'));
    });
}

/**
 *
 * @param st
 * @param eventType
 * @param historyComposeNode onSave(onChangeTextDocument)事件才有，获取到不是当前onSave(onChangeTextDocument)的文件名以外的其他文件数据
 * @param calledNum 遍历saveAsJson的files参数,i的值，对应onfileName事件，当i等于0才重置allElements,否则直接追加就行
 * @returns
 */
async function handleRoot(st: St, eventType: EventType, historyComposeNode?: ComposeNode[], calledNum?: number): Promise<ComposeNode[]> {
    let document = st.$document;
    if (document) {
        let parseResult = document.parseResult;
        let lexerErrors = parseResult.lexerErrors;
        let parserErrors = parseResult.parserErrors;
        //由词法或者语法错误，这个文件就不生成json了
        if (lexerErrors.length > 0 || parserErrors.length > 0) {
            return allElements;
        }
    }
    let programArr = st.program;
    let functionArr = st.st_function;
    let functionBlockArr = st.function_block;
    let types_struct = st.types_struct;
    let types_alias = st.types_alias;
    let types_enum = st.types_enum;
    let types_union = st.types_union;
    let filePath: string = getCurrentStFilePath(st);

    let composeNode: ComposeNode = {
        $type: 'ComposeNode',
        filePath: filePath,
        elements: []
    };
    composeNode = handleProgramArr(programArr, composeNode);
    composeNode = handleFunctionBlockArr(functionBlockArr, composeNode);
    composeNode = handleFunctionArr(functionArr, composeNode);
    composeNode = handleStructArr(types_struct, composeNode);
    composeNode = handleAliasArr(types_alias, composeNode);
    composeNode = handleUnionArr(types_union, composeNode);
    composeNode = handleEnumArr(types_enum, composeNode);
    if (eventType === 'basic' || eventType === 'onCreate') {
        allElements.push(composeNode);
    } else if (eventType === 'onSave') {
        allElements = [];
        if (historyComposeNode) {
            allElements.push(...historyComposeNode);
            allElements.push(composeNode);
        }
    } else if (eventType === 'onRename' || eventType === 'onDelete') {
        if (calledNum === 0) {
            allElements = [];
        }
        allElements.push(composeNode);
    }

    return allElements;
}

function handleProgramArr(programArr: Program[], composeNode: ComposeNode) {
    programArr.forEach(program => {
        let varDeclArr = program.inputs;
        let declArr: VarDeclaration[] = [];
        varDeclArr.forEach(eachVarDecl => {
            let definition = eachVarDecl.definition;
            let modifier = eachVarDecl.modifiers;
            let varGlobalType = '';
            if (modifier) {
                varGlobalType = `${definition} ${modifier}`;
            } else {
                varGlobalType = definition;
            }
            let varDeclElements = eachVarDecl.items;
            handleVarDeclarationInit(varDeclElements, declArr, varGlobalType);
        });
        const singleElement: SingleElement = {
            $type: 'SingleElement',
            elementType: 'program',
            elementName: program.name,
            varDecls: declArr
        };
        composeNode.elements.push(singleElement);
        // composeNode = {
        //     filePath: filePath,
        //     elements: singleElements
        // };
    });
    return composeNode;
}

function handleVarDeclarationInit(
    varDeclElements: VarDeclarationInit[] | Struct_Var_Decl_Init[],
    declArr: VarDeclaration[],
    varGlobalType?: string
) {
    varDeclElements.forEach(element => {
        let expectType: string | undefined = '';
        let nextVariables = element.nextVariables;
        let varName = element.variables;
        let typeName = element.typeName;
        let $type = typeName.$type;
        expectType = basicDataType(expectType, typeName);
        if (!expectType) {
            //ref
            expectType = typeName.Identifier?.$refText;
            if (expectType) {
                let refPathArr = globalMap.get(expectType);
                nextVariables.forEach(nextVariable => {
                    if (refPathArr) {
                        let varDeclaration: VarDeclaration;
                        if (varGlobalType) {
                            varDeclaration = {
                                $type: 'VarDeclaration',
                                varGlobalType: varGlobalType,
                                varName: nextVariable,
                                varType: expectType,
                                refFilePath: refPathArr[0]
                            };
                        } else {
                            varDeclaration = {
                                $type: 'VarDeclaration',
                                varName: nextVariable,
                                varType: expectType,
                                refFilePath: refPathArr[0]
                            };
                        }
                        declArr.push(varDeclaration);
                    }
                });
                //judge firstly from ComposeElement name,if have multi ,then judge by ComposeElement type
                if (refPathArr) {
                    let varDeclaration: VarDeclaration;
                    if (varGlobalType) {
                        varDeclaration = {
                            $type: 'VarDeclaration',
                            varGlobalType: varGlobalType,
                            varName: varName,
                            varType: expectType,
                            refFilePath: refPathArr[0]
                        };
                    } else {
                        varDeclaration = {
                            $type: 'VarDeclaration',
                            varName: varName,
                            varType: expectType,
                            refFilePath: refPathArr[0]
                        };
                    }
                    declArr.push(varDeclaration);
                }
            } else {
                expectType = 'ARRAY';
                //Array类型，e.g b: ARRAY [9..10] OF INT := [1, 0, 1, 1, 1];
                let varDeclaration: VarDeclaration;
                if (varGlobalType) {
                    varDeclaration = {
                        $type: 'VarDeclaration',
                        varGlobalType: varGlobalType,
                        varName: varName,
                        varType: expectType
                    };
                } else {
                    varDeclaration = {
                        $type: 'VarDeclaration',
                        varName: varName,
                        varType: expectType
                    };
                }
                declArr.push(varDeclaration);
                const arrayNextVariables = element.nextVariables;
                arrayNextVariables.forEach(nextVariable => {
                    if (varGlobalType) {
                        varDeclaration = {
                            $type: 'VarDeclaration',
                            varGlobalType: varGlobalType,
                            varName: nextVariable,
                            varType: expectType
                        };
                    } else {
                        varDeclaration = {
                            $type: 'VarDeclaration',
                            varName: nextVariable,
                            varType: expectType
                        };
                    }
                    declArr.push(varDeclaration);
                });
            }
        } else {
            let varDeclaration: VarDeclaration;
            nextVariables.forEach(nextVariable => {
                if (varGlobalType) {
                    varDeclaration = {
                        $type: 'VarDeclaration',
                        varGlobalType: varGlobalType,
                        varName: nextVariable,
                        varType: expectType
                    };
                } else {
                    varDeclaration = {
                        $type: 'VarDeclaration',
                        varName: nextVariable,
                        varType: expectType
                    };
                }
                declArr.push(varDeclaration);
            });
            if (varGlobalType) {
                varDeclaration = {
                    $type: 'VarDeclaration',
                    varGlobalType: varGlobalType,
                    varName: varName,
                    varType: expectType
                };
            } else {
                varDeclaration = {
                    $type: 'VarDeclaration',
                    varName: varName,
                    varType: expectType
                };
            }
            declArr.push(varDeclaration);
        }
    });
}

function getCurrentStFilePath(st: St) {
    let uri = st.$document?.uri;
    let filePath: string = '';
    if (uri) {
        filePath = uri.toString();
    }
    return filePath;
}

function handleFunctionBlockArr(functionBlockArr: FunctionBlock[], composeNode: ComposeNode) {
    functionBlockArr.forEach(functionBlock => {
        let varLocals = functionBlock.varLocals;
        let varInputs = functionBlock.varInputs;
        let varOutputs = functionBlock.varOutputs;
        let declArr: VarDeclaration[] = [];
        handleAllVariable(varLocals, declArr);
        handleAllVariable(varInputs, declArr);
        handleAllVariable(varOutputs, declArr);
        const functionBlockElement: SingleElement = {
            $type: 'SingleElement',
            elementType: 'functionBlock',
            elementName: functionBlock.name,
            varDecls: declArr
        };
        composeNode.elements.push(functionBlockElement);
    });
    return composeNode;
}

function handleFunctionArr(functionArr: StFunction[], composeNode: ComposeNode) {
    functionArr.forEach(stFunction => {
        let varLocals = stFunction.varLocals;
        let varInputs = stFunction.varInputs;
        let varOutputs = stFunction.varOutputs;
        let returnType = stFunction.variable_type;
        let paramChildArr: ParamChild[] = [];
        let actualReturnType: any;
        actualReturnType = handleNoAcceptNativeTypeName(returnType, actualReturnType);
        let declArr: VarDeclaration[] = [];
        handleAllVariable(varLocals, declArr);
        handleAllVariable(varInputs, declArr);
        handleAllVariable(varOutputs, declArr);
        const functionElement: FunctionElement = {
            $type: 'FunctionElement',
            elementType: 'function',
            elementName: stFunction.name,
            varDecls: declArr,
            returnType: actualReturnType
        };
        composeNode.elements.push(functionElement);
    });
    return composeNode;
}

function handleStructArr(structArr: StructsList[], composeNode: ComposeNode) {
    structArr.forEach(struct => {
        let struct_Var_Decl_Inits = struct.items as Struct_Var_Decl_Init[];
        let declArr: VarDeclaration[] = [];
        handleVarDeclarationInit(struct_Var_Decl_Inits, declArr);
        const singleElement: SingleElement = {
            $type: 'SingleElement',
            elementType: 'struct',
            elementName: struct.name,
            varDecls: declArr
        };
        composeNode.elements.push(singleElement);
    });
    return composeNode;
}

function handleAliasArr(aliasArr: Alias[], composeNode: ComposeNode) {
    aliasArr.forEach(alias => {
        let aliasName = alias.aliasName;
        let refName = alias.refName;
        const aliasElement: AliasElement = {
            elementType: 'alias',
            elementName: aliasName,
            refName: refName
        };
        composeNode.elements.push(aliasElement);
    });
    return composeNode;
}

function handleUnionArr(unionArr: UnionsList[], composeNode: ComposeNode) {
    unionArr.forEach(union => {
        let varDeclaration = union.items;
        let declArr: VarDeclaration[] = [];
        handleVarDeclarationInit(varDeclaration, declArr);
        const singleElement: SingleElement = {
            $type: 'SingleElement',
            elementType: 'union',
            elementName: union.name,
            varDecls: declArr
        };
        composeNode.elements.push(singleElement);
    });
    return composeNode;
}

function handleEnumArr(enumArr: StEnum[], composeNode: ComposeNode) {
    enumArr.forEach(stEnum => {
        let innerEnumArr = stEnum.enum;
        let enumChildArr: EnumChild[] = [];
        innerEnumArr.forEach(element => {
            let enumChild: EnumChild;
            if (element.assignValue) {
                enumChild = {
                    enumVarName: element.variable_name,
                    assignValue: parseInt(element.assignValue)
                };
            } else {
                enumChild = {
                    enumVarName: element.variable_name
                };
            }
            enumChildArr.push(enumChild);
        });
        const enumElement: EnumElement = {
            elementType: 'enum',
            elementName: stEnum.name,
            enumChild: enumChildArr
        };
        composeNode.elements.push(enumElement);
    });
    return composeNode;
}

function handleAllVariable(varGlobalType: VarLocal[] | VarInput[] | VarOutput[], declArr: VarDeclaration[]) {
    let type: string = '';
    varGlobalType.forEach(item => {
        let varDeclElements = item.items;
        if (isVarLocal(item)) {
            type = 'VAR';
        } else if (isVarInput(item)) {
            type = 'VAR_INPUT';
        } else if (isVarOutput(item)) {
            type = 'VAR_OUTPUT';
        }
        handleVarDeclarationInit(varDeclElements, declArr, type);
    });
}

// 定义一个函数将 JSON 写入文件
// function writeJSONToFile(jsonData: any, filePath: string) {
//     fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), err => {
//         if (err) {
//             // console.error('Error writing JSON to file:', err);
//         } else {
//             //  console.log('JSON data has been written to', filePath);
//         }
//     });
// }

function convertToLSTextDocument(vsCodeTextDocument: vscode.TextDocument): LSTextDocument {
    return LSTextDocument.create(
        vsCodeTextDocument.uri.toString(),
        vsCodeTextDocument.languageId,
        vsCodeTextDocument.version,
        vsCodeTextDocument.getText()
    );
}

function isEmptyElement(allElements: ComposeNode[]) {
    if (allElements.length === 0) {
        return true;
    }
    if (allElements.length === 1) {
        let element = allElements[0];
        let singleElement = element.elements[0] as SingleElement;
        let decls = singleElement.varDecls;
        if (decls.length === 0) {
            return true;
        }
        return false;
    }
    if (allElements.length > 1) {
        return false;
    }
}

export * as globalVscode from 'vscode';
