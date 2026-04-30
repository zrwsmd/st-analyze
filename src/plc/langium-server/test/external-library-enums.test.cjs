const test = require('node:test');
const assert = require('node:assert/strict');

const { getCompletionLabels, getDiagnostics, getErrorMessages } = require('./helpers/langium-test-utils.cjs');

test('type-name completion includes external enum names', async () => {
    const labels = await getCompletionLabels({
        label: 'external-enum-type-completion',
        text: `
PROGRAM Main
VAR
    mode: MC_BU/*cursor*/
END_VAR
END_PROGRAM
`
    });

    assert.ok(labels.includes('MC_BUFFER_MODE'));
});

test('external enum member completion lists library enum values', async () => {
    const labels = await getCompletionLabels({
        label: 'external-enum-member-completion',
        text: `
PROGRAM Main
VAR
    mode: MC_BUFFER_MODE;
END_VAR

mode := MC_BUFFER_MODE#/*cursor*/
END_PROGRAM
`
    });

    assert.ok(labels.includes('Aborting'));
    assert.ok(labels.includes('Buffered'));
    assert.ok(labels.includes('BlendingHigh'));
});

test('invalid external enum member is rejected', async () => {
    const diagnostics = await getDiagnostics({
        label: 'external-enum-invalid-member',
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
    assert.ok(errorMessages.some(message => message.includes("MC_BUFFER_MODE")));
    assert.ok(errorMessages.some(message => message.includes('BadValue')));
});

test('cross-file user enum member completion still works', async () => {
    const labels = await getCompletionLabels({
        label: 'workspace-enum-member-completion',
        text: `
PROGRAM Main
VAR
    mode: RunMode;
END_VAR

mode := RunMode#/*cursor*/
END_PROGRAM
`,
        extra: [
            {
                label: 'workspace-enum-definition',
                text: `
TYPE
    RunMode : (
        STOP := 0,
        MANUAL := 1,
        AUTO := 2
    )
END_TYPE
`
            }
        ]
    });

    assert.ok(labels.includes('STOP'));
    assert.ok(labels.includes('MANUAL'));
    assert.ok(labels.includes('AUTO'));
});

test('invalid cross-file user enum member is rejected', async () => {
    const diagnostics = await getDiagnostics({
        label: 'workspace-enum-invalid-member',
        text: `
PROGRAM Main
VAR
    mode: RunMode;
END_VAR

mode := RunMode#MANUAL33;
END_PROGRAM
`,
        extra: [
            {
                label: 'workspace-enum-definition',
                text: `
TYPE
    RunMode : (
        STOP := 0,
        MANUAL := 1,
        AUTO := 2
    )
END_TYPE
`
            }
        ]
    });

    const errorMessages = getErrorMessages(diagnostics);
    assert.ok(errorMessages.some(message => message.includes('RunMode')));
    assert.ok(errorMessages.some(message => message.includes('MANUAL33')));
});
