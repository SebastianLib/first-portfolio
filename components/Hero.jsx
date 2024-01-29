"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="h-screen relative bg-fixed bg-heroImg bg-cover bg-center flex justify-center items-center">
      <div className="z-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            Tworzenie Stron
          </h1>
          <div className="flex items-center justify-center h-12 my-2">
            <TypeAnimation
              sequence={[
                "Które Wyróżnią Twój Biznes!",
                3000,
                "Które Zwiększą Twoją Sprzedaż!",
                3000,
              ]}
              wrapper="span"
              speed={150}
              className="text-2xl md:text-4xl lg:text-5xl mt-4 text-red-500 font-semibold"
              style={{ display: "flex" }}
              repeat={Infinity}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <a
            href="#about"
            className="relative mt-8 inline-flex items-center px-10 py-3 md:px-14 md:py-5 overflow-hidden text-lg font-bold text-black border-2 border-black rounded-full bg-white hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-red-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-y-[-105%] group-hover:translate-y-0 ease">
            </span>
            <span className="relative">Zobacz Więcej</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/80"></div>
    </section>
  );
};

export default Hero;
