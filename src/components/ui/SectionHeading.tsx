interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""} ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight text-[var(--color-text)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}