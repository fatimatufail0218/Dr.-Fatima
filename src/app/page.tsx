import Hero from "@/components/sections/Hero";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import CaseStudies from "@/components/sections/CaseStudies";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      
      <About />
      <Experience />
      <CaseStudies />
      {/* <Stats /> */}
      <Services />
      <Testimonials />
      <Achievements />
      <Contact />
    </>
  );
}