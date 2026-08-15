import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const expertise = [
  "Cosmetic & Restorative Dentistry",
  "Dental Implantology",
  "Full Smile Design",
  "Preventive & Family Care",
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-5 relative">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[var(--color-accent-light)]">
              <Image
                src="/images/dentist.jpg"
                alt="Portrait of Dr. Sarah Bennett"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-6 py-4 shadow-lg hidden sm:block">
              <p className="font-serif text-3xl text-[var(--color-primary)]">10+</p>
              <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">
                Years of Practice
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7">
          <ScrollReveal>
            <SectionHeading
              eyebrow="About"
              title="A dental practice built on precision and empathy"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              With over a decade of clinical experience, Dr. Sarah Bennett
              combines advanced dental technology with a deeply personal
              approach to patient care. Her philosophy centers on treating
              each patient as an individual — understanding their goals
              before recommending a path forward.
            </p>
            <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
              From routine preventive visits to complex full-mouth
              rehabilitations, every treatment is guided by precision,
              comfort, and a commitment to long-term oral health.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} stagger={0.08} className="mt-10 grid sm:grid-cols-2 gap-4">
            {expertise.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-black/5 px-5 py-4 bg-[var(--color-bg)]"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}