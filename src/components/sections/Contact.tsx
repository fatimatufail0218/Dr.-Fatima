"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[var(--color-primary)] text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Contact
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Let&apos;s Create Your Healthiest Smile
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Reach out to schedule a personal consultation and take the first
            step toward a smile you love.
          </p>
          <div className="mt-8">
            <Button href="mailto:hello@drsarahbennett.com">Book a Consultation</Button>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <ScrollReveal className="flex flex-col items-center text-center gap-3">
            <Mail size={22} className="text-[var(--color-accent)]" />
            <p className="text-sm text-white/70">hello@drsarahbennett.com</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="flex flex-col items-center text-center gap-3">
            <Phone size={22} className="text-[var(--color-accent)]" />
            <p className="text-sm text-white/70">+1 (555) 123-4567</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex flex-col items-center text-center gap-3">
            <MapPin size={22} className="text-[var(--color-accent)]" />
            <p className="text-sm text-white/70">123 Wellness Ave, Suite 200</p>
          </ScrollReveal>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9z" />
            </svg>
          </a>

          <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}