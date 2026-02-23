"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeft, Factory, Filter, Tractor, Truck, Building2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useGetServiceBySlugQuery } from "@/hooks/useApi";
import PageLoader from "@/components/ui/loading/PageLoader";
import HeaderPages from "@/components/ui/headerPages/HeaderPages";

const getServiceIcon = (serviceName) => {
  const name = serviceName?.toLowerCase() || "";
  if (name.includes("building") || name.includes("construction")) {
    return <Building2 className="size-16 text-green-600" />;
  } else if (name.includes("industrial") || name.includes("industry")) {
    return <Filter className="size-16 text-green-600" />;
  } else if (name.includes("logistics") || name.includes("logistic")) {
    return <Truck className="size-16 text-green-600" />;
  } else if (name.includes("trading") || name.includes("trade")) {
    return <Factory className="size-16 text-green-600" />;
  }
  return <Tractor className="size-16 text-green-600" />;
};

function ServiceDetailPage() {
  const params = useParams();
  const locale = params?.locale || "az";
  const slug = params?.slug;
  const tServices = useTranslations("Pages.services");

  const { data, isLoading, error } = useGetServiceBySlugQuery(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  if (error || !data?.success) {
    return (
      <div className="min-h-screen bg-main py-10">
        <div className="max-w-4xl mx-auto px-4 text-center py-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {tServices("serviceNotFound")}
          </h1>
          <p className="text-gray-600 mb-8">
            {tServices("serviceNotFoundDesc")}
          </p>
          <Link
            href={`/${locale}/ourservices`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {tServices("backToServices")}
          </Link>
        </div>
      </div>
    );
  }

  const service = data.data;

  // Locale bazlı veya düz string olabilir
  const serviceName = typeof service.name === "object"
    ? service.name[locale] || service.name.en || Object.values(service.name)[0]
    : service.name;

  const serviceDescription = typeof service.description === "object"
    ? service.description[locale] || service.description.en || Object.values(service.description)[0]
    : service.description;

  return (
    <div className="min-h-screen bg-main py-10">
      <HeaderPages
        image="bg-image-services"
        title={serviceName || tServices("title")}
        text={tServices("subtitle")}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href={`/${locale}/ourservices`}
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          {tServices("backToServices")}
        </Link>

        {/* Service Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          {/* Icon and Title */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-green-600 flex items-center justify-center">
              {getServiceIcon(serviceName)}
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {serviceName}
              </h1>
              <div className="h-1 w-20 bg-green-600 rounded-full mt-3" />
            </div>
          </div>

          {/* Description - Tam göster, kesmeden */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
              {serviceDescription}
            </p>
          </div>

          {/* Features (if available) */}
          {service.features && service.features.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {tServices("keyFeatures")}
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => {
                  const featureText = typeof feature === "object"
                    ? feature[locale] || feature.en || Object.values(feature)[0]
                    : feature;
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{featureText}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {tServices("interestedInService")}
            </h3>
            <p className="text-gray-600 mb-4">
              {tServices("contactUsForMore")}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              {tServices("contactUs")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailPage;
