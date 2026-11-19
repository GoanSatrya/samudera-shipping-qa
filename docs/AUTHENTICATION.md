# Authentication

Authentication flows differ by application and identity provider. Implement the `SsoAuthenticator` contract only after confirming the approved login flow for the target app; never commit credentials, tokens, or saved browser state.

Session state belongs under `playwright/.auth/`, which is ignored by Git. Use test accounts and environments approved by your organization. Prefer the identity provider's documented test flow over bypassing authentication controls.
