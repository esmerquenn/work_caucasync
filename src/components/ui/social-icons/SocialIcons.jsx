"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Globe } from "lucide-react";
import { useGetSocialAccountsQuery } from "@/hooks/useApi";

// Icon mapping based on name
const iconMap = {
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  github: Github,
  website: Globe,
  // Fallback
  default: Globe,
};

// Color mapping for hover effects
const colorMap = {
  facebook: "hover:text-blue-600",
  linkedin: "hover:text-blue-700",
  instagram: "hover:text-pink-600",
  twitter: "hover:text-blue-400",
  youtube: "hover:text-red-600",
  github: "hover:text-gray-800",
  website: "hover:text-green-600",
  default: "hover:text-gray-600",
};

function SocialIcons({ variant = "default", className = "" }) {
  const { data: socialData, isLoading } = useGetSocialAccountsQuery();

  const socialAccounts = useMemo(() => {
    if (!socialData?.success || !socialData?.data) {
      return [];
    }
    return socialData.data
      .filter((account) => account.status === true)
      .map((account) => {
        const nameLower = account.name?.toLowerCase().trim() || "";
        const IconComponent = iconMap[nameLower] || iconMap.default;
        const hoverColor = colorMap[nameLower] || colorMap.default;

        return {
          id: account.id,
          name: account.name,
          link: account.link || "#",
          icon: IconComponent,
          hoverColor: hoverColor,
        };
      });
  }, [socialData]);

  if (isLoading) {
    return null;
  }

  if (socialAccounts.length === 0) {
    return null;
  }

  // Footer variant - SVG style
  if (variant === "footer") {
    return (
      <div className={`flex space-x-4 ${className}`}>
        {socialAccounts.map((account) => {
          const Icon = account.icon;
          return (
            <motion.a
              key={account.id}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          );
        })}
      </div>
    );
  }

  // Header variant - SVG style (small)
  if (variant === "header") {
    return (
      <div className={`flex items-center gap-[20px] ${className}`}>
        {socialAccounts.map((account) => {
          const Icon = account.icon;
          return (
            <motion.a
              key={account.id}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-green-400 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          );
        })}
      </div>
    );
  }

  // Default variant - Card style (for contact page)
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialAccounts.map((account) => {
        const Icon = account.icon;
        return (
          <motion.a
            key={account.id}
            href={account.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className={`w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-gray-600 ${account.hoverColor} transition-colors duration-300`}
            aria-label={account.name}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
}

export default SocialIcons;

