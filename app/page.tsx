"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const HERO_VIDEO_ID = "31adab135f48d93f64c3ae2861d67fe6";

type ReleaseCardProps = {
  title: string;
  slug: string;
  cast: string;
  price: string;
  videoId: string;
  posterSrc: string;
};

function HoverVideoCard({
  title,
  slug,
  cast,
  price,
  videoId,
  posterSrc,
}: ReleaseCardProps) {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    setHovered(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setHovered(false);
    }, 30000);
  }

  function handleLeave() {
    setHovered(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  return (
    <Link
      href={`/videos/${slug}`}
      className="group block overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a] transition hover:-translate-y-1 hover:border-white/20"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {!hovered ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${posterSrc}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
          </>
        ) : (
          <iframe
            src={`https://iframe.videodelivery.net/${videoId}?muted=true&autoplay=true&controls=false&loop=true`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          />
        )}

        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-200">
          Premium
        </div>
      </div>

      <div className="border-t border-white/5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight">
              {title}
            </h3>
            <p className="mt-2 text-sm text-white/70">Cast: {cast}</p>
          </div>

          <div className="rounded-full bg-white/5 px-3 py-2 text-sm font-semibold text-white">
            ${price}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pt-8">
        <div className="overflow-hidden rounded-[32px] border border-white/5 bg-[#050505]">
          <div className="relative h-[560px] w-full">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{ backgroundImage: "url('/images/hero-banner.svg')" }}
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 flex flex-col justify-center px-14">
              <div className="mb-6 inline-flex w-fit rounded-full border border-pink-400/20 bg-white/5 px-5 py-3 text-sm font-bold tracking-wide text-pink-300">
                FEATURED RELEASE
              </div>

              <h1 className="max-w-4xl text-6xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Premium releases built around creators.
              </h1>

              <p className="mt-8 max-w-3xl text-2xl text-white/80">
                Cinematic releases, verified talent, performer credits, and
                direct unlock access in one premium destination.
              </p>

              <div className="mt-10 flex gap-5">
                <Link
                  href="/studios"
                  className="rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 text-lg font-bold shadow-xl shadow-pink-500/20"
                >
                  Watch Releases
                </Link>

                <Link
                  href="/creators"
                  className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold hover:border-white/20"
                >
                  Explore Creators
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-pink-400">
          Trending Now
        </p>

        <h2 className="mb-8 text-5xl font-black tracking-tight">
          Watch, preview, and unlock premium videos
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <HoverVideoCard
            title="My felt good this morning"
            slug="my-felt-good-this-morning"
            cast="Spikeydee"
            price="12.99"
            videoId={HERO_VIDEO_ID}
            posterSrc="/images/poster-1.jpg"
          />

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]">
            <div className="aspect-video w-full bg-[radial-gradient(circle_at_top,_rgba(255,92,168,0.24),_transparent_40%),linear-gradient(160deg,_rgba(141,125,255,0.34),_rgba(8,8,10,0.96))]" />
            <div className="border-t border-white/5 p-5">
              <h3 className="text-2xl font-bold">Next Release</h3>
              <p className="mt-2 text-white/70">Your second upload goes here.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]">
            <div className="aspect-video w-full bg-[radial-gradient(circle_at_top,_rgba(255,92,168,0.24),_transparent_40%),linear-gradient(160deg,_rgba(141,125,255,0.34),_rgba(8,8,10,0.96))]" />
            <div className="border-t border-white/5 p-5">
              <h3 className="text-2xl font-bold">Third Release</h3>
              <p className="mt-2 text-white/70">Your third upload goes here.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}