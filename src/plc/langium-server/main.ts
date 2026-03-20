/********************************************************************************
 * Copyright (c) 2023 EclipseSource and others.
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

import { startLanguageServer } from 'langium/lsp';
import { NodeFileSystem } from 'langium/node';
import { IPCMessageReader, IPCMessageWriter, createConnection } from 'vscode-languageserver/node.js';
import { createStatemachineServices } from './index.js';

// Create a connection to the client
// const connection = createConnection(ProposedFeatures.all);
const connection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));
// connection.listen();
// Inject the shared services and language-specific services
// const { shared: original, grammar } = createLangiumGrammarServices({ connection, ...NodeFileSystem }, StGeneratedSharedModule);
export const { shared, st } = createStatemachineServices({ connection, ...NodeFileSystem });

// registerRailroadConnectionHandler(connection, grammar);
// Start the language server with the shared services
startLanguageServer(shared);
