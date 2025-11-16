import Hero from "@/components/layout/Home/Hero";
import OurPartners from "@/components/layout/Home/OurPartners";
import AboutSection from "@/components/layout/Home/AboutSection";
import Services from "@/components/layout/Home/Services";

export default function HomePage() {
  return (
    <div className="bg-main">
      <Hero />
      <OurPartners />
      <Services />
      <AboutSection />
    </div>
  );
}
