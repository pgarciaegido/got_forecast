#!/usr/bin/env bash

# If test do not pass, do not continue
set -e

npm test

commitSHA=$(git rev-parse --short HEAD)
commitMessage=$(git log -1 --pretty=%B)
random=$RANDOM

rm -rf public
git checkout master
rm -rf public
git merge develop --no-edit
npm run build
cd public
touch $random
cd ..
git add .
git commit -m "Build public folder. Latest commit: $commitMessage ($commitSHA)"
git push heroku master
cd public
rm $random
cd ..
git checkout develop
