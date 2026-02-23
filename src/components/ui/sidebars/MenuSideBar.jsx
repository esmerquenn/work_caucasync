"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, XIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "../separator";
import Logo from "../../../assets/img/photo/logo12.png";
import Image from "next/image";
import { useGetSettingsQuery } from "@/hooks/useApi";

export function MenuSideBar() {
  const t = useTranslations("Header");
  const { data, isLoading } = useGetSettingsQuery();

  const site_logo = data?.logo || Logo;

  const menuItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/whatwedo", label: t("howWeWork") },
    { href: "/ourservices", label: t("services") },
    { href: "/ourclients", label: t("partners") },
    { href: "/contact", label: t("contact") },
  ];

  return (
      <div className="relative">
        <Sheet key={"left"}>
          <SheetTrigger className="lg:hidden" asChild>
            <Button variant="outline">
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className={"bg-main"}>
            <SheetHeader className={"bg-main"}>
              <div className="flex items-center justify-between">
                <SheetTitle className={"text-[22px] text-[#fff] fold-bold"}>
                  <Link href={"/"} className=" flex items-center w-[60px] h-[60px]  bg-white rounded-full  p-1">
                    <Image src={site_logo} height={100} className="rounded-full" width={100} alt="logo" />
                  </Link>
                </SheetTitle>
                <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary rounded-xs  transition-opacity hover:opacity-100  focus:outline-hidden disabled:pointer-events-none ">
                  <XIcon className="size-6" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </div>
            </SheetHeader>
            <Separator />
            <div className="p-3.5">
              <ul className=" py-2 text-lg font-medium">
                {menuItems.map((item, index) => (
                    <li key={index} className="border-b py-1 px-2 mb-1">
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
  );
}