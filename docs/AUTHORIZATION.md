# Authorization testing

Place application-specific permission and role checks in `apps/app-xx/tests/access-control/`. Define expected access from the application's approved authorization requirements; do not infer policy from UI behavior alone.

Use only authorized test accounts, roles, and non-production environments. Keep role definitions and test identities free of credentials. Access-control tests must not attempt to gain access outside the approved test scope.
