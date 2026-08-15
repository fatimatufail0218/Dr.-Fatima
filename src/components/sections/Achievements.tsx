import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { achievements } from "@/lib/data/achievements";

export default function Achievements() {
  const featured = achievements.slice(0, 3);

  return (
    <section id="achievements" className="py-28 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Achievements"
            title="Certified excellence"
          />
          <Button href="/achievements" variant="secondary">
            View All Achievements
          </Button>
        </div>

        <ScrollReveal stagger={0.1} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-white border border-black/5 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[3/2] bg-[var(--color-accent-light)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[var(--color-accent)]">
                  {item.year}
                </span>
                <h3 className="mt-1 font-serif text-lg leading-snug">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  {item.organization}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}