import { Hero } from "@/components/sections/Hero";
import { Specialties } from "@/components/sections/Specialties";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <About />
      <Menu />
      <Testimonials />
      <Location />
      <CTA />
    </>
  );
}
