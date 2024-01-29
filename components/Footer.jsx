import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import { linksArray } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white shadow-xl rounded-lg dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
            src={logo}
            alt="logo"
            height={70}
            />
          </a>
          <ul className="flex gap-2 lg:gap-8 cursor-pointer">
          {linksArray.map(item =>(
            <Link href={item.href} key={item.href}>
              <li className="navLi">{item.label}</li>
            </Link>
          ))}
        </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 SeliCode™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
