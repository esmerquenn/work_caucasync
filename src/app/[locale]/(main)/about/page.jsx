import AboutSection from "@/components/layout/Home/AboutSection";
import AboutStates from "@/components/ui/headerPages/AboutStates";
import HeaderPages from "@/components/ui/headerPages/HeaderPages";

function page() {
  return (
    <div className="py-10 bg-main">
      <HeaderPages image="bg-image-about" title="About us" text="We know no boundaries in our work" />
      <AboutSection />
      <AboutStates />
    </div>
  );
}

export default page;
