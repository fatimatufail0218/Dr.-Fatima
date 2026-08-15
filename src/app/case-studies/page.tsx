import Image from "next/image";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/data/caseStudies";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Studies — Dr. Sarah Bennett",
  description: "Documented dental case studies by Dr. Sarah Bennett.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-36 pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Case Studies
          </span>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">
            Documented dental transformations
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
            A closer look at treatments, timelines, and outcomes across a
            range of dental cases.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {caseStudies.map((cs, i) => (
            <ScrollReveal
              key={cs.slug}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div
                id={cs.slug}
                className={`grid grid-cols-2 gap-3 scroll-mt-32 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--color-accent-light)]">
                  <Image src={cs.beforeImage} alt={`${cs.title} before`} fill className="object-cover" />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wide bg-black/60 text-white px-2 py-1 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--color-accent-light)]">
                  <Image src={cs.afterImage} alt={`${cs.title} after`} fill className="object-cover" />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wide bg-[var(--color-primary)] text-white px-2 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                  {cs.treatmentType}
                </span>
                <h2 className="mt-2 font-serif text-3xl">{cs.title}</h2>
                <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
                  {cs.description}
                </p>
                <div className="mt-6 flex gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                      Duration
                    </p>
                    <p className="font-medium mt-1">{cs.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                      Result
                    </p>
                    <p className="font-medium mt-1 max-w-xs">{cs.result}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}