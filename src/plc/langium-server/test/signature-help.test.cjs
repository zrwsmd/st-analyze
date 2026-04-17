const test = require('node:test');
const assert = require('node:assert/strict');

const { getSignatureHelp } = require('./helpers/langium-test-utils.cjs');

test('signature help still works for standard library function blocks', async () => {
    const signatureHelp = await getSignatureHelp({
        label: 'signature-help-ton',
        text: `
PROGRAM Main
VAR
    tonFb: TON;
END_VAR

tonFb(/*cursor*/);
END_PROGRAM
`
    });

    assert.ok(signatureHelp);
    assert.ok(signatureHelp.signatures.length > 0);
    assert.ok(signatureHelp.signatures[0].label.includes('FUNCTION_BLOCK TON'));
});

test('signature help still works for external library function blocks', async () => {
    const signatureHelp = await getSignatureHelp({
        label: 'signature-help-smc-track-axis',
        text: `
PROGRAM Main
VAR
    track: SMC_TrackAxis;
END_VAR

track(/*cursor*/);
END_PROGRAM
`
    });

    assert.ok(signatureHelp);
    assert.ok(signatureHelp.signatures.length > 0);
    assert.ok(signatureHelp.signatures[0].label.includes('FUNCTION_BLOCK SMC_TrackAxis'));
});
