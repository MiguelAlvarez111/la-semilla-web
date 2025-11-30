"use client"

import { motion } from "framer-motion"
import { Map, CheckCircle2, Circle } from "lucide-react"
import { User } from "@/lib/data"
import { cn } from "@/lib/utils"

interface MyRouteWidgetProps {
  user: User
}

export function MyRouteWidget({ user }: MyRouteWidgetProps) {
  const route = user.route

  if (!route) {
    return null
  }

  const currentIndex = route.steps.indexOf(route.current)

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-zinc-900">Mi Ruta</h2>
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
          <Map className="h-6 w-6 text-blue-500" />
        </div>
      </div>

      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="relative">
          <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${route.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-semilla-orange to-semilla-orange-dark rounded-full"
            />
          </div>
          <p className="text-sm text-zinc-600 mt-2">
            {route.progress}% completado
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {route.steps.map((step, index) => {
            const isCompleted = index < currentIndex
            const isCurrent = index === currentIndex
            const isUpcoming = index > currentIndex

            return (
              <div
                key={step}
                className={cn(
                  "flex items-center gap-3",
                  isCurrent && "font-semibold"
                )}
              >
                {isCompleted ? (
                  <CheckCircle2 className="h-5 w-5 text-semilla-orange flex-shrink-0" />
                ) : (
                  <Circle
                    className={cn(
                      "h-5 w-5 flex-shrink-0",
                      isCurrent
                        ? "text-semilla-orange fill-semilla-orange"
                        : "text-zinc-300"
                    )}
                  />
                )}
                <span
                  className={cn(
                    "text-sm",
                    isCompleted && "text-zinc-500 line-through",
                    isCurrent && "text-semilla-orange",
                    isUpcoming && "text-zinc-400"
                  )}
                >
                  {step}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

