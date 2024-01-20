"use client"
import { MdComputer } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md"
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center gap-24 pb-20">
      <h2 className="text-center text-3xl lg:text-5xl font-semibold leading-normal">
        Jakie wykonuję usługi?
      </h2>
      <div className="flex justify-center flex-wrap gap-12">
        <motion.div 
            initial={{ opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5}} 
            className="bg-white px-4 py-8 flex flex-col items-center rounded-xl gap-4 shadow-xl cursor-pointer transition hover:scale-105">
          <MdComputer className="w-20 h-20 rounded-full bg-red-500 text-white p-3" />
          <h2 className="text-xl font-bold">Strony internetowe</h2>
          <p className="max-w-[300px] text-center">
            Indywidualne podejście do każdego projektu jest dla mnie zawsze
            priorytetem, ponieważ każde zlecenie jest unikalne.
          </p>
        </motion.div>
        <motion.div 
            initial={{ opacity:0 }}
            whileInView={{opacity:1 }}
            transition={{ duration: 1}}
            viewport={{ once: true }}  className="bg-white px-4 py-8 flex flex-col items-center rounded-xl gap-4 shadow-xl cursor-pointer transition hover:scale-105">
          <RiPagesLine className="w-20 h-20 rounded-full bg-red-500 text-white p-3" />
          <h2 className="text-xl font-bold">Wizytówki</h2>
          <p className="max-w-[300px] text-center">
            Wizytówka jest doskonałym rozwiązaniem dla firm i osób prywatnych,
            które chcą szybko i ekonomicznie zaistnieć w sieci.
          </p>
        </motion.div>
        <motion.div 
            initial={{ opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{ once: true }} 
            transition={{ duration: 1}}
            className="bg-white px-4 py-8 flex flex-col items-center rounded-xl gap-4 shadow-xl cursor-pointer transition hover:scale-105">
          <MdOutlineDesignServices className="w-20 h-20 rounded-full bg-red-500 text-white p-3" />
          <h2 className="text-xl font-bold">Projekty graficzne</h2>
          <p className="max-w-[300px] text-center">
            Tworzę logotypy, branding, materiały reklamowe, a także koncepcje
            wizualne dostosowane do kampanii reklamowych.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
