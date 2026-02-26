# First end-to-end test runbook

1. Deploy Governance Control Plane (OPA + audit ledger) in sandbox.
2. Deploy minimal microservice that accepts Stripe webhook and writes to audit bucket.
3. Use Stripe CLI to send signed test event to webhook URL.
4. Verify audit object appears in S3/GCS/Blob.
5. Confirm OPA policy logs show no violations.
6. Run smoke tests and review observability dashboards.
