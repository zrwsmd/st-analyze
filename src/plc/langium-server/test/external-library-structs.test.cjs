const test = require('node:test');
const assert = require('node:assert/strict');

const { getCompletionLabels, getDiagnostics, getErrorMessages } = require('./helpers/langium-test-utils.cjs');

test('external struct member completion lists fields from extra_library', async () => {
    const labels = await getCompletionLabels({
        label: 'external-struct-member-completion',
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

test('external struct field assignment validates member types', async () => {
    const diagnostics = await getDiagnostics({
        label: 'external-struct-member-type-error',
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
    assert.ok(errorMessages.some(message => message.includes("BOOL")));
});

test('valid external struct field assignments do not report errors', async () => {
    const diagnostics = await getDiagnostics({
        label: 'external-struct-member-ok',
        text: `
PROGRAM Main
VAR
    ref: MC_TP_REF;
END_VAR

ref.IsAbsolute := TRUE;
ref.Number_of_pairs := 1;
END_PROGRAM
`
    });

    assert.deepEqual(getErrorMessages(diagnostics), []);
});
