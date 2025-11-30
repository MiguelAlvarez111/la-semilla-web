import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: ReactNode
  spacing?: "small" | "standard" | "large" | "hero"
  background?: "white" | "zinc-50" | "cream" | "transparent"
  className?: string
}

const spacingClasses = {
  small: "py-12 md:py-16", // 48px/64px
  standard: "py-16 md:py-24", // 64px/96px - ESTÁNDAR
  large: "py-24 md:py-32", // 96px/128px
  hero: "py-40 md:py-48", // 160px/192px
}

const backgroundClasses = {
  white: "bg-white",
  "zinc-50": "bg-zinc-50",
  cream: "bg-semilla-cream",
  transparent: "bg-transparent",
}

export function SectionWrapper({
  children,
  spacing = "standard",
  background = "white",
  className,
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        "px-4",
        className
      )}
    >
      {children}
    </section>
  )
}

