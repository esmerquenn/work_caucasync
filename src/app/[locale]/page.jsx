"use client";
import Hero from "@/components/layout/Home/Hero";
import OurPartners from "@/components/layout/Home/OurPartners";
import AboutSection from "@/components/layout/Home/AboutSection";
import Services from "@/components/layout/Home/Services";
import PageLoader from "@/components/ui/loading/PageLoader";
import {
  useGetMainSliderSectionsQuery,
  useGetPartnerSectionsQuery,
  useGetServicesQuery,
  useGetAboutSectionsQuery,
  useGetPageHeadersSectionsQuery,
} from "@/hooks/useApi";

export default function HomePage() {
  const { isLoading: heroLoading } = useGetMainSliderSectionsQuery();
  const { isLoading: partnersLoading } = useGetPartnerSectionsQuery();
  const { isLoading: servicesLoading } = useGetServicesQuery();
  const { isLoading: aboutLoading } = useGetAboutSectionsQuery();
  const { isLoading: pageHeadersLoading } = useGetPageHeadersSectionsQuery();

  const isLoading = heroLoading || partnersLoading || servicesLoading || aboutLoading || pageHeadersLoading;

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="bg-main">
      <Hero />
      <OurPartners />
      <Services />
      <AboutSection />
    </div>
  );
}
