import { AstNode, AstNodeDescription, DefaultScopeComputation, LangiumDocument, MultiMap, PrecomputedScopes } from 'langium';
import { CancellationToken } from 'vscode-languageclient';
import { GlobalVarList, St, VarDeclarationInit, VarExternal, VarInput, VarLocal, VarOutput } from './generated/ast.js';
import { getGlobalVarListName } from './st-name-provider.js';

export class StScopeComputation extends DefaultScopeComputation {
    override async computeLocalScopes(
        document: LangiumDocument<AstNode>,
        cancelToken?: CancellationToken | undefined
    ): Promise<PrecomputedScopes> {
        const st = document.parseResult.value as St;
        // This map stores a list of descriptions for each node in our document
        const scopes = new MultiMap<AstNode, AstNodeDescription>();
        for (const programSingle of st.program) {
            let inputArr = programSingle.inputs;
            inputArr.forEach(input => {
                let itemArr = input.items;
                itemArr.forEach(item => {
                    const description = this.descriptions.createDescription(item, item.variables, document);
                    scopes.add(st, description);
                    let nextVariables = item.nextVariables;
                    this.addNextVariables(nextVariables, item, document, scopes, st);
                });
            });
            this.handleExternalVariables(programSingle.varExternals, scopes, st, document);
        }
        for (const globalVarList of st.globalVarLists) {
            const description = this.descriptions.createDescription(globalVarList, getGlobalVarListName(globalVarList), document);
            scopes.add(st, description);
        }
        let functionBlockArr = st.function_block;
        functionBlockArr.forEach(functionBlock => {
            let inputs = functionBlock.varInputs;
            let outputs = functionBlock.varOutputs;
            let locals = functionBlock.varLocals;
            let externals = functionBlock.varExternals;
            this.handleAllVariable(inputs, scopes, st, document);
            this.handleAllVariable(outputs, scopes, st, document);
            this.handleAllVariable(locals, scopes, st, document);
            this.handleExternalVariables(externals, scopes, st, document);
            // let singleMethodArr = functionBlock.methods;
            // singleMethodArr.forEach(method => {
            //     let methodDeclVariableArr = method.inputs;
            //     methodDeclVariableArr.forEach(methodDeclVariable => {
            //         let itemArr = methodDeclVariable.items;
            //         itemArr.forEach(item => {
            //             const description = this.descriptions.createDescription(item, item.variables, document);
            //             scopes.add(st, description);
            //             this.addNextVariables(item.nextVariables, item, document, scopes, st);
            //         });
            //     });
            // });
        });
        let functionArr = st.st_function;
        functionArr.forEach(singleFunction => {
            let inputs = singleFunction.varInputs;
            let outputs = singleFunction.varOutputs;
            let locals = singleFunction.varLocals;
            this.handleAllVariable(inputs, scopes, st, document);
            this.handleAllVariable(outputs, scopes, st, document);
            this.handleAllVariable(locals, scopes, st, document);
        });

        return scopes;
    }

    private addNextVariables(
        nextVariables: string[],
        item: VarDeclarationInit,
        document: LangiumDocument<AstNode>,
        scopes: MultiMap<AstNode, AstNodeDescription>,
        st: St
    ) {
        if (!nextVariables) {
            return;
        }
        if (nextVariables.length > 0) {
            nextVariables.forEach(nextVariable => {
                const nextDescription = this.descriptions.createDescription(item, nextVariable, document);
                scopes.add(st, nextDescription);
            });
        }
        return scopes;
    }

    handleAllVariable(
        declVarArr: VarInput[] | VarOutput[] | VarLocal[],
        scopes: PrecomputedScopes,
        st: St,
        document: LangiumDocument<AstNode>
    ) {
        declVarArr.forEach(decl => {
            let itemArr = decl.items;
            itemArr.forEach(item => {
                const description = this.descriptions.createDescription(item, item.variables, document);
                scopes.add(st, description);
                this.addNextVariables(item.nextVariables, item, document, scopes, st);
            });
        });
    }

    handleExternalVariables(
        declVarArr: VarExternal[],
        scopes: PrecomputedScopes,
        st: St,
        document: LangiumDocument<AstNode>
    ) {
        declVarArr.forEach(decl => {
            let itemArr = decl.items;
            itemArr.forEach(item => {
                const description = this.descriptions.createDescription(item, item.variables, document);
                scopes.add(st, description);
                this.addNextVariables(item.nextVariables, item, document, scopes, st);
            });
        });
    }
}
