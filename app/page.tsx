import Image from "next/image";
import Link from "next/link";
import { CreatorCard } from "@/components/creator-card";
import { SectionTitle } from "@/components/section-title";
import { VideoCard } from "@/components/video-card";
import { creators, stats, videos } from "@/lib/placeholders";

export default function HomePage() {
  return (
    <div className="pt-6">
      <section className="page-shell">
        <div className="hero-glow surface-card overflow-hidden rounded-[36px]">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[520px] px-6 py-10 sm:px-10 sm:py-14">
              <Image
                src="/images/hero-banner.svg"
                alt="BimBoy Studios hero banner"
                fill
                className="object-cover opacity-35"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/82 to-black" />

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex rounded-full border border-pink-400/20 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-pink-300">
                  Featured Studio Release
                </div>
                <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
                  Premium studio content built around creators, credits, and
                  royalty visibility.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                  The site now has a professional shared shell, stable route
                  structure, and polished baseline sections that are ready for
                  phased feature work.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/browse"
                    className="rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110"
                  >
                    Browse Releases
                  </Link>
                  <Link
                    href="/creators"
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/8"
                  >
                    Explore Creators
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 px-6 py-6 sm:px-8 sm:py-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/8 bg-black/40 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell mt-12">
        <SectionTitle
          eyebrow="Platform Overview"
          title="A complete baseline shell for a premium creator and studio platform."
          description="The public marketing pages, dynamic detail routes, and internal dashboard sections now live inside one consistent system instead of separate one-off page structures."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Studio releases", "Premium landing pages and release detail routes are scaffolded."],
            ["Creator profiles", "Dynamic creator routes and discovery cards are connected."],
            ["Royalty visibility", "Public and internal royalty surfaces have dedicated homes."],
            ["Operations tools", "Creator, studio, and admin dashboards are in place for later buildout."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="surface-card rounded-3xl p-6 text-white/82"
            >
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/62">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-16">
        <SectionTitle
          eyebrow="Featured Videos"
          title="Reusable content cards keep the browse and home surfaces aligned."
          description="These remain placeholders on purpose, but they now look and behave like part of a coherent premium product shell."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
      </section>

      <section className="page-shell mt-16">
        <SectionTitle
          eyebrow="Featured Creators"
          title="Creator discovery now fits naturally inside the global platform shell."
          description="The old homepage-specific navigation is gone, but the hero and homepage content remain as the main storytelling layer."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {creators.map((creator) => (
            <CreatorCard key={creator.slug} creator={creator} />
          ))}
        </div>
      </section>
    </div>
  );
}
