# EarnAI
Next.js + Tailwind + Firebase project deployed on Vercel.
# GNAIAI Infra Bootstrap

Repository: infra modules (AWS / GCP / Azure), CI/CD, OPA policies, and runbooks.

This PR contains:
- `infra/aws/`, `infra/gcp/`, `infra/azure/` Terraform skeletons
- `.github/workflows/ci-cd.yml` unified CI/CD
- `policies/aaac.rego` sample OPA rules
- `ci/secrets.example.env` secrets template
- `docs/runbooks/` minimal runbook

Replace placeholders before applying. Use OIDC where possible.
