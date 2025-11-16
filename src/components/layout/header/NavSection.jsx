import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../assets/img/photo/logo12.png";
function NavSection() {
  return (
    <div id="nav-section" className="max-w-6xl mx-auto green-light-bg text-white font-bold py-[8px] px-4 lg:px-8">
      <div className=" hidden lg:flex items-center justify-between ">
        <ul className="flex  items-center gap-[40px] py-2 text-base">
          <li>
            <Link href={"/"}>Ana səhifə</Link>
          </li>
          <li>
            <Link href={"/about"}>Haqqımızda</Link>
          </li>
          <li>
            <Link href={"/whatwedo"}>How we work</Link>
          </li>
        </ul>
        <div className=" relative">
          <Link
            href={"/"}
            className=" flex items-center w-[120px] h-[120px]  bg-white rounded-full absolute -top-1/2 transform-[translateY(-50%)] -right-5.5 p-3"
          >
            <Image src={Logo} width={100} alt="phone" />
          </Link>
        </div>
        <ul className="flex  items-center gap-[40px] py-2 text-base">
          <li>
            <Link href={"/ourservices"}>Services</Link>
          </li>
          <li>
            <Link href={"/ourclients"}>Our partners</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavSection;
