# Contributing

1. Install Node.js 20 or newer and run `npm install`.
2. Copy `.env.example` to `.env` and set an approved test URL.
3. Add tests under the corresponding app's `tests/smoke`, `tests/regression`, or `tests/integration` directory. Use `framework/fixtures/app.fixture.ts` where convenient.
4. Run `npm run typecheck`, `npm run lint`, and the relevant app test command before submitting.
5. Keep credentials and session files out of commits.

Prefer accessible roles and labels in UI tests; isolate app-specific behavior from shared framework code.
