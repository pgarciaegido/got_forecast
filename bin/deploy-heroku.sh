#!/usr/bin/env bash
git checkout master
git merge develop -m \"merge develop\"
npm run build
git add .
git commit -m \"build public folder\"
git push heroku master
git checkout develop
