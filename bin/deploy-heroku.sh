#!/usr/bin/env bash
git checkout master
git merge develop --no-commit --no-ff
npm run build
git push heroku master
git checkout develop
