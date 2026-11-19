# Company QA Automation

Playwright and TypeScript starter repository for automated testing across six applications.

## Prerequisites

- Node.js 20 or newer
- Access to an approved non-production test environment

## Setup

```powershell
npm install
npx playwright install
Copy-Item .env.example .env
```

Edit `.env` with the selected application, environment, and authorized base URL. See [configuration docs](docs/CONFIGURATION.md). Validate it with:

```powershell
npm run validate:config
```

## Run tests

```powershell
npm run test:app -- app-01
npm run test:all
```

`npm test` runs the currently selected app and shared tests. Each app suite lives in `apps/app-xx/tests`; shared tests live in `tests/shared`.

## Quality checks

```powershell
npm run typecheck
npm run lint
```

See the [docs](docs/README.md) for architecture, authentication, test data, contribution, and maintenance guidance. Do not commit `.env`, credentials, or browser session state.
