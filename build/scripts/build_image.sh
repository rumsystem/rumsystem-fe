#!/bin/bash
set -e
cd "$(dirname "$0")"
cd ../..

IMAGE_NAME="rumsystem-fe:release"
REMOTE_IMAGE_NAME="dockerhub.qingcloud.com/pressone_private/rumsystem-fe:release"

docker login -u "$DOCKER_HUB_USER" -p "$DOCKER_HUB_PWD" dockerhub.qingcloud.com
echo "building image..."
docker build -f Dockerfile -t "$IMAGE_NAME" .
echo "pushing image..."
docker tag "$IMAGE_NAME" "$REMOTE_IMAGE_NAME"
docker push "$REMOTE_IMAGE_NAME"
echo "pushing image done!"
