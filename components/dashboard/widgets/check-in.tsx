"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { QrCode, Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Mock QR Code - In production, generate this dynamically
const QR_CODE_DATA = "https://lasemilla.com/checkin/user-123-sunday-2024"

export function CheckInWidget() {
  const [qrCode] = useState(QR_CODE_DATA)

  const downloadQR = () => {
    // In production, trigger QR download
    console.log("Downloading QR code...")
  }

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-1">
            Check-in Rápido
          </h2>
          <p className="text-sm text-zinc-600">
            Usa este código QR para hacer check-in este domingo
          </p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
          <QrCode className="h-6 w-6 text-green-500" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* QR Code Display */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 bg-white border-2 border-zinc-200 rounded-xl flex items-center justify-center p-4">
            {/* Mock QR Code - Replace with actual QR generation library */}
            <div className="w-full h-full bg-zinc-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <QrCode className="h-16 w-16 text-zinc-400 mx-auto mb-2" />
                <p className="text-xs text-zinc-500">QR Code</p>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  {qrCode.slice(0, 20)}...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-zinc-900">
              ¿Cómo funciona?
            </h3>
            <ol className="space-y-1 text-sm text-zinc-600 list-decimal list-inside">
              <li>Muestra este código QR en la entrada</li>
              <li>El equipo escaneará tu código</li>
              <li>¡Listo! Ya estás registrado</li>
            </ol>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={downloadQR}
              variant="outline"
              className="flex-1"
            >
              <Download className="h-4 w-4 mr-2" />
              Descargar
            </Button>
            <Button
              variant="outline"
              className="flex-1"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Renovar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

