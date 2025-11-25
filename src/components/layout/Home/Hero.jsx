"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import ButtonMain from "@/components/ui/buttons/ButtonMain";
import { useGetMainSliderSectionsQuery } from "@/store/mainSlidersApi";

export default function Hero() {
  const params = useParams();
  const locale = (params?.locale) || "az";
  const t = useTranslations("Common");
  const { data: slidersData, isLoading } = useGetMainSliderSectionsQuery();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Map API data to slides format
  const slides = useMemo(() => {
    if (!slidersData?.success || !slidersData?.data) {
      return [];
    }
    return slidersData.data
      .filter((slider) => slider.status === true)
      .sort((a, b) => a.order - b.order)
      .map((slider) => ({
        id: slider.id,
        image: slider.image ? `http://127.0.0.1:8000/storage/${slider.image}` : "",
        title: slider.title || {},
        description: slider.description || {},
        button_text: slider.button_text || "",
        button_link: slider.button_link || null,
      }));
  }, [slidersData]);

  useEffect(() => {
    if (slides.length > 0) {
      // Reset currentSlide if it's out of bounds
      if (currentSlide >= slides.length) {
        setCurrentSlide(0);
      }
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [slides.length, currentSlide]);

  const current = slides[currentSlide] || null;

  const textVariants = {
    enter: { x: -50, opacity: 0 },
    center: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: 50, opacity: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    enter: { scale: 0.8, opacity: 0, rotate: -6 },
    center: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotate: 6,
      transition: { duration: 0.6 },
    },
  };

  if (!current || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative lg:min-h-screen w-full overflow-hidden  slider_bg ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <AnimatePresence mode="wait">
          <motion.div key={current.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* SOL TƏRƏF - MƏTN */}
            <motion.div variants={textVariants} initial="enter" animate="center" exit="exit" className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {current.title[locale] || ""}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">{current.description[locale] || ""}</p>
              {current.button_text && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {current.button_link ? (
                    <Link href={current.button_link}>
                      <ButtonMain text={current.button_text} />
                    </Link>
                  ) : (
                    <ButtonMain text={current.button_text} />
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* SAĞ TƏRƏF - DAİRƏVİ ŞƏKİL */}
            {current.image && (
              <motion.div
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end"
              >
                <div className="relative w-[450px] h-[450px] border border-8 border-[#A5D6A7] rounded-full overflow-hidden shadow-2xl">
                  <Image src={current.image} alt={current.title[locale] || "Slide"} fill className="object-cover" priority />
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${index === currentSlide ? "w-12 bg-slate-600" : "w-3 bg-gray-400"}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
