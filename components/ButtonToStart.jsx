"use client"
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ButtonToStart = () => {

    const [position, setPosition] = useState(false);
    const onScroll = () => {
      if (window.scrollY > 50) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if(!position){
        return null
    }

  return (
    <Link href="#hero">
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "easeOut", duration: 0.5}}
    className="fixed flex hover:scale-105 transition items-center justify-center bottom-3 right-3 md:bottom-10 md:right-10 z-20 rounded-full bg-red-600 w-16 h-16 cursor-pointer">
    <ArrowUp className="text-white"/>
    </motion.div>
    </Link>
  )
}

export default ButtonToStart