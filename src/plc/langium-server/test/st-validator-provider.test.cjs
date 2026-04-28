const test = require('node:test');
const assert = require('node:assert/strict');

const { getDiagnostics, getErrorMessages, shared, withDocuments } = require('./helpers/langium-test-utils.cjs');

test('st-validator accepts alias compatibility with base numeric types', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-alias-compatibility',
        text: `
PROGRAM Main
VAR
    axis1: AXIS_REF;
    raw: INT;
END_VAR

axis1 := 1;
raw := axis1;
axis1 := raw;
axis1 := axis1 + 1;
END_PROGRAM
`
    });

    assert.deepEqual(getErrorMessages(diagnostics), []);
});

test('st-validator reports external struct member type mismatches', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-struct-type-mismatch',
        text: `
PROGRAM Main
VAR
    ref: MC_TP_REF;
END_VAR

ref.IsAbsolute := 23;
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('BOOL')));
});

test('st-validator rejects invalid external enum members', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-invalid-enum-member',
        text: `
PROGRAM Main
VAR
    mode: MC_BUFFER_MODE;
END_VAR

mode := MC_BUFFER_MODE#BadValue;
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('BadValue')));
    assert.ok(errorMessages.some(message => message.includes('MC_BUFFER_MODE')));
});

test('st-validator rejects invalid external function block parameter names', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-invalid-fb-param-name',
        text: `
PROGRAM Main
VAR
    track: SMC_TrackAxis;
END_VAR

track(BadParam := TRUE);
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('BadParam')));
});

test('st-validator rejects invalid external function block parameter types', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-invalid-fb-param-type',
        text: `
PROGRAM Main
VAR
    track: SMC_TrackAxis;
END_VAR

track(Velocity := TRUE);
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('LREAL')));
});

test('st-validator reports enum type mismatches across external enums', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-enum-type-mismatch',
        text: `
PROGRAM Main
VAR
    mode: MC_BUFFER_MODE;
END_VAR

IF mode = MC_Direction#positive THEN
END_IF
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('MC_Direction')));
    assert.ok(errorMessages.some(message => message.includes('MC_BUFFER_MODE')));
});

test('st-validator accepts DT and TOD abbreviations for type names and literals', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-dt-tod-abbreviation',
        text: `
PROGRAM Main
VAR
    testDateTime: DT := DT#2024-04-16-23:33:00.22;
    testTod: TOD := TOD#23:33:00.22;
END_VAR
END_PROGRAM
`
    });

    assert.deepEqual(getErrorMessages(diagnostics), []);
});

test('st-validator rejects assigning BOOL literals to INT variables', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-bool-to-int-assignment',
        text: `
PROGRAM Main
VAR
    value: INT;
END_VAR

value := TRUE;
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('BOOL')));
    assert.ok(errorMessages.some(message => message.includes('INT')));
});

test('st-validator accepts VAR_EXTERNAL declarations for non-qualified GVL variables', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-var-external-ok',
        extra: [
            {
                label: 'GVL_1',
                uriPath: 'GVL_1.st',
                text: `
VAR_GLOBAL
    gStart: BOOL := TRUE;
    gCount: INT := 0;
    gLamp: BOOL := FALSE;
END_VAR
`
            }
        ],
        text: `
FUNCTION_BLOCK FbTest
VAR_EXTERNAL
    gStart: BOOL;
    gCount: INT;
    gLamp: BOOL;
END_VAR

IF gStart THEN
    gCount := gCount + 1;
END_IF
END_FUNCTION_BLOCK
`
    });

    assert.deepEqual(getErrorMessages(diagnostics), []);
});

test('st-validator rejects VAR_EXTERNAL declarations for qualified-only GVL variables', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-var-external-qualified-only',
        extra: [
            {
                label: 'GVL_1',
                uriPath: 'GVL_1.st',
                text: `
{attribute 'qualified_only'}
VAR_GLOBAL
    gStart: BOOL := TRUE;
END_VAR
`
            }
        ],
        text: `
PROGRAM Main
VAR_EXTERNAL
    gStart: BOOL;
END_VAR

gStart := TRUE;
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('qualified_only')));
});

test('st-validator rejects VAR_EXTERNAL declarations that do not exist in any GVL', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-var-external-missing',
        extra: [
            {
                label: 'GVL_1',
                uriPath: 'GVL_1.st',
                text: `
VAR_GLOBAL
    gStart: BOOL := TRUE;
END_VAR
`
            }
        ],
        text: `
PROGRAM Main
VAR_EXTERNAL
    missingGlobal: BOOL;
END_VAR

missingGlobal := TRUE;
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('不存在')));
});

test('st-validator rejects VAR_EXTERNAL declarations whose type mismatches the GVL type', async () => {
    const diagnostics = await getDiagnostics({
        label: 'st-validator-var-external-type-mismatch',
        extra: [
            {
                label: 'GVL_1',
                uriPath: 'GVL_1.st',
                text: `
VAR_GLOBAL
    gCount: INT := 0;
END_VAR
`
            }
        ],
        text: `
PROGRAM Main
VAR_EXTERNAL
    gCount: BOOL;
END_VAR

gCount := FALSE;
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('类型')));
    assert.ok(errorMessages.some(message => message.includes('gCount')));
});

test('documents with VAR_EXTERNAL are marked affected when a GVL file changes', async () => {
    await withDocuments(
        {
            main: {
                label: 'Program',
                uriPath: 'Program.st',
                text: `
PROGRAM Main
VAR_EXTERNAL
    gStart: BOOL;
END_VAR

gStart := TRUE;
END_PROGRAM
`
            },
            extra: [
                {
                    label: 'GVL_1',
                    uriPath: 'GVL_1.st',
                    text: `
VAR_GLOBAL
    gStart: BOOL := TRUE;
END_VAR
`
                }
            ]
        },
        async ({ mainRecord, extraRecords, services }) => {
            const changedUris = new Set([extraRecords[0].uri.toString()]);
            const affected = services.shared.workspace.IndexManager.isAffected(mainRecord.document, changedUris);
            assert.equal(affected, true);
        }
    );
});
