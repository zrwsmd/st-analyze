const test = require('node:test');
const assert = require('node:assert/strict');

const { findDeclarationAtMarker } = require('./helpers/langium-test-utils.cjs');

test('cache-reference resolves local variable usages to their declarations', async () => {
    const result = await findDeclarationAtMarker({
        label: 'cache-reference-local-variable',
        text: `
PROGRAM Main
VAR
    x: INT;
END_VAR

/*cursor*/x := x + 1;
END_PROGRAM
`
    });

    assert.equal(result.selectedText, 'x');
    assert.equal(result.selectedAstType, 'AssignPrefix');
    assert.equal(result.declarationType, 'VarDeclarationInit');
    assert.equal(result.declarationInfo.variables, 'x');
});

test('cache-reference resolves external function block members to cached member declarations', async () => {
    const result = await findDeclarationAtMarker({
        label: 'cache-reference-external-function-block-member',
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

    assert.equal(result.selectedText, 'Q');
    assert.equal(result.selectedAstType, 'MemberCall');
    assert.equal(result.declarationType, 'VarDeclaration');
    assert.equal(result.declarationInfo.varName, 'Q');
    assert.equal(result.declarationInfo.varType, 'BOOL');
    assert.equal(result.declarationInfo.varGlobalType, 'VAR_OUTPUT');
});
