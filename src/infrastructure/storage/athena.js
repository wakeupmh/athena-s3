require('dotenv').config()

const aws = require("aws-sdk")
const AthenaExpress = require("athena-express")
const awsCredentials = {
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
}
 
aws.config.update(awsCredentials)
 
const athenaExpressConfig = {
  aws,
  s3: process.env.AWS_S3,
  getStats: true
}
 
const athenaExpress = new AthenaExpress(athenaExpressConfig)

module.exports = {
  athenaExpress
}
