# Troubleshooting

- **Configuration validation fails:** confirm `.env` exists, `APP_ID` and `TEST_ENV` are supported, and the matching base URL is an absolute HTTP(S) URL.
- **Playwright cannot launch a browser:** run `npx playwright install` after installing project dependencies.
- **No tests are found:** verify the selected app ID and that test files use the `.spec.ts` suffix in the configured test folders.
- **Authentication fails:** check the approved test account and app-specific SSO flow; do not put credentials in source code or enable authentication bypasses.
- **A test leaves data behind:** register cleanup with `DataCleanup` and check its error output.
