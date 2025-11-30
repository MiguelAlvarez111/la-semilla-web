"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/soy-nuevo", label: "Soy Nuevo" },
  { href: "/grupos", label: "Grupos" },
  { href: "/dar", label: "Dar" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Check initial scroll position
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-zinc-200/50 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "text-2xl md:text-3xl font-black tracking-tighter transition-colors",
                  isScrolled ? "text-semilla-orange" : "text-zinc-900"
                )}
              >
                La Semilla
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-semilla-orange",
                      pathname === link.href
                        ? "text-semilla-orange"
                        : isScrolled ? "text-zinc-900" : "text-zinc-900"
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-semilla-orange"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="hidden md:block">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={cn(
                    "gap-2 transition-colors",
                    isScrolled 
                      ? "border-zinc-300 text-zinc-900 hover:bg-zinc-50" 
                      : "border-zinc-300 text-zinc-900 hover:bg-zinc-50"
                  )}
                >
                  <User className="h-4 w-4" />
                  Mi Cuenta
                </Button>
              </Link>

              {/* Mobile Menu Trigger */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={cn(
                      "text-zinc-900 hover:bg-zinc-100",
                      isScrolled ? "text-zinc-900" : "text-zinc-900"
                    )}
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-colors py-2",
                          pathname === link.href
                            ? "text-semilla-orange"
                            : "text-foreground hover:text-semilla-orange"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="mt-8"
                    >
                      <Button variant="outline" className="w-full gap-2">
                        <User className="h-4 w-4" />
                        Mi Cuenta
                      </Button>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}

