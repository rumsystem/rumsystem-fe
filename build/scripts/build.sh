#!/bin/bash
set -e
cd "$(dirname "$0")"
cd ../..

rm -rf ./dist
rm -rf ./dist_gen
echo 'generate routes...'
yarn genroutes
echo 'generate routes done!'
echo 'type checking...'
yarn tsc -p ./tsconfig.json --noEmit
echo 'type checking done!'
echo 'webpack building...'
node --max-old-space-size=4096 node_modules/webpack/bin/webpack.js --config ./build/config/webpack.prod.conf.js
echo 'webpack building done!'

# echo 'generaing static html...'
# cross-env NODE_OPTIONS="--max-old-space-size=8192" TS_NODE_PROJECT="./gen/tsconfig.json" node -r ts-node/register/transpile-only ./gen/index.ts
# echo 'generaing static html done!'

echo 'copy public files...'
cp -r ./public/* ./dist/
# cp -r ./public/* ./dist_gen/
echo "build done!"
