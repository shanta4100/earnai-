provider "aws" { region = var.aws_region }

variable "aws_region" { type = string }
variable "project" { type = string }

resource "aws_s3_bucket" "audit_ledger" {
  bucket = "${var.project}-audit-ledger"
  acl    = "private"
  versioning { enabled = true }
}
