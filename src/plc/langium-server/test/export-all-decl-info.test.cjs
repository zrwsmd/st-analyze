const test = require('node:test');
const assert = require('node:assert/strict');

const {
    cleanupWorkspace,
    configureVscodeMock,
    createChangeDocument,
    createWorkspace,
    getComposeNode,
    getElement,
    getVarDecl,
    loadHandleExportInfoModule,
    shared
} = require('./helpers/export-info-test-utils.cjs');

const diagnosticError = (message, range) => ({
    severity: 0,
    message,
    range
});

const diagnosticRange = (startLine, startCharacter, endLine, endCharacter) => ({
    start: { line: startLine, character: startCharacter },
    end: { line: endLine, character: endCharacter }
});

// 初始化筛文件时，带有 Error 级别诊断的 ST 文件应被跳过。
test('loadInitializeAvaiableFile skips files with VSCode error diagnostics', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'good.st': `
PROGRAM Good
VAR
    value: INT;
END_VAR
END_PROGRAM
`,
        'bad.st': `
PROGRAM Bad
VAR
    value: INT;
END_VAR
END_PROGRAM
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {
                [workspace.filePathByRelativePath['bad.st']]: [diagnosticError('declaration failed', diagnosticRange(3, 4, 3, 14))]
            }
        });

        const files = await handleExportInfo.loadInitializeAvaiableFile('.st');
        const normalizedPaths = files.map(file => file.fsPath.toLowerCase()).sort();

        assert.deepEqual(normalizedPaths, [workspace.filePathByRelativePath['good.st'].toLowerCase()]);
    } finally {
        await cleanupWorkspace(workspace);
    }
});

// 只有表达式区报错时，不应影响文件进入导出列表。
test('loadInitializeAvaiableFile keeps files when VSCode errors are only in expressions', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'expr-only.st': `PROGRAM ExprOnly
VAR
    value: INT;
END_VAR

value := missingValue;
END_PROGRAM
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {
                [workspace.filePathByRelativePath['expr-only.st']]: [diagnosticError('unknown variable', diagnosticRange(5, 0, 5, 20))]
            }
        });

        const files = await handleExportInfo.loadInitializeAvaiableFile('.st');
        const normalizedPaths = files.map(file => file.fsPath.toLowerCase());

        assert.deepEqual(normalizedPaths, [workspace.filePathByRelativePath['expr-only.st'].toLowerCase()]);
    } finally {
        await cleanupWorkspace(workspace);
    }
});

