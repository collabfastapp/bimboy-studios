import { CreatorCard } from "@/components/creator-card";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { creators } from "@/lib/placeholders";

export default function CreatorsPage() {
  return (
    <PageShell
      eyebrow="Creators"
      title="Creator discovery now has a proper professional home."
      description="This index is scaffolded for profile browsing and future search, sorting, and follow mechanics without inventing final business logic yet."
    >
      <section className="page-shell mt-10">
        <SectionTitle
          eyebrow="Talent"
          title="Dynamic creator routes and creator cards are now connected end to end."
          description="The platform shell is stable enough to expand profile data and monetization flows later without redesigning the route map."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {creators.map((creator) => (
            <CreatorCard key={creator.slug} creator={creator} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
