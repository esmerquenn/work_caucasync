"use client";
import React, { useEffect, useState } from "react";
import { CategoryCard } from "./CategoryCard";
import HeaderOf from "./HeaderOf";
import { Factory, Filter, Tractor, Truck } from "lucide-react";

function Services() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

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
    <div className="mt-20 mb-10">
      <HeaderOf
        title={`Our Professional <br /> services`}
        text="Our services that we offer with our sectoral experience and our <br /> expert employees."
        little_title="Services"
      />

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

export default Services;
