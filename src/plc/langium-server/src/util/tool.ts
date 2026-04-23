import { AstNode, ValidationAcceptor } from 'langium';
import {
    Alias,
    Arr_string,
    Constant,
    Enum,
    FunctionBlock,
    Methods,
    Native_Type_Name,
    St,
    StEnum,
    Struct_Var_Decl_Init,
    StructsList,
    VarDeclarationInit,
    VarInput,
    VarLocal,
    isAlias,
    isArr_string,
    isStFunction
} from '../generated/ast.js';
import { getRelatedElementAndLangiumDoc } from './transform.js';

export type ComposeNode = {
    filePath?: string;
    elements: (SingleElement | AliasElement | EnumElement | FunctionElement | FunctionBlockElement)[];
} & AstNode;

export type BaseElement = {
    elementType: ElementType;
    elementName: string;
    // varDecls?: Array<VarDeclaration>;
};
export type SingleElement = BaseElement & {
    varDecls: Array<VarDeclaration>;
    rootName?: string; //outer json root name e.g Standard function blocks
    comment?: string; //outer json comment property
    usage?: string; //outer json usage property
} & AstNode;
export type AliasElement = SingleElement & {
    refName: string;
    initialValue?: string | number | boolean;
};
export type EnumElement = BaseElement & {
    enumChild: Array<EnumChild>;
    rootName?: string;
    comment?: string;
} & AstNode;

export type FunctionBlockElement = SingleElement & {
    methods?: Array<Methods>;
};

export type FunctionElement = SingleElement & {
    //params?: Array<ParamChild>;
    returnType?: any;
};
export type EnumChild = {
    enumVarName: string;
    assignValue?: number;
};
export type ParamChild = {
    paramName: string;
    paramType: any;
};

export type VarDeclaration = {
    varName: string;
    varType: any;
    refFilePath?: string;
    //VAR VAR_INPUT  VAR_OUTPUT
    varGlobalType?: string;
} & AstNode;

export type EventType = 'basic' | 'onSave' | 'onRename' | 'onCreate' | 'onDelete' | 'onChangeTextDocument';
export type ElementType = 'program' | 'function' | 'functionBlock' | 'struct' | 'alias' | 'enum' | 'union';

/**
 *
 * @param str 判断是否是正负整数，并且不能以0开头
 * @returns
 */
export const isInteger = (str: string): boolean => {
    return /^-?[1-9]\d*$/.test(str) || /^0$/.test(str);
};
export const isLowerCase = (str: string): boolean => {
    return /^[a-z]+$/.test(str);
};
export const shouldHintCacheCase = (cacheName: string): boolean => {
    let result = getRelatedElementAndLangiumDoc(cacheName);
    if (!result) {
        return true;
    }
    let [elementNode] = result;
    if (!elementNode) {
        return true;
    }
    return elementNode.elementName === elementNode.elementName.toUpperCase();
};

//time type regex
export const TIME_REGEX = /^(?:TIME|T)#(\d+y)?(\d+m)?(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i;
export const DATE_REGEX = /^DATE#\d{4}-\d{2}-\d{2}$/i;
export const DT_REGEX = /^DT#\d{4}-\d{2}-\d{2}-\d{2}:\d{2}:\d{2}(?:\.\d+)?$/i;
export const TOD_REGEX = /^TOD#\d{2}:\d{2}:\d{2}(?:\.\d+)?$/i;

export const keywordStr: string[] = [
    'SINT',
    'INT',
    'DINT',
    'LINT',
    'USINT',
    'UINT',
    'UDINT',
    'ULINT',
    'BYTE',
    'WORD',
    'DWORD',
    'LWORD',
    'TIME',
    'DATE',
    'LREAL',
    'REAL',
    'BOOL',
    'STRING'
    // 'PUBLIC',
    // 'INTERNAL',
    // 'FINAL'
];

export const refOuterFunctionBlockStr: string[] = [
    'RTC',
    'INTEGRAL',
    'DERIVATIVE',
    'PID',
    'RAMP',
    'HYSTERESIS',
    'SR',
    'RS',
    'SEMA',
    'R_TRIG',
    'F_TRIG',
    'CTU',
    'CTU_DINT',
    'CTU_LINT',
    'CTU_UDINT',
    'CTU_ULINT',
    'CTD',
    'CTD_DINT',
    'CTD_LINT',
    'CTD_UDINT',
    'CTD_ULINT',
    'CTUD',
    'CTUD_DINT',
    'CTUD_LINT',
    'CTUD_UDINT',
    'CTUD_ULINT',
    'TP',
    'TON',
    'TOF',
    'MC_POWER',
    'MC_READACTUALPOSITION',
    'MC_MOVEABSOLUTE',
    'MC_MOVERELATIVE',
    'MC_MOVEADDITIVE',
    'MC_MOVESUPERIMPOSED',
    'MC_MOVEVELOCITY',
    'MC_POSITIONPROFILE',
    'MC_VELOCITYPROFILE',
    'MC_READACTUALVELOCITY',
    'MC_ACCELERATIONPROFILE',
    'MC_SETPOSITION',
    'MC_READPARAMETER',
    'MC_READBOOLPARAMETER',
    'MC_WRITEPARAMETER',
    'MC_WRITEBOOLPARAMETER',
    'MC_READACTUALTORQUE',
    'MC_READSTATUS',
    'MC_READAXISERROR',
    'MC_RESET',
    'MC_DIGITALCAMSWITCH',
    'MC_TOUCHPROBE',
    'MC_ABORTTRIGGER',
    'MC_STOP',
    'MC_HALT',
    'MC_HOME',
    'MC_CAMTABLESELECT',
    'MC_CAMIN',
    'MC_CAMOUT',
    'MC_GEARIN',
    'MC_GEAROUT',
    'MC_GEARINPOS',
    'MC_PHASING',
    'SMC_TRACKAXIS',
    'SMC_TRACKSETVALUES',
    'MC_STARTTRACE',
    'SMC_MOVECONTINUOUSABSOLUTE',
    'SMC_MOVECONTINUOUSRELATIVE',
    'SMC_GETTAPPETVALUE'
];

export const typeConversionFunctionStr: string[] = [
    'BOOL_TO_SINT',
    'BOOL_TO_INT',
    'BOOL_TO_DINT',
    'BOOL_TO_LINT',
    'BOOL_TO_USINT',
    'BOOL_TO_UINT',
    'BOOL_TO_UDINT',
    'BOOL_TO_ULINT',
    'BOOL_TO_REAL',
    'BOOL_TO_LREAL',
    'BOOL_TO_TIME',
    'BOOL_TO_DATE',
    'BOOL_TO_TOD',
    'BOOL_TO_DT',
    'BOOL_TO_STRING',
    'BOOL_TO_BYTE',
    'BOOL_TO_WORD',
    'BOOL_TO_DWORD',
    'BOOL_TO_LWORD',
    'SINT_TO_BOOL',
    'SINT_TO_INT',
    'SINT_TO_DINT',
    'SINT_TO_LINT',
    'SINT_TO_USINT',
    'SINT_TO_UINT',
    'SINT_TO_UDINT',
    'SINT_TO_ULINT',
    'SINT_TO_REAL',
    'SINT_TO_LREAL',
    'SINT_TO_TIME',
    'SINT_TO_DATE',
    'SINT_TO_TOD',
    'SINT_TO_DT',
    'SINT_TO_STRING',
    'SINT_TO_BYTE',
    'SINT_TO_WORD',
    'SINT_TO_DWORD',
    'SINT_TO_LWORD',
    'INT_TO_BOOL',
    'INT_TO_SINT',
    'INT_TO_DINT',
    'INT_TO_LINT',
    'INT_TO_USINT',
    'INT_TO_UINT',
    'INT_TO_UDINT',
    'INT_TO_ULINT',
    'INT_TO_REAL',
    'INT_TO_LREAL',
    'INT_TO_TIME',
    'INT_TO_DATE',
    'INT_TO_TOD',
    'INT_TO_DT',
    'INT_TO_STRING',
    'INT_TO_BYTE',
    'INT_TO_WORD',
    'INT_TO_DWORD',
    'INT_TO_LWORD',
    'DINT_TO_BOOL',
    'DINT_TO_SINT',
    'DINT_TO_INT',
    'DINT_TO_LINT',
    'DINT_TO_USINT',
    'DINT_TO_UINT',
    'DINT_TO_UDINT',
    'DINT_TO_ULINT',
    'DINT_TO_REAL',
    'DINT_TO_LREAL',
    'DINT_TO_TIME',
    'DINT_TO_DATE',
    'DINT_TO_TOD',
    'DINT_TO_DT',
    'DINT_TO_STRING',
    'DINT_TO_BYTE',
    'DINT_TO_WORD',
    'DINT_TO_DWORD',
    'DINT_TO_LWORD',
    'LINT_TO_BOOL',
    'LINT_TO_SINT',
    'LINT_TO_INT',
    'LINT_TO_DINT',
    'LINT_TO_USINT',
    'LINT_TO_UINT',
    'LINT_TO_UDINT',
    'LINT_TO_ULINT',
    'LINT_TO_REAL',
    'LINT_TO_LREAL',
    'LINT_TO_TIME',
    'LINT_TO_DATE',
    'LINT_TO_TOD',
    'LINT_TO_DT',
    'LINT_TO_STRING',
    'LINT_TO_BYTE',
    'LINT_TO_WORD',
    'LINT_TO_DWORD',
    'LINT_TO_LWORD',
    'USINT_TO_BOOL',
    'USINT_TO_SINT',
    'USINT_TO_INT',
    'USINT_TO_DINT',
    'USINT_TO_LINT',
    'USINT_TO_UINT',
    'USINT_TO_UDINT',
    'USINT_TO_ULINT',
    'USINT_TO_REAL',
    'USINT_TO_LREAL',
    'USINT_TO_TIME',
    'USINT_TO_DATE',
    'USINT_TO_TOD',
    'USINT_TO_DT',
    'USINT_TO_STRING',
    'USINT_TO_BYTE',
    'USINT_TO_WORD',
    'USINT_TO_DWORD',
    'USINT_TO_LWORD',
    'UINT_TO_BOOL',
    'UINT_TO_SINT',
    'UINT_TO_INT',
    'UINT_TO_DINT',
    'UINT_TO_LINT',
    'UINT_TO_USINT',
    'UINT_TO_UDINT',
    'UINT_TO_ULINT',
    'UINT_TO_REAL',
    'UINT_TO_LREAL',
    'UINT_TO_TIME',
    'UINT_TO_DATE',
    'UINT_TO_TOD',
    'UINT_TO_DT',
    'UINT_TO_STRING',
    'UINT_TO_BYTE',
    'UINT_TO_WORD',
    'UINT_TO_DWORD',
    'UINT_TO_LWORD',
    'UDINT_TO_BOOL',
    'UDINT_TO_SINT',
    'UDINT_TO_INT',
    'UDINT_TO_DINT',
    'UDINT_TO_LINT',
    'UDINT_TO_USINT',
    'UDINT_TO_UINT',
    'UDINT_TO_ULINT',
    'UDINT_TO_REAL',
    'UDINT_TO_LREAL',
    'UDINT_TO_TIME',
    'UDINT_TO_DATE',
    'UDINT_TO_TOD',
    'UDINT_TO_DT',
    'UDINT_TO_STRING',
    'UDINT_TO_BYTE',
    'UDINT_TO_WORD',
    'UDINT_TO_DWORD',
    'UDINT_TO_LWORD',
    'ULINT_TO_BOOL',
    'ULINT_TO_SINT',
    'ULINT_TO_INT',
    'ULINT_TO_DINT',
    'ULINT_TO_LINT',
    'ULINT_TO_USINT',
    'ULINT_TO_UINT',
    'ULINT_TO_UDINT',
    'ULINT_TO_REAL',
    'ULINT_TO_LREAL',
    'ULINT_TO_TIME',
    'ULINT_TO_DATE',
    'ULINT_TO_TOD',
    'ULINT_TO_DT',
    'ULINT_TO_STRING',
    'ULINT_TO_BYTE',
    'ULINT_TO_WORD',
    'ULINT_TO_DWORD',
    'ULINT_TO_LWORD',
    'REAL_TO_BOOL',
    'REAL_TO_SINT',
    'REAL_TO_INT',
    'REAL_TO_DINT',
    'REAL_TO_LINT',
    'REAL_TO_USINT',
    'REAL_TO_UINT',
    'REAL_TO_UDINT',
    'REAL_TO_ULINT',
    'REAL_TO_LREAL',
    'REAL_TO_TIME',
    'REAL_TO_DATE',
    'REAL_TO_TOD',
    'REAL_TO_DT',
    'REAL_TO_STRING',
    'REAL_TO_BYTE',
    'REAL_TO_WORD',
    'REAL_TO_DWORD',
    'REAL_TO_LWORD',
    'LREAL_TO_BOOL',
    'LREAL_TO_SINT',
    'LREAL_TO_INT',
    'LREAL_TO_DINT',
    'LREAL_TO_LINT',
    'LREAL_TO_USINT',
    'LREAL_TO_UINT',
    'LREAL_TO_UDINT',
    'LREAL_TO_ULINT',
    'LREAL_TO_REAL',
    'LREAL_TO_TIME',
    'LREAL_TO_DATE',
    'LREAL_TO_TOD',
    'LREAL_TO_DT',
    'LREAL_TO_STRING',
    'LREAL_TO_BYTE',
    'LREAL_TO_WORD',
    'LREAL_TO_DWORD',
    'LREAL_TO_LWORD',
    'TIME_TO_SINT',
    'TIME_TO_INT',
    'TIME_TO_DINT',
    'TIME_TO_LINT',
    'TIME_TO_USINT',
    'TIME_TO_UINT',
    'TIME_TO_UDINT',
    'TIME_TO_ULINT',
    'TIME_TO_REAL',
    'TIME_TO_LREAL',
    'TIME_TO_STRING',
    'TIME_TO_BYTE',
    'TIME_TO_WORD',
    'TIME_TO_DWORD',
    'TIME_TO_LWORD',
    'DATE_TO_SINT',
    'DATE_TO_INT',
    'DATE_TO_DINT',
    'DATE_TO_LINT',
    'DATE_TO_USINT',
    'DATE_TO_UINT',
    'DATE_TO_UDINT',
    'DATE_TO_ULINT',
    'DATE_TO_REAL',
    'DATE_TO_LREAL',
    'DATE_TO_STRING',
    'DATE_TO_BYTE',
    'DATE_TO_WORD',
    'DATE_TO_DWORD',
    'DATE_TO_LWORD',
    'TOD_TO_SINT',
    'TOD_TO_INT',
    'TOD_TO_DINT',
    'TOD_TO_LINT',
    'TOD_TO_USINT',
    'TOD_TO_UINT',
    'TOD_TO_UDINT',
    'TOD_TO_ULINT',
    'TOD_TO_REAL',
    'TOD_TO_LREAL',
    'TOD_TO_STRING',
    'TOD_TO_BYTE',
    'TOD_TO_WORD',
    'TOD_TO_DWORD',
    'TOD_TO_LWORD',
    'DT_TO_SINT',
    'DT_TO_INT',
    'DT_TO_DINT',
    'DT_TO_LINT',
    'DT_TO_USINT',
    'DT_TO_UINT',
    'DT_TO_UDINT',
    'DT_TO_ULINT',
    'DT_TO_REAL',
    'DT_TO_LREAL',
    'DT_TO_STRING',
    'DT_TO_BYTE',
    'DT_TO_WORD',
    'DT_TO_DWORD',
    'DT_TO_LWORD',
    'STRING_TO_BOOL',
    'STRING_TO_SINT',
    'STRING_TO_INT',
    'STRING_TO_DINT',
    'STRING_TO_LINT',
    'STRING_TO_USINT',
    'STRING_TO_UINT',
    'STRING_TO_UDINT',
    'STRING_TO_ULINT',
    'STRING_TO_REAL',
    'STRING_TO_LREAL',
    'STRING_TO_TIME',
    'STRING_TO_DATE',
    'STRING_TO_TOD',
    'STRING_TO_DT',
    'STRING_TO_BYTE',
    'STRING_TO_WORD',
    'STRING_TO_DWORD',
    'STRING_TO_LWORD',
    'BYTE_TO_BOOL',
    'BYTE_TO_SINT',
    'BYTE_TO_INT',
    'BYTE_TO_DINT',
    'BYTE_TO_LINT',
    'BYTE_TO_USINT',
    'BYTE_TO_UINT',
    'BYTE_TO_UDINT',
    'BYTE_TO_ULINT',
    'BYTE_TO_REAL',
    'BYTE_TO_LREAL',
    'BYTE_TO_TIME',
    'BYTE_TO_DATE',
    'BYTE_TO_TOD',
    'BYTE_TO_DT',
    'BYTE_TO_STRING',
    'BYTE_TO_WORD',
    'BYTE_TO_DWORD',
    'BYTE_TO_LWORD',
    'WORD_TO_BOOL',
    'WORD_TO_SINT',
    'WORD_TO_INT',
    'WORD_TO_DINT',
    'WORD_TO_LINT',
    'WORD_TO_USINT',
    'WORD_TO_UINT',
    'WORD_TO_UDINT',
    'WORD_TO_ULINT',
    'WORD_TO_REAL',
    'WORD_TO_LREAL',
    'WORD_TO_TIME',
    'WORD_TO_DATE',
    'WORD_TO_TOD',
    'WORD_TO_DT',
    'WORD_TO_STRING',
    'WORD_TO_BYTE',
    'WORD_TO_DWORD',
    'WORD_TO_LWORD',
    'DWORD_TO_BOOL',
    'DWORD_TO_SINT',
    'DWORD_TO_INT',
    'DWORD_TO_DINT',
    'DWORD_TO_LINT',
    'DWORD_TO_USINT',
    'DWORD_TO_UINT',
    'DWORD_TO_UDINT',
    'DWORD_TO_ULINT',
    'DWORD_TO_REAL',
    'DWORD_TO_LREAL',
    'DWORD_TO_TIME',
    'DWORD_TO_DATE',
    'DWORD_TO_TOD',
    'DWORD_TO_DT',
    'DWORD_TO_STRING',
    'DWORD_TO_BYTE',
    'DWORD_TO_WORD',
    'DWORD_TO_LWORD',
    'LWORD_TO_BOOL',
    'LWORD_TO_SINT',
    'LWORD_TO_INT',
    'LWORD_TO_DINT',
    'LWORD_TO_LINT',
    'LWORD_TO_USINT',
    'LWORD_TO_UINT',
    'LWORD_TO_UDINT',
    'LWORD_TO_ULINT',
    'LWORD_TO_REAL',
    'LWORD_TO_LREAL',
    'LWORD_TO_TIME',
    'LWORD_TO_DATE',
    'LWORD_TO_TOD',
    'LWORD_TO_DT',
    'LWORD_TO_STRING',
    'LWORD_TO_BYTE',
    'LWORD_TO_WORD',
    'LWORD_TO_DWORD',
    'TRUNC',
    'BCD_TO_USINT',
    'BCD_TO_UINT',
    'BCD_TO_UDINT',
    'BCD_TO_ULINT',
    'USINT_TO_BCD',
    'UINT_TO_BCD',
    'UDINT_TO_BCD',
    'ULINT_TO_BCD',
    'DATE_AND_TIME_TO_TIME_OF_DAY',
    'DATE_AND_TIME_TO_DATE'
];
export const numericalFunctionStr: string[] = ['ABS', 'SQRT', 'LN', 'LOG', 'EXP', 'SIN', 'COS', 'TAN', 'ASIN', 'ACOS', 'ATAN'];
export const arithmeticFunctionStr: string[] = ['ADD', 'MUL', 'SUB', 'DIV', 'MOD', 'EXPT', 'MOVE'];
export const timeFunctionStr: string[] = [
    'ADD_TIME',
    'ADD_TOD_TIME',
    'ADD_DT_TIME',
    'MULTIME',
    'SUB_TIME',
    'SUB_DATE_DATE',
    'SUB_TOD_TIME',
    'SUB_TOD_TOD',
    'SUB_DT_TIME',
    'SUB_DT_DT',
    'DIVTIME'
];
export const bitShiftFunctionStr: string[] = ['SHL', 'SHR', 'ROR', 'ROL'];
export const bitWiseFunctionStr: string[] = ['AND', 'OR', 'XOR', 'NOT'];
export const selectionFunctionStr: string[] = ['SEL', 'MAX', 'MIN', 'LIMIT', 'MUX'];
export const comparisonFunctionStr: string[] = ['GT', 'GE', 'EQ', 'LT', 'LE', 'NE'];
export const characterStringFunctionStr: string[] = [
    'LEN',
    'LEFT',
    'RIGHT',
    'MID',
    'CONCAT',
    'CONCAT_DATE_TOD',
    'INSERT',
    'DELETE',
    'REPLACE',
    'FIND'
];

