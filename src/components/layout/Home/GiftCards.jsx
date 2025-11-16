'use client'

import GiftCard from "@/components/ui/cards/GiftCard";
import React, { useEffect, useState } from "react";
import GiftCardImg from "../../../assets/img/photo/giftcard2.webp";
import GiftCardImg2 from "../../../assets/img/photo/giftcard-img.webp";
import GiftCardImg3 from "../../../assets/img/photo/giftcard-img3.webp";
import GiftCardImg4 from "../../../assets/img/photo/giftcard-img4.webp";
import { nanoid } from "@reduxjs/toolkit";

function GiftCards() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
    }, [])

  const items = [
    {
      title: `Honoring taste and texture together`,
      text: "18% Off",
      img: GiftCardImg,
      url: "/",
    },
    {
      title: `Honoring taste and texture together`,
      text: "18% Off",
      img: GiftCardImg2,
      url: "/",
    },
    {
      title: `Honoring taste and texture together`,
      text: "18% Off",
      img: GiftCardImg3,
      url: "/",
    },
    {
      title: `Honoring taste and texture together`,
      text: "18% Off",
      img: GiftCardImg4,
      url: "/",
    },
  ];

  return (
    <section className="wrapper ">
      <h3 className="section-sub-title">My collection</h3>
      <h2 className="section-title">Best deals of week</h2>
      <div className="flex gap-[20px] pt-[20px] ">
        {items.map((item) => (
          loading ? <SmallCarouselSkeleton /> : <GiftCard key={nanoid()} {...item} />
        ))}
      </div>
    </section>
  );
}

export default GiftCards;
