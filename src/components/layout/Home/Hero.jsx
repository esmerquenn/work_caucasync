"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import SmallCarouselImg2 from "../../../assets/img/photo/main-carousel1.webp";
import tractor from "../../../assets/img/photo/tractor1.jpg";
import textile from "../../../assets/img/photo/textile.jpg";
import ButtonMain from "@/components/ui/buttons/ButtonMain";

const slides = [
  {
    id: 1,
    image: tractor,
    title: {
      az: "Biznesinizi Böyütün",
      en: "Grow Your Business",
      ru: "Развивайте Свой Бизнес",
      tr: "İşinizi Büyütün",
    },
    description: {
      az: "Beynəlxalq ticarət həlləri ilə dünya bazarlarına açılın",
      en: "Enter global markets with international trade solutions",
      ru: "Выходите на мировые рынки",
      tr: "Uluslararası ticaret çözümleri",
    },
  },
  {
    id: 2,
    image: textile,
    title: {
      az: "Etibarlı Tərəfdaş",
      en: "Reliable Partner",
      ru: "Надежный Партнер",
      tr: "Güvenilir Ortak",
    },
    description: {
      az: "10+ il təcrübə ilə sizin yanınızdayıq",
      en: "By your side with 10+ years of experience",
      ru: "С вами более 10 лет опыта",
      tr: "10+ yıllık deneyim",
    },
  },
  {
    id: 3,
    image: SmallCarouselImg2,
    title: {
      az: "Qlobal Əlaqələr",
      en: "Global Connections",
      ru: "Глобальные Связи",
      tr: "Küresel Bağlantılar",
    },
    description: {
      az: "50+ ölkədə biznes şəbəkəmiz",
      en: "Our business network in 50+ countries",
      ru: "Наша бизнес-сеть в 50+ странах",
      tr: "50+ ülkede iş ağımız",
    },
  },
];

export default function Hero() {
  const params = useParams();
  const locale = (params?.locale) || "az";
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[currentSlide];

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

  return (
    <section className="relative lg:min-h-screen w-full overflow-hidden  slider_bg ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <AnimatePresence mode="wait">
          <motion.div key={current.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* SOL TƏRƏF - MƏTN */}
            <motion.div variants={textVariants} initial="enter" animate="center" exit="exit" className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {current.title[locale]}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">{current.description[locale]}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
               <ButtonMain text='About us' />
              </motion.div>
            </motion.div>

            {/* SAĞ TƏRƏF - DAİRƏVİ ŞƏKİL */}
            <motion.div
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end"
            >
              <div className="relative w-[450px] h-[450px] border border-8 border-[#A5D6A7] rounded-full overflow-hidden shadow-2xl">
                <Image src={current.image} alt={current.title[locale]} fill className="object-cover" priority />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
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
    </section>
  );
}
