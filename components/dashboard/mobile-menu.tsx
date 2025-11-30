"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Calendar,
  Map,
  User,
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

export function DashboardMobileMenu() {
  const pathname = usePathname()

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 h-16 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-semilla-orange flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <span className="font-bold text-lg text-semilla-orange">
          La Semilla
        </span>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px]">
          <nav className="flex flex-col space-y-2 mt-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  pathname === item.href
                    ? "bg-semilla-orange/10 text-semilla-orange"
                    : "text-zinc-700 hover:bg-zinc-100"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

