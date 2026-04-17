# Test Files

- `helpers/langium-test-utils.cjs`
  Shared helper utilities for creating in-memory Langium documents, collecting diagnostics, fetching completion items, and requesting signature help.

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
