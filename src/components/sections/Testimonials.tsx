"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

const AUTOPLAY_DELAY = 4000;
const CARD_SPACING = 340;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isHovering = useRef(false);
  const total = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovering.current) return;
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [total]);

  // shortest circular distance from active card, e.g. for 6 items: -2,-1,0,1,2,3(=-3)
  const circularDistance = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="What patients say"
            className="mb-0"
          />

          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(activeIndex - 1)}
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(activeIndex + 1)}
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative mt-16 h-[340px] sm:h-[360px]"
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => (isHovering.current = false)}
      >
        <div className="relative max-w-7xl mx-auto h-full">
          {testimonials.map((t, i) => {
            const distance = circularDistance(i);
            const abs = Math.abs(distance);
            const isActive = distance === 0;

            // hide cards that are too far away
            const visible = abs <= 1;

            const scale = isActive ? 1 : abs === 1 ? 0.85 : 0.72;
            const opacity = isActive ? 1 : abs === 1 ? 0.55 : 0.25;
            const translateX = distance * CARD_SPACING;
            const zIndex = 10 - abs;

            return (
              <div
                key={t.name}
                className="absolute top-1/2 left-1/2 w-[300px] sm:w-[340px] transition-all duration-700 ease-out"
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                  opacity: visible ? opacity : 0,
                  zIndex,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div
                  className={`rounded-3xl p-8 border transition-colors duration-500 ${
                    isActive
                      ? "bg-[var(--color-bg)] border-[var(--color-accent)]/40 shadow-xl shadow-black/[0.06]"
                      : "bg-[var(--color-bg)] border-black/5"
                  }`}
                >
                  <Quote
                    size={28}
                    className="text-[var(--color-accent)]/30 mb-3"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  <div className="flex gap-1 text-[var(--color-accent)]">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={15} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-4 text-[var(--color-text)] leading-relaxed text-[15px]">
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div className="mt-6 pt-5 border-t border-black/5">
                    <p className="font-medium text-sm">{t.name}</p>
                    {t.treatment && (
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                        {t.treatment}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "w-6 bg-[var(--color-accent)]"
                : "w-2 bg-[var(--color-text-muted)]/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}