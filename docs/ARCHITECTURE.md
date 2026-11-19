# Architecture

- `apps/app-xx` contains each application's configuration, pages, components, workflows, data, fixtures, and categorized tests.
- `framework` contains shared authentication contracts/providers, authorization helpers, configuration, Playwright fixtures, API helpers, test-data utilities, and reporting/logging support.
- `config` contains application mappings, environment definitions, and role definitions; runtime configuration lives in `framework/configuration`.
- `scripts` validate configuration and environments, clean generated artifacts, and run one or all app suites.
- `tests/shared` is for tests intentionally shared by each app run.

Tests use the shared Playwright configuration and the selected app's base URL. Keep application-specific selectors and behavior in that application's folder.
