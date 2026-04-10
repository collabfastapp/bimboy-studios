import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { videos } from "@/lib/placeholders";

type PageProps = {
  params: Promise<{
    videoSlug: string;
  }>;
};

export default async function VideoDetailPage({ params }: PageProps) {
  const { videoSlug } = await params;
  const video = videos.find((entry) => entry.slug === videoSlug);

  return (
    <PageShell
      eyebrow="Video Detail"
      title={video?.title ?? videoSlug}
      description={
        video?.summary ??
        "This detail page is ready for future previews, metadata, cast, and access modules."
      }
    >
      <section className="page-shell mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["Synopsis", "Placeholder area for the full release description and pitch."],
          ["Cast", "Reserved for linked creator profiles and contributor metadata."],
          ["Access", "Placeholder for subscriptions, unlocks, or release states."],
        ].map(([title, description]) => (
          <div key={title} className="surface-card rounded-[28px] p-6">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/62">{description}</p>
          </div>
        ))}
      </section>

      <section className="page-shell mt-6">
        <Link
          href="/browse"
          className="inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20"
        >
          Back to browse
        </Link>
      </section>
    </PageShell>
  );
}
