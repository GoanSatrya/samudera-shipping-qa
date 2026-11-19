# Security

- Use only approved non-production environments and test accounts.
- Keep `.env`, credentials, tokens, and Playwright storage state out of version control.
- Store secrets in an approved secret manager when running in CI; never place them in source files or test fixtures.
- Use synthetic test data and clean up records created by tests.
- Restrict API and access-control testing to explicitly approved applications and scopes.
- Review generated traces, screenshots, and reports before sharing because they can contain sensitive page content.
