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