export const smcBasicFunctionStr: string[] = ['SMC_READAXISINFO', 'SMC_GETTIMENS', 'SMC_PARAMETERNUMBER_COE'];
export const extraLibraryDerivedStr: string[] = ['AXIS_REF', 'MC_CAM_REF'];
export const extraLibraryEnumStr: string[] = [
    'SMC_ERROR',
    'MC_Direction',
    'MC_BUFFER_MODE',
    'SMC_AXIS_STATE',
    'MC_TAPPETMODE',
    'SMC_CAM_TYPE',
    'MC_STARTMODE'
];

export const allFunctionBlockStr: string[] = keywordStr.concat(refOuterFunctionBlockStr).concat(extraLibraryDerivedStr);
export const allFunctionStr: string[] = typeConversionFunctionStr
    .concat(numericalFunctionStr)
    .concat(arithmeticFunctionStr)
    .concat(timeFunctionStr)
    .concat(bitShiftFunctionStr)
    .concat(bitWiseFunctionStr)
    .concat(selectionFunctionStr)
    .concat(comparisonFunctionStr)
    .concat(characterStringFunctionStr)
    .concat(smcBasicFunctionStr);

export const allCacheStr: string[] = allFunctionBlockStr.concat(allFunctionStr).concat(extraLibraryEnumStr);
export const noBasicAllCacheStr: string[] = refOuterFunctionBlockStr.concat(allFunctionStr);
export const referenceStr: string[] = numericalFunctionStr
    .concat(arithmeticFunctionStr)
    .concat(bitShiftFunctionStr)
    .concat(bitWiseFunctionStr)
    .concat(selectionFunctionStr)
    .concat(comparisonFunctionStr)
    .concat(characterStringFunctionStr.filter(item => item !== 'CONCAT_DATE_TOD'));

