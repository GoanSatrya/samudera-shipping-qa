# API testing

The shared API helpers live in `framework/api/`. Add an application-specific `apps/app-xx/api/` directory only when API testing and the required endpoint access have been approved.

Use documented test endpoints and authorized credentials from the environment configuration. Never target production by default, bypass authentication, or commit tokens and secrets. Keep API test data synthetic and clean up records created during a run.
