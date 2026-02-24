#!/bin/bash
# Bug review hook — runs after git add (PostToolUse)
# Launches headless claude -p to review staged changes, with progress spinner
# Saves review to file, returns short JSON so Claude reads + presents it

set -euo pipefail

STAGED_FILES=$(git diff --cached --name-only 2>/dev/null | grep -E '\.(py|ts|tsx|js|jsx|rs|swift)$' || true)

if [ -z "$STAGED_FILES" ]; then
  exit 0
fi

FILE_COUNT=$(echo "$STAGED_FILES" | wc -l | tr -d ' ')
DIFF_LINES=$(git diff --cached --stat 2>/dev/null | tail -1 | grep -oE '[0-9]+ insertion|[0-9]+ deletion' | awk '{s+=$1} END{print s+0}')
FILE_LIST=$(echo "$STAGED_FILES" | sed 's/^/  - /')
DIFF_SUMMARY=$(git diff --cached --stat 2>/dev/null)

REVIEW_FILE="/tmp/bug-review-staged.md"

# Progress spinner (writes to stderr)
spin_pid=""
claude_pid=""
PROMPT_FILE=""
REVIEW_TMPFILE=""
start_spinner() {
  local frames=('⠋' '⠙' '⠹' '⠸' '⠼' '⠴' '⠦' '⠧' '⠇' '⠏')
  local start_time=$SECONDS
  while true; do
    local elapsed=$(( SECONDS - start_time ))
    local mins=$(( elapsed / 60 ))
    local secs=$(( elapsed % 60 ))
    for frame in "${frames[@]}"; do
      printf "\r  ${frame} Bug review: ${FILE_COUNT} staged files, ~${DIFF_LINES} lines... %dm%02ds (Ctrl+C to cancel)" "$mins" "$secs" >&2
      sleep 0.1
      elapsed=$(( SECONDS - start_time ))
      mins=$(( elapsed / 60 ))
      secs=$(( elapsed % 60 ))
    done
  done
}
stop_spinner() {
  if [ -n "$spin_pid" ]; then
    kill "$spin_pid" 2>/dev/null || true
    wait "$spin_pid" 2>/dev/null || true
    printf "\r%80s\r" "" >&2
    spin_pid=""
  fi
}
cleanup() {
  stop_spinner
  if [ -n "$claude_pid" ]; then
    kill "$claude_pid" 2>/dev/null || true
    kill -- -"$claude_pid" 2>/dev/null || true
    wait "$claude_pid" 2>/dev/null || true
    claude_pid=""
  fi
  rm -f "$PROMPT_FILE" "$REVIEW_TMPFILE"
}
abort() {
  printf "\r%80s\r" "" >&2
  echo "Bug review cancelled." >&2
  cleanup
  exit 130
}
trap cleanup EXIT
trap abort INT TERM

# Build prompt
PROMPT_FILE=$(mktemp)
REVIEW_TMPFILE=$(mktemp)

cat > "$PROMPT_FILE" <<EOF
You are a senior code reviewer performing a bug review on staged changes (pre-commit).

Staged files:
${FILE_LIST}

Diff summary:
${DIFF_SUMMARY}

Instructions:
1. Run \`git diff --cached\` to see the full staged diff
2. For each changed code file, also read the full file to understand context

3. **Trace the dependency chain** — this is critical:
   a. For every function/type/interface that was ADDED, CHANGED, or REMOVED:
      - Use Grep to find all callers and importers across the codebase
      - Read those caller files to check if the change breaks them
   b. For every changed function signature (params added/removed/retyped):
      - Verify ALL call sites pass the correct arguments
   c. For changed types/interfaces:
      - Check all files that import or implement them
   d. For changed API routes or response shapes:
      - Check frontend code that calls those endpoints
   e. For changed DB queries or schema:
      - Check all services that read/write those tables or columns

4. Check the changed code itself for:
   - Logic bugs, off-by-one errors, null/undefined handling
   - Missing error handling or uncaught exceptions
   - Security issues (injection, XSS, exposed secrets, path traversal)
   - Race conditions, deadlocks, or async/await issues
   - Type mismatches or wrong API contracts between frontend and backend
   - Broken imports or missing dependencies
   - Edge cases not handled

5. Output a structured review:

## Bug Review: Staged Changes

### Issues Found
(list each issue with severity: critical/warning/info, file, line, and description)

### Chain Reaction Risks
(issues in RELATED files — callers, importers, downstream consumers — that break due to these changes)

### Verdict
(CLEAN / NEEDS ATTENTION / HAS BUGS)

If no issues found, say the code looks clean and explain why you are confident.
EOF

# Run headless review with spinner
start_spinner &
spin_pid=$!

claude -p "$(cat "$PROMPT_FILE")" --allowedTools "Bash(git diff*),Bash(git log*),Bash(git show*),Read,Glob,Grep" --max-turns 25 2>/dev/null > "$REVIEW_TMPFILE" &
claude_pid=$!

wait "$claude_pid" 2>/dev/null || true
claude_pid=""

stop_spinner

# Save review to file
cp "$REVIEW_TMPFILE" "$REVIEW_FILE"
rm -f "$REVIEW_TMPFILE"
REVIEW_TMPFILE=""

# Return short JSON — Claude reads the file and presents it
jq -n --arg file "$REVIEW_FILE" \
  '{
    decision: "block",
    reason: ("Bug review complete (" + $file + "). Read this file and present the review findings to the user as formatted markdown.")
  }'

exit 0
