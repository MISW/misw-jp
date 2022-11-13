#!/usr/bin/env sh

pnpm i --frozen-lockfile
pnpm build
mv -v _headers dist/
mv -v _redirects dist/

exit
