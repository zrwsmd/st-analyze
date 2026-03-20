import { StatemachineServices, StatemachineSharedServices } from './ld-module.js';

/**
 * Language services required in GLSP.
 */
export const LdLSPServices = Symbol('LdLSPServices');
export interface LdLSPServices {
    /** Language services shared across all languages. */
    shared: StatemachineSharedServices;
    /** language-specific services. */
    st: StatemachineServices;
}
