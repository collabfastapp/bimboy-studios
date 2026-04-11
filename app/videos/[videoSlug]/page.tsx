import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { creators, videos } from "@/lib/placeholders";

type PageProps = {
  params: Promise<{
    videoSlug: string;
  }>;
};

const releaseMeta: Record<
  string,
  {
    access: "Premium" | "Free";
    description: string;
    castSlugs: string[];
    label: string;
  }
> = {
  "midnight-premiere": {
    access: "Premium",
    label: "Featured Release",
    description:
      "A polished BimBoy Studios release with cinematic presentation, featured talent, and a premium viewing experience built around cast visibility and strong creator identity.",
    castSlugs: ["luna-vale", "nico-voss"],
  },
  "velvet-spotlight": {
    access: "Premium",
    label: "New Release",
    description:
      "A refined release page built to spotlight cast, keep the presentation elevated, and give each featured performer a direct connection back to their profile.",
    castSlugs: ["rhea-onyx", "luna-vale"],
  },
  "royalty-cut": {
    access: "Free",
    label: "Editorial Cut",
    description:
      "An open-access BimBoy Studios drop designed to connect release discovery with cast pages, credits, and a premium destination feel.",
    castSlugs: ["nico-voss", "rhea-onyx"],
  },
};

export default async function VideoDetailPage({ params }: PageProps) {
  const { videoSlug } = await params;
  const video = videos.find((entry) => entry.slug === videoSlug) ?? videos[0];
  const meta = releaseMeta[video.slug] ?? releaseMeta["midnight-premiere"];

  const cast = meta.castSlugs
    .map((slug) => creators.find((creator) => creator.slug === slug))
    .filter((creator) => creator !== undefined);

  const relatedReleases = videos.filter((entry) => entry.slug !== video.slug).slice(0, 3);

  return (
    <PageShell
      eyebrow="Release"
      title={video.title}
      description="A BimBoy Studios release destination built around premium presentation, featured cast, and direct paths into creator profiles."
    >
      <section className="page-shell mt-10">
        <div className="surface-card overflow-hidden rounded-[36px]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[420px] bg-[radial-gradient(circle_at_top,_rgba(255,92,168,0.26),_transparent_38%),linear-gradient(160deg,_rgba(141,125,255,0.32),_rgba(8,8,10,0.96))]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.65))]" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">
                  {meta.label}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                    meta.access === "Premium"
                      ? "border border-pink-400/30 bg-pink-500/12 text-pink-100"
                      : "border border-white/10 bg-black/35 text-white/72"
                  }`}
                >
                  {meta.access}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-sm rounded-[28px] border border-white/10 bg-black/35 p-6 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                    BimBoy Studios
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
                    {video.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {video.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-xs uppercase tracking-[0.28em] text-pink-300">
                BimBoy Studios
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                {video.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-white/66">
                {meta.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/signup"
                  className="rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110"
                >
                  Watch Now
                </Link>
                {cast[0] ? (
                  <Link
                    href={`/${cast[0].slug}`}
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/8"
                  >
                    View Creator
                  </Link>
                ) : null}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Studio", "BimBoy Studios"],
                  ["Access", meta.access],
                  ["Cast", `${cast.length} Featured`],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[24px] border border-white/8 bg-black/28 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                      {label}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell mt-12 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="surface-card rounded-[32px] px-6 py-8 sm:px-8">
          <p className="text-xs uppercase tracking-[0.28em] text-pink-300">
            Release Description
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/66">
            {meta.description}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/60">
            Every BimBoy Studios release page is designed to keep the
            presentation elevated while connecting viewers to cast, creator
            identity, and the broader release library.
          </p>
        </div>

        <div className="surface-card rounded-[32px] px-6 py-8">
          <p className="text-xs uppercase tracking-[0.28em] text-pink-300">
            Featured Cast
          </p>
          <div className="mt-5 grid gap-3">
            {cast.map((creator) => (
              <Link
                key={creator.slug}
                href={`/${creator.slug}`}
                className="rounded-[24px] border border-white/8 bg-black/28 p-4 transition hover:border-white/14 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,92,168,0.28),_transparent_42%),linear-gradient(160deg,_rgba(141,125,255,0.35),_rgba(8,8,10,0.94))] text-lg font-bold text-white">
                    {creator.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-semibold text-white">
                        {creator.name}
                      </p>
                      {creator.verified ? (
                        <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-200">
                          Verified
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-white/58">{creator.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell mt-12">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-pink-300">
            Related Releases
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Continue watching
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedReleases.map((release) => {
            const relatedMeta =
              releaseMeta[release.slug] ?? releaseMeta["midnight-premiere"];

            return (
              <article
                key={release.slug}
                className="surface-card overflow-hidden rounded-[30px]"
              >
                <div className="h-52 bg-[radial-gradient(circle_at_top,_rgba(255,92,168,0.24),_transparent_40%),linear-gradient(160deg,_rgba(141,125,255,0.34),_rgba(8,8,10,0.96))]" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                      BimBoy Studios
                    </p>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                        relatedMeta.access === "Premium"
                          ? "border border-pink-400/30 bg-pink-500/12 text-pink-100"
                          : "border border-white/10 bg-black/35 text-white/72"
                      }`}
                    >
                      {relatedMeta.access}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {release.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {release.summary}
                  </p>
                  <Link
                    href={`/videos/${release.slug}`}
                    className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20"
                  >
                    Open Release
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
