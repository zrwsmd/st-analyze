const test = require('node:test');
const assert = require('node:assert/strict');

const { getCompletionLabels, getDiagnostics, getErrorMessages } = require('./helpers/langium-test-utils.cjs');

test('AXIS_REF behaves like INT in assignments and arithmetic', async () => {
    const diagnostics = await getDiagnostics({
        label: 'external-alias-axis-ref',
        text: `
PROGRAM Main
VAR
    axis1: AXIS_REF;
    axis2: AXIS_REF;
    raw: INT;
END_VAR

axis1 := 1;
axis2 := 2;
raw := axis1;
axis1 := raw;
axis1 := axis1 + 1;
END_PROGRAM
`
    });

    assert.deepEqual(getErrorMessages(diagnostics), []);
});

test('MC_CAM_REF behaves like UINT in assignments', async () => {
    const diagnostics = await getDiagnostics({
        label: 'external-alias-mc-cam-ref',
        text: `
PROGRAM Main
VAR
    camRef: MC_CAM_REF;
    raw: UINT;
END_VAR

camRef := 1;
raw := camRef;
camRef := raw;
END_PROGRAM
`
    });

    assert.deepEqual(getErrorMessages(diagnostics), []);
});

test('type-name completion includes external aliases', async () => {
    const axisLabels = await getCompletionLabels({
        label: 'external-alias-axis-completion',
        text: `
PROGRAM Main
VAR
    axis: AXI/*cursor*/
END_VAR
END_PROGRAM
`
    });

    const camLabels = await getCompletionLabels({
        label: 'external-alias-cam-completion',
        text: `
PROGRAM Main
VAR
    cam: MC_CA/*cursor*/
END_VAR
END_PROGRAM
`
    });

    assert.ok(axisLabels.includes('AXIS_REF'));
    assert.ok(camLabels.includes('MC_CAM_REF'));
});
