"use client"
import { motion } from "framer-motion";
import { navVariants } from "@/lib/motions";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { linksArray } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
    const [background, setBackground] = useState(false);
    const onScroll = () => {
      if (window.scrollY > 50) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
  return (
    <motion.header
      variants={navVariants}
      initial={"hidden"}
      whileInView={"show"}
    className={`fixed top-0 w-full z-30 transition ${
      background ? "bg-red-700/95" : "bg-transparent"
    } `}
    >
       <nav className="flex items-center justify-between relative z-20 py-3 text-white mx-2 sm:mx-4 md:mx-8 lg:mx-20
       ">
        <svg
          height="68"
          viewBox="0 0 100 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[70px] md:w-[100px]"
        >
          <g clipPath="url(#clip0_1_2)">
            <path
              d="M19.128 34.7H23.688V36.98H20.04L19.983 37.094L23.023 42.642C23.6437 43.7567 23.954 44.6053 23.954 45.188C23.954 46.4673 23.5297 47.4047 22.681 48H17.646V45.796H21.579L21.636 45.682L18.216 39.545C17.722 38.6583 17.475 37.9363 17.475 37.379C17.475 36.0617 18.026 35.1687 19.128 34.7ZM25.2782 48V34.7H32.0992V36.98H27.8812V40.153H31.6432V42.357H27.8812V45.796H32.1752V48H25.2782ZM33.6464 48V34.7H36.2494V45.796H40.2014V48H33.6464ZM41.495 48V34.7H44.098V48H41.495Z"
              fill="white"
            />
            <path
              className="transition-color duration-300"
              d="M52.6585 45.796H56.0025V48H51.1765C50.3405 47.2147 49.7072 46.2203 49.2765 45.017C48.8459 43.8137 48.6305 42.5787 48.6305 41.312C48.6305 40.0327 48.8712 38.804 49.3525 37.626C49.8339 36.448 50.5495 35.4727 51.4995 34.7H56.0025V36.98H52.6585C52.3165 37.3727 52.0189 38.006 51.7655 38.88C51.5249 39.754 51.4045 40.59 51.4045 41.388C51.4045 42.186 51.5249 43.022 51.7655 43.896C52.0189 44.77 52.3165 45.4033 52.6585 45.796ZM63.108 34.7C63.9946 35.422 64.6533 36.391 65.084 37.607C65.5146 38.823 65.73 40.077 65.73 41.369C65.73 42.6483 65.521 43.8643 65.103 45.017C64.685 46.1697 64.02 47.164 63.108 48H59.194C58.282 47.164 57.617 46.1697 57.199 45.017C56.781 43.8643 56.572 42.6483 56.572 41.369C56.572 40.077 56.7873 38.823 57.218 37.607C57.6486 36.391 58.3073 35.422 59.194 34.7H63.108ZM60.467 45.796H61.835C62.1516 45.4287 62.4176 44.8333 62.633 44.01C62.861 43.174 62.975 42.2937 62.975 41.369C62.975 40.4443 62.8673 39.5767 62.652 38.766C62.4366 37.9427 62.1706 37.3473 61.854 36.98H60.467C60.1503 37.3473 59.878 37.9427 59.65 38.766C59.4346 39.5767 59.327 40.4443 59.327 41.369C59.327 42.2937 59.4346 43.174 59.65 44.01C59.878 44.8333 60.1503 45.4287 60.467 45.796ZM69.7958 45.796H71.5058C71.8605 45.3527 72.1391 44.7067 72.3418 43.858C72.5571 43.0093 72.6648 42.167 72.6648 41.331C72.6648 39.3423 72.2911 37.892 71.5438 36.98H69.7958V45.796ZM67.2118 48V34.7H72.7218C74.5205 36.296 75.4198 38.462 75.4198 41.198C75.4198 43.9213 74.5775 46.1887 72.8928 48H67.2118ZM76.8974 48V34.7H83.7184V36.98H79.5004V40.153H83.2624V42.357H79.5004V45.796H83.7944V48H76.8974Z"
              fill={background ? "#000000" : "#EE0A0A"}
            />
            <mask
              id="mask0_1_2"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="-13"
              y="-8"
              width="129"
              height="41"
            >
              <rect x="-13" y="-8" width="129" height="41" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_2)">
              <path
                className="transition-color duration-300"
                d="M25.304 1.6H47.384V12.64H29.72L29.444 13.192L44.164 40.056C47.1693 45.4533 48.672 49.5627 48.672 52.384C48.672 58.5787 46.6173 63.1173 42.508 66H18.128V55.328H37.172L37.448 54.776L20.888 25.06C18.496 20.7667 17.3 17.2707 17.3 14.572C17.3 8.19333 19.968 3.86933 25.304 1.6Z"
                fill={background ? "#000000" : "#EE0A0A"}
              />
              <path
                d="M55.084 66V1.6H67.688V55.328H86.824V66H55.084Z"
                fill="white"
              />
            </g>
            <mask
              id="mask1_1_2"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="-13"
              y="50"
              width="129"
              height="48"
            >
              <rect x="-13" y="50" width="129" height="48" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask1_1_2)">
              <path
                d="M25.304 1.6H47.384V12.64H29.72L29.444 13.192L44.164 40.056C47.1693 45.4533 48.672 49.5627 48.672 52.384C48.672 58.5787 46.6173 63.1173 42.508 66H18.128V55.328H37.172L37.448 54.776L20.888 25.06C18.496 20.7667 17.3 17.2707 17.3 14.572C17.3 8.19333 19.968 3.86933 25.304 1.6Z"
                fill="white"
              />
              <path
                className="transition-color duration-300"
                d="M55.084 66V1.6H67.688V55.328H86.824V66H55.084Z"
                fill={background ? "#000000" : "#EE0A0A"}
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="100" height="68" rx="18" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <ul className="hidden md:flex gap-2 lg:gap-8 cursor-pointer">
          {linksArray.map(item =>(
            <Link href={item.href} key={item.href}>
              <li className="navLi relative before:content-[''] before:w-0 before:h-[2px] before:bg-white before:absolute
            before:-bottom-2 hover:before:w-full before:left-[50%] hover:before:left-0 before:transition-all">{item.label}</li>
            </Link>
          ))}
        </ul>

        <div className="flex md:hidden">
        <MobileNavbar/>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar