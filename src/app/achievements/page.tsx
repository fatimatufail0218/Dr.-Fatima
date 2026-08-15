import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { achievements } from "@/lib/data/achievements";

export const metadata: Metadata = {
  title: "Achievements & Certifications — Dr. Sarah Bennett",
  description: "Professional certifications, awards, and training.",
};

export default function AchievementsPage() {
  return (
    <div className="pt-36 pb-28 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Achievements & Certifications
          </span>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">
            A commitment to continual excellence
          </h1>
        </div>

        <ScrollReveal
          stagger={0.08}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-white border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
                <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </div>
  );
}