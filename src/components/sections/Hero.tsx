"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, HeartHandshake, BookOpen, HandHeart } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import ToothModel from "@/components/ToothModel";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "Careful, precise treatment in every step.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Mindset",
    description: "Your comfort guides every decision I make.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Actively training in advanced dental techniques.",
  },
  {
    icon: HandHeart,
    title: "Gentle Approach",
    description: "Calm, reassuring care at every visit.",
  },
];

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-eyebrow",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.25"
        )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          "-=0.3"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          ".hero-canvas",
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 1.1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-float-card",
          { opacity: 0, y: 24, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15 },
          "-=0.6"
        )
        .fromTo(
          ".hero-feature",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.3"
        );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={titleRef}
      className="relative min-h-screen flex flex-col pt-32 pb-0 overflow-hidden bg-gradient-to-b from-[#f8f7f4] to-[#eef0ec]"
    >
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/3 right-1/4 w-[26rem] h-[26rem] bg-[var(--color-accent-light)] rounded-full blur-[110px]" />
      </div>

      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
          {/* left: text content */}
          <div className="lg:col-span-6">
            <span className="hero-badge inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
              </span>
              <span className="text-xs font-medium text-[var(--color-text)]/80">
                Accepting new patients this week
              </span>
            </span>

            {/* profession / title - small eyebrow line */}
            <p className="hero-eyebrow text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-3">
              Dentist &amp; Smile Specialist
            </p>

            {/* the big heading is now her name */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.08] text-[var(--color-text)]">
              <span className="hero-line block">Dr. Fatima</span>
              <span className="hero-line block text-gradient">Batool</span>
            </h1>

            <div className="hero-line mt-6 h-[3px] w-14 bg-[var(--color-accent)] rounded-full" />

            <p className="hero-sub mt-6 text-lg text-[var(--color-text-muted)] max-w-md leading-relaxed">
              I&apos;m a dentist dedicated to gentle, precise care — helping
              every patient feel comfortable, confident, and genuinely cared
              for at each visit.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="https://mail.google.com/mail/?view=cm&fs=1&to=drfatimaa.batool@gmail.com&su=Consultation%20Request" className="hero-cta group">
                Book a Consultation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button href="/case-studies" variant="secondary" className="hero-cta">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* right: tooth visual with a true circular backdrop */}
          <div className="lg:col-span-6 relative h-[460px] sm:h-[540px] lg:h-[600px] flex items-center justify-center">
            {/* true circle backdrop - equal width & height, sized off the smaller dimension */}
            <div className="hero-canvas absolute aspect-square h-[92%] max-w-[92%] rounded-full bg-[var(--color-accent-light)] opacity-80" />

            {/* the tooth - enlarged */}
            <div className="hero-canvas relative w-[88%] h-[95%]">
              <ToothModel />
            </div>

            {/* floating card - top left: degree */}
            <div className="hero-float-card absolute top-4 left-0 sm:left-2 glass rounded-2xl px-5 py-4 shadow-lg">
              <p className="font-serif text-2xl text-[var(--color-primary)]">
                BDS
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wide">
                Dental Surgeon
              </p>
            </div>

            
           {/* decorative deshaped blob - fried-egg style, overlaps the big backdrop circle, bottom right */}
{/* <div
  className="hero-float-card absolute bottom-6 right-4 sm:right-10 w-28 h-24 sm:w-36 sm:h-32 bg-[var(--color-primary)] shadow-lg egg-blob"
/>

<style jsx>{`
  .egg-blob {
    border-radius: 58% 42% 68% 32% / 62% 38% 62% 38%;
  }
`}</style> */}

            {/* decorative dots */}
            <span className="absolute top-10 right-4 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
            <span className="absolute bottom-24 left-0 w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            <span className="absolute top-1/2 left-2 w-1.5 h-1.5 rounded-full border border-[var(--color-accent)]" />
          </div>
        </div>
      </div>

      {/* features strip with a solid curved blue backdrop */}
      <div className="relative z-10 mt-8 bg-[var(--color-primary)]">
        {/* decorative wave sits only at the very top edge, same gentle curve on all breakpoints */}
        <svg
          className="absolute top-0 inset-x-0 w-full h-14 sm:h-20 -translate-y-[calc(100%-1px)]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,55 C240,40 480,70 720,58 C960,46 1200,68 1440,52 L1440,100 L0,100 Z"
            fill="var(--color-primary)"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-5 md:px-10 pb-5 md:pb-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 xl:gap-8 ">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="hero-feature flex items-start gap-3">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-white">
                      {f.title}
                    </p>
                    <p className="text-[10px] md:text-xs text-white/70 mt-1 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}