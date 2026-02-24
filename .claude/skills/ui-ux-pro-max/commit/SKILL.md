---
name: commit
description: Stage relevant files and create a conventional commit
disable-model-invocation: true
---

Stage and commit the current changes:

1. Run `git status` and `git diff` to understand all changes
2. Only `git add` files related to the current task — never `git add -A` or `git add .`
3. Write a single-line conventional commit message: `type: description`
   - Types: feat, fix, docs, style, refactor, perf, test, chore
   - Keep it concise, under 72 characters
4. Run `git commit -m "message"`
5. Show the result
