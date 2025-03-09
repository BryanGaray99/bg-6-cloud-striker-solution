resource "aws_dynamodb_table" "my_table" {
  name         = var.table_name
  billing_mode = "PAY_PER_REQUEST"  
  

  hash_key     = "user_id"  
  
  attribute {
    name = "user_id"
    type = "S"  # "S" = String, "N" = Number, "B" = Binary
  }

  ttl {
    attribute_name = "expiration_time"
    enabled        = false
  }

  point_in_time_recovery {
    enabled = true
  }

  tags = {
    Name        = var.table_name
    Environment = "DEV"
  }
}