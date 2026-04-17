const test = require('node:test');
const assert = require('node:assert/strict');

const { getSignatureHelp } = require('./helpers/langium-test-utils.cjs');

test('cache-sign-help returns signature help for standard library function blocks', async () => {
    const signatureHelp = await getSignatureHelp({
        label: 'cache-sign-help-ton',
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

test('cache-sign-help returns signature help for external library function blocks', async () => {
    const signatureHelp = await getSignatureHelp({
        label: 'cache-sign-help-smc-track-axis',
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

test('cache-sign-help returns signature help for custom function blocks', async () => {
    const signatureHelp = await getSignatureHelp({
        label: 'cache-sign-help-custom-fb',
        text: `
FUNCTION_BLOCK DemoFb
VAR_INPUT
    input1: INT;
END_VAR
VAR_OUTPUT
    output1: BOOL;
END_VAR
END_FUNCTION_BLOCK

PROGRAM Main
VAR
    fb: DemoFb;
END_VAR

fb(/*cursor*/);
END_PROGRAM
`
    });

    assert.ok(signatureHelp);
    assert.ok(signatureHelp.signatures.length > 0);
    assert.ok(signatureHelp.signatures[0].label.includes('FUNCTION_BLOCK DemoFb'));
});
