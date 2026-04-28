const test = require('node:test');
const assert = require('node:assert/strict');

const { getCompletionItems, getCompletionLabels } = require('./helpers/langium-test-utils.cjs');

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

test('cache-complete preserves function block member detail text after dot', async () => {
    const items = await getCompletionItems({
        label: 'cache-complete-function-block-member-detail',
        text: `
PROGRAM Main
VAR
    d: TON;
END_VAR

d./*cursor*/
END_PROGRAM
`
    });

    const pt = items.find(item => item.label === 'PT');
    const q = items.find(item => item.label === 'Q');

    assert.ok(pt?.detail?.includes('输入参数'));
    assert.ok(pt?.detail?.includes('TIME'));
    assert.ok(q?.detail?.includes('输出参数'));
    assert.ok(q?.detail?.includes('BOOL'));
});

test('cache-complete orders function block members with inputs before outputs', async () => {
    const items = await getCompletionItems({
        label: 'cache-complete-function-block-member-order',
        text: `
PROGRAM Main
VAR
    d: TON;
END_VAR

d./*cursor*/
END_PROGRAM
`
    });

    const orderedLabels = items.filter(item => ['IN', 'PT', 'Q', 'ET'].includes(item.label)).map(item => item.label);
    assert.deepEqual(orderedLabels, ['IN', 'PT', 'Q', 'ET']);
});

test('cache-complete provides custom struct member completion after dot', async () => {
    const labels = await getCompletionLabels({
        label: 'cache-complete-custom-struct-members',
        extra: [
            {
                label: 'china',
                text: `
TYPE
    China: STRUCT
        provinceId, qw, iuy, bb: INT;
        province: Province;
        a: CTU;
    END_STRUCT
END_TYPE
`
            },
            {
                label: 'province',
                text: `
TYPE
    Province: STRUCT
        provinceId: INT;
        aabbcc: BOOL;
        city: City;
    END_STRUCT
END_TYPE
`
            }
        ],
        text: `
PROGRAM Main
VAR
    g: China;
END_VAR

g./*cursor*/
END_PROGRAM
`
    });

    assert.ok(labels.includes('provinceId'));
    assert.ok(labels.includes('province'));
    assert.ok(labels.includes('a'));
});

test('cache-complete does not duplicate custom struct member completion items after dot', async () => {
    const items = await getCompletionItems({
        label: 'cache-complete-custom-struct-no-duplicates',
        extra: [
            {
                label: 'china',
                text: `
TYPE
    China: STRUCT
        provinceId, qw, iuy, bb: INT;
        province: Province;
        a: CTU;
    END_STRUCT
END_TYPE
`
            },
            {
                label: 'province',
                text: `
TYPE
    Province: STRUCT
        provinceId: INT;
        aabbcc: BOOL;
        city: City;
    END_STRUCT
END_TYPE
`
            }
        ],
        text: `
PROGRAM Main
VAR
    g: China;
END_VAR

g./*cursor*/
END_PROGRAM
`
    });

    const labels = items.map(item => item.label);
    assert.equal(labels.filter(label => label === 'provinceId').length, 1);
    assert.equal(labels.filter(label => label === 'province').length, 1);
    assert.equal(labels.filter(label => label === 'a').length, 1);
});

test('cache-complete prefers custom struct member detail over outer variable detail for same name', async () => {
    const items = await getCompletionItems({
        label: 'cache-complete-custom-struct-detail-override',
        extra: [
            {
                label: 'china',
                text: `
TYPE
    China: STRUCT
        a: CTU;
        bb: INT;
    END_STRUCT
END_TYPE
`
            }
        ],
        text: `
PROGRAM Main
VAR
    a: INT;
    bb: STRING;
    g: China;
END_VAR

g./*cursor*/
END_PROGRAM
`
    });

    const a = items.find(item => item.label === 'a');
    const bb = items.find(item => item.label === 'bb');

    assert.ok(a?.detail?.includes('CTU'));
    assert.ok(bb?.detail?.includes('INT'));
});

test('cache-complete provides GVL member completion after dot', async () => {
    const labels = await getCompletionLabels({
        label: 'cache-complete-gvl-members',
        extra: [
            {
                label: 'GVL_1',
                uriPath: 'GVL_1.st',
                text: `
VAR_GLOBAL
    gStart: BOOL := TRUE;
    gCount: INT := 0;
    gLamp: BOOL := FALSE;
END_VAR
`
            }
        ],
        text: `
PROGRAM Main
VAR
END_VAR

GVL_1./*cursor*/
END_PROGRAM
`
    });

    assert.ok(labels.includes('gStart'));
    assert.ok(labels.includes('gCount'));
    assert.ok(labels.includes('gLamp'));
});
