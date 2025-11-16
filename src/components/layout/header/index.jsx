"use client";
import React from "react";
import HelperSection from "./HelperSection";
import MiddleSection from "./MiddleSection";
import NavSection from "./NavSection";
function Header() {
  return (
    <div className="z-50 relative">
      <HelperSection />
      <div className="sticky top-0 ">
        <MiddleSection />
        <NavSection />
        <div className="bg-green-800 h-3 max-w-[1100px] mx-auto "></div>
      </div>
    </div>
  );
}

export default Header;
