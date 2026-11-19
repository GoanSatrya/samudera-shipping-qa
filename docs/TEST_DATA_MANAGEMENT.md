# Test data management

Keep synthetic, non-secret, app-specific test data in that app's `data` directory. Use `framework/test-data/data-factory.ts` to build test records and register cleanup actions with `DataCleanup` from `framework/test-data/data-cleanup.ts` so tests do not leave records behind.

Do not store real personal information, production exports, passwords, or tokens in fixtures or test data. Prefer synthetic records and environment-specific test accounts. Keep generated or mutable records isolated by run where the application supports it.
