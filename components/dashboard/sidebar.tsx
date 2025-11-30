"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard,
  Calendar,
  Map,
  User,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Eventos",
    href: "/dashboard/eventos",
    icon: Calendar,
  },
  {
    label: "Mi Ruta",
    href: "/dashboard/ruta",
    icon: Map,
  },
  {
    label: "Perfil",
    href: "/dashboard/perfil",
    icon: User,
  },
]

interface DashboardSidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function DashboardSidebar({ isOpen, onToggle }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -256 }}
        animate={{ x: 0 }}
        className={cn(
          "hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-zinc-200 flex-col z-50 transition-all duration-300",
          !isOpen && "lg:w-20"
        )}
      >
        {/* Logo */}
        <div className="h-16 border-b border-zinc-200 flex items-center justify-between px-4">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="logo-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-semilla-orange flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg text-semilla-orange">
                  La Semilla
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="logo-icon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-8 h-8 rounded-lg bg-semilla-orange flex items-center justify-center mx-auto"
              >
                <Sparkles className="h-5 w-5 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                pathname === item.href
                  ? "bg-semilla-orange/10 text-semilla-orange"
                  : "text-zinc-700 hover:bg-zinc-100"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 flex-shrink-0",
                  pathname === item.href && "text-semilla-orange"
                )}
              />
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-zinc-200">
          <div className={cn("flex items-center gap-3", !isOpen && "justify-center")}>
            <div className="w-10 h-10 rounded-full bg-semilla-orange/20 flex items-center justify-center">
              <User className="h-5 w-5 text-semilla-orange" />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1 min-w-0"
                >
                  <p className="text-sm font-medium text-zinc-900 truncate">
                    Usuario
                  </p>
                  <p className="text-xs text-zinc-500 truncate">
                    miembro@lasemilla.com
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>
    </>
  )
}

