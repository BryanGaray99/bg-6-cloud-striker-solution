output "pyme_access_key_id" {
  description = "Access Key ID del usuario IAM para CDK"
  value       = aws_iam_access_key.pyme_user_key.id
}

output "pyme_secret_access_key" {
  description = "Secret Access Key del usuario IAM para CDK"
  value       = aws_iam_access_key.pyme_user_key.secret
  sensitive   = true
}

output "bucket_name" {
  description = "Nombre del bucket de S3"
  value       = aws_s3_bucket.bukethackaton.bucket
}

output "bucket_arn" {
  description = "ARN del bucket de S3"
  value       = aws_s3_bucket.bukethackaton.arn
}