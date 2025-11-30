"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardMobileMenu } from "@/components/dashboard/mobile-menu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-50">
      <DashboardSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <DashboardMobileMenu />
      <main className="lg:pl-64 transition-all duration-300">
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  )
}

