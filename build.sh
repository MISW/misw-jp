#!/usr/bin/env sh

npm install -g pnpm
pnpm i --frozen-lockfile
pnpm build
mv -v _headers dist/
mv -v _redirects dist/

exit
