import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";

export default function Services() {
  return (
    <section className="py-28 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Expertise"
          title="Areas of specialized care"
          align="center"
        />

        <ScrollReveal stagger={0.1} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 border border-black/5"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-primary)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-serif text-xl">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}