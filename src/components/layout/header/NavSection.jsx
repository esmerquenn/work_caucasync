import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import Logo from "../../../assets/img/photo/logo12.png";
import { useGetSettingsQuery } from "@/hooks/useApi";

function NavSection() {
  const { data, isLoading } = useGetSettingsQuery();
  const t = useTranslations("Header");

  const site_logo = data?.logo || Logo;

  return (
      <div id="nav-section" className="max-w-6xl mx-auto green-light-bg text-white font-bold py-[8px] px-4 lg:px-8">
        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex items-center gap-[40px] py-2 text-base">
            <li>
              <Link href={"/"}>{t("home")}</Link>
            </li>
            <li>
              <Link href={"/about"}>{t("about")}</Link>
            </li>
            <li>
              <Link href={"/whatwedo"}>{t("howWeWork")}</Link>
            </li>
          </ul>
          <div className="relative">
            <Link
                href={"/"}
                className="flex items-center w-[120px] h-[120px] bg-white rounded-full absolute -top-1/2 transform-[translateY(-50%)] -right-5.5 p-3"
            >
              <Image
                  src={site_logo}
                  height={100}
                  className="rounded-full"
                  width={100}
                  alt="logo"
              />
            </Link>
          </div>
          <ul className="flex items-center gap-[40px] py-2 text-base">
            <li>
              <Link href={"/ourservices"}>{t("services")}</Link>
            </li>
            <li>
              <Link href={"/ourclients"}>{t("partners")}</Link>
            </li>
            <li>
              <Link href={"/contact"}>{t("contact")}</Link>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default NavSection;