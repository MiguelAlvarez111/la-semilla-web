"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { User } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NextEventWidgetProps {
  user: User
}

export function NextEventWidget({ user }: NextEventWidgetProps) {
  const nextEvent = user.nextEvent

  if (!nextEvent) {
    return null
  }

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-zinc-900">Próximo Evento</h2>
        <div className="w-12 h-12 rounded-xl bg-semilla-orange/10 flex items-center justify-center">
          <Calendar className="h-6 w-6 text-semilla-orange" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-1">
            {nextEvent.title}
          </h3>
          <p className="text-zinc-600">{nextEvent.date}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3 text-zinc-600">
            <Clock className="h-4 w-4" />
            <span>{nextEvent.time}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-600">
            <MapPin className="h-4 w-4" />
            <span>{nextEvent.location}</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full mt-4 group"
          asChild
        >
          <a href="/dashboard/eventos">
            Ver más detalles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  )
}

