import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[var(--color-accent-light)]">
            <Image
              src="/dentist.jpg"
              alt="Portrait of Dr. Fatima"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About"
            title="Dentistry built on precision, curiosity, and compassionate care"
          />

          <p className="text-[var(--color-text-muted)] leading-relaxed">
            I believe dentistry is more than treating teeth — it is about
            understanding the person behind the smile. My approach combines
            careful clinical practice, continuous learning, and a genuine
            interest in the connection between oral and overall health.
          </p>

          <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
            With clinical experience gained through my BDS education and
            one-year clinical house job, I strive to provide thoughtful,
            precise, and patient-centered dental care. I am committed to
            continuing my professional development through hands-on training
            in areas including endodontics, prosthodontics, and implant
            dentistry.
          </p>
        </div>
      </div>
    </section>
  );
}