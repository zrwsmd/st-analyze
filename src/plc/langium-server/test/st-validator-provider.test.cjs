const test = require('node:test');
const assert = require('node:assert/strict');

const { getDiagnostics, getErrorMessages } = require('./helpers/langium-test-utils.cjs');

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
