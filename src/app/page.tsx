import {
  Header,
  Hero,
  MenuSection,
  Benefits,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer,
} from "@/src/features/marketing";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
