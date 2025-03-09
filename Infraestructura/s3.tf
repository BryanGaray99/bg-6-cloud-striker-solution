resource "aws_s3_bucket" "bukethackaton" {
  bucket = "bucket-hackaton"  
  acl    = "private"

 
  tags = {
    Environment = "Dev"
    Project     = "Hackathon"
  }
}
resource "aws_s3_bucket_versioning" "bukethackaton" {
  bucket = aws_s3_bucket.bukethackaton.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "public_read_policy" {
  bucket = aws_s3_bucket.bukethackaton.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.bukethackaton.arn}/*"
      }
    ]
  })
}