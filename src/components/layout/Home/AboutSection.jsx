"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Target, Building2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useGetAboutSectionsQuery } from "@/store/aboutApi";

function AboutSection() {
  const t = useTranslations("Common");
  const { data, error, isLoading } = useGetAboutSectionsQuery();
  // if (data) {
  //   console.log("About Sections Data:", data);
  // }
  // if (error) {
  //   console.error("About Sections Error:", error);
  // }
  // if (isLoading) {
  //   console.log("About Sections Loading...");
  // }

  const locale = "az";
  const [activeTab, setActiveTab] = useState("");
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    if (data && data.data && data.data.length > 0) {
      // Sort by order
      const sortedData = [...data.data].sort((a, b) => a.order - b.order);
      
      // Mapping section_type to config
      const sectionTypeToConfig = {
        "company_vision": {
          id: "vision",
          icon: Eye,
          label: {
            az: "Bizim baxışımız",
            en: "Our Vision",
            ru: "Наше Видение",
            tr: "Vizyonumuz",
          },
        },
        "company_mission": {
          id: "mission",
          icon: Target,
          label: {
            az: "Missiyamız",
            en: "Company Mission",
            ru: "Миссия Компании",
            tr: "Şirket Misyonumuz",
          },
        },
        "company_about": {
          id: "about",
          icon: Building2,
          label: {
            az: "Haqqımızda",
            en: "About Us",
            ru: "О Нас",
            tr: "Hakkımızda",
          },
        },
      };

      const mappedTabs = sortedData.map((item) => {
        let config = sectionTypeToConfig[item.section_type] || sectionTypeToConfig["company_about"];
        return {
          ...config,
          title: item.title,
          description: item.description,
          image: `/storage/${item.image}`,
        };
      });

      setTabs(mappedTabs);
      setActiveTab(mappedTabs[0]?.id || "");
    }
  }, [data]);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  if (isLoading || !tabs.length) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-500">{t("loading")}</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !activeTabData) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="flex justify-center items-center h-64">
            <div className="text-red-500">{t("errorLoadingData")}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-0">
        {/* Tabs Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
            {tabs.map((tab, index) => {
              // console.log(tab, 'tab')
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3.5 font-medium transition-all duration-300 flex items-center gap-2.5 group ${
                    isActive ? "text-emerald-600" : "text-gray-600 hover:text-emerald-600"
                  }`}
                >
                  <Icon className="w-4.5 h-4.5 relative z-10 transition-colors duration-300" />
                  <span className="relative z-10 whitespace-nowrap text-sm">{tab.label[locale]}</span>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 opacity-0 group-hover:opacity-100"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text Content */}
              <div className="p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center mb-6"
                >
                  {React.createElement(activeTabData.icon, {
                    className: "w-7 h-7 text-emerald-600",
                  })}
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  {activeTabData.title[locale]}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: activeTabData.description[locale] }}
                />

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-3.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 w-fit"
                >
                  <span>Daha Çox</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative h-80 lg:h-full order-1 lg:order-2 overflow-hidden"
              >
                <img src={activeTabData.image} alt={activeTabData.title[locale]} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent lg:bg-gradient-to-r lg:from-white/80 lg:via-white/20 lg:to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AboutSection;