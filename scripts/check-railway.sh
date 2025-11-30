#!/bin/bash

# Script para verificar el estado de Railway desde la consola
# Ejecuta: ./scripts/check-railway.sh

echo "🚂 Verificando estado de Railway..."
echo ""

# Verificar si Railway CLI está instalada
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI no está instalada"
    echo "   Instala con: npm i -g @railway/cli"
    exit 1
fi

echo "✅ Railway CLI instalada: $(railway --version)"
echo ""

# Verificar autenticación
echo "📋 Verificando autenticación..."
if railway whoami &> /dev/null; then
    echo "✅ Autenticado como: $(railway whoami)"
else
    echo "❌ No estás autenticado. Ejecuta: railway login"
    exit 1
fi

echo ""
echo "📦 Proyectos disponibles:"
railway list

echo ""
echo "📊 Estado del proyecto vinculado:"
if railway status &> /dev/null; then
    railway status
else
    echo "⚠️  No hay proyecto vinculado. Ejecuta: railway link"
    echo ""
    echo "Para vincular tu proyecto:"
    echo "1. Ejecuta: railway link"
    echo "2. Selecciona tu proyecto 'la-semilla-web'"
    exit 1
fi

echo ""
echo "🔧 Variables de entorno:"
railway variables

echo ""
echo "🌐 Servicios:"
railway service

echo ""
echo "📝 Últimos logs:"
railway logs --tail 10

echo ""
echo "✅ Verificación completada!"

