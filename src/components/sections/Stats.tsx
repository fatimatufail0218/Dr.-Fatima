"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 1500, suffix: "+", label: "Patients Treated" },
  { value: 500, suffix: "+", label: "Successful Treatments" },
  { value: 15, suffix: "+", label: "Certifications" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".stat-number");
      counters.forEach((el) => {
        const target = Number(el.dataset.value);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toLocaleString();
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-4xl md:text-5xl">
              <span className="stat-number" data-value={stat.value}>
                0
              </span>
              {stat.suffix}
            </p>
            <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}