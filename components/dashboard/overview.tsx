"use client"

import { motion } from "framer-motion"
import { mockUser } from "@/lib/data"
import { NextEventWidget } from "./widgets/next-event"
import { MyRouteWidget } from "./widgets/my-route"
import { CheckInWidget } from "./widgets/check-in"

export function DashboardOverview() {
  const greeting = `Hola, ${mockUser.name}`

  return (
    <div className="max-w-7xl mx-auto">
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
          {greeting}
        </h1>
        <p className="text-zinc-600">
          Bienvenido a tu panel de control. Aquí puedes ver tus próximos eventos
          y tu progreso.
        </p>
      </motion.div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <NextEventWidget user={mockUser} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <MyRouteWidget user={mockUser} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="lg:col-span-2"
        >
          <CheckInWidget />
        </motion.div>
      </div>
    </div>
  )
}

