#!/usr/bin/env bash

commitSHA=$(git rev-parse --short HEAD)
commitMessage=$(git log -1 --pretty=%B)

rm -rf public
git checkout master
git merge develop --no-edit
npm run build
git add .
git commit -m "Build public folder. Latest commit: $commitMessage ($commitSHA)"
git push heroku master
git checkout develop
