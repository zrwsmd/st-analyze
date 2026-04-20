/********************************************************************************
 * Copyright (c) 2021-2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import 'reflect-metadata';

import { tmpdir } from 'os';
import { normalize } from 'path';
import * as process from 'process';
import * as vscode from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node.js';
import { getRelatedElementInfoToOuter } from '../../langium-server/src/util/transform.js';
import { registerShowStFilesCommand } from './handleExportInfo.js';

const LOG_DIR = process.env.GLSP_LOG_DIR;
let client: LanguageClient;

export async function activate(context: vscode.ExtensionContext): Promise<void> {
    client = startLanguageClient(context);
    let outerfilePath = '';
    let outerfolderPath = '';
    // let langiumDocs = shared.workspace.LangiumDocuments;
    // const rootPath = path.resolve(__dirname, '..', '..');
    // const sourceUri = path.join(rootPath, 'workspace', 'program2.st');
    // // /console.log(sourceUri);
    // const rootUri = URI.file(sourceUri).toString();
    // const document = await langiumDocs.getOrCreateDocument(URI.parse(rootUri));
    // const root = document.parseResult.value as St;
    // console.log(root);
    await vscode.commands.executeCommand('devUni.prjView.compileCheckFath').then((result: any) => {
        outerfilePath = result.filePath;
        outerfolderPath = result.folderPath;
    });
    // console.log('aaaaaaaaaaaaaaaaaa===' + outerfilePath);
    // console.log('bbbbbbbbbbbbbbbbbb==' + outerfolderPath);
    vscode.commands.executeCommand('generatePlcCode', outerfilePath, outerfolderPath).then((result: any) => {
        //console.log(result);
    });
    // `

    registerShowStFilesCommand(context);
    // vscode.commands.executeCommand('exportAllDeclInfo');

    // vscode.commands.executeCommand('exportAllDeclInfo').then(result => {
    //     const ext = vscode.extensions.getExtension('ultrapower.st-plugin');
    //     if (!ext) {
    //         vscode.window.showErrorMessage('st-plugin 未安装');
    //         return;
    //     }
    //     const variablePath = path.join(ext.extensionPath, 'dist', 'variable.json');
    //     fs.readFile(variablePath, 'utf8', (err, data) => {
    //         if (err) {
    //             console.error('读取文件出错:', err);
    //             return;
    //         }
    //         console.log('文件内容:', data);
    //     });
    // });
    let disposable = vscode.commands.registerCommand('getRelatedElementInfo', (id: string) => {
        const result = getRelatedElementInfoToOuter(id); // 使用传入的 ID 调用 getNameById 方法
        return result;
    });
    context.subscriptions.push(disposable);
    //别人调用
    // vscode.commands.executeCommand('getRelatedElementInfo', 'toN').then((result: any) => {
    //     console.log(result);
    //     // console.log(result); // 替换为实际的处理逻辑
    // });
}

function startLanguageClient(context: vscode.ExtensionContext): LanguageClient {
    const serverModule = context.asAbsolutePath('./dist/main.cjs');
    // The debug options for the server
    // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging.
    // By setting `process.env.DEBUG_BREAK` to a truthy value, the language server will wait until a debugger is attached.
    const debugOptions = {
        execArgv: ['--nolazy', `--inspect${process.env.DEBUG_BREAK ? '-brk' : ''}=${process.env.DEBUG_SOCKET || '6009'}`]
    };

    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: debugOptions
        }
    };

    const fileSystemWatcher = vscode.workspace.createFileSystemWatcher('**/*.st');
    context.subscriptions.push(fileSystemWatcher);

    // Options to control the language client
    const clientOptions: LanguageClientOptions = {
        // Register the server for langium documents
        documentSelector: [{ scheme: 'file', language: 'st' }],
        synchronize: {
            // Notify the server about file changes to langium files contained in the workspace
            fileEvents: fileSystemWatcher
        }
    };

    // Create the language client and start the client.
    const client = new LanguageClient('plc', 'plc', serverOptions, clientOptions);

    // Start the client. This will also launch the server
    client.start();
    return client;
}
export function deactivate(): Thenable<void> | undefined {
    if (client) {
        return client.stop();
    }
    return undefined;
}

function getTempDir() {
    return normalize(tmpdir()).replace(/\\/g, '//');
}
