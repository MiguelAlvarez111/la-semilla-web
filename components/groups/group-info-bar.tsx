"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Group } from "@/lib/data"
import { getGroupThemeStyles } from "./group-theme"
import { cn } from "@/lib/utils"

interface GroupInfoBarProps {
  group: Group
}

export function GroupInfoBar({ group }: GroupInfoBarProps) {
  const theme = getGroupThemeStyles(group)

  const infoItems = [
    {
      icon: Calendar,
      label: "Día",
      value: group.day,
    },
    {
      icon: Clock,
      label: "Hora",
      value: group.time,
    },
    {
      icon: MapPin,
      label: "Lugar",
      value: group.location,
    },
  ]

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-20 z-40 border-b",
        theme.background,
        theme.border
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 py-6",
            theme.cardBg,
            "backdrop-blur-sm"
          )}
        >
          {infoItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className={cn("p-3 rounded-lg", theme.cardBg)}>
                <item.icon className={cn("h-6 w-6", theme.accent)} />
              </div>
              <div>
                <p className={cn("text-sm font-medium opacity-70", theme.text)}>
                  {item.label}
                </p>
                <p className={cn("text-lg font-bold", theme.text)}>
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

