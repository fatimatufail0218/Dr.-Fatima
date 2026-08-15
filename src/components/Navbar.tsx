"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (open) {
      gsap.set(menuRef.current, { display: "flex" });
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        menuRef.current.querySelectorAll("a"),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, delay: 0.1 }
      );
    } else if (menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => gsap.set(menuRef.current, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-sm shadow-md shadow-[var(--color-accent)] py-2.5 px-5 lg:px-6"
            : "py-1"
        }`}
      >
        <Link
          href="/#home"
          className="font-serif text-xl md:text-2xl text-[var(--color-primary)] shrink-0"
        >
          Dr. Fatima Batool
        </Link>

        <div className="hidden lg:flex items-center gap-1 rounded-full glass px-2 py-1.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-[var(--color-text)]/75 hover:text-[var(--color-primary)] transition-colors rounded-full"
            >
              {link.label}
              <span className="absolute left-4 right-4 -bottom-0 h-px bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:block shrink-0">
          <Button href="/#contact" className="!px-6 !py-2.5 !text-xs">
            Book Consultation
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-[var(--color-primary)]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        ref={menuRef}
        style={{ display: "none" }}
        className="lg:hidden bg-white/70 backdrop-blur-sm  mx-4 mt-3 rounded-3xl flex-col p-6 gap-5 shadow-xl"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-base font-medium text-[var(--color-text)]"
          >
            {link.label}
          </Link>
        ))}
        <Button href="/#contact" className="mt-2 w-full">
          Book Consultation
        </Button>
      </div>
    </header>
  );
}