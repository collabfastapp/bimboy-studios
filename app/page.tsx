import Image from "next/image";
import Link from "next/link";
import { CreatorCard } from "@/components/creator-card";
import { SectionTitle } from "@/components/section-title";
import { VideoCard } from "@/components/video-card";
import { creators, studios, videos } from "@/lib/placeholders";

const featuredReleases = videos;
const featuredCreators = creators;
const featuredStudios = studios;

export default function HomePage() {
  return (
    <div className="pt-6">
      <section className="page-shell">
        <div className="hero-glow surface-card overflow-hidden rounded-[36px]">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[540px] px-6 py-10 sm:px-10 sm:py-14">
              <Image
                src="/images/hero-banner.svg"
                alt="BimBoy Studios hero artwork"
                fill
                priority
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/84 to-black" />

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex rounded-full border border-pink-400/20 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-pink-300">
                  Premium Studio Platform
                </div>

                <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
                  Premium studio releases with creator pages, credits, and
                  royalty visibility built in.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                  BimBoy Studios brings cinematic releases, performer identity,
                  and transparent participation into one premium destination.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/browse"
                    className="rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110"
                  >
                    Watch Releases
                  </Link>
                  <Link
                    href="/creators"
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/8"
                  >
                    Explore Creators
                  </Link>
                  <Link
                    href="/studios"
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/8"
                  >
                    View Studios
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 px-6 py-6 sm:px-8 sm:py-8">
              {[
                {
                  label: "Featured Release",
                  value: "Midnight Premiere",
                  text: "A polished launch destination for premium drops, creator visibility, and studio-led promotion.",
                },
                {
                  label: "Creator Identity",
                  value: "Profiles With Credits",
                  text: "Performer pages connect audiences to releases, appearances, and long-term brand presence.",
                },
                {
                  label: "Royalty Visibility",
                  value: "Clear Participation",
                  text: "Revenue visibility and credits sit alongside the content instead of disappearing behind it.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/8 bg-black/40 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell mt-16">
        <SectionTitle
          eyebrow="Featured Releases"
          title="Studio drops designed to feel premium from first impression to final credits."
          description="Discover standout releases, polished presentation, and content built to give creators and studios equal presence."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredReleases.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
      </section>

      <section className="page-shell mt-16">
        <SectionTitle
          eyebrow="Featured Creators"
          title="Creator pages that hold identity, appearances, and audience momentum in one place."
          description="Profiles are designed to showcase talent beyond a single release and make every credit count."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCreators.map((creator) => (
            <CreatorCard key={creator.slug} creator={creator} />
          ))}
        </div>
      </section>

      <section className="page-shell mt-16">
        <SectionTitle
          eyebrow="Featured Studios"
          title="Studios get a refined home for releases, cast, and brand presence."
          description="Each studio page brings together premium presentation, release discovery, and the people behind the work."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredStudios.map((studio) => (
            <article key={studio.slug} className="surface-card rounded-[28px] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-pink-300">
                {studio.status}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                {studio.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/62">{studio.focus}</p>
              <Link
                href={`/studios/${studio.slug}`}
                className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20"
              >
                View Studios
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell mt-16">
        <div className="surface-card rounded-[36px] px-6 py-8 sm:px-10 sm:py-10">
          <SectionTitle
            eyebrow="Royalties"
            title="A clearer way to show who helped build the release and how participation is tracked."
            description="BimBoy Studios pairs content with performer credits and royalty visibility so creators can be recognized as part of the value they help create."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "Performer Credits",
                "Give each release a visible connection to the people who appear in it.",
              ],
              [
                "Studio Structure",
                "Keep releases, talent, and presentation aligned under one polished studio identity.",
              ],
              [
                "Royalty Visibility",
                "Bring participation into view with reporting surfaces designed for clarity.",
              ],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[28px] border border-white/8 bg-black/30 p-6">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell mt-16">
        <div className="surface-card rounded-[36px] px-6 py-10 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-300">
            Join Beta
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Enter the next chapter of premium studio and creator releases.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/66">
            Get early access to BimBoy Studios and follow the platform as
            releases, creator pages, and royalty visibility come together.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/signup"
              className="rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110"
            >
              Join Beta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
