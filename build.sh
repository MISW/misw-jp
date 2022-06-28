#!/usr/bin/env sh
npm install -g pnpm
pnpm i --frozen-lockfile
pnpm run css:build
mv -v src/ dist/
mv -v _headers dist/
mv -v _redirects dist/
