package gnaiai

violation[msg] {
  input.resource.type == "aws_db_instance"
  input.resource.instance_class == "db.t2.micro"
  msg = "DB instance class too small for production; requires at least db.t4g.medium"
}

violation[msg] {
  input.resource.type == "helm_release"
  not input.resource.values.aaac_policy_enabled
  msg = "Helm release missing AAAC policy flag"
}
