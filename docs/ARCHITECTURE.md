# Architecture

- `apps/app-xx` contains application-specific pages, components, tests, fixtures, and data.
- `framework` contains shared Playwright fixtures and reusable authentication, API, data, and session helpers.
- `config` maps app IDs and `dev`/`sit`/`uat` targets to environment variables.
- `scripts` validates configuration and runs one or all app suites.
- `tests/shared` is for tests intentionally shared by each app run.

Tests use the shared Playwright configuration and the selected app's base URL. Keep application-specific selectors and behavior in that application's folder.
