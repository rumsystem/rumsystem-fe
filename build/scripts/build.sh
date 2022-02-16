#!/bin/bash
set -e
cd "$(dirname "$0")"
cd ../..

rm -rf ./dist
echo 'generate routes...'
yarn genroutes
echo 'generate routes done!'
echo 'type checking...'
yarn tsc -p ./tsconfig.json --noEmit
echo 'type checking done!'
echo 'webpack building...'
node --max-old-space-size=4096 node_modules/webpack/bin/webpack.js --config ./build/config/webpack.prod.conf.js
echo 'webpack building done!'

echo 'copy public files...'
cp -r ./public/* ./dist/
echo "build done!"
