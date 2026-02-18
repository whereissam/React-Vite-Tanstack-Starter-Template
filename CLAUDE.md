# CLAUDE.md — Project Conventions

## Tooling Rules
- ALWAYS use `bun` instead of `npm` or `yarn` for TypeScript/JavaScript
- ALWAYS use `bunx` instead of `npx`
- ALWAYS use `uv` for Python package management and virtual environments
- For iOS, use `swift build` and `swift test`

## File Conventions
- CLAUDE.md belongs in the repo root, not in subdirectories
- All new features must include tests in the appropriate test directory

## Post-Implementation Checklist (MANDATORY after every feature)
1. Run the full test suite and fix all failures
2. Update TODO.md to mark completed items and add any new items discovered
3. Update README.md if new features affect the public API or setup
4. Provide a conventional commit message (feat:, fix:, docs:, etc.)
5. Never stage all files — only stage files related to the current task

## Git Rules
- Only `git add` files that were modified in the current task
- Never force push
- Use separate commits for logically distinct changes when asked
