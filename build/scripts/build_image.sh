#!/bin/bash
set -e
cd "$(dirname "$0")"
cd ../..

IMAGE_NAME="rumsystem-fe:release"
REMOTE_IMAGE_NAME="dockerhub.qingcloud.com/pressone_private/rumsystem-fe:release"

docker login -u prs-admin -p 57e348ab37aa5b55f68b7642ac584a41 dockerhub.qingcloud.com
echo "building image..."
docker build -f Dockerfile -t "$IMAGE_NAME" .
echo "pushing image..."
docker tag "$IMAGE_NAME" "$REMOTE_IMAGE_NAME"
docker push "$REMOTE_IMAGE_NAME"
echo "pushing image done!"
