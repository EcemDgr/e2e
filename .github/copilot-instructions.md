# Copilot Instructions for goIT_Cypress/Teedo Playwright Workspace

## Overview
This workspace contains two main projects:
- **Ders1**: Cypress-based end-to-end and API testing, with custom commands and modular test organization.
- **Teedo Playwright**: Playwright-based end-to-end testing, using TypeScript and Playwright's project structure.

## Key Directories & Files
- `Ders1/cypress/e2e/`: Main Cypress test suites, organized by lessons and topics.
- `Ders1/cypress/pages/`: Page Object Model (POM) classes for Cypress tests (e.g., `Login.js`).
- `Ders1/cypress/support/commands.js`: Custom Cypress commands (e.g., `cy.login`).
- `Teedo Playwright/tests/`: Playwright test specs.
- `Teedo Playwright/pages/`: Page Object Model classes for Playwright (e.g., `HomePage.ts`).
- `Teedo Playwright/playwright.config.ts`: Playwright configuration (parallelism, retries, reporters, etc.).

## Patterns & Conventions
- **Cypress**:
  - Use custom commands via `Cypress.Commands.add` in `support/commands.js` (e.g., `cy.login`).
  - Page Object Model is used for reusable page logic (see `pages/`).
  - Test files are grouped by lesson/topic for clarity.
- **Playwright**:
  - Tests use Playwright's `test` and `expect` APIs.
  - Page Object Model is used for encapsulating page actions.
  - Configuration enables parallel runs, retries on CI, and HTML reporting.

## Workflows
- **Cypress**:
  - Run tests with `npx cypress open` or `npx cypress run` from the `Ders1` directory.
  - Add new custom commands in `support/commands.js` and use them in tests.
- **Playwright**:
  - Run tests with `npx playwright test` from the `Teedo Playwright` directory.
  - View HTML reports in `playwright-report/index.html` after test runs.

## Integration & Data
- Test data for Cypress is stored in `cypress/fixtures/` as JSON files.
- Performance/API tests for Cypress are in `cypress/e2e/Performance/` (YAML and CSV files).

## Examples
- Cypress login command: `cy.login(email, password)`
- Playwright page object usage: `const home = new HomePage(page); await home.goto();`

## Notes
- No monorepo tooling; each project manages its own dependencies and scripts.
- No existing `.github/copilot-instructions.md` or README found; this file is the primary agent guide.