// 全量导出时，应正确导出变量列表、跨文件 refFilePath 和外部库类型。
test('handleBusiness exports variable lists, refFilePath, and external-library types', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'types.st': `
TYPE
    China: STRUCT
        provinceId: INT;
        provinceName: STRING;
    END_STRUCT
END_TYPE

TYPE
    SpeedAlias: INT := 1;
END_TYPE

TYPE
    RunMode: (
        STOP := 0,
        AUTO := 1
    )
END_TYPE

FUNCTION_BLOCK TemperatureConverter2
VAR_INPUT
    setpoint: INT;
END_VAR
VAR_OUTPUT
    done: BOOL;
END_VAR
VAR
    realA, realB: REAL;
    dateTimeA: DATE_AND_TIME;
    todTimer: TIME_OF_DAY;
END_VAR
END_FUNCTION_BLOCK
`,
        'main.st': `
PROGRAM PLC_PRG
VAR
    tempConverter: TemperatureConverter2;
    chinaInst: China;
    speed: SpeedAlias;
    customMode: RunMode;
    axis: AXIS_REF;
    ref: MC_TP_REF;
    bufferMode: MC_BUFFER_MODE;
    dateTimeA, dateTimeB: DATE_AND_TIME;
    todValue: TIME_OF_DAY;
END_VAR
END_PROGRAM
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {}
        });

        const result = await handleExportInfo.handleBusiness(
            [],
            [workspace.uriByRelativePath['types.st'], workspace.uriByRelativePath['main.st']],
            'basic',
            shared.workspace.LangiumDocumentFactory
        );

        assert.equal(result.length, 2);

        const typesComposeNode = getComposeNode(result, workspace.uriByRelativePath['types.st']);
        const mainComposeNode = getComposeNode(result, workspace.uriByRelativePath['main.st']);

        const functionBlock = getElement(typesComposeNode, 'TemperatureConverter2', 'functionBlock');
        assert.equal(getVarDecl(functionBlock, 'realA').varType, 'REAL');
        assert.equal(getVarDecl(functionBlock, 'realB').varType, 'REAL');
        assert.equal(getVarDecl(functionBlock, 'dateTimeA').varType, 'DATE_AND_TIME');
        assert.equal(getVarDecl(functionBlock, 'todTimer').varType, 'TIME_OF_DAY');

        const aliasElement = getElement(typesComposeNode, 'SpeedAlias', 'alias');
        assert.equal(aliasElement.refName, 'INT');

        const enumElement = getElement(typesComposeNode, 'RunMode', 'enum');
        assert.deepEqual(
            enumElement.enumChild.map(item => item.enumVarName),
            ['STOP', 'AUTO']
        );

        const program = getElement(mainComposeNode, 'PLC_PRG', 'program');

        assert.deepEqual(getVarDecl(program, 'tempConverter'), {
            $type: 'VarDeclaration',
            varGlobalType: 'VAR',
            varName: 'tempConverter',
            varType: 'TemperatureConverter2',
            refFilePath: `${workspace.uriByRelativePath['types.st'].toString()}@functionBlock`
        });
        assert.deepEqual(getVarDecl(program, 'chinaInst'), {
            $type: 'VarDeclaration',
            varGlobalType: 'VAR',
            varName: 'chinaInst',
            varType: 'China',
            refFilePath: `${workspace.uriByRelativePath['types.st'].toString()}@struct`
        });
        assert.deepEqual(getVarDecl(program, 'speed'), {
            $type: 'VarDeclaration',
            varGlobalType: 'VAR',
            varName: 'speed',
            varType: 'SpeedAlias',
            refFilePath: `${workspace.uriByRelativePath['types.st'].toString()}@alias`
        });
        assert.deepEqual(getVarDecl(program, 'customMode'), {
            $type: 'VarDeclaration',
            varGlobalType: 'VAR',
            varName: 'customMode',
            varType: 'RunMode',
            refFilePath: `${workspace.uriByRelativePath['types.st'].toString()}@enum`
        });

        assert.equal(getVarDecl(program, 'axis').varType, 'AXIS_REF');
        assert.equal(getVarDecl(program, 'axis').refFilePath, undefined);
        assert.equal(getVarDecl(program, 'ref').varType, 'MC_TP_REF');
        assert.equal(getVarDecl(program, 'ref').refFilePath, undefined);
        assert.equal(getVarDecl(program, 'bufferMode').varType, 'MC_BUFFER_MODE');
        assert.equal(getVarDecl(program, 'bufferMode').refFilePath, undefined);
        assert.equal(getVarDecl(program, 'dateTimeA').varType, 'DATE_AND_TIME');
        assert.equal(getVarDecl(program, 'dateTimeB').varType, 'DATE_AND_TIME');
        assert.equal(getVarDecl(program, 'todValue').varType, 'TIME_OF_DAY');
    } finally {
        await cleanupWorkspace(workspace);
    }
});

// onSave 增量更新时，应刷新当前文件导出结果且保留跨文件引用关系。
test('handleBusiness refreshes changed files on onSave without losing cross-file references', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'types.st': `
TYPE
    RunMode: (
        STOP := 0,
        AUTO := 1
    )
END_TYPE
`,
        'main.st': `
PROGRAM PLC_PRG
VAR
    customMode: RunMode;
    axis: AXIS_REF;
END_VAR
END_PROGRAM
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {}
        });

        const allFiles = [workspace.uriByRelativePath['types.st'], workspace.uriByRelativePath['main.st']];
        const initialResult = await handleExportInfo.handleBusiness([], allFiles, 'basic', shared.workspace.LangiumDocumentFactory);

        const changedMainText = `
PROGRAM PLC_PRG
VAR
    customMode: RunMode;
    camRef: MC_CAM_REF;
END_VAR
END_PROGRAM
`;

        const savedResult = await handleExportInfo.handleBusiness(
            initialResult,
            allFiles,
            'onSave',
            shared.workspace.LangiumDocumentFactory,
            createChangeDocument(workspace.uriByRelativePath['main.st'], changedMainText, 2)
        );

        const mainComposeNode = getComposeNode(savedResult, workspace.uriByRelativePath['main.st']);
        const program = getElement(mainComposeNode, 'PLC_PRG', 'program');

        assert.equal(
            program.varDecls.some(item => item.varName === 'axis'),
            false
        );
        assert.equal(getVarDecl(program, 'camRef').varType, 'MC_CAM_REF');
        assert.equal(getVarDecl(program, 'camRef').refFilePath, undefined);
        assert.equal(getVarDecl(program, 'customMode').refFilePath, `${workspace.uriByRelativePath['types.st'].toString()}@enum`);
    } finally {
        await cleanupWorkspace(workspace);
    }
});

