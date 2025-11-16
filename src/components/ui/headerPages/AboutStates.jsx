"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Hourglass, Wifi, Star } from "lucide-react";
function AboutStates() {
  const stats = [
    {
      icon: Hourglass,
      label: "Expert Team",
      value: 1,
    },
    {
      icon: Wifi,
      label: "Activate Project",
      value: 1,
    },
    {
      icon: Star,
      label: "Awards Winning",
      value: 1,
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const [displayValue, setDisplayValue] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(displayValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [displayValue]);
  return (
    <div className="flex justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-10" variants={itemVariants}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex-1 flex items-center gap-4 relative ">
                <motion.div className="flex-shrink-0" variants={iconVariants}>
                  <Icon className="w-12 h-12 text-green-600" strokeWidth={2} />
                </motion.div>

                {/* Counter and Label */}
                <motion.div className="flex flex-col gap-0.5   min-w-40" variants={itemVariants}>
                  <div className="flex items-baseline gap-1">
                    <motion.span
                      className="text-2xl font-bold text-green-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {displayValue}
                    </motion.span>
                    <span className="text-green-600 font-bold text-lg">+</span>
                  </div>
                  <p className="text-foreground font-semibold text-base">{stat.label}</p>
                </motion.div>
                {index < stats.length - 1 && (
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                )}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutStates;
