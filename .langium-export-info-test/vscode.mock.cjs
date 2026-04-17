
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