// onSave 时如果只有表达式报错，声明区变量仍应继续导出。
test('handleBusiness keeps exporting declarations on onSave when only expressions have errors', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'main.st': `
PROGRAM PLC_PRG
VAR
    value: INT;
END_VAR

value := 1;
END_PROGRAM
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {}
        });

        const allFiles = [workspace.uriByRelativePath['main.st']];
        const initialResult = await handleExportInfo.handleBusiness([], allFiles, 'basic', shared.workspace.LangiumDocumentFactory);

        const changedMainText = `
PROGRAM PLC_PRG
VAR
    value: INT;
END_VAR

value := missingValue;
END_PROGRAM
`;

        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {
                [workspace.filePathByRelativePath['main.st']]: [diagnosticError('unknown variable', diagnosticRange(6, 0, 6, 21))]
            }
        });

        const savedResult = await handleExportInfo.handleBusiness(
            initialResult,
            allFiles,
            'onSave',
            shared.workspace.LangiumDocumentFactory,
            createChangeDocument(workspace.uriByRelativePath['main.st'], changedMainText, 2)
        );

        const mainComposeNode = getComposeNode(savedResult, workspace.uriByRelativePath['main.st']);
        const program = getElement(mainComposeNode, 'PLC_PRG', 'program');
        assert.equal(getVarDecl(program, 'value').varType, 'INT');
    } finally {
        await cleanupWorkspace(workspace);
    }
});

// 应导出 GVL 本体，并给 PROGRAM 中的 VAR_EXTERNAL 变量补上全局变量引用关系。
test('handleBusiness exports GVL nodes and program VAR_EXTERNAL global references', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'GVL_1.st': `
VAR_GLOBAL
    gStart: BOOL := TRUE;
    gCount: INT := 0;
    gLamp: BOOL := FALSE;
END_VAR
`,
        'main.st': `
PROGRAM PLC_PRG
VAR_EXTERNAL
    gStart: BOOL;
    gCount: INT;
    gLamp: BOOL;
END_VAR
END_PROGRAM
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {}
        });

        const result = await handleExportInfo.handleBusiness(
            [],
            [workspace.uriByRelativePath['GVL_1.st'], workspace.uriByRelativePath['main.st']],
            'basic',
            shared.workspace.LangiumDocumentFactory
        );

        const gvlComposeNode = getComposeNode(result, workspace.uriByRelativePath['GVL_1.st']);
        const mainComposeNode = getComposeNode(result, workspace.uriByRelativePath['main.st']);

        const gvl = getElement(gvlComposeNode, 'GVL_1', 'globalVarList');
        assert.equal(getVarDecl(gvl, 'gStart').varGlobalType, 'VAR_GLOBAL');
        assert.equal(getVarDecl(gvl, 'gCount').varType, 'INT');
        assert.equal(getVarDecl(gvl, 'gLamp').varType, 'BOOL');

        const program = getElement(mainComposeNode, 'PLC_PRG', 'program');
        assert.deepEqual(getVarDecl(program, 'gStart'), {
            $type: 'VarDeclaration',
            varGlobalType: 'VAR_EXTERNAL',
            varName: 'gStart',
            varType: 'BOOL',
            refGlobalFilePath: `${workspace.uriByRelativePath['GVL_1.st'].toString()}@globalVarList`,
            refGlobalVarListName: 'GVL_1',
            refGlobalVarName: 'gStart'
        });
        assert.deepEqual(getVarDecl(program, 'gCount'), {
            $type: 'VarDeclaration',
            varGlobalType: 'VAR_EXTERNAL',
            varName: 'gCount',
            varType: 'INT',
            refGlobalFilePath: `${workspace.uriByRelativePath['GVL_1.st'].toString()}@globalVarList`,
            refGlobalVarListName: 'GVL_1',
            refGlobalVarName: 'gCount'
        });
    } finally {
        await cleanupWorkspace(workspace);
    }
});

