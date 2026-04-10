import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { VideoCard } from "@/components/video-card";
import { videos } from "@/lib/placeholders";

export default function BrowsePage() {
  return (
    <PageShell
      eyebrow="Browse"
      title="Browse featured releases, promos, and platform content."
      description="This is the shared baseline for future shelves, categories, filters, and access logic while keeping the browse route stable today."
    >
      <section className="page-shell mt-10">
        <SectionTitle
          eyebrow="Catalog"
          title="Content cards now live inside the same premium shell as the rest of the site."
          description="The route is intentionally lightweight for now, but it already supports a coherent content-browsing story."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
