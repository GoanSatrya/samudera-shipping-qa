# Configuration

Copy `.env.example` to `.env`. Select an app using `APP_ID` (`app-01` through `app-06`) and an environment using `TEST_ENV` (`dev`, `sit`, or `uat`). Set the matching `APP_XX_<ENV>_BASE_URL` to an authorized absolute HTTP(S) URL.

For example, `APP_ID=app-02`, `TEST_ENV=sit`, and `APP_02_SIT_BASE_URL=https://your-approved-test-host/` select app 02 in SIT. Run `npm run validate:config` to validate the selected values. Do not commit `.env`.
