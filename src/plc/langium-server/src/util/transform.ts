import fs from 'fs';
import { LangiumDocument, URI } from 'langium';
import { shared, st } from '../../main.js';
import { EnumElement, OuterComposeNode, SingleElement, convertOuterNode2ComposeNode } from '../../src/util/tool.js';

let cacheFirstMap = new Map<URI, OuterComposeNode[]>();
let cacheOuterMap = new Map<URI, OuterComposeNode[]>();
let cacheSecondMap = new Map<URI, LangiumDocument>();
export const StUri = URI.parse(`memory://cache.st`);

export function getRelatedElementInfoToOuter(cacheName: string): SingleElement | EnumElement | undefined {
    if (cacheOuterMap.get(StUri)) {
        let cacheOuterComposeNodeArr = cacheOuterMap.get(StUri);
        if (cacheOuterComposeNodeArr) {
            let composeNodeArr = convertOuterNode2ComposeNode(cacheOuterComposeNodeArr);
            for (let i = 0; i < composeNodeArr.length; i++) {
                let composeNode = composeNodeArr[i];
                let composeNodeElementArr = composeNode.elements;
                let cacheFunctionBlock = composeNodeElementArr.find(element => {
                    return element.elementName.toLowerCase() === cacheName.toLowerCase();
                });
                if (cacheFunctionBlock) {
                    let elementType = cacheFunctionBlock.elementType;
                    if (
                        elementType === 'functionBlock' ||
                        elementType === 'function' ||
                        elementType === 'struct' ||
                        elementType === 'alias'
                    ) {
                        return cacheFunctionBlock as SingleElement;
                    } else if (elementType === 'enum') {
                        return cacheFunctionBlock as EnumElement;
                    }
                }
            }
        }
    } else {
        let dirName = __dirname;
        let data = readJsonFile(`${dirName}\\data.json`);
        let jsonArrObj = JSON.parse(data);
        let outerComposeNodeArr = jsonArrObj as OuterComposeNode[];
        cacheOuterMap.set(StUri, outerComposeNodeArr);
        let composeNodeArr = convertOuterNode2ComposeNode(outerComposeNodeArr);
        for (let i = 0; i < composeNodeArr.length; i++) {
            let composeNode = composeNodeArr[i];
            let composeNodeElementArr = composeNode.elements;
            let cacheFunctionBlock = composeNodeElementArr.find(element => {
                return element.elementName.toLowerCase() === cacheName.toLowerCase();
            });
            if (cacheFunctionBlock) {
                let elementType = cacheFunctionBlock.elementType;
                if (elementType === 'functionBlock' || elementType === 'function' || elementType === 'struct' || elementType === 'alias') {
                    return cacheFunctionBlock as SingleElement;
                } else if (elementType === 'enum') {
                    return cacheFunctionBlock as EnumElement;
                }
            }
        }
    }

    return undefined;
}

export function getRelatedElementAndLangiumDoc(cacheName: string): [SingleElement | undefined, LangiumDocument?] | undefined {
    if (cacheFirstMap.get(StUri) && cacheSecondMap.get(StUri)) {
        let cacheOuterComposeNodeArr = cacheFirstMap.get(StUri);
        let cacheLangiumDocument = cacheSecondMap.get(StUri);
        if (cacheOuterComposeNodeArr) {
            let composeNodeArr = convertOuterNode2ComposeNode(cacheOuterComposeNodeArr);
            for (let i = 0; i < composeNodeArr.length; i++) {
                let composeNode = composeNodeArr[i];
                let composeNodeElementArr = composeNode.elements;
                let cacheFunctionBlock = composeNodeElementArr.find(element => {
                    return element.elementName.toLowerCase() === cacheName.toLowerCase();
                });
                if (cacheFunctionBlock) {
                    let elementType = cacheFunctionBlock.elementType;
                    if (
                        elementType === 'functionBlock' ||
                        elementType === 'function' ||
                        elementType === 'struct' ||
                        elementType === 'alias'
                    ) {
                        return [cacheFunctionBlock as SingleElement, cacheLangiumDocument];
                    }
                }
            }
        }
    } else {
        let dirName = __dirname;
        let data = readJsonFile(`${dirName}\\data.json`);
        let serializer = st.serializer.JsonSerializer;
        let astNode = serializer.deserialize(data);
        let langiumDocument = shared.workspace.LangiumDocumentFactory.fromModel(astNode, URI.parse(`memory://cache.st`));
        let jsonArrObj = JSON.parse(data);
        let outerComposeNodeArr = jsonArrObj as OuterComposeNode[];
        cacheFirstMap.set(StUri, outerComposeNodeArr);
        cacheSecondMap.set(StUri, langiumDocument);
        let composeNodeArr = convertOuterNode2ComposeNode(outerComposeNodeArr);
        for (let i = 0; i < composeNodeArr.length; i++) {
            let composeNode = composeNodeArr[i];
            let composeNodeElementArr = composeNode.elements;
            let cacheFunctionBlock = composeNodeElementArr.find(element => {
                return element.elementName.toLowerCase() === cacheName.toLowerCase();
            });
            if (cacheFunctionBlock) {
                let elementType = cacheFunctionBlock.elementType;
                if (elementType === 'functionBlock' || elementType === 'function' || elementType === 'struct' || elementType === 'alias') {
                    return [cacheFunctionBlock as SingleElement, langiumDocument];
                }
            }
        }
    }

    return undefined;
}

export function getRelatedEnumElementAndLangiumDoc(cacheName: string): [EnumElement | undefined, LangiumDocument?] | undefined {
    if (cacheFirstMap.get(StUri) && cacheSecondMap.get(StUri)) {
        let cacheOuterComposeNodeArr = cacheFirstMap.get(StUri);
        let cacheLangiumDocument = cacheSecondMap.get(StUri);
        if (cacheOuterComposeNodeArr) {
            let composeNodeArr = convertOuterNode2ComposeNode(cacheOuterComposeNodeArr);
            for (let i = 0; i < composeNodeArr.length; i++) {
                let composeNode = composeNodeArr[i];
                let composeNodeElementArr = composeNode.elements;
                let cacheEnum = composeNodeElementArr.find(element => {
                    return element.elementName.toLowerCase() === cacheName.toLowerCase();
                });
                if (cacheEnum && cacheEnum.elementType === 'enum') {
                    return [cacheEnum as EnumElement, cacheLangiumDocument];
                }
            }
        }
    } else {
        let dirName = __dirname;
        let data = readJsonFile(`${dirName}\\data.json`);
        let serializer = st.serializer.JsonSerializer;
        let astNode = serializer.deserialize(data);
        let langiumDocument = shared.workspace.LangiumDocumentFactory.fromModel(astNode, URI.parse(`memory://cache.st`));
        let jsonArrObj = JSON.parse(data);
        let outerComposeNodeArr = jsonArrObj as OuterComposeNode[];
        cacheFirstMap.set(StUri, outerComposeNodeArr);
        cacheSecondMap.set(StUri, langiumDocument);
        let composeNodeArr = convertOuterNode2ComposeNode(outerComposeNodeArr);
        for (let i = 0; i < composeNodeArr.length; i++) {
            let composeNode = composeNodeArr[i];
            let composeNodeElementArr = composeNode.elements;
            let cacheEnum = composeNodeElementArr.find(element => {
                return element.elementName.toLowerCase() === cacheName.toLowerCase();
            });
            if (cacheEnum && cacheEnum.elementType === 'enum') {
                return [cacheEnum as EnumElement, langiumDocument];
            }
        }
    }

    return undefined;
}

export function readJsonFile(filePath: string): string {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(error);
        return '';
    }
}
