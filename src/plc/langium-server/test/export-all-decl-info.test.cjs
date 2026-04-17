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

const diagnosticError = message => ({
    severity: 0,
    message
});

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
                [workspace.filePathByRelativePath['bad.st']]: [diagnosticError('parser failed')]
            }
        });

        const files = await handleExportInfo.loadInitializeAvaiableFile('.st');
        const normalizedPaths = files
            .map(file => file.fsPath.toLowerCase())
            .sort();

        assert.deepEqual(normalizedPaths, [workspace.filePathByRelativePath['good.st'].toLowerCase()]);
    } finally {
        await cleanupWorkspace(workspace);
    }
});

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

        assert.equal(program.varDecls.some(item => item.varName === 'axis'), false);
        assert.equal(getVarDecl(program, 'camRef').varType, 'MC_CAM_REF');
        assert.equal(getVarDecl(program, 'camRef').refFilePath, undefined);
        assert.equal(
            getVarDecl(program, 'customMode').refFilePath,
            `${workspace.uriByRelativePath['types.st'].toString()}@enum`
        );
    } finally {
        await cleanupWorkspace(workspace);
    }
});

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
