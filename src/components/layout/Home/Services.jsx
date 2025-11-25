"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { CategoryCard } from "./CategoryCard";
import HeaderOf from "./HeaderOf";
import { Factory, Filter, Tractor, Truck, Building2 } from "lucide-react";
import { useGetServicesQuery } from "@/store/servicesApi";
import { useGetPageHeadersSectionsQuery } from "@/store/pageHeadersApi";

function Services() {
  const params = useParams();
  const locale = (params?.locale) || "az";
  const t = useTranslations("Common");
  const tPages = useTranslations("Pages.services");
  const { data: servicesData, isLoading } = useGetServicesQuery();
  const { data: page } = useGetPageHeadersSectionsQuery();
  
  const pageHeader = page?.data?.find((item) => item.page === "services") || null;

  // Icon mapping function
  const getServiceIcon = (serviceName) => {
    const name = serviceName?.toLowerCase() || "";
    if (name.includes("building") || name.includes("construction")) {
      return <Building2 className="size-10" />;
    } else if (name.includes("industrial") || name.includes("industry")) {
      return <Filter className="size-10" />;
    } else if (name.includes("logistics") || name.includes("logistic")) {
      return <Truck className="size-10" />;
    } else if (name.includes("trading") || name.includes("trade")) {
      return <Factory className="size-10" />;
    }
    // Default icon
    return <Tractor className="size-10" />;
  };

  // Map API data to categories format
  const categories = useMemo(() => {
    if (!servicesData?.success || !servicesData?.data) {
      return [];
    }
    return servicesData.data.map((service) => ({
      id: service.id,
      icon: getServiceIcon(service.name),
      title: service.name,
      description: service.description,
      readMoreLink: "#",
    }));
  }, [servicesData]);

  return (
    <div className="mt-20 mb-10">
      <HeaderOf
        title={pageHeader?.title?.[locale] ? pageHeader.title[locale].replace(/\n/g, "<br />") : t("headerNotFound")}
        text={pageHeader?.description?.[locale] ? pageHeader.description[locale].replace(/\n/g, "<br />") : t("headerNotFound")}
        little_title={pageHeader?.little_title?.[locale] || tPages("title")}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        {categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                icon={category.icon}
                title={category.title}
                description={category.description}
                readMoreLink={category.readMoreLink}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p>{t("noServicesAvailable")}</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Services;
