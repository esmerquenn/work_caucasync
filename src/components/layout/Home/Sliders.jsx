import MainCarousel from "@/components/ui/carousels/MainCarousel";
import SmallCarousel from "@/components/ui/carousels/SmallCarousel";
import React from "react";
import SmallCarouselImg1 from "../../../assets/img/photo/small-carousel1.webp";
import SmallCarouselImg2 from "../../../assets/img/photo/small-carousel2.webp";
import SmallCarouselImg3 from "../../../assets/img/photo/discount.webp";

function Sliders() {
  const items = [
    { id: 1, img: SmallCarouselImg1, badge: "Only this week", title: "Fresh vegetables big discount offer sell" },
    { id: 2, img: SmallCarouselImg2, badge: "New", title: "Keep calm and drink fresh juice" },
    { id: 3, img: SmallCarouselImg3, badge: "-12 Off", title: "Bell peppers with many colors on sale" },
  ];

  const items2 = [
    { id: 2, img: SmallCarouselImg2, badge: "-12 Off", title: "Keep calm and drink fresh juice" },
    { id: 1, img: SmallCarouselImg1, badge: "Only this week", title: "Fresh vegetables big discount offer sell" },
    { id: 3, img: SmallCarouselImg3, badge: "New", title: "Bell peppers with many colors on sale" },
  ];

  return (
    <div className="wrapper flex flex-col xl:flex-row gap-[20px] py-[20px]">
      <div className="w-full xl:w-[calc((100%-20px)/3*2)]">
        <MainCarousel />
      </div>
      <div className="w-full xl:w-[calc((100%-20px)/3)] flex xl:flex-col flex-wrap gap-[20px]">
        <div className="w-full md:w-[calc((100%-20px)/2)] xl:w-full">
          <SmallCarousel order={1} items={items} />
        </div>
        <div className="w-full md:w-[calc((100%-20px)/2)] xl:w-full">
          <SmallCarousel order={2} items={items2} />
        </div>
      </div>
    </div>
  );
}

export default Sliders;
