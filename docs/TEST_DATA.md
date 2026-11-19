# Test data

Keep non-secret, app-specific test data in that app's `test-data` directory. Create data with `framework/data/data-factory.ts` and register cleanup actions with `DataCleanup` so tests do not leave records behind.

Do not store real personal information, production exports, passwords, or tokens in fixtures or test data. Prefer synthetic records and environment-specific test accounts.
