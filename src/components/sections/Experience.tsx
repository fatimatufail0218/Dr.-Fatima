"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-28 bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Experience"
          title="A career journey rooted in growth"
          align="center"
        />

        <div ref={containerRef} className="relative mt-20">
          {/* rail line - centered at a fixed x position */}
          <div className="timeline-line absolute left-5 sm:left-6 top-0 bottom-0 w-px -translate-x-1/2 bg-[var(--color-accent)]/40" />

          <div className="space-y-14">
            {experience.map((item) => (
              <div
                key={item.year}
                className="timeline-item relative pl-14 sm:pl-16"
              >
                {/* dot - same left position + same translate trick, always centered on the line */}
                <span className="absolute left-5 sm:left-6 top-1 w-3 h-3 -translate-x-1/2 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-accent-light)]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {item.year}
                </span>
                <h3 className="mt-1 font-serif text-2xl text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">{item.place}</p>
                <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}