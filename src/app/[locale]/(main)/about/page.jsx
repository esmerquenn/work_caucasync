"use client";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import AboutSection from "@/components/layout/Home/AboutSection";
import AboutStates from "@/components/ui/headerPages/AboutStates";
import HeaderPages from "@/components/ui/headerPages/HeaderPages";
import { useGetPageHeadersSectionsQuery } from "@/store/pageHeadersApi";
import PageLoader from "@/components/ui/loading/PageLoader";

function page() {
  const params = useParams();
  const locale = (params?.locale) || "az";
  const tPages = useTranslations("Pages.about");
  const { data: page, isLoading: pageLoading } = useGetPageHeadersSectionsQuery();
  
  const pageHeader = page?.data?.find((item) => item.page === "about") || {};

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <div className="py-10 bg-main">
      <HeaderPages 
        image="bg-image-about" 
        title={pageHeader.title?.[locale] || tPages("title")} 
        text={pageHeader.description?.[locale] || tPages("description")} 
      />
      <AboutSection />
      <AboutStates />
    </div>
  );
}

export default page;
