/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import type { AstNode } from 'langium';
import { AbstractFormatter } from 'langium/lsp';

export class StFormatter extends AbstractFormatter {
    protected format(node: AstNode): void {
        // if (ast.isIf_statement(node)) {
        //     const formatter = this.getNodeFormatter(node);
        //     const bracesOpen = formatter.keyword('IF');
        //     const bracesClose = formatter.keyword('THEN');
        //     formatter.interior(bracesOpen, bracesClose).prepend(Formatting.indent());
        //     bracesClose.prepend(Formatting.newLine());
        // }
    }
}