// 根据输入的字符串进行匹配
export function matchBasicAndCacheFunctionBlockStrings(input: string): string[] {
    const regex = new RegExp('^' + input, 'i'); // 创建不区分大小写的正则表达式
    return allFunctionBlockStr.filter(str => regex.test(str)); // 使用filter方法根据正则表达式进行匹配
}

export function matchFunctionStrings(input: string): string[] {
    const regex = new RegExp('^' + input, 'i'); // 创建不区分大小写的正则表达式
    return allFunctionStr.filter(str => regex.test(str)); // 使用filter方法根据正则表达式进行匹配
}

export function matchAllCacheStrings(input: string): string[] {
    const regex = new RegExp('^' + input, 'i'); // 创建不区分大小写的正则表达式
    return allCacheStr.filter(str => regex.test(str)); // 使用filter方法根据正则表达式进行匹配
}

export function matchExtraLibraryEnumStrings(input: string): string[] {
    const regex = new RegExp('^' + input, 'i');
    return extraLibraryEnumStr.filter(str => regex.test(str));
}

export function matchNoBasicAllCacheStrings(input: string): string[] {
    const regex = new RegExp('^' + input, 'i'); // 创建不区分大小写的正则表达式
    return noBasicAllCacheStr.filter(str => regex.test(str)); // 使用filter方法根据正则表达式进行匹配
}

export const checkDuplicateName = (arr: Methods[], accept: ValidationAcceptor) => {
    const nameSet = new Set<string>();
    arr.forEach(method => {
        if (nameSet.has(method.name)) {
            accept('error', `重复定义的方法名${method.name}`, {
                node: method,
                property: 'name'
            });
        } else {
            nameSet.add(method.name);
        }
    });
};

export function validateTimeFormat(value: string, timeType: string): string {
    let regex: any;
    if (timeType === 'TIME') {
        regex = TIME_REGEX;
    } else if (timeType === 'DATE') {
        regex = DATE_REGEX;
    } else if (timeType === 'DATE_AND_TIME') {
        regex = DT_REGEX;
    } else if (timeType === 'TIME_OF_DAY') {
        regex = TOD_REGEX;
    }
    if (!regex) {
        return `Invalid ${timeType} format`;
    }
    const match = regex.exec(value);
    if (match) {
        return '';
    } else {
        return `Invalid ${timeType} format`;
    }
}

export function basicDataType(expectType: string | undefined, typeName: Native_Type_Name) {
    if (typeName) {
        expectType =
            typeName.Real_type_name ||
            typeName.Bit_string_type_name ||
            typeName.Integer_type_name ||
            typeName.Unsigned_integer_type_name ||
            typeName.Bool_type_name ||
            typeName.String_type_name ||
            typeName.Date_type_name ||
            typeName.Time_type_name ||
            typeName.Date_And_time_type_name ||
            typeName.Time_Of_Day_type_name ||
            typeName.Cache_type_name;
    }
    let normalizedTypeName = expectType?.toUpperCase();
    if (normalizedTypeName === 'DT') {
        return 'DATE_AND_TIME';
    }
    if (normalizedTypeName === 'TOD') {
        return 'TIME_OF_DAY';
    }
    return expectType;
}

const signedIntegerTypeStr = ['SINT', 'INT', 'DINT', 'LINT'];
const unsignedIntegerTypeStr = ['USINT', 'UINT', 'UDINT', 'ULINT'];
const bitStringTypeStr = ['BYTE', 'WORD', 'DWORD', 'LWORD'];
const realTypeStr = ['REAL', 'LREAL'];

function normalizeBuiltinTypeName(typeName: string | undefined): string | undefined {
    if (!typeName) {
        return undefined;
    }
    let normalizedTypeName = typeName.toUpperCase();
    if (normalizedTypeName === 'DT') {
        return 'DATE_AND_TIME';
    }
    if (normalizedTypeName === 'TOD') {
        return 'TIME_OF_DAY';
    }
    return normalizedTypeName;
}

