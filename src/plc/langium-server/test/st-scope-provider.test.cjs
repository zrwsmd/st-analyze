const test = require('node:test');
const assert = require('node:assert/strict');

const { getScopeElementNames } = require('./helpers/langium-test-utils.cjs');

test('st-scope exposes external struct members for member access', async () => {
    const names = await getScopeElementNames({
        label: 'st-scope-external-struct',
        text: `
PROGRAM Main
VAR
    ref: MC_TP_REF;
END_VAR

ref.IsAbsolute := TRUE;
END_PROGRAM
`,
        property: 'element',
        findNode: (root, findAstNodes) => findAstNodes(root, node => node && node.$type === 'MemberCall')[0],
        getReference: node => node.element
    });

    assert.ok(names.includes('Number_of_pairs'));
    assert.ok(names.includes('IsAbsolute'));
    assert.ok(names.includes('MC_TP_Array'));
});

test('st-scope exposes external function block inputs and outputs for member access', async () => {
    const names = await getScopeElementNames({
        label: 'st-scope-external-function-block',
        text: `
PROGRAM Main
VAR
    track: SMC_TrackAxis;
END_VAR

track.bBusy := TRUE;
END_PROGRAM
`,
        property: 'element',
        findNode: (root, findAstNodes) => findAstNodes(root, node => node && node.$type === 'MemberCall')[0],
        getReference: node => node.element
    });

    assert.ok(names.includes('Master'));
    assert.ok(names.includes('Velocity'));
    assert.ok(names.includes('bBusy'));
    assert.ok(names.includes('iErrorID'));
});

test('st-scope exposes custom struct members for member access', async () => {
    const names = await getScopeElementNames({
        label: 'st-scope-custom-struct',
        text: `
TYPE
    China: STRUCT
        provinceId: INT;
        provinceName: STRING;
    END_STRUCT
END_TYPE

PROGRAM Main
VAR
    china: China;
END_VAR

china.provinceId := 1;
END_PROGRAM
`,
        property: 'element',
        findNode: (root, findAstNodes) => findAstNodes(root, node => node && node.$type === 'MemberCall')[0],
        getReference: node => node.element
    });

    assert.ok(names.includes('provinceId'));
    assert.ok(names.includes('provinceName'));
});
