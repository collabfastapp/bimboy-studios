import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { studios } from "@/lib/placeholders";

export default function StudiosPage() {
  return (
    <PageShell
      eyebrow="Studios"
      title="Studios now have a complete public-facing baseline."
      description="The route is ready for richer studio identity, release shelves, cast listings, and publishing details as those pages evolve."
    >
      <section className="page-shell mt-10">
        <SectionTitle
          eyebrow="Studio Index"
          title="Studio detail routes are already scaffolded and linked."
          description="These cards keep the platform feeling complete without locking in final publishing workflows too early."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {studios.map((studio) => (
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
                Open studio page
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
