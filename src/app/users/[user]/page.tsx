import {
  Award,
  BadgeCheck,
  Candy,
  Citrus,
  Crown,
  Gem,
  Medal,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react"

import { AppLineChart } from "@/components/AppLineChart"
import EditUser from "@/components/EditUser"
import LiveListeners from "@/components/LiveListeners"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"

const badges = [
  {
    id: "verified-artist",
    title: "Verified Artist",
    description: "This artist has been verified by Spotify.",
    icon: BadgeCheck,
    color: "blue",
  },
  {
    id: "early-adopter",
    title: "Early Adopter",
    description: "One of the early artists to join Spotify for Artists.",
    icon: Citrus,
    color: "orange",
  },
  {
    id: "top-streamed",
    title: "Top Streamed",
    description: "Recognized for high streaming numbers.",
    icon: Candy,
    color: "yellow",
  },
  {
    id: "trusted-artist",
    title: "Trusted Artist",
    description: "A trusted artist with a positive account history.",
    icon: Shield,
    color: "green",
  },
  {
    id: "premium-artist",
    title: "Premium Artist",
    description: "Has an active premium artist membership.",
    icon: Crown,
    color: "purple",
  },
  {
    id: "milestone",
    title: "Milestone Unlocked",
    description: "Reached an important streaming milestone.",
    icon: Trophy,
    color: "amber",
  },
  {
    id: "top-rated",
    title: "Top Rated",
    description: "Received consistently positive listener ratings.",
    icon: Star,
    color: "pink",
  },
  {
    id: "active",
    title: "Highly Active",
    description: "Frequently active and engaged with fans.",
    icon: Zap,
    color: "cyan",
  },
  {
    id: "expert",
    title: "Artist Expert",
    description: "Recognized for expertise and audience growth.",
    icon: Gem,
    color: "indigo",
  },
  {
    id: "chart-winner",
    title: "Chart Winner",
    description: "Featured on Spotify charts or playlists.",
    icon: Medal,
    color: "rose",
  },
  {
    id: "featured",
    title: "Featured Artist",
    description: "Selected as a featured artist on Spotify.",
    icon: Sparkles,
    color: "violet",
  },
  {
    id: "achievement-pro",
    title: "Achievement Pro",
    description:
      "Earned multiple achievements through consistent releases.",
    icon: Award,
    color: "lime",
  },
] as const

const badgeStyles = {
  blue: "border-blue-500/40 bg-blue-500/15 text-blue-500 hover:bg-blue-500",
  orange:
    "border-orange-500/40 bg-orange-500/15 text-orange-500 hover:bg-orange-500",
  yellow:
    "border-yellow-500/40 bg-yellow-500/15 text-yellow-500 hover:bg-yellow-500",
  green:
    "border-emerald-500/40 bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500",
  purple:
    "border-purple-500/40 bg-purple-500/15 text-purple-500 hover:bg-purple-500",
  amber:
    "border-amber-500/40 bg-amber-500/15 text-amber-500 hover:bg-amber-500",
  pink:
    "border-pink-500/40 bg-pink-500/15 text-pink-500 hover:bg-pink-500",
  cyan:
    "border-cyan-500/40 bg-cyan-500/15 text-cyan-500 hover:bg-cyan-500",
  indigo:
    "border-indigo-500/40 bg-indigo-500/15 text-indigo-500 hover:bg-indigo-500",
  rose:
    "border-rose-500/40 bg-rose-500/15 text-rose-500 hover:bg-rose-500",
  violet:
    "border-violet-500/40 bg-violet-500/15 text-violet-500 hover:bg-violet-500",
  lime:
    "border-lime-500/40 bg-lime-500/15 text-lime-500 hover:bg-lime-500",
} as const

export default function User() {
  return (
    <main className="min-h-full px-4 py-2">
      <div className="grid gap-2 lg:grid-cols-3">

        {/* Left column */}
        <div className="space-y-2 lg:col-span-1">
          {/* Artist profile */}
          <section className="rounded-lg bg-card p-4">
            <div className="flex items-center gap-3">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Rishav Raj"
                />
                <AvatarFallback>RR</AvatarFallback>
              </Avatar>

              <div>
                <h1 className="text-xl font-semibold">Rishav Raj</h1>
                <p className="text-sm text-muted-foreground">
                  Independent Artist
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Independent artist creating electronic and ambient music,
              focused on growing listeners, streams, and fan engagement.
            </p>
          </section>

          {/* Badges */}
          <section className="rounded-lg bg-card p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Artist Achievements</h2>

              <span className="text-xs text-muted-foreground">
                {badges.length} earned
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {badges.map((badge) => {
                const Icon = badge.icon

                return (
                  <HoverCard key={badge.id}>
                    <HoverCardTrigger
                      render={
                        <button
                          type="button"
                          aria-label={badge.title}
                          className={`rounded-full border p-2 transition-all duration-200 hover:-translate-y-0.5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${badgeStyles[badge.color]}`}
                        >
                          <Icon size={20} aria-hidden="true" />
                        </button>
                      }
                    />

                    <HoverCardContent
                      side="top"
                      align="center"
                      className="w-64"
                    >
                      <h3 className="font-semibold">{badge.title}</h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {badge.description}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                )
              })}
            </div>
          </section>

          {/* Live listeners */}
          <section className="rounded-lg bg-card p-4">
            <LiveListeners />
          </section>
        </div>

        {/* Right column */}
        <div className="space-y-2 lg:col-span-2">
          {/* Chart */}
          <section className="">
            <AppLineChart />
          </section>

          {/* Artist information */}
          <section className="rounded-lg bg-card p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold">Artist Information</h2>

              <Sheet>
                <SheetTrigger render={<Button>Edit Artist</Button>} />
                <EditUser />
              </Sheet>
            </div>

            <div className="mt-6 space-y-4">
              <div className="mb-8 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Artist Profile Completion
                  </p>

                  <span className="text-sm font-medium">76%</span>
                </div>

                <Progress value={76} className="w-full">
                  <ProgressLabel className="sr-only">
                    Artist profile completion
                  </ProgressLabel>
                  <ProgressValue className="sr-only" />
                </Progress>
              </div>

              <UserInfoRow label="Artist Name" value="Rishav Raj" />
              <UserInfoRow label="Business Email" value="artist@spotify.com" />
              <UserInfoRow label="Monthly Listeners" value="12,458" />
              <UserInfoRow label="Top Market" value="India" />

              <div className="flex items-center gap-2">
                <span className="font-semibold">Account Type:</span>
                <Badge>Spotify for Artists</Badge>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Artist profile claimed on January 1, 2025
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

function UserInfoRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
      <span className="font-semibold">{label}:</span>
      <span className="break-all text-muted-foreground">{value}</span>
    </div>
  )
}
