"use client";

import Image from "next/image";

export default function ToothModel() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* soft glow behind the tooth */}
      <div className="absolute w-[70%] h-[70%] rounded-full bg-[var(--color-accent-light)] blur-[80px] opacity-60" />

      {/* floating tooth image */}
      <div className="tooth-float relative w-[70%] h-[80%]">
        <Image
          src="/tooth-hero.png"
          alt="3D visualization of a dental tooth model"
          fill
          priority
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 1024px) 60vw, 30vw"
        />
      </div>

      {/* decorative floating dots */}
      <span className="dot dot-1 absolute w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
      <span className="dot dot-2 absolute w-2 h-2 rounded-full bg-[var(--color-primary)]" />
      <span className="dot dot-3 absolute w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)] border border-[var(--color-accent)]" />
      <span className="dot dot-4 absolute w-2 h-2 rounded-full bg-[var(--color-accent)]/70" />
      <span className="dot dot-5 absolute w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/60" />
      <span className="dot dot-6 absolute w-1 h-1 rounded-full bg-[var(--color-accent)]" />
      <span className="dot dot-7 absolute w-2.5 h-2.5 rounded-full border border-[var(--color-primary)]/50" />
      <span className="dot dot-8 absolute w-1 h-1 rounded-full bg-[var(--color-accent-light)]" />

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
        .dot-4 {
          top: 8%;
          left: 14%;
          animation: floatDot 3.8s ease-in-out infinite 0.2s;
        }
        .dot-5 {
          top: 42%;
          right: 2%;
          animation: floatDot 4.2s ease-in-out infinite 1.1s;
        }
        .dot-6 {
          bottom: 34%;
          left: -2%;
          animation: floatDot 3.3s ease-in-out infinite 0.6s;
        }
        .dot-7 {
          top: 30%;
          left: 2%;
          animation: floatDot 4.6s ease-in-out infinite 0.3s;
        }
        .dot-8 {
          bottom: 4%;
          right: 30%;
          animation: floatDot 3.6s ease-in-out infinite 1.3s;
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
          .dot-3,
          .dot-4,
          .dot-5,
          .dot-6,
          .dot-7,
          .dot-8 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}