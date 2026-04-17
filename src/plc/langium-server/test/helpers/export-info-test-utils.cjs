const assert = require('node:assert/strict');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');

const esbuild = require('esbuild');
const { TextDocument } = require('vscode-languageserver-textdocument');
const { URI } = require('vscode-uri');

const { shared } = require('../../out/main.cjs');

const REPO_ROOT = path.resolve(__dirname, '../../../../../');
const TMP_ROOT = path.join(REPO_ROOT, '.langium-export-info-test');
const HANDLE_EXPORT_INFO_ENTRY = path.join(REPO_ROOT, 'src/plc/extension/src/handleExportInfo.ts');
const LANGIUM_MAIN_BUNDLE = path.join(REPO_ROOT, 'src/plc/langium-server/out/main.cjs');
const BUNDLE_PATH = path.join(TMP_ROOT, 'handleExportInfo.bundle.cjs');
const VSCODE_MOCK_PATH = path.join(TMP_ROOT, 'vscode.mock.cjs');

let bundlePromise;

function ensureTmpRoot() {
    fs.mkdirSync(TMP_ROOT, { recursive: true });
}

function writeVscodeMock() {
    const mockSource = `
const fs = require('node:fs');
const path = require('node:path');
const { URI } = require('vscode-uri');

function getState() {
    if (!globalThis.__HANDLE_EXPORTINFO_VSCODE_MOCK__) {
        globalThis.__HANDLE_EXPORTINFO_VSCODE_MOCK__ = {
            workspaceRoot: '',
            diagnostics: new Map()
        };
    }
    return globalThis.__HANDLE_EXPORTINFO_VSCODE_MOCK__;
}

function walkFiles(rootDir, collected = []) {
    if (!rootDir || !fs.existsSync(rootDir)) {
        return collected;
    }
    for (const entry of fs.readdirSync(rootDir, { withFileTypes: true })) {
        const absolutePath = path.join(rootDir, entry.name);
        if (entry.isDirectory()) {
            walkFiles(absolutePath, collected);
        } else {
            collected.push(absolutePath);
        }
    }
    return collected;
}

function normalizeFsPath(value) {
    if (!value) {
        return '';
    }
    if (typeof value === 'string') {
        return value.startsWith('file:') ? URI.parse(value).fsPath : value;
    }
    if (typeof value.fsPath === 'string') {
        return value.fsPath;
    }
    if (typeof value.toString === 'function') {
        const text = value.toString();
        if (text.startsWith('file:')) {
            return URI.parse(text).fsPath;
        }
    }
    return '';
}

function createPathKey(value) {
    return normalizeFsPath(value).toLowerCase();
}

function ensureUri(value) {
    if (value && typeof value.fsPath === 'string') {
        return value;
    }
    return URI.file(normalizeFsPath(value));
}

const workspace = {
    async findFiles(globPattern) {
        const { workspaceRoot } = getState();
        const suffix = globPattern.replace('**/*', '');
        return walkFiles(workspaceRoot)
            .filter(filePath => !suffix || filePath.endsWith(suffix))
            .map(filePath => URI.file(filePath));
    },
    async openTextDocument(uri) {
        const normalizedUri = ensureUri(uri);
        const text = fs.readFileSync(normalizedUri.fsPath, 'utf8');
        return {
            uri: normalizedUri,
            fsPath: normalizedUri.fsPath,
            languageId: 'st',
            version: 1,
            getText: () => text
        };
    },
    createFileSystemWatcher() {
        return {
            onDidCreate() {},
            onDidChange() {},
            onDidDelete() {},
            dispose() {}
        };
    }
};

const languages = {
    getDiagnostics(uri) {
        const { diagnostics } = getState();
        return diagnostics.get(createPathKey(uri)) ?? [];
    }
};

const commands = {
    registerCommand() {
        return {
            dispose() {}
        };
    },
    async executeCommand() {
        return undefined;
    }
};

class EventEmitter {
    constructor() {
        this.event = () => ({
            dispose() {}
        });
    }
    fire() {}
    dispose() {}
}

module.exports = {
    commands,
    DiagnosticSeverity: {
        Error: 0,
        Warning: 1,
        Information: 2,
        Hint: 3
    },
    EventEmitter,
    languages,
    workspace
};
`;
    fs.writeFileSync(VSCODE_MOCK_PATH, mockSource);
}

async function ensureBundle() {
    if (!bundlePromise) {
        ensureTmpRoot();
        writeVscodeMock();
        bundlePromise = esbuild.build({
            bundle: true,
            entryPoints: [HANDLE_EXPORT_INFO_ENTRY],
            format: 'cjs',
            outfile: BUNDLE_PATH,
            platform: 'node',
            target: 'es2019',
            plugins: [
                {
                    name: 'handle-export-info-test-alias',
                    setup(build) {
                        build.onResolve({ filter: /^vscode$/ }, () => ({ path: VSCODE_MOCK_PATH }));
                        build.onResolve(
                            { filter: /^\.\.\/\.\.\/langium-server\/main\.js$/ },
                            () => ({ path: LANGIUM_MAIN_BUNDLE, external: true })
                        );
                        build.onResolve({ filter: /^\.\.?\// }, args => {
                            if (!args.path.endsWith('.js')) {
                                return undefined;
                            }
                            const tsCandidate = path.resolve(path.dirname(args.importer), args.path.replace(/\.js$/, '.ts'));
                            if (fs.existsSync(tsCandidate)) {
                                return { path: tsCandidate };
                            }
                            return undefined;
                        });
                    }
                }
            ]
        });
    }
    await bundlePromise;
}

async function loadHandleExportInfoModule() {
    await ensureBundle();
    delete require.cache[BUNDLE_PATH];
    return require(BUNDLE_PATH);
}

function resetVscodeMockState() {
    globalThis.__HANDLE_EXPORTINFO_VSCODE_MOCK__ = {
        workspaceRoot: '',
        diagnostics: new Map()
    };
}

function configureVscodeMock(options) {
    const diagnostics = new Map();
    for (const [filePath, entries] of Object.entries(options.diagnosticsByPath ?? {})) {
        diagnostics.set(path.normalize(filePath).toLowerCase(), entries);
    }
    globalThis.__HANDLE_EXPORTINFO_VSCODE_MOCK__ = {
        workspaceRoot: options.workspaceRoot,
        diagnostics
    };
}

async function createWorkspace(files) {
    ensureTmpRoot();
    const workspaceRoot = await fsp.mkdtemp(path.join(TMP_ROOT, 'workspace-'));
    const uriByRelativePath = {};
    const filePathByRelativePath = {};

    for (const [relativePath, content] of Object.entries(files)) {
        const absolutePath = path.join(workspaceRoot, relativePath);
        await fsp.mkdir(path.dirname(absolutePath), { recursive: true });
        await fsp.writeFile(absolutePath, content, 'utf8');
        uriByRelativePath[relativePath] = URI.file(absolutePath);
        filePathByRelativePath[relativePath] = absolutePath;
    }

    return {
        workspaceRoot,
        uriByRelativePath,
        filePathByRelativePath
    };
}

async function cleanupWorkspace(workspace) {
    await cleanupLangiumDocuments(Object.values(workspace.uriByRelativePath));
    resetVscodeMockState();
    await fsp.rm(workspace.workspaceRoot, { recursive: true, force: true });
}

async function cleanupLangiumDocuments(uris) {
    const langiumDocuments = shared.workspace.LangiumDocuments;
    for (const uri of uris) {
        if (langiumDocuments.hasDocument(uri)) {
            langiumDocuments.deleteDocument(uri);
        }
    }
}

function createChangeDocument(uri, text, version = 1) {
    return TextDocument.create(uri.toString(), 'st', version, text.replace(/\r\n/g, '\n'));
}

function getComposeNode(exportedInfo, uri) {
    const composeNode = exportedInfo.find(item => item.filePath === uri.toString());
    assert.ok(composeNode, `Unable to locate compose node for ${uri.toString()}.`);
    return composeNode;
}

function getElement(composeNode, elementName, elementType) {
    const element = composeNode.elements.find(item => item.elementName === elementName && (!elementType || item.elementType === elementType));
    assert.ok(element, `Unable to locate element ${elementName}.`);
    return element;
}

function getVarDecl(element, varName) {
    const varDecl = element.varDecls.find(item => item.varName === varName);
    assert.ok(varDecl, `Unable to locate variable declaration ${varName}.`);
    return varDecl;
}

module.exports = {
    cleanupWorkspace,
    configureVscodeMock,
    createChangeDocument,
    createWorkspace,
    getComposeNode,
    getElement,
    getVarDecl,
    loadHandleExportInfoModule,
    shared
};
