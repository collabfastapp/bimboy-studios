"use client";

import Link from "next/link";
import Script from "next/script";
import { createElement, useEffect, useMemo, useRef, useState } from "react";

type StreamPlayerElement = HTMLElement & {
  play: () => Promise<void>;
  pause: () => void;
  currentTime: number;
  muted: boolean;
  paused: boolean;
};

const VIDEO_ID = "31adab135f48d93f64c3ae2861d67fe6";
const PREVIEW_LIMIT_SECONDS = 120;
const STREAM_ELEMENT_ID = "bimboy-stream-player";

const releaseBySlug: Record<
  string,
  {
    title: string;
    cast: { name: string; slug: string }[];
    description: string;
    price: string;
    access: "Premium" | "Free";
    posterSrc: string;
  }
> = {
  "my-felt-good-this-morning": {
    title: "My felt good this morning",
    cast: [{ name: "Spikeydee", slug: "spikeydee" }],
    description:
      "A premium BimBoy release page with a clean poster, direct playback, featured cast links, and a real preview lock built into the player itself.",
    price: "12.99",
    access: "Premium",
    posterSrc: "/images/poster-1.jpg",
  },
};

export default function VideoPage() {
  const playerRef = useRef<StreamPlayerElement | null>(null);
  const lockRef = useRef(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [locked, setLocked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayMuted, setAutoplayMuted] = useState(false);

  const release = useMemo(
    () =>
      releaseBySlug["my-felt-good-this-morning"] ?? {
        title: "My felt good this morning",
        cast: [],
        description: "",
        price: "12.99",
        access: "Premium" as const,
        posterSrc: "/images/poster-1.jpg",
      },
    [],
  );

  useEffect(() => {
    lockRef.current = locked;
  }, [locked]);

  useEffect(() => {
    if (!sdkReady) {
      return;
    }

    const player = document.getElementById(
      STREAM_ELEMENT_ID,
    ) as StreamPlayerElement | null;

    if (!player) {
      return;
    }

    playerRef.current = player;

    const enforcePreviewLimit = () => {
      const nextTime = Math.min(player.currentTime ?? 0, PREVIEW_LIMIT_SECONDS);
      setCurrentTime(nextTime);

      if (nextTime >= PREVIEW_LIMIT_SECONDS) {
        player.currentTime = PREVIEW_LIMIT_SECONDS;
        player.pause();

        if (!lockRef.current) {
          lockRef.current = true;
          setLocked(true);
        }
      }
    };

    const handlePlay = () => {
      if (lockRef.current) {
        player.currentTime = PREVIEW_LIMIT_SECONDS;
        player.pause();
        return;
      }

      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleSeeking = () => {
      if (player.currentTime > PREVIEW_LIMIT_SECONDS) {
        player.currentTime = PREVIEW_LIMIT_SECONDS;
        player.pause();

        if (!lockRef.current) {
          lockRef.current = true;
          setLocked(true);
        }
      }
    };

    const attemptAutoplay = async () => {
      try {
        await player.play();
      } catch {
        player.muted = true;
        setAutoplayMuted(true);

        try {
          await player.play();
        } catch {
          setIsPlaying(false);
        }
      }
    };

    player.addEventListener("play", handlePlay as EventListener);
    player.addEventListener("pause", handlePause as EventListener);
    player.addEventListener("timeupdate", enforcePreviewLimit as EventListener);
    player.addEventListener("seeking", handleSeeking as EventListener);
    player.addEventListener("loadedmetadata", attemptAutoplay as EventListener);

    attemptAutoplay();

    return () => {
      player.removeEventListener("play", handlePlay as EventListener);
      player.removeEventListener("pause", handlePause as EventListener);
      player.removeEventListener(
        "timeupdate",
        enforcePreviewLimit as EventListener,
      );
      player.removeEventListener("seeking", handleSeeking as EventListener);
      player.removeEventListener(
        "loadedmetadata",
        attemptAutoplay as EventListener,
      );
    };
  }, [sdkReady]);

  const remainingSeconds = Math.max(
    PREVIEW_LIMIT_SECONDS - Math.floor(currentTime),
    0,
  );

  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white">
      <Script
        src="https://embed.cloudflarestream.com/embed/sdk.latest.js"
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
      />

      <div className="mx-auto max-w-6xl space-y-10">
        <section className="overflow-hidden rounded-[36px] border border-white/10 bg-[#08080b]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative aspect-video overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,92,168,0.24),_transparent_40%),linear-gradient(160deg,_rgba(141,125,255,0.34),_rgba(8,8,10,0.96))]">
              {createElement("stream", {
                id: STREAM_ELEMENT_ID,
                src: VIDEO_ID,
                controls: true,
                preload: "auto",
                poster: release.posterSrc,
                className: "h-full w-full",
              })}

              {!locked ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
                      Preview Active
                    </p>
                    <p className="mt-2 text-sm text-white/75">
                      Unlock full access anytime
                    </p>
                  </div>
                  <div className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm font-semibold text-white">
                    {remainingSeconds}s left
                  </div>
                </div>
              ) : null}

              {locked ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/92 p-6 text-center">
                  <div className="rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-200">
                    Preview Locked
                  </div>
                  <h2 className="mt-6 text-3xl font-black text-white">
                    Unlock Full Video
                  </h2>
                  <p className="mt-3 max-w-md text-white/70">
                    The first two minutes are complete. Continue with full access
                    to the full release.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                      href="/signup"
                      className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110"
                    >
                      Unlock for ${release.price}
                    </Link>
                    {release.cast[0] ? (
                      <Link
                        href={`/${release.cast[0].slug}`}
                        className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:border-white/20"
                      >
                        View Creator
                      </Link>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col justify-between px-6 py-8 sm:px-8 sm:py-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                    BimBoy Studios
                  </span>
                  <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-200">
                    {release.access}
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {release.title}
                </h1>

                <p className="mt-5 text-base leading-8 text-white/68">
                  {release.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/signup"
                    className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110"
                  >
                    Watch Now
                  </Link>
                  {release.cast[0] ? (
                    <Link
                      href={`/${release.cast[0].slug}`}
                      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:border-white/20"
                    >
                      View Creator
                    </Link>
                  ) : null}
                </div>

                {autoplayMuted ? (
                  <p className="mt-4 text-sm text-white/50">
                    Autoplay started muted to satisfy browser playback rules.
                  </p>
                ) : null}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Preview Window", "2:00"],
                  ["Playback", isPlaying ? "Playing" : locked ? "Locked" : "Paused"],
                  ["Price", `$${release.price}`],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      {label}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#09090c] px-6 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
              Featured Cast
            </p>
            <div className="mt-6 space-y-4">
              {release.cast.map((member) => (
                <Link
                  key={member.slug}
                  href={`/${member.slug}`}
                  className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div>
                    <p className="text-lg font-semibold text-white">{member.name}</p>
                    <p className="mt-1 text-sm text-white/55">
                      Creator profile
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-pink-200">
                    Open
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#09090c] px-6 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
              Release Notes
            </p>
            <p className="mt-4 text-base leading-8 text-white/68">
              This release page now enforces a true two-minute preview limit by
              controlling the Cloudflare Stream player directly. Playback starts
              on load, the unlock call-to-action stays visible during preview,
              and the player pauses for real when the preview window ends.
            </p>
            <p className="mt-5 text-base leading-8 text-white/60">
              The experience stays focused on a premium BimBoy viewing flow:
              direct playback, visible cast, clean unlock prompts, and no hidden
              playback continuing underneath the lock state.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
