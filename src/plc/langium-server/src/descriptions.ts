import { AstNode } from 'langium';
import { FunctionBlock, StFunction, StructsList } from './generated/ast.js';

export type TypeDescription =
    | StructTypeDescription
    | ErrorType
    | FunctionBlockTypeDescription
    | FunctionTypeDescription
    | CacheTypeDescription;

export interface StructTypeDescription {
    readonly $type: 'struct';
    readonly literal: StructsList;
}

export function createStructType(literal: StructsList): StructTypeDescription {
    return {
        $type: 'struct',
        literal
    };
}

export function isStructType(item: TypeDescription): item is StructTypeDescription {
    return item.$type === 'struct';
}

export interface FunctionBlockTypeDescription {
    readonly $type: 'functionBlock';
    readonly literal: FunctionBlock;
}

export function createFunctionBlockType(literal: FunctionBlock): FunctionBlockTypeDescription {
    return {
        $type: 'functionBlock',
        literal
    };
}

export function isFunctionBlockType(item: TypeDescription): item is FunctionBlockTypeDescription {
    return item.$type === 'functionBlock';
}

export interface FunctionTypeDescription {
    readonly $type: 'function';
    readonly literal: StFunction;
}

export function createFunctionType(literal: StFunction): FunctionTypeDescription {
    return {
        $type: 'function',
        literal
    };
}

export function isFunctionType(item: TypeDescription): item is FunctionTypeDescription {
    return item.$type === 'function';
}

export interface ErrorType {
    readonly $type: 'error';
    readonly source?: AstNode;
    readonly message: string;
}

export function createErrorType(message: string, source?: AstNode): ErrorType {
    return {
        $type: 'error',
        message,
        source
    };
}

export function isErrorType(item: TypeDescription): item is ErrorType {
    return item.$type === 'error';
}
export interface CacheTypeDescription {
    readonly $type: 'cache';
    readonly literal: string;
}

export function createCacheType(literal: string): CacheTypeDescription {
    return {
        $type: 'cache',
        literal
    };
}

export function isCacheType(item: TypeDescription): item is CacheTypeDescription {
    return item.$type === 'cache';
}
