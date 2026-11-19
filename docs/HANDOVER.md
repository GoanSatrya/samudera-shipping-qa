# Handover

Before handing this repository to another maintainer:

- Share access to the approved test environments and test accounts through the organization's secret-management process.
- Explain the app/environment variables without sending secrets in source control.
- Identify app owners, SSO contacts, and test-data cleanup responsibilities.
- Confirm dependencies are installed and typecheck, lint, and the agreed test suites run.
- Ensure `.env`, browser session state, and test reports containing sensitive information are not committed or shared beyond approved channels.
