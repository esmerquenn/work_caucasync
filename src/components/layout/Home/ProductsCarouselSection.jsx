"use client"
import ProductCarousel from "@/components/ui/carousels/ProductCarousel";
import React from "react";

function ProductsCarouselSection({ sub_title, title }) {
  return (
    <section className="wrapper">
      <div className="pb-[20px]">
        <h3 className="section-sub-title">{sub_title}</h3>
        <h2 className="section-title">{title}</h2>
      </div>
      <ProductCarousel />
    </section>
  );
}

export default ProductsCarouselSection;
