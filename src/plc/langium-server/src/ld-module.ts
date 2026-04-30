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

import { DefaultServiceRegistry, LangiumCoreServices, ServiceRegistry, inject, type Module } from 'langium';
import type {
    DefaultSharedModuleContext,
    LangiumServices,
    LangiumSharedServices,
    PartialLangiumServices,
    PartialLangiumSharedServices
} from 'langium/lsp';
import { createDefaultModule, createDefaultSharedModule } from 'langium/lsp';
import { URI } from 'vscode-uri';
import { CacheCompletionProvider } from './cache-complete.js';
import { CacheHighLight } from './cache-highlight.js';
import { CacheReference } from './cache-reference.js';
import { CacheSignatureHelpProvider } from './cache-sign-help.js';
import { StGeneratedModule, StGeneratedSharedModule } from './generated/module.js';
import { ClientLogger } from './ld-client-logger.js';
import { StDocumentValidator } from './st-document-validator.js';
import { StNameProvider } from './st-name-provider.js';
import { StReferenceDescriptionProvider } from './st-reference-descriptions.js';
import { StScopeComputation } from './st-compute.js';
import { StFormatter } from './st-formatter.js';
import { StLinker } from './st-linker.js';
import { StScopeProvider } from './st-scope.js';
import { StValidator, registerValidationChecks } from './st-validator.js';
import { StSerializer } from './stSerializer.js';

// import { registerValidationChecks } from './statemachine-validator.js';

/**
 * Declaration of custom services - add your own service classes here.
 */
export interface StatemachineAddedServices {
    validation: {
        StValidator: StValidator;
    };
    /* override */ shared: StatemachineSharedServices;
}

export interface ExtendedLangiumServices extends LangiumCoreServices {
    // serializer: {
    //     Hydrator: Hydrator;
    //     JsonSerializer: JsonSerializer;
    //     Serializer: Serializer<AstNode>;
    // };
}

export class ExtendedServiceRegistry extends DefaultServiceRegistry {
    override register(language: ExtendedLangiumServices): void {
        super.register(language);
    }

    override getServices(uri: URI): ExtendedLangiumServices {
        return super.getServices(uri) as ExtendedLangiumServices;
    }
}

export interface IExtendedServiceRegistry extends ServiceRegistry {
    register(language: ExtendedLangiumServices): void;
    getServices(uri: URI): ExtendedLangiumServices;
}

export interface StateMachineAddedSharedServices {
    ServiceRegistry: ExtendedServiceRegistry;
    logger: {
        ClientLogger: ClientLogger;
    };
}

export const StatemachineSharedServices = Symbol('StatemachineSharedServices');
// export type StatemachineSharedServices = Omit<LangiumSharedServices, 'ServiceRegistry'> &
export type StatemachineSharedServices = StateMachineAddedSharedServices & LangiumSharedServices;

export const StatemachineSharedModule: Module<StatemachineSharedServices, PartialLangiumSharedServices & StateMachineAddedSharedServices> =
    {
        ServiceRegistry: () => new ExtendedServiceRegistry(),
        logger: {
            ClientLogger: services => new ClientLogger(services)
        }
    };

/***************************
 * Language Module
 ***************************/

export interface StatemachineModuleContext {
    shared: StatemachineSharedServices;
}

/**
 * Declaration of custom services - add your own service classes here.
 */

export type StatemachineServices = ExtendedLangiumServices & StatemachineAddedServices & LangiumServices;
export const StatemachineServices = Symbol('StatemachineServices');

/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
export function createStatemachineModule(
    context: StatemachineModuleContext
): Module<StatemachineServices, PartialLangiumServices & StatemachineAddedServices> {
    return {
        shared: () => context.shared,
        parser: {
            //ParserErrorMessageProvider: new StParserErrorMessageProvider()
        },
        validation: {
            DocumentValidator: services => new StDocumentValidator(services),
            StValidator: services => new StValidator(services)
        },
        lsp: {
            Formatter: () => new StFormatter(),
            CompletionProvider: services => new CacheCompletionProvider(services),
            SignatureHelp: () => new CacheSignatureHelpProvider(),
            DocumentHighlightProvider: services => new CacheHighLight(services)
        },
        references: {
            ScopeProvider: services => new StScopeProvider(services),
            ScopeComputation: services => new StScopeComputation(services),
            Linker: services => new StLinker(services),
            NameProvider: () => new StNameProvider(),
            References: services => new CacheReference(services)
        },
        workspace: {
            ReferenceDescriptionProvider: services => new StReferenceDescriptionProvider(services)
        },
        serializer: {
            JsonSerializer: services => new StSerializer(services)
        }
    };
}

/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
// export const StatemachineModule: Module<StatemachineServices, PartialLangiumServices & StatemachineAddedServices> = {
//     validation: {
//         StatemachineValidator: () => new StatemachineValidator()
//     }
// };

/**
 * Create the full set of services required by Langium.
 *
 * First inject the shared services by merging two modules:
 *  - Langium default shared services
 *  - Services generated by langium-cli
 *
 * Then inject the language-specific services by merging three modules:
 *  - Langium default language-specific services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 *
 * @param context Optional module context with the LSP connection
 * @returns An object wrapping the shared services and the language-specific services
 */
export function createStatemachineServices(context: DefaultSharedModuleContext): {
    shared: StatemachineSharedServices;
    st: StatemachineServices;
} {
    const shared = inject(createDefaultSharedModule(context), StGeneratedSharedModule, StatemachineSharedModule);
    const st = inject(createDefaultModule({ shared }), StGeneratedModule, createStatemachineModule({ shared }));
    shared.ServiceRegistry.register(st);
    registerValidationChecks(st);
    return { shared, st };
}
