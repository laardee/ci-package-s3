'use strict';

const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({ region: 'eu-west-1' });

const params = { Bucket: process.env.BUCKET, Key: `key-${Date.now()}`, Body: fs.readFileSync('.serverless/cloudformation-template-create-stack.json') };
s3.upload(params, function(err, data) {
  console.log('error', err);
});

