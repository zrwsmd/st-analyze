const test = require('node:test');
const assert = require('node:assert/strict');

const { getDocumentHighlights } = require('./helpers/langium-test-utils.cjs');

test('cache-highlight returns an empty result for local variables without backing documents', async () => {
    const highlights = await getDocumentHighlights({
        label: 'cache-highlight-local-variable',
        text: `
PROGRAM Main
VAR
    x: INT;
END_VAR

/*cursor*/x := x + 1;
END_PROGRAM
`
    });

    assert.deepEqual(highlights, []);
});

test('cache-highlight returns an empty result for external function block members instead of crashing', async () => {
    const highlights = await getDocumentHighlights({
        label: 'cache-highlight-external-function-block-member',
        text: `
PROGRAM Main
VAR
    fb: TON;
END_VAR

IF fb./*cursor*/Q THEN
END_IF
END_PROGRAM
`
    });

    assert.deepEqual(highlights, []);
});
