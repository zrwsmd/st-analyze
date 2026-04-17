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

function getErrorMessages(diagnostics) {
    return diagnostics.filter(diagnostic => diagnostic.severity === 1).map(diagnostic => diagnostic.message);
}

module.exports = {
    getCompletionItems,
    getCompletionLabels,
    getDiagnostics,
    getErrorMessages,
    getSignatureHelp,
    withDocuments
};
