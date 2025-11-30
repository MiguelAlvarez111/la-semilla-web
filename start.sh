#!/bin/sh
# Script de inicio para Railway
# Asegura que Next.js escuche en el puerto correcto

PORT=${PORT:-3000}
HOSTNAME=${HOSTNAME:-0.0.0.0}

echo "🚀 Starting Next.js on $HOSTNAME:$PORT"

exec next start -H $HOSTNAME -p $PORT

