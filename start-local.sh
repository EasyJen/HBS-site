#!/bin/sh
set -eu
cd "$(dirname "$0")"
if command -v hugo >/dev/null 2>&1; then
  exec hugo server --bind 127.0.0.1 --port 1314
else
  exec ./.tools/hugo server --bind 127.0.0.1 --port 1314
fi
