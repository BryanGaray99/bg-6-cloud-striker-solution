terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=4.36.0"
      
    }
    random = {
      source  = "hashicorp/random"
      version = "3.4.3"
    }
  }
  
}
provider "aws" {
  region     = var.region
  profile = "default"
 # access_key = ""
  #secret_key = ""
}