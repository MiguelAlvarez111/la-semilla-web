import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { groups } from "@/lib/data"
import { GroupDetails } from "@/components/groups/group-details"
import { GroupHero } from "@/components/groups/group-hero"
import { GroupInfoBar } from "@/components/groups/group-info-bar"
import { GroupGallery } from "@/components/groups/group-gallery"
import { GroupCTA } from "@/components/groups/group-cta"

interface GroupPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return groups.map((group) => ({
    slug: group.slug,
  }))
}

export default async function GroupPage({ params }: GroupPageProps) {
  const { slug } = await params
  const group = groups.find((g) => g.slug === slug)

  if (!group) {
    notFound()
    return // TypeScript guard
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <GroupHero group={group} />
      <GroupInfoBar group={group} />
      <GroupDetails group={group} />
      <GroupGallery group={group} />
      <GroupCTA group={group} />
    </main>
  )
}

