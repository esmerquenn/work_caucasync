"use client";

import React from "react";
import { MenuSideBar } from "@/components/ui/sidebars/MenuSideBar";
import { AlarmClock, Mail, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/ui/selects";
import Logo from "../../../assets/img/photo/logo12.png";
import Image from "next/image";
import Link from "next/link";
import { useGetsettingsQuery } from "@/store/settingsApi";
import { useGetContactSectionsQuery } from "@/store/contactApi";
function MiddleSection() {
  const t = useTranslations("Header");
  const { data, isLoading } = useGetsettingsQuery();
  const { data: contactData, isLoading: contactLoading} = useGetContactSectionsQuery();
  const site_logo = data?.logo || Logo;
console.log(contactData);

  // const {email, phone, workhours, address}=contactData?.data;
  const items = [
    {
      label: t("callUs", { defaultValue: "Call us:" }),
      text: contactData?.phone || "+994 55 510 37 36",
      icon: PhoneCall,
      href: contactData?.phone ? `tel:${contactData.phone}` : "tel:+994555103736",
    },
    {
      label: t("workHours", { defaultValue: "Work hours:" }),
      text: contactData?.workhours || "9am - 6pm",
      icon: AlarmClock,
    },

    {
      label: t("mailTo", { defaultValue: "Mail to:" }),
      text: contactData?.email || "info@caucasync.com",
      icon: Mail,
      href: contactData?.email ? `mailto:${contactData.email}` : "mailto:info@caucasync.com",
    },
    {
      label: t("address", { defaultValue: "Address:" }),
      text: contactData?.address || "Baku, Azerbaijan",
      icon: MapPin,
    },
  ];

  return (
    <div className="bg-main">
      <div
        id="middle-section"
        className="max-w-6xl mx-auto py-[10px] lg:py-[20px] gap-[20px]  px-4 lg:px-8 flex justify-between items-center lg:block"
      >
        <div className=" items-center justify-between gap-[20px] lg:gap-[40px] flex-wrap lg:flex-nowrap hidden lg:flex">
          {items.map((item, index) => {
            const Icon = item.icon;
            const Component = item.href ? "a" : "div";

            return (
              <motion.div
                key={index}
                className="flex items-center gap-[12px] cursor-pointer group min-w-fit"
                whileHover="hover"
                initial="initial"
                animate="initial"
                {...(item.href && {
                  as: Component,
                  href: item.href,
                })}
              >
                {/* Animated Icon */}
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    hover: {
                      y: [0, -8, 0, -6, 0, -4, 0],
                      transition: {
                        duration: 1.2,
                        ease: "easeInOut",
                        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
                      },
                    },
                  }}
                >
                  <Icon className="size-6 lg:size-8 text-dark group-hover:text-blue-600 transition-colors" />
                </motion.div>

                {/* Text Content */}
                <div>
                  <span className="text-xs lg:text-sm font-semibold text-dark block">{item.label}</span>
                  <p className="text-sm lg:text-base font-semibold text-dark group-hover:text-blue-600 transition-colors">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <MenuSideBar />
        <div className="lg:hidden ml-6">
          <Link href={"/"} className=" flex items-center w-[70px] h-[70px]  bg-white rounded-full   p-1">
            <Image src={site_logo} height={100} width={100} className="rounded-full" alt="caucasync " />
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-[20px] border p-1 bg-white rounded-[6px]">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
