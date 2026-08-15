"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import ToothModel from "@/components/ToothModel";

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
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=0.9"
        )
        .fromTo(
          ".hero-float-card",
          { opacity: 0, y: 24, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15 },
          "-=0.6"
        );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={titleRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#f8f7f4] to-[#eef0ec]"
    >
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-[26rem] h-[26rem] bg-[var(--color-accent-light)] rounded-full blur-[110px]" />
        <div className="absolute bottom-0 right-10 w-[24rem] h-[24rem] bg-[var(--color-primary)]/10 rounded-full blur-[110px]" />
        <div className="absolute top-10 right-1/3 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
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

          <span className="hero-eyebrow block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-5">
            Dentist &amp; Smile Specialist
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-[var(--color-text)]">
            <span className="hero-line block">Dr. Fatima</span>
            <span className="hero-line block text-gradient">Batool</span>
          </h1>

          <p className="hero-sub mt-6 text-lg text-[var(--color-text-muted)] max-w-md leading-relaxed">
            Crafting confident, healthy smiles through precision dentistry,
            artistry, and a fresh, patient-first approach to modern dental
            care.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/#contact" className="hero-cta">
              Book a Consultation
            </Button>
            <Button href="/case-studies" variant="secondary" className="hero-cta">
              View Case Studies
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="hero-canvas relative h-[420px] sm:h-[500px] lg:h-[600px]">
            <ToothModel />
          </div>

          <div className="hero-float-card absolute top-8 -left-2 sm:left-2 glass rounded-2xl px-5 py-4 shadow-lg">
            <p className="font-serif text-2xl text-[var(--color-primary)]">4.9/5</p>
            <p className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wide">
              Patient Rating
            </p>
          </div>

          <div className="hero-float-card absolute bottom-10 -right-2 sm:right-4 glass rounded-2xl px-5 py-4 shadow-lg">
            <p className="font-serif text-2xl text-[var(--color-primary)]">1,500+</p>
            <p className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wide">
              Smiles Treated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}