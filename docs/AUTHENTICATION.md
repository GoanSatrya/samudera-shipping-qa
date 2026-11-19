# Authentication

Authentication flows differ by application and identity provider. Implement the `SsoAuthenticator` contract in `framework/authentication/contracts/` and add approved implementations under `framework/authentication/providers/`. Confirm each target application's approved login flow before implementing it.

Use `framework/authentication/auth-manager.ts` for shared authentication checks and `storage-state-manager.ts` for Playwright storage-state files. Session state belongs under `playwright/.auth/`, which is ignored by Git. Use test accounts and environments approved by your organization. Never commit credentials, tokens, or saved browser state, and do not bypass authentication controls.
