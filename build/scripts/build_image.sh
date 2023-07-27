#!/bin/bash
set -e
cd "$(dirname "$0")"
cd ../..

IMAGE_NAME="rumsystem-fe"
REMOTE_IMAGE_NAME="btclinkgrt/rumsystem-fe"

echo "building image..."
docker build -f Dockerfile -t "$IMAGE_NAME" .
echo "pushing image..."
docker tag "$IMAGE_NAME" "$REMOTE_IMAGE_NAME"
docker push "$REMOTE_IMAGE_NAME"
echo "pushing image done!"
