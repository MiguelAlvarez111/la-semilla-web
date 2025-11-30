import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { SpotifyPlaylist } from "@/components/sections/spotify-playlist"
import { BentoGrid } from "@/components/sections/bento-grid"
import { AboutPreview } from "@/components/home/AboutPreview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SpotifyPlaylist />
      <BentoGrid />
      <AboutPreview />
      <Footer />
    </main>
  )
}

