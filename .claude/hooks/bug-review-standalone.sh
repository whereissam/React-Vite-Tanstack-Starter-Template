#!/bin/bash
# Standalone bug review — run manually or from git post-commit hook
# Uses Claude Code headless mode to review the last commit
#
# Usage:
#   .claude/hooks/bug-review-standalone.sh              # review last commit
#   .claude/hooks/bug-review-standalone.sh <commit>     # review specific commit
#   .claude/hooks/bug-review-standalone.sh HEAD~3..HEAD  # review range

set -euo pipefail

COMMIT="${1:-HEAD}"

# Handle commit ranges
if [[ "$COMMIT" == *".."* ]]; then
  DIFF_CMD="git diff $COMMIT"
  LOG_CMD="git log --oneline $COMMIT"
else
  DIFF_CMD="git diff ${COMMIT}~1 ${COMMIT}"
  LOG_CMD="git log -1 --oneline ${COMMIT}"
fi

CHANGED_FILES=$($DIFF_CMD --name-only 2>/dev/null | grep -E '\.(py|ts|tsx|js|jsx)$' || true)

if [ -z "$CHANGED_FILES" ]; then
  echo "No code files changed, nothing to review."
  exit 0
fi

FILE_COUNT=$(echo "$CHANGED_FILES" | wc -l | tr -d ' ')
COMMIT_INFO=$($LOG_CMD 2>/dev/null)

echo "Reviewing ${FILE_COUNT} file(s) from: ${COMMIT_INFO}"
echo "---"

# Run Claude in headless mode for the review
claude -p "$(cat <<EOF
You are a senior code reviewer performing a bug review on a git commit.

Commit: ${COMMIT_INFO}

Changed files:
$(echo "$CHANGED_FILES" | sed 's/^/  - /')

Instructions:
1. Run \`$DIFF_CMD\` to see the full diff
2. For each changed code file, also read the full file to understand context
3. Look for related files (imports, callers, tests) that might be affected
4. Check for:
   - Logic bugs, off-by-one errors, null/undefined handling
   - Missing error handling or uncaught exceptions
   - Security issues (injection, XSS, exposed secrets, path traversal)
   - Race conditions, deadlocks, or async/await issues
   - Type mismatches or wrong API contracts between frontend and backend
   - Broken imports or missing dependencies
   - Edge cases not handled
5. Output a structured review:

## Bug Review: ${COMMIT_INFO}

### Issues Found
(list each issue with severity: critical/warning/info, file, line, and description)

### Related Code Concerns
(any issues in related files that interact with the changes)

### Verdict
(CLEAN / NEEDS ATTENTION / HAS BUGS)

If no issues found, say the code looks clean and explain why you're confident.
EOF
)" --allowedTools "Bash(git diff*),Bash(git log*),Bash(git show*),Read,Glob,Grep" --max-turns 15

echo ""
echo "--- Bug review complete ---"
