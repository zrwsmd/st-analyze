const test = require('node:test');
const assert = require('node:assert/strict');

const { getCompletionLabels } = require('./helpers/langium-test-utils.cjs');

test('cache-complete provides external function block type-name completion', async () => {
    const labels = await getCompletionLabels({
        label: 'cache-complete-fb-type-name',
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

test('cache-complete provides external enum type-name completion', async () => {
    const labels = await getCompletionLabels({
        label: 'cache-complete-enum-type-name',
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

test('cache-complete provides external enum member completion after hash', async () => {
    const labels = await getCompletionLabels({
        label: 'cache-complete-enum-members',
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

test('cache-complete provides external struct member completion after dot', async () => {
    const labels = await getCompletionLabels({
        label: 'cache-complete-struct-members',
        text: `
PROGRAM Main
VAR
    ref: MC_TP_REF;
END_VAR

ref./*cursor*/
END_PROGRAM
`
    });

    assert.ok(labels.includes('Number_of_pairs'));
    assert.ok(labels.includes('IsAbsolute'));
    assert.ok(labels.includes('MC_TP_Array'));
});
