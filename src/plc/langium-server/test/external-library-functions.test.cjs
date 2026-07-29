const test = require('node:test');
const assert = require('node:assert/strict');

const { getCompletionLabels, getDiagnostics, getErrorMessages } = require('./helpers/langium-test-utils.cjs');

test('external function blocks and functions can be declared and used without errors', async () => {
    const diagnostics = await getDiagnostics({
        label: 'external-library-functions-ok',
        text: `
PROGRAM Main
VAR
    axis: AXIS_REF;
    tonFb: TON;
    trackFb: SMC_TrackAxis;
    value: DINT;
    timeNs: ULINT;
END_VAR

value := ABS(-1);
timeNs := SMC_GetTimeNS();
END_PROGRAM
`
    });

    assert.deepEqual(getErrorMessages(diagnostics), []);
});

test('external library functions accept valid named input and output parameters', async () => {
    const diagnostics = await getDiagnostics({
        label: 'external-library-function-valid-params',
        text: `
PROGRAM Main
VAR
    left: DINT;
    right: DINT;
    result: DINT;
    greater: BOOL;
END_VAR

SUB(IN1 := left, IN2 := right, OUT => result);
GT(IN1 := left, IN2 := right, OUT => greater);
ABS(IN := result, OUT => result);
END_PROGRAM
`
    });

    assert.deepEqual(getErrorMessages(diagnostics), []);
});

test('external library functions reject invalid named input and output parameters', async () => {
    const diagnostics = await getDiagnostics({
        label: 'external-library-function-invalid-params',
        text: `
PROGRAM Main
VAR
    left: DINT;
    right: DINT;
    result: DINT;
    greater: BOOL;
END_VAR

SUB(OUT := result, IN2 := right);
GT(BadParam := left, IN2 := right, OUT => greater);
ABS(IN => result);
END_PROGRAM
`
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('OUT') && message.includes('SUB')));
    assert.ok(errorMessages.some(message => message.includes('BadParam') && message.includes('GT')));
    assert.ok(errorMessages.some(message => message.includes('IN') && message.includes('ABS')));
});

test('type-name completion includes external function blocks', async () => {
    const labels = await getCompletionLabels({
        label: 'external-library-function-block-completion',
        text: `
PROGRAM Main
VAR
    fb: SMC_Tr/*cursor*/
END_VAR
END_PROGRAM
`
    });

    assert.ok(labels.includes('SMC_TRACKAXIS'));
    assert.ok(labels.includes('SMC_TRACKSETVALUES'));
});