function createNativeTypeNameByName(typeName: string): Native_Type_Name {
    let astTypeName: Native_Type_Name = {
        $type: 'Native_Type_Name'
    };
    let normalizedTypeName = normalizeBuiltinTypeName(typeName) ?? typeName.toUpperCase();
    if (realTypeStr.includes(normalizedTypeName)) {
        astTypeName.Real_type_name = normalizedTypeName;
    } else if (bitStringTypeStr.includes(normalizedTypeName)) {
        astTypeName.Bit_string_type_name = normalizedTypeName;
    } else if (signedIntegerTypeStr.includes(normalizedTypeName)) {
        astTypeName.Integer_type_name = normalizedTypeName;
    } else if (unsignedIntegerTypeStr.includes(normalizedTypeName)) {
        astTypeName.Unsigned_integer_type_name = normalizedTypeName;
    } else if (normalizedTypeName === 'BOOL') {
        astTypeName.Bool_type_name = normalizedTypeName;
    } else if (normalizedTypeName === 'STRING') {
        astTypeName.String_type_name = normalizedTypeName;
    } else if (normalizedTypeName === 'DATE') {
        astTypeName.Date_type_name = normalizedTypeName;
    } else if (normalizedTypeName === 'TIME') {
        astTypeName.Time_type_name = normalizedTypeName;
    } else if (normalizedTypeName === 'DATE_AND_TIME') {
        astTypeName.Date_And_time_type_name = normalizedTypeName;
    } else if (normalizedTypeName === 'TIME_OF_DAY') {
        astTypeName.Time_Of_Day_type_name = normalizedTypeName;
    } else {
        astTypeName.Cache_type_name = typeName;
    }
    return astTypeName;
}

function createConstantByValue(aliasNode: Alias, value: string | number | boolean | undefined): Constant | undefined {
    if (value === undefined) {
        return undefined;
    }
    let constantValue: string | number;
    if (typeof value === 'boolean') {
        constantValue = value ? 'TRUE' : 'FALSE';
    } else {
        constantValue = value;
    }
    return {
        $container: aliasNode,
        $type: 'Constant',
        constant: constantValue
    };
}

type ResolvedNativeType = {
    typeName?: string;
    refNode?: AstNode;
};

function resolveExternalTypeName(typeName: string | undefined, visitedAlias = new Set<string>()): ResolvedNativeType {
    if (!typeName) {
        return {};
    }
    let normalizedTypeName = normalizeBuiltinTypeName(typeName) ?? typeName.toUpperCase();
    if (
        signedIntegerTypeStr.includes(normalizedTypeName) ||
        unsignedIntegerTypeStr.includes(normalizedTypeName) ||
        bitStringTypeStr.includes(normalizedTypeName) ||
        realTypeStr.includes(normalizedTypeName) ||
        normalizedTypeName === 'BOOL' ||
        normalizedTypeName === 'STRING' ||
        normalizedTypeName === 'DATE' ||
        normalizedTypeName === 'TIME' ||
        normalizedTypeName === 'DATE_AND_TIME' ||
        normalizedTypeName === 'TIME_OF_DAY'
    ) {
        return {
            typeName: normalizedTypeName
        };
    }
    let result = getRelatedElementAndLangiumDoc(typeName);
    if (!result) {
        return {
            typeName
        };
    }
    let [elementNode] = result;
    if (!elementNode || elementNode.elementType !== 'alias') {
        return {
            typeName
        };
    }
    let aliasNode = elementNode as AliasElement;
    let aliasName = aliasNode.elementName.toUpperCase();
    if (visitedAlias.has(aliasName)) {
        return {
            typeName: aliasNode.elementName,
            refNode: aliasNode
        };
    }
    visitedAlias.add(aliasName);
    let resolvedAliasType = resolveExternalTypeName(aliasNode.refName, visitedAlias);
    return {
        typeName: resolvedAliasType.typeName ?? aliasNode.elementName,
        refNode: resolvedAliasType.refNode ?? aliasNode
    };
}

function resolveNativeType(typeName: Native_Type_Name | undefined, visitedAlias = new Set<string>()): ResolvedNativeType {
    if (!typeName) {
        return {};
    }
    let basicTypeName = basicDataType(undefined, typeName);
    if (basicTypeName) {
        if (typeName.Cache_type_name) {
            return resolveExternalTypeName(typeName.Cache_type_name, visitedAlias);
        }
        return {
            typeName: basicTypeName
        };
    }
    let identifier = typeName.Identifier;
    if (!identifier) {
        return {};
    }
    let refNode = identifier.ref;
    if (!refNode) {
        return resolveExternalTypeName(identifier.$refText, visitedAlias);
    }
    if (isAlias(refNode)) {
        if (visitedAlias.has(refNode.name)) {
            return {
                typeName: refNode.name,
                refNode
            };
        }
        visitedAlias.add(refNode.name);
        let resolvedAliasType = resolveNativeType(refNode.refName, visitedAlias);
        return {
            typeName: resolvedAliasType.typeName ?? refNode.name,
            refNode: resolvedAliasType.refNode
        };
    }
    if ('name' in refNode && typeof refNode.name === 'string') {
        return {
            typeName: refNode.name,
            refNode
        };
    }
    return {
        typeName: identifier.$refText
    };
}

export function resolveNativeTypeName(typeName: Native_Type_Name | undefined): string | undefined {
    let resolvedNativeType = resolveNativeType(typeName);
    return resolvedNativeType.typeName;
}
export function isFloatOrDouble(str: string): boolean {
    // 使用正则表达式匹配浮点数或双精度浮点数的格式，但不包括整数
    // 浮点数格式：整数部分.小数部分
    // 双精度浮点数格式：整数部分.小数部分（可选）指数部分（e/E 指数）
    return /^[-+]?[0-9]*\.[0-9]+([eE][-+]?[0-9]+)?$/.test(str);
}
export function isDecimal(str: string): boolean {
    return /^\d*\.?\d+$/.test(str);
}

/**
     *   e.g.
             eachVarTypeName=String 返回[STRING,true]
             eachVarTypeName=Byd 返回[null,false]
     */
export function ignoreCase(eachVarTypeName: string): [string | null, boolean] {
    const upperStr = eachVarTypeName.toUpperCase();
    const matchedString = allFunctionBlockStr.find(validStr => validStr === upperStr);
    return matchedString ? [matchedString, true] : [null, false];
}

/**
 *
 * @param fromType SINT
 * @param toType  INT
 * @returns
 * SINT=>INT,这种返回false,不提示，
 * INT=>SINT,这种返回true才提示
 */

type SpecifiedType = 'SINT' | 'USINT' | 'INT' | 'UINT' | 'DINT' | 'UDINT' | 'LINT' | 'WORD' | 'DWORD' | 'LWORD' | 'BYTE' | 'BOOL' | 'ULINT';

