"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import HeaderPages from "@/components/ui/headerPages/HeaderPages";
import { motion } from "framer-motion";
import { useGetPageHeadersSectionsQuery, useGetPartnerSectionsQuery } from "@/hooks/useApi";
import PageLoader from "@/components/ui/loading/PageLoader";
import { useTranslations } from "next-intl";

function page() {
  const params = useParams();
  const locale = (params?.locale) || "az";
  const t = useTranslations("Common");
  const tPages = useTranslations("Pages.partners");
  const { data: page, isLoading: pageLoading } = useGetPageHeadersSectionsQuery();
  const { data: partnersData, isLoading: partnersLoading } = useGetPartnerSectionsQuery();
  
  const pageHeader = page?.data?.find((item) => item.page === "partners") || {};

  // Map API data to brands format
  const brands = useMemo(() => {
    if (!partnersData?.success || !partnersData?.data) {
      return [];
    }
    return partnersData.data.map((partner) => ({
      id: partner.id,
      name: partner.name,
      logo: partner.image ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${partner.image}` : "",
    }));
  }, [partnersData]);

  const duplicatedBrands = useMemo(() => {
    if (brands.length === 0) return [];
    return [...brands, ...brands, ...brands];
  }, [brands]);

  if (pageLoading || partnersLoading) {
    return <PageLoader />;
  }

  return (
    <div className="py-10 bg-main">
      <HeaderPages
        image="bg-image-about"
        title={pageHeader.title?.[locale] || tPages("title")}
        text={pageHeader.description?.[locale] || tPages("description")}
      />
      <section className="relative py-14 lg:py-20 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className=" relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
          

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-20"
            >
              {[
                { number: "50+", label: tPages("globalPartners") },
                { number: "15+", label: tPages("yearsExperience") },
                { number: "98%", label: tPages("clientSatisfaction") },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

            {duplicatedBrands.length > 0 ? (
              <motion.div
                className="flex py-8"
                animate={{
                  x: [0, -100 * brands.length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedBrands.map((brand, index) => (
                  <motion.div
                    key={`${brand.id}-${index}`}
                    className="flex-shrink-0 w-56 h-40 mx-6 relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-full h-full bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-xl group-hover:border-emerald-200">
                      <motion.img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-w-full max-h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                    </div>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl" />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-10">
                <p>{t("noPartnersAvailable")}</p>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-gray-600 mb-6">{tPages("trustedBy")}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span>{tPages("becomePartner")}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>
    </div>
  );
}

export default page;
