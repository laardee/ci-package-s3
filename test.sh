docker pull laardee/serverless:1.26.0
docker run -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY -v $(pwd):/src laardee/serverless:1.26.0 /bin/sh -c "cd src && ls"
