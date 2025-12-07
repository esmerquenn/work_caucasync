"use client";
import { useTranslations } from "next-intl";
import { AlarmClock, Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useGetContactSectionsQuery } from "@/store/contactApi";
import SocialIcons from "@/components/ui/social-icons/SocialIcons";

function Footer() {
  const t = useTranslations("Header");
    const { data: contactData, isLoading: contactLoading} = useGetContactSectionsQuery();
  
  const items = [
    {
      label: t("callUs", { defaultValue: "Call us:" }),
      text: contactData?.phone || "++994 55 510 37 36",
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
  const mapEmbedSrc = contactData?.location || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5123456789!2d49.849999!3d40.372222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzIwLjQiTiA0OOCkzNScwMC4wIkU!5e0!3m2!1saz!2saz!4v1732400000000!5m2!1saz!2saz";
  return (
    <footer className="py-10 border-t bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-0 py-10 lg:py-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center  gap-10">
        <div>
          <h3 className="font-bold text-2xl mb-4">
            {t("weAre")} <span className="text-green-700">Caucasync</span>
          </h3>
          <p className="tracking-wider font-semibold">
            {t("description")}
          </p>
          <div className="mt-4">
            <SocialIcons variant="footer" />
          </div>
        </div>

        <div className="flex lg:justify-center">
          <div>
            <h3 className="font-semibold text-xl mb-4">{t("officialInfo")}</h3>
            <div className="flex flex-col gap-5">
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
                      <Icon className="size-6 lg:size-6 text-dark group-hover:text-blue-600 transition-colors" />
                    </motion.div>

                    {/* Text Content */}
                    <div>
                      <p className="text-sm lg:text-base font-semibold text-dark group-hover:text-blue-600 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-2 border-green-500 rounded-[12px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.5237691155!2d49.69015031780891!3d40.394475511010704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1763239562503!5m2!1str!2saz"
            className="w-full h-[220px]"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
