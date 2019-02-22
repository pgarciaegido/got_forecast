#!/usr/bin/env bash
npm run build
git checkout master
git merge develop
git push heroku master
git checkout develop
