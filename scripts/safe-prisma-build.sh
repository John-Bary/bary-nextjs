#!/usr/bin/env bash
set -euo pipefail

# Allow builds to proceed locally or in CI without a provisioned database.
# Run schema deployment only when DATABASE_URL is available, but always
# generate the Prisma client so Next.js can compile.

if [[ -n "${DATABASE_URL:-}" ]]; then
  echo "Running prisma migrate deploy..."
  prisma migrate deploy
else
  echo "DATABASE_URL not set; skipping prisma migrate deploy."
fi

# Prisma generate needs a DATABASE_URL defined, but it does not connect
# to the database when data proxy is not used. Provide a safe placeholder
# when one is not supplied so builds remain deterministic.
export DATABASE_URL="${DATABASE_URL:-postgresql://placeholder:placeholder@localhost:5432/placeholder?schema=public}"

prisma generate
