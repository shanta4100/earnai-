#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="gnaiai-infra"
PR_BRANCH="pr/bootstrap"
MAIN_BRANCH="main"
GITHUB_OWNER="${GITHUB_OWNER:-$(gh api user --jq .login)}"
COMMIT_MSG="chore: infra bootstrap (aws/gcp/azure, ci, policies, runbooks)"

# 1. Initialize git repo
git init
git checkout -b "$PR_BRANCH"

# 2. Add files (assumes files already created in working dir)
git add .
git commit -m "$COMMIT_MSG"

# 3. Create remote repo (private)
gh repo create "$GITHUB_OWNER/$REPO_NAME" --private --confirm

# 4. Push branch
git branch -M "$PR_BRANCH"
git push -u origin "$PR_BRANCH"

# 5. Create main branch if not exists and set default branch to main
gh api repos/$GITHUB_OWNER/$REPO_NAME --method PATCH -f default_branch="$MAIN_BRANCH" || true
git checkout -b "$MAIN_BRANCH"
git push -u origin "$MAIN_BRANCH"

# 6. Recreate PR branch and push
git checkout "$PR_BRANCH"
git push -u origin "$PR_BRANCH" --force

# 7. Open PR
gh pr create --title "Infra bootstrap: aws/gcp/azure + CI + policies" \
  --body "This PR bootstraps Terraform skeletons for AWS/GCP/Azure, unified CI/CD workflow, OPA policies, and runbooks. Replace placeholders in ci/secrets.example.env and configure OIDC before production deploys." \
  --base "$MAIN_BRANCH" --head "$GITHUB_OWNER:$PR_BRANCH"

echo "PR created. Visit: https://github.com/$GITHUB_OWNER/$REPO_NAME/pull"
#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="gnaiai-infra"
PR_BRANCH="pr/bootstrap"
MAIN_BRANCH="main"
GITHUB_OWNER="shanta4100"
COMMIT_MSG="chore: infra bootstrap (aws/gcp/azure, ci, policies, runbooks)"

# Preconditions: gh auth login done, git installed, files present in working dir.

# 1. Initialize git repo and commit current files
git init
git checkout -b "$PR_BRANCH"
git add .
git commit -m "$COMMIT_MSG"

# 2. Create remote repo (private) under your account
gh repo create "$GITHUB_OWNER/$REPO_NAME" --private --confirm

# 3. Push PR branch
git push -u origin "$PR_BRANCH"

# 4. Ensure main branch exists and set default branch to main
git checkout -b "$MAIN_BRANCH"
git push -u origin "$MAIN_BRANCH"
gh api repos/$GITHUB_OWNER/$REPO_NAME --method PATCH -f default_branch="$MAIN_BRANCH" || true

# 5. Recreate and push PR branch (force to ensure branch state)
git checkout "$PR_BRANCH"
git push -u origin "$PR_BRANCH" --force

# 6. Open PR
gh pr create --title "Infra bootstrap: aws/gcp/azure + CI + policies" \
  --body "This PR bootstraps Terraform skeletons for AWS/GCP/Azure, unified CI/CD workflow, OPA policies, and runbooks. Replace placeholders in ci/secrets.example.env and configure OIDC before production deploys." \
  --base "$MAIN_BRANCH" --head "$GITHUB_OWNER:$PR_BRANCH"

echo "PR created: https://github.com/$GITHUB_OWNER/$REPO_NAME/pull"
