import { Group } from "@/lib/data"

export function getGroupThemeStyles(group: Group) {
  const themeConfig = {
    dreamers: {
      background: "bg-black",
      text: "text-white",
      accent: "text-purple-400",
      border: "border-purple-500/50",
      gradient: "from-purple-900 via-black to-pink-900",
      cardBg: "bg-zinc-900/80",
      glitch: true,
    },
    champions: {
      background: "bg-zinc-900",
      text: "text-white",
      accent: "text-orange-500",
      border: "border-zinc-700",
      gradient: "from-zinc-800 via-zinc-900 to-black",
      cardBg: "bg-zinc-800/80",
      glitch: false,
    },
    mujeres: {
      background: "bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50",
      text: "text-zinc-900",
      accent: "text-amber-700",
      border: "border-amber-200",
      gradient: "from-amber-100 via-stone-100 to-orange-100",
      cardBg: "bg-white/90",
      glitch: false,
    },
    kids: {
      background: "bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50",
      text: "text-zinc-900",
      accent: "text-orange-600",
      border: "border-orange-200",
      gradient: "from-yellow-100 via-orange-100 to-amber-100",
      cardBg: "bg-white/80",
      glitch: false,
    },
  }

  return themeConfig[group.theme] || themeConfig.dreamers
}
