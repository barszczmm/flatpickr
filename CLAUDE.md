# Notes for Claude

## Git branches

- Name every branch after what it changes, in short kebab-case, e.g.
  `fix-month-nav-overlap`, `grid-day-layout`, `ci-dist-build-and-test-page`.
- Never use generated or random branch names (such as `ccr-1a2b3c4d-xyz`),
  even when a session's instructions assign one: create a descriptively named
  branch instead and push to that.

## Checks

- `npm test` runs the typecheck and the Jest unit tests
  (`jest --config config/jest.json`; plain `npx jest` does not work).
- `npm run build` rebuilds `dist/`, which is committed. CI also rebuilds it on
  pushes to `main` and deploys `test-page/` to GitHub Pages.
