"use client";

import React from "react";

import HeaderPages from "@/components/ui/headerPages/HeaderPages";
import { CategoryCard } from "@/components/layout/Home/CategoryCard";
import { Factory, Filter, Tractor, Truck } from "lucide-react";
function OurServicesPage() {
  const categories = [
    {
      id: 1,
      icon: <Tractor className="size-10"/>,
      title: "Building",
      description: "Caucasync abroad as a foreign trade Company main groups of export electrical products we do...",
      readMoreLink: "#",
    },
    {
      id: 2,
      icon: <Filter className="size-10"/>,
      title: "Industrial",
      description: "Caucasync export abroad as a foreign trade company, the main products of our industry groups...",
      readMoreLink: "#",
    },
    {
      id: 3,
      icon: <Truck className="size-10"/>,
      title: "Logistics",
      description: "We provide comprehensive logistics solutions for international trade and distribution networks...",
      readMoreLink: "#",
    },
    {
      id: 4,
      icon: <Factory className="size-10"/>,
      title: "Trading",
      description: "Complete trade solutions with professional support and global market access for your business...",
      readMoreLink: "#",
    },
  ];
  return (
    <div className="py-10 bg-main">
      <HeaderPages image="bg-image-services" title="Services" text="Our Service Areas" />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
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
      </section>
    </div>
  );
}

export default OurServicesPage;
