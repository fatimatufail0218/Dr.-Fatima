import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { caseStudies } from "@/lib/data/caseStudies";

export default function CaseStudies() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <section id="case-studies" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real results, thoughtfully documented"
            className="mb-0"
          />
          <Button href="/case-studies" variant="secondary">
            View All Case Studies
          </Button>
        </div>

        <ScrollReveal stagger={0.12} className="mt-14 grid md:grid-cols-3 gap-8">
          {featured.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies#${cs.slug}`}
              className="group rounded-2xl border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] bg-[var(--color-accent-light)]">
                <Image
                  src={cs.afterImage}
                  alt={`${cs.title} result`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                  {cs.treatmentType}
                </span>
                <h3 className="mt-2 font-serif text-xl">{cs.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] line-clamp-2">
                  {cs.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]">
                  View Case Study
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}