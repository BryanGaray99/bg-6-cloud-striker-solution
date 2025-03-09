resource "aws_iam_user" "pyme_user" {
  name = "pyme-user"
  force_destroy = true
  
}
resource "aws_iam_user_policy_attachment" "pyme_user_admin_attachment" {
  user       = aws_iam_user.pyme_user.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
resource "aws_iam_access_key" "pyme_user_key" {
  user = aws_iam_user.pyme_user.name
}