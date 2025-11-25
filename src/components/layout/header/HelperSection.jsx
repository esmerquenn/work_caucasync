import { LanguageSwitcher } from "@/components/ui/selects";
import { useTranslations } from "next-intl";
import React from "react";
import SocialIcons from "@/components/ui/social-icons/SocialIcons";

function HelperSection() {
  const t = useTranslations("Header");
  return (
    <div id="helper-section" className="hidden md:block  border-b green-mid-bg">
      <div className="max-w-6xl mx-auto  text-[13px] text-white flex items-center justify-center lg:justify-between py-[8px] px-4 lg:px-8">
        <p className="hidden lg:flex items-center gap-[4px]  ">{t("welcome")}</p>
        <div className="flex items-center gap-[20px]">
          <SocialIcons variant="header" />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default HelperSection;
