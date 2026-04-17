# Test Files

- `helpers/langium-test-utils.cjs`
  Shared helper utilities for creating in-memory Langium documents, collecting diagnostics, fetching completion items, and requesting signature help.

- `helpers/export-info-test-utils.cjs`
  Shared helper utilities for bundling `handleExportInfo.ts` into a Node-testable module, mocking the small subset of VSCode APIs used by export logic, and creating temporary `.st` workspaces on disk.

- `external-library-functions.test.cjs`
  Covers external function blocks and functions from `data.json`, including successful resolution and function-block type-name completion.

- `external-library-structs.test.cjs`
  Covers structs from `extra_library`, including member completion and member-type validation.

- `external-library-aliases.test.cjs`
  Covers derived aliases from `extra_library`, including base-type compatibility and alias type-name completion.

- `external-library-enums.test.cjs`
  Covers enum type-name completion, enum member completion, invalid enum-member diagnostics, and cross-file user enum completion.

- `signature-help.test.cjs`
  Covers signature help regression checks for both standard library and external library function blocks.

- `cache-complete-provider.test.cjs`
  Focuses on `cache-complete.ts`, covering external function block type-name completion, external enum type-name completion, enum member completion, and external struct member completion.

- `cache-sign-help-provider.test.cjs`
  Focuses on `cache-sign-help.ts`, covering signature help for standard library, external library, and custom function blocks.

- `cache-highlight-provider.test.cjs`
  Focuses on `cache-highlight.ts`, covering the current empty-highlight fallback for local variables and the no-crash guard for external function-block members.

- `cache-reference-provider.test.cjs`
  Focuses on `cache-reference.ts`, covering declaration resolution for local variables and cached external function-block members.

- `st-scope-provider.test.cjs`
  Focuses on `st-scope.ts`, covering member scopes for external structs, external function blocks, and custom structs.

- `st-validator-provider.test.cjs`
  Focuses on `st-validator.ts`, covering alias compatibility, struct member type validation, enum validation, external function block parameter validation, and enum type mismatch validation.

- `export-all-decl-info.test.cjs`
  Covers `handleExportInfo.ts`, including diagnostic-based file filtering, exported variable lists and `refFilePath` generation, `onSave` refresh behavior, and syntax-error skipping during export generation.