function isSpecifiedType(value: string): value is SpecifiedType {
    return ['SINT', 'USINT', 'INT', 'UINT', 'DINT', 'UDINT', 'LINT', 'WORD', 'DWORD', 'LWORD', 'BYTE', 'BOOL', 'ULINT'].includes(
        value as SpecifiedType
    );
}
export function judgeNeedToHint(fromType: string | undefined, toType: string | undefined, varValue?: number | string): boolean {
    if (!fromType || !toType) {
        return true;
    }
    fromType = fromType.toUpperCase();
    toType = toType.toUpperCase();
    if (!isSpecifiedType(toType)) {
        return true;
    }
    /**add at 2025/08/18 start */
    /**
        VAR
            a:sint;

            END_VAR
            a:=0;
        END_VAR
        如果不加这段代码会报错不能将类型'BOOL'转化为'sint'类型(a都是sint,如果改为都是大写就不会报错)
     */
    if (fromType) {
        if (fromType.toLowerCase() === 'bool') {
            if (varValue) {
                if (varValue !== 1 && varValue !== 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    /**add at 2025/08/18 end */

    //bool类型只能有0和1
    if (toType) {
        if (toType.toLowerCase() === 'bool') {
            if (varValue) {
                if (varValue !== 1 && varValue !== 0) {
                    return true;
                }
            }
        }
    }
    switch (fromType) {
        case 'SINT':
            return toType === 'BOOL';
        case 'INT':
            return toType === 'SINT' || toType === 'BYTE';
        case 'UINT':
            return toType === 'SINT' || toType === 'INT' || toType === 'BYTE';
        case 'DINT':
            return toType === 'SINT' || toType === 'INT' || toType === 'UINT' || toType === 'WORD' || toType === 'BYTE';
        case 'UDINT':
            return (
                toType === 'SINT' || toType === 'INT' || toType === 'UINT' || toType === 'DINT' || toType === 'WORD' || toType === 'BYTE'
            );
        case 'LINT':
            return (
                toType === 'SINT' ||
                toType === 'INT' ||
                toType === 'UINT' ||
                toType === 'DINT' ||
                toType === 'UDINT' ||
                toType === 'WORD' ||
                toType === 'DWORD' ||
                toType === 'BYTE'
            );
        // 关键：新增 BYTE 分支
        case 'BYTE':
            // BYTE 能安全放进的整数类型都不提示
            if (
                toType === 'BYTE' || // 自身
                toType === 'USINT' ||
                toType === 'SINT' ||
                toType === 'INT' ||
                toType === 'UINT' ||
                toType === 'DINT' ||
                toType === 'UDINT' ||
                toType === 'LINT' ||
                toType === 'ULINT'
            ) {
                return false;
            }
            // 其他目标类型（比如 BOOL、WORD/DWORD/LWORD）如果你想慎重，可以保持提示
            return true;

        case 'ULINT':
            return (
                toType === 'SINT' ||
                toType === 'USINT' ||
                toType === 'INT' ||
                toType === 'UINT' ||
                toType === 'DINT' ||
                toType === 'UDINT' ||
                toType === 'LINT' ||
                toType === 'WORD' ||
                toType === 'DWORD' ||
                toType === 'LWORD' ||
                toType === 'BYTE'
            );
        default:
            return true;
    }
}
export function determineVariableType(varValue: string | number | Constant | Arr_string): string[] {
    let value = '';
    if (isArr_string(varValue)) {
        // let singleElements = varValue.arrElements;
        // singleElements.forEach(singleElement => {
        //     let innerElement = singleElement.constant;
        //     determineVariableType(innerElement);
        // });
    }
    if ((varValue as Constant).$type === 'Constant') {
        // varValue是Constant类型
        let data = varValue as Constant;
        let constant = data.constant;
        value = constant.toString();
    } else {
        value = varValue.toString();
    }
    if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
        return ['BOOL'];
    } else if (TIME_REGEX.test(value)) {
        return ['TIME'];
    } else if (DATE_REGEX.test(value)) {
        return ['DATE'];
    } else if (DT_REGEX.test(value)) {
        return ['DATE_AND_TIME'];
    } else if (TOD_REGEX.test(value)) {
        return ['TIME_OF_DAY'];
    } else if (/^-?\d+$/.test(value)) {
        return ['INT', 'UINT', 'DINT', 'UDINT', 'LINT', 'SINT', 'USINT', 'BYTE', 'WORD', 'DWORD', 'LWORD'];
    } else if (isFloatOrDouble(value)) {
        return ['REAL', 'LREAL'];
    } else if (typeof value === 'string') {
        return ['STRING'];
    } else {
        return ['UNKNOWN'];
    }
}
export function handleNotCaseSensitive(eachVarTypeName: any, typeName: Native_Type_Name, accept: ValidationAcceptor) {
    let type:
        | 'Bit_string_type_name'
        | 'Bool_type_name'
        | 'Integer_type_name'
        | 'Real_type_name'
        | 'String_type_name'
        | 'Unsigned_integer_type_name'
        | 'Date_And_time_type_name'
        | 'Date_type_name'
        | 'Time_Of_Day_type_name'
        | 'Time_type_name'
        | 'Cache_type_name';

    let sourceTypeName = basicDataType(eachVarTypeName, typeName);
    let resolvedNativeType = resolveNativeType(typeName);
    eachVarTypeName = resolvedNativeType.typeName ?? sourceTypeName;
    if (typeName.Real_type_name) {
        type = 'Real_type_name';
    } else if (typeName.Bit_string_type_name) {
        type = 'Bit_string_type_name';
    } else if (typeName.Integer_type_name) {
        type = 'Integer_type_name';
    } else if (typeName.Unsigned_integer_type_name) {
        type = 'Unsigned_integer_type_name';
    } else if (typeName.Bool_type_name) {
        type = 'Bool_type_name';
    } else if (typeName.String_type_name) {
        type = 'String_type_name';
    } else if (typeName.Date_And_time_type_name) {
        type = 'Date_And_time_type_name';
    } else if (typeName.Date_type_name) {
        type = 'Date_type_name';
    } else if (typeName.Time_Of_Day_type_name) {
        type = 'Time_Of_Day_type_name';
    } else if (typeName.Time_type_name) {
        type = 'Time_type_name';
    } else if (typeName.Cache_type_name) {
        type = 'Cache_type_name';
    } else {
        //添加默认值
        type = 'String_type_name';
    }
    let hintTarget = sourceTypeName ?? eachVarTypeName;
    let [matchedString, isSame] = ignoreCase(hintTarget);
    if (!isSame) {
        //t13: ADD_DT_TIME; 这种类型的就是符合这个条件的
        if ('Cache_type_name' === type) {
            let cacheName = typeName.Cache_type_name;
            if (cacheName) {
                let result = getRelatedElementAndLangiumDoc(cacheName);
                if (result) {
                    let [elementNode, langiumDocument] = result;
                    if (elementNode) {
                        if (elementNode.elementType === 'function') {
                            accept('error', `${eachVarTypeName}的类型为FUNCTION,不能实例化`, {
                                node: typeName,
                                property: 'Identifier'
                            });
                        }
                    }
                }
            }
        }
        // this.judgeVarTypeIsExisted(eachVarTypeName, accept, typeName);
    } else {
        if (hintTarget !== matchedString) {
            //都是小写那么就不提示了，只有有大写又有小写才提示
            if (!isLowerCase(hintTarget)) {
                if (type !== 'Cache_type_name' || !typeName.Cache_type_name || shouldHintCacheCase(typeName.Cache_type_name)) {
                    accept('hint', `did you mean '${matchedString}'?`, {
                        node: typeName,
                        property: type
                    });
                }
            }
        }
    }
    return eachVarTypeName;
}
export function handleNativeTypeName(typeName: Native_Type_Name, eachVarTypeName: any, accept: ValidationAcceptor) {
    if (!typeName) {
        return eachVarTypeName;
    }
    if (typeName.Identifier) {
        let basicTypeRef = typeName.Identifier;
        let resolvedNativeType = resolveNativeType(typeName);
        let ref = basicTypeRef.ref;
        if (resolvedNativeType.typeName) {
            eachVarTypeName = resolvedNativeType.typeName;
        }
        if (ref) {
            let resolvedRefNode = resolvedNativeType.refNode;
            if (isStFunction(ref) || (resolvedRefNode && isStFunction(resolvedRefNode))) {
                accept('error', `${eachVarTypeName}的类型为FUNCTION,不能实例化`, {
                    node: typeName,
                    property: 'Identifier'
                });
            }
        } else {
            let nodeDescription = basicTypeRef.$nodeDescription;
            if (nodeDescription) {
                if ('FunctionElement' === nodeDescription.type) {
                    accept('error', `${basicTypeRef.$refText}的类型为FUNCTION,不能实例化`, {
                        node: typeName,
                        property: 'Identifier'
                    });
                }
            }
        }
    } else {
        //eachVarTypeName = basicDataType(eachVarTypeName, typeName);
        if (accept) {
            eachVarTypeName = handleNotCaseSensitive(eachVarTypeName, typeName, accept);
        }
    }
    return eachVarTypeName;
}

export function handleNoAcceptNativeTypeName(typeName: Native_Type_Name, eachVarTypeName: any) {
    let resolvedNativeTypeName = resolveNativeTypeName(typeName);
    if (resolvedNativeTypeName) {
        eachVarTypeName = resolvedNativeTypeName;
    } else {
        eachVarTypeName = basicDataType(eachVarTypeName, typeName);
    }
    return eachVarTypeName;
}

export function transform2AstNode(composeNodeArr: ComposeNode[]): St {
    let root: St = {
        $type: 'St',
        function_block: [],
        itface: [],
        program: [],
        st_function: [],
        types_alias: [],
        types_enum: [],
        types_struct: [],
        types_union: []
    };
    composeNodeArr.forEach(composeNode => {
        let composeNodeElementArr = composeNode.elements;
        composeNodeElementArr.forEach(element => {
            if (element.elementType === 'alias') {
                let aliasElement = element as AliasElement;
                let astNode: Alias = {
                    $container: root,
                    $type: 'Alias',
                    name: aliasElement.elementName,
                    refName: createNativeTypeNameByName(aliasElement.refName)
                };
                let initialValue = createConstantByValue(astNode, aliasElement.initialValue);
                if (initialValue) {
                    astNode.initialValue = initialValue;
                }
                root.types_alias.push(astNode);
                return;
            }
            if (element.elementType === 'enum') {
                let enumElement = element as EnumElement;
                let astNode: StEnum = {
                    $container: root,
                    $type: 'StEnum',
                    enum: [],
                    name: enumElement.elementName
                };
                enumElement.enumChild.forEach(enumChild => {
                    let enumNode: Enum = {
                        $container: astNode,
                        $type: 'Enum',
                        variable_name: enumChild.enumVarName
                    };
                    if (enumChild.assignValue !== undefined) {
                        enumNode.assignValue = enumChild.assignValue.toString();
                    }
                    astNode.enum.push(enumNode);
                });
                root.types_enum.push(astNode);
                return;
            }
            let elementType = element.elementType;
            if (elementType === 'struct') {
                element = element as SingleElement;
                let varDeclArr = element.varDecls;
                let astNode: StructsList = {
                    $container: root,
                    $type: 'StructsList',
                    items: [],
                    name: ''
                };
                astNode.name = element.elementName;
                varDeclArr.forEach(varDecl => {
                    let varName = varDecl.varName;
                    let varType = varDecl.varType;
                    let cacheTypeName = createNativeTypeNameByName(varType);
                    let langiumVarDecl: Struct_Var_Decl_Init = {
                        $container: astNode,
                        $type: 'Struct_Var_Decl_Init',
                        nextVariables: [],
                        typeName: cacheTypeName,
                        variables: varName
                    };
                    astNode.items.push(langiumVarDecl);
                });
                root.types_struct.push(astNode);
            } else if (elementType === 'functionBlock') {
                element = element as FunctionBlockElement;
                let varDeclArr = element.varDecls;
                let astNode: FunctionBlock = {
                    $container: root,
                    $type: 'FunctionBlock',
                    name: '',
                    statementList: [],
                    methods: [],
                    varInputs: [],
                    varLocals: [],
                    varOutputs: []
                };
                astNode.name = element.elementName;
                varDeclArr.forEach(varDecl => {
                    let varName = varDecl.varName;
                    let varType = varDecl.varType;
                    let varGlobalType = varDecl.varGlobalType;
                    let cacheTypeName = createNativeTypeNameByName(varType);
                    if (varGlobalType) {
                        let langiumVarDecl: VarDeclarationInit;
                        if (varGlobalType === 'VAR_INPUT') {
                            let varInput: VarInput = {
                                $container: astNode,
                                $type: 'VarInput',
                                items: []
                            };
                            langiumVarDecl = {
                                $container: varInput,
                                $type: 'VarDeclarationInit',
                                nextVariables: [],
                                typeName: cacheTypeName,
                                variables: varName
                            };
                            varInput.items.push(langiumVarDecl);
                            astNode.varInputs.push(varInput);
                        } else if (varGlobalType === 'VAR') {
                            let varLocal: VarLocal = {
                                $container: astNode,
                                $type: 'VarLocal',
                                items: []
                            };
                            langiumVarDecl = {
                                $container: varLocal,
                                $type: 'VarDeclarationInit',
                                nextVariables: [],
                                typeName: cacheTypeName,
                                variables: varName
                            };
                            varLocal.items.push(langiumVarDecl);
                            astNode.varLocals.push(varLocal);
                        }
                    }
                });
                root.function_block.push(astNode);
            } //function不需要再声明中定义，所以不添加
        });
    });

    return root;
}

//define outer json format and transform to previous self json format
export type OuterComposeNode = {
    name: string;
    list: (OuterFunctionBlockElement | OuterFunctionElement | OuterStructElement | OuterAliasElement | OuterEnumElement)[];
};
export type OuterBasicElement = {
    name: string;
    type: ElementType;
    extensible: boolean;
    inputs: Array<any>;
    outputs: Array<any>;
    comment: string;
};
export type OuterFunctionBlockElement = OuterBasicElement & {
    usage: string;
};
export type OuterFunctionElement = OuterBasicElement & {
    filter: string;
    baseinputnumber: number;
};
export type OuterStructField = {
    name: string;
    type: string;
    comment: string;
};
export type OuterStructElement = {
    name: string;
    type: 'struct';
    elements: OuterStructField[];
    comment: string;
};
export type OuterAliasElement = {
    name: string;
    type: 'derived';
    base_type: string;
    comment: string;
    value?: string | number | boolean;
};
export type OuterEnumElement = {
    name: string;
    type: 'enum';
    values: string[];
    comment: string;
};

export function convertOuterNode2ComposeNode(outerComposeNodeArr: OuterComposeNode[]): ComposeNode[] {
    let composeNodeArr: ComposeNode[] = [];
    outerComposeNodeArr.forEach(outerComposeNode => {
        let rootName = outerComposeNode.name;
        let list = outerComposeNode.list;
        if (
            rootName === 'Additional function blocks' ||
            rootName === 'Standard function blocks' ||
            rootName === 'SMC_Basic function blocks'
        ) {
            let outerFunctionBlockElementArr = list as OuterFunctionBlockElement[];
            let composeNode: ComposeNode = {
                $type: 'ComposeNode',
                elements: []
            };
            for (let i = 0; i < outerFunctionBlockElementArr.length; i++) {
                let outerFunctionBlockElement = outerFunctionBlockElementArr[i];
                let inputs = outerFunctionBlockElement.inputs;
                let outputs = outerFunctionBlockElement.outputs;
                let functionBlockElement: FunctionBlockElement = {
                    $type: 'FunctionBlockElement',
                    elementType: 'functionBlock',
                    elementName: outerFunctionBlockElement.name,
                    varDecls: [],
                    rootName: rootName,
                    comment: outerFunctionBlockElement.comment,
                    usage: outerFunctionBlockElement.usage
                };
                inputs.forEach(input => {
                    let varDecl: VarDeclaration = {
                        $type: 'VarDeclaration',
                        varName: input[0],
                        varType: input[1],
                        //VAR VAR_INPUT  VAR_OUTPUT
                        varGlobalType: 'VAR_INPUT'
                    };
                    functionBlockElement.varDecls.push(varDecl);
                });
                outputs.forEach(output => {
                    let varDecl: VarDeclaration = {
                        $type: 'VarDeclaration',
                        varName: output[0],
                        varType: output[1],
                        //VAR VAR_INPUT  VAR_OUTPUT
                        varGlobalType: 'VAR_OUTPUT'
                    };
                    functionBlockElement.varDecls.push(varDecl);
                });
                composeNode.elements.push(functionBlockElement);
                if (i === outerFunctionBlockElementArr.length - 1) {
                    composeNodeArr.push(composeNode);
                }
            }
        } else if (rootName === 'extra_library') {
            let outerElementArr = list as (OuterStructElement | OuterAliasElement | OuterEnumElement)[];
            let composeNode: ComposeNode = {
                $type: 'ComposeNode',
                elements: []
            };
            for (let i = 0; i < outerElementArr.length; i++) {
                let outerElement = outerElementArr[i];
                if (outerElement.type === 'struct') {
                    let structElement: SingleElement = {
                        $type: 'SingleElement',
                        elementType: 'struct',
                        elementName: outerElement.name,
                        varDecls: [],
                        rootName: rootName,
                        comment: outerElement.comment
                    };
                    outerElement.elements.forEach(element => {
                        let varDecl: VarDeclaration = {
                            $type: 'VarDeclaration',
                            varName: element.name,
                            varType: element.type
                        };
                        structElement.varDecls.push(varDecl);
                    });
                    composeNode.elements.push(structElement);
                } else if (outerElement.type === 'derived') {
                    let aliasElement: AliasElement = {
                        $type: 'AliasElement',
                        elementType: 'alias',
                        elementName: outerElement.name,
                        refName: outerElement.base_type,
                        initialValue: outerElement.value,
                        varDecls: [],
                        rootName: rootName,
                        comment: outerElement.comment
                    };
                    composeNode.elements.push(aliasElement);
                } else if (outerElement.type === 'enum') {
                    let enumElement: EnumElement = {
                        $type: 'EnumElement',
                        elementType: 'enum',
                        elementName: outerElement.name,
                        enumChild: outerElement.values.map(enumValue => {
                            return {
                                enumVarName: enumValue
                            };
                        }),
                        rootName: rootName,
                        comment: outerElement.comment
                    };
                    composeNode.elements.push(enumElement);
                }
            }
            if (composeNode.elements.length > 0) {
                composeNodeArr.push(composeNode);
            }
        } else {
            let outerFunctionElementArr = list as OuterFunctionElement[];
            let composeNode: ComposeNode = {
                $type: 'ComposeNode',
                elements: []
            };
            for (let i = 0; i < outerFunctionElementArr.length; i++) {
                let outerFunctionElement = outerFunctionElementArr[i];
                let inputs = outerFunctionElement.inputs;
                let outputs = outerFunctionElement.outputs;
                let functionElement: FunctionElement = {
                    $type: 'FunctionElement',
                    elementType: 'function',
                    elementName: outerFunctionElement.name,
                    varDecls: [],
                    rootName: rootName,
                    comment: outerFunctionElement.comment
                };
                inputs.forEach(input => {
                    let varDecl: VarDeclaration = {
                        $type: 'VarDeclaration',
                        varName: input[0],
                        varType: input[1],
                        //VAR VAR_INPUT  VAR_OUTPUT
                        varGlobalType: 'VAR_INPUT'
                    };
                    functionElement.varDecls.push(varDecl);
                });
                outputs.forEach(output => {
                    let varDecl: VarDeclaration = {
                        $type: 'VarDeclaration',
                        varName: output[0],
                        varType: output[1],
                        //VAR VAR_INPUT  VAR_OUTPUT
                        varGlobalType: 'VAR_OUTPUT'
                    };
                    functionElement.varDecls.push(varDecl);
                });
                composeNode.elements.push(functionElement);
                if (i === outerFunctionElementArr.length - 1) {
                    composeNodeArr.push(composeNode);
                }
            }
        }
    });
    return composeNodeArr;
}

export function extractPathAfterPercent3A(url: string): string | null {
    // 找到 %3A 的位置（不区分大小写）
    const index = url.toLowerCase().indexOf('%3a');
    if (index === -1) {
        // 如果没有找到 %3A，返回 null 或者按需处理
        return null;
    }
    // 截取 %3A 后面的内容
    return url.slice(index + 3); // %3A 占3个字符
}

export function removeBeforeColon(path: string): string {
    // 找到冒号的位置
    const index = path.indexOf(':');
    if (index === -1) {
        // 如果没有找到冒号，返回原始字符串或根据需要处理
        return path;
    }

    // 返回冒号后面的内容
    return path.slice(index + 1);
}
