"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ToothModel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let frame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!img) return;
        img.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 10}deg)`;
      });
    };

    const handleMouseLeave = () => {
      if (!img) return;
      img.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative h-full w-full flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      {/* soft glow behind the tooth */}
      <div className="absolute w-[70%] h-[70%] rounded-full bg-[var(--color-accent-light)] blur-[80px] opacity-60" />

      {/* floating tooth image */}
      <div
        ref={imgRef}
        className="tooth-float relative w-[70%] h-[80%] transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src="/tooth-hero.png"
          alt="3D visualization of a dental tooth model"
          fill
          priority
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 1024px) 60vw, 30vw"
        />
      </div>

      {/* decorative floating dots (replaces old sparkle particles) */}
      <span className="dot dot-1 absolute w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
      <span className="dot dot-2 absolute w-2 h-2 rounded-full bg-[var(--color-primary)]" />
      <span className="dot dot-3 absolute w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)] border border-[var(--color-accent)]" />

      <style jsx>{`
        .tooth-float {
          animation: float 4.5s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -14px;
          }
        }
        .dot-1 {
          top: 15%;
          right: 8%;
          animation: floatDot 3.5s ease-in-out infinite;
        }
        .dot-2 {
          bottom: 20%;
          left: 6%;
          animation: floatDot 4s ease-in-out infinite 0.4s;
        }
        .dot-3 {
          bottom: 12%;
          right: 18%;
          animation: floatDot 3s ease-in-out infinite 0.8s;
        }
        @keyframes floatDot {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .tooth-float,
          .dot-1,
          .dot-2,
          .dot-3 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}