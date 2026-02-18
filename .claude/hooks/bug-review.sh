#!/bin/bash
# Bug review hook — runs after git commit
# Reads the last commit's diff and outputs review context for Claude

set -euo pipefail

# Get the last commit info
COMMIT_HASH=$(git rev-parse HEAD 2>/dev/null)
if [ -z "$COMMIT_HASH" ]; then
  exit 0
fi

COMMIT_MSG=$(git log -1 --pretty=format:"%s" "$COMMIT_HASH")
CHANGED_FILES=$(git diff-tree --no-commit-id --name-only -r "$COMMIT_HASH" 2>/dev/null)
DIFF=$(git diff "$COMMIT_HASH"~1 "$COMMIT_HASH" --stat 2>/dev/null)

if [ -z "$CHANGED_FILES" ]; then
  exit 0
fi

# Count changed files — skip review for trivial commits (docs only, etc.)
CODE_FILES=$(echo "$CHANGED_FILES" | grep -E '\.(py|ts|tsx|js|jsx|rs|swift)$' || true)
if [ -z "$CODE_FILES" ]; then
  exit 0  # No code files changed, skip review
fi

FILE_COUNT=$(echo "$CODE_FILES" | wc -l | tr -d ' ')

# Output context as JSON for Claude to process
cat <<EOF
{
  "decision": "block",
  "reason": "Bug review triggered for commit ${COMMIT_HASH:0:7}: '${COMMIT_MSG}'. ${FILE_COUNT} code file(s) changed. Please review the changes for bugs before continuing.",
  "hookSpecificOutput": {
    "hookEventName": "PostToolUse",
    "additionalContext": "AUTO BUG REVIEW — Commit ${COMMIT_HASH:0:7}\n\nChanged code files:\n$(echo "$CODE_FILES" | sed 's/^/  - /')\n\nDiff summary:\n${DIFF}\n\nPlease run: git diff ${COMMIT_HASH}~1 ${COMMIT_HASH} -- <file> for each code file above, review for:\n1. Logic bugs, off-by-one errors, null/undefined issues\n2. Missing error handling or uncaught exceptions\n3. Security issues (injection, XSS, exposed secrets)\n4. Race conditions or async issues\n5. Type mismatches or wrong API contracts\n6. Broken imports or missing dependencies\n\nAfter reviewing, summarize any issues found or confirm the code looks clean."
  }
}
EOF

exit 0
