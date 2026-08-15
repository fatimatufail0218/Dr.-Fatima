"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out";

  const styles =
    variant === "primary"
      ? "bg-[var(--color-primary)] text-white hover:bg-[#0a2b2c] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-900/20"
      : "border border-[var(--color-primary)]/25 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 hover:-translate-y-0.5";

  if (href) {
    // external links (mailto:, https://wa.me, or any http link) open in a new tab
    const isExternal =
      href.startsWith("mailto:") ||
      href.startsWith("http://") ||
      href.startsWith("https://");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${styles} ${className}`}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}