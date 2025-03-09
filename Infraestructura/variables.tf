variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}
variable "table_name" {
  description = "PymesResult"
  type        = string
  default     = "users-table"
}