const assert = require('node:assert/strict');
const path = require('node:path');
const { URI } = require('vscode-uri');

const { shared, st } = require('../../out/main.cjs');

const TEST_ROOT = path.join(process.cwd(), '.langium-test-workspace');
let fileCounter = 0;

function nextUri(label = 'test') {
    const safeLabel = label.replace(/[^a-zA-Z0-9_-]/g, '_');
    const fileName = `${String(++fileCounter).padStart(4, '0')}-${safeLabel}.st`;
    return URI.file(path.join(TEST_ROOT, fileName));
}

function normalizeText(text) {
    return text.replace(/\r\n/g, '\n');
}

let langiumImportPromise;

function getLangiumModule() {
    if (!langiumImportPromise) {
        langiumImportPromise = import('langium');
    }
    return langiumImportPromise;
}

async function createDocument(text, label) {
    const uri = nextUri(label);
    const langiumDocuments = shared.workspace.LangiumDocuments;
    if (langiumDocuments.hasDocument(uri)) {
        langiumDocuments.deleteDocument(uri);
    }
    const document = shared.workspace.LangiumDocumentFactory.fromString(normalizeText(text), uri);
    langiumDocuments.addDocument(document);
    return { uri, document };
}

function cleanupDocuments(records) {
    const langiumDocuments = shared.workspace.LangiumDocuments;
    for (const record of records) {
        if (langiumDocuments.hasDocument(record.uri)) {
            langiumDocuments.deleteDocument(record.uri);
        }
    }
}

function visitAst(node, visitor, visited = new WeakSet()) {
    if (!node || typeof node !== 'object') {
        return;
    }
    if (visited.has(node)) {
        return;
    }
    visited.add(node);
    visitor(node);
    for (const value of Object.values(node)) {
        if (!value) {
            continue;
        }
        if (Array.isArray(value)) {
            for (const item of value) {
                visitAst(item, visitor, visited);
            }
        } else if (typeof value === 'object') {
            visitAst(value, visitor, visited);
        }
    }
}

function findAstNodes(root, predicate) {
    const matches = [];
    visitAst(root, node => {
        if (predicate(node)) {
            matches.push(node);
        }
    });
    return matches;
}

async function withDocuments(options, callback) {
    const created = [];
    try {
        const extraRecords = [];
        for (const extraSource of options.extra ?? []) {
            const extraRecord = await createDocument(extraSource.text, extraSource.label ?? 'extra');
            extraRecords.push(extraRecord);
            created.push(extraRecord);
        }
        const mainRecord = await createDocument(options.main.text, options.main.label ?? 'main');
        created.push(mainRecord);

        await shared.workspace.DocumentBuilder.build(
            created.map(record => record.document),
            { validation: false }
        );

        return await callback({
            mainRecord,
            extraRecords,
            created,
            services: { shared, st }
        });
    } finally {
        cleanupDocuments(created);
    }
}

async function getDiagnostics(options) {
    return withDocuments(
        {
            main: {
                text: options.text,
                label: options.label
            },
            extra: options.extra
        },
        async ({ mainRecord }) => st.validation.DocumentValidator.validateDocument(mainRecord.document)
    );
}

async function getCompletionItems(options) {
    const marker = options.marker ?? '/*cursor*/';
    const markerOffset = options.text.indexOf(marker);
    assert.notEqual(markerOffset, -1, `Missing marker ${marker} in completion source.`);

    const cleanText = options.text.replace(marker, '');
    return withDocuments(
        {
            main: {
                text: cleanText,
                label: options.label
            },
            extra: options.extra
        },
        async ({ mainRecord }) => {
            const position = mainRecord.document.textDocument.positionAt(markerOffset);
            const completion = await st.lsp.CompletionProvider.getCompletion(mainRecord.document, {
                textDocument: { uri: mainRecord.uri.toString() },
                position,
                context: { triggerKind: 1 }
            });
            return completion?.items ?? [];
        }
    );
}

async function getCompletionLabels(options) {
    const items = await getCompletionItems(options);
    return items.map(item => item.label);
}

async function getSignatureHelp(options) {
    const marker = options.marker ?? '/*cursor*/';
    const markerOffset = options.text.indexOf(marker);
    assert.notEqual(markerOffset, -1, `Missing marker ${marker} in signature-help source.`);

    const cleanText = options.text.replace(marker, '');
    return withDocuments(
        {
            main: {
                text: cleanText,
                label: options.label
            },
            extra: options.extra
        },
        async ({ mainRecord }) => {
            const position = mainRecord.document.textDocument.positionAt(markerOffset);
            return st.lsp.SignatureHelp.provideSignatureHelp(mainRecord.document, {
                textDocument: { uri: mainRecord.uri.toString() },
                position,
                context: {
                    triggerKind: 1,
                    isRetrigger: false
                }
            });
        }
    );
}

async function getDocumentHighlights(options) {
    const marker = options.marker ?? '/*cursor*/';
    const markerOffset = options.text.indexOf(marker);
    assert.notEqual(markerOffset, -1, `Missing marker ${marker} in highlight source.`);

    const cleanText = options.text.replace(marker, '');
    return withDocuments(
        {
            main: {
                text: cleanText,
                label: options.label
            },
            extra: options.extra
        },
        async ({ mainRecord, services }) => {
            const position = mainRecord.document.textDocument.positionAt(markerOffset);
            return (
                (await services.st.lsp.DocumentHighlightProvider.getDocumentHighlight(mainRecord.document, {
                    textDocument: { uri: mainRecord.uri.toString() },
                    position
                })) ?? []
            );
        }
    );
}

function collectPrimitiveProperties(node) {
    if (!node || typeof node !== 'object') {
        return {};
    }
    const primitiveProperties = {};
    for (const [key, value] of Object.entries(node)) {
        if (key.startsWith('$') || value === undefined || value === null) {
            continue;
        }
        if (typeof value !== 'object') {
            primitiveProperties[key] = value;
        }
    }
    return primitiveProperties;
}

async function findDeclarationAtMarker(options) {
    const marker = options.marker ?? '/*cursor*/';
    const markerOffset = options.text.indexOf(marker);
    assert.notEqual(markerOffset, -1, `Missing marker ${marker} in declaration source.`);

    const cleanText = options.text.replace(marker, '');
    return withDocuments(
        {
            main: {
                text: cleanText,
                label: options.label
            },
            extra: options.extra
        },
        async ({ mainRecord, services }) => {
            const { CstUtils } = await getLangiumModule();
            const rootNode = mainRecord.document.parseResult.value.$cstNode;
            assert.ok(rootNode, 'Unable to locate CST root for declaration test.');

            const selectedNode = CstUtils.findDeclarationNodeAtOffset(
                rootNode,
                markerOffset,
                services.st.parser.GrammarConfig.nameRegexp
            );

            const declaration = selectedNode ? services.st.references.References.findDeclaration(selectedNode) : undefined;
            const textDocument = mainRecord.document.textDocument;

            return {
                selectedText: selectedNode ? textDocument.getText().slice(selectedNode.offset, selectedNode.end) : undefined,
                selectedAstType: selectedNode?.astNode?.$type,
                declarationType: declaration?.$type,
                declarationInfo: collectPrimitiveProperties(declaration)
            };
        }
    );
}

async function getScopeElementNames(options) {
    return withDocuments(
        {
            main: {
                text: options.text,
                label: options.label
            },
            extra: options.extra
        },
        async ({ mainRecord, services }) => {
            const root = mainRecord.document.parseResult.value;
            const targetNode = options.findNode(root, findAstNodes);
            assert.ok(targetNode, 'Unable to locate target AST node for scope test.');
            const reference = options.getReference(targetNode);
            const property = options.property;
            const scope = services.st.references.ScopeProvider.getScope({
                container: targetNode,
                property,
                reference
            });
            return scope
                .getAllElements()
                .map(description => description.name)
                .toArray();
        }
    );
}

function getErrorMessages(diagnostics) {
    return diagnostics.filter(diagnostic => diagnostic.severity === 1).map(diagnostic => diagnostic.message);
}

module.exports = {
    findDeclarationAtMarker,
    findAstNodes,
    getCompletionItems,
    getCompletionLabels,
    getDiagnostics,
    getDocumentHighlights,
    getErrorMessages,
    getScopeElementNames,
    getSignatureHelp,
    withDocuments
};
