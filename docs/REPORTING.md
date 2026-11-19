# Reporting

Playwright uses the configured list and HTML reporters. The HTML report is written to `playwright-report/`; test output is written to `test-results/`. Both locations are ignored by Git.

Open the report locally with `npx playwright show-report`. Do not publish reports containing credentials, personal data, session state, or other sensitive test output to an unapproved location.