// 应导出 FUNCTION_BLOCK 中的 VAR_EXTERNAL 变量，并补上对应 GVL 引用关系。
test('handleBusiness exports function block VAR_EXTERNAL global references', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'GVL_1.st': `
VAR_GLOBAL
    gStart: BOOL := TRUE;
END_VAR
`,
        'fb.st': `
FUNCTION_BLOCK FbTest
VAR_EXTERNAL
    gStart: BOOL;
END_VAR
END_FUNCTION_BLOCK
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {}
        });

        const result = await handleExportInfo.handleBusiness(
            [],
            [workspace.uriByRelativePath['GVL_1.st'], workspace.uriByRelativePath['fb.st']],
            'basic',
            shared.workspace.LangiumDocumentFactory
        );

        const fbComposeNode = getComposeNode(result, workspace.uriByRelativePath['fb.st']);
        const functionBlock = getElement(fbComposeNode, 'FbTest', 'functionBlock');
        assert.deepEqual(getVarDecl(functionBlock, 'gStart'), {
            $type: 'VarDeclaration',
            varGlobalType: 'VAR_EXTERNAL',
            varName: 'gStart',
            varType: 'BOOL',
            refGlobalFilePath: `${workspace.uriByRelativePath['GVL_1.st'].toString()}@globalVarList`,
            refGlobalVarListName: 'GVL_1',
            refGlobalVarName: 'gStart'
        });
    } finally {
        await cleanupWorkspace(workspace);
    }
});

// 批量导出时，最后一个文件声明区报错也不能把前面正常文件的结果丢掉。
test('handleBusiness keeps valid files when the last file has declaration errors', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'good.st': `
PROGRAM Good
VAR
    value: INT;
END_VAR
END_PROGRAM
`,
        'bad.st': `
PROGRAM Bad
VAR
    value: MissingType;
END_VAR
END_PROGRAM
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {
                [workspace.filePathByRelativePath['bad.st']]: [diagnosticError('unknown type', diagnosticRange(3, 11, 3, 22))]
            }
        });

        const result = await handleExportInfo.handleBusiness(
            [],
            [workspace.uriByRelativePath['good.st'], workspace.uriByRelativePath['bad.st']],
            'basic',
            shared.workspace.LangiumDocumentFactory
        );

        assert.equal(result.length, 1);
        assert.equal(result[0].filePath, workspace.uriByRelativePath['good.st'].toString());
    } finally {
        await cleanupWorkspace(workspace);
    }
});

// onSave 时如果当前文件声明区报错，应跳过该文件的导出结果。
test('handleBusiness skips changed files on onSave when declaration errors exist', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'main.st': `
PROGRAM PLC_PRG
VAR
    value: INT;
END_VAR

value := 1;
END_PROGRAM
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {}
        });

        const allFiles = [workspace.uriByRelativePath['main.st']];
        const initialResult = await handleExportInfo.handleBusiness([], allFiles, 'basic', shared.workspace.LangiumDocumentFactory);

        const changedMainText = `
PROGRAM PLC_PRG
VAR
    value: MissingType;
END_VAR

value := 1;
END_PROGRAM
`;

        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {
                [workspace.filePathByRelativePath['main.st']]: [diagnosticError('unknown type', diagnosticRange(3, 11, 3, 22))]
            }
        });

        const savedResult = await handleExportInfo.handleBusiness(
            initialResult,
            allFiles,
            'onSave',
            shared.workspace.LangiumDocumentFactory,
            createChangeDocument(workspace.uriByRelativePath['main.st'], changedMainText, 2)
        );

        assert.equal(savedResult.length, 0);
    } finally {
        await cleanupWorkspace(workspace);
    }
});

// 导出阶段遇到语法坏文件时，应跳过坏文件且不影响其他正常文件。
test('handleBusiness skips files with syntax errors during export generation', async () => {
    const handleExportInfo = await loadHandleExportInfoModule();
    const workspace = await createWorkspace({
        'good.st': `
PROGRAM Good
VAR
    value: INT;
END_VAR
END_PROGRAM
`,
        'broken.st': `
PROGRAM Broken
VAR
    broken: ;
END_VAR
END_PROGRAM
`
    });

    try {
        configureVscodeMock({
            workspaceRoot: workspace.workspaceRoot,
            diagnosticsByPath: {}
        });

        const result = await handleExportInfo.handleBusiness(
            [],
            [workspace.uriByRelativePath['good.st'], workspace.uriByRelativePath['broken.st']],
            'basic',
            shared.workspace.LangiumDocumentFactory
        );

        assert.equal(result.length, 1);
        assert.equal(result[0].filePath, workspace.uriByRelativePath['good.st'].toString());
        assert.equal(result[0].elements[0].elementName, 'Good');
    } finally {
        await cleanupWorkspace(workspace);
    }
});
