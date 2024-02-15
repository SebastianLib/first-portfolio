"use client";
import { MdComputer } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from "framer-motion";

const Services = () => {
  
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center gap-24 pb-20">
      <h2 className="text-center text-3xl lg:text-5xl font-semibold leading-normal">
        Jakie wykonuję usługi?
      </h2>

      <div className="flex justify-center flex-wrap gap-12">
        <motion.div
          initial={{y:-150, opacity: 0 }}
          whileInView={{y:0, opacity: 1}}
          transition={{delay:0.3, duration:0.5 }}
          viewport={{ once: true }}
          className="bg-white"
        >
          <div className="bg-white h-full px-4 py-8 flex flex-col items-center rounded-xl gap-4 shadow-xl cursor-pointer transition hover:scale-105">
          <MdComputer className="w-20 h-20 rounded-full bg-red-500 text-white p-3" />
          <h2 className="text-xl font-bold">Strony internetowe</h2>
          <p className="max-w-[300px] text-center">
            Jest to rozbudowana witryna, składająca się z wielu podstron,
            zapewniająca pełną funkcjonalność i interaktywność. To idealne
            rozwiązanie dla klientów z większym budżetem, którzy poszukują
            profesjonalnej strony i podejścia. W ramach tworzenia rozbudowanych
            witryn, kładę szczególny nacisk na dostosowanie funkcjonalności do
            indywidualnych potrzeb klienta.
          </p>
          </div>
        </motion.div>
        <motion.div
          initial={{y:-150, opacity: 0 }}
          whileInView={{y:0, opacity: 1 }}
          transition={{delay:0.6, duration:0.5 }}
          viewport={{ once: true }}
          className="bg-white"
        >
          <div className="bg-white h-full px-4 py-8 flex flex-col items-center rounded-xl gap-4 shadow-xl cursor-pointer transition hover:scale-105">
          <RiPagesLine className="w-20 h-20 rounded-full bg-red-500 text-white p-3" />
          <h2 className="text-xl font-bold">Wizytówki</h2>
          <p className="max-w-[300px] text-center">
            Wizytówka To jednostronicowa strona
            internetowa stworzona w celu skupienia uwagi odwiedzających na
            konkretnej ofercie lub prezentacji Twojej firmy. Projektuję
            atrakcyjne wizytówki, które są responsywne i dobrze zoptymalizowane
            pod kątem wyszukiwarek, co pozwala efektywnie przyciągać uwagę i
            zdobywać nowych klientów.
          </p>
          </div>
        </motion.div>
        <motion.div
          initial={{y:-150, opacity: 0 }}
          whileInView={{y:0, opacity: 1 }}
          transition={{delay:0.9, duration:0.5 }}
          viewport={{ once: true }}
          className="bg-white"
        >
          <div className="bg-white h-full px-4 py-8 flex flex-col items-center rounded-xl gap-4 shadow-xl cursor-pointer transition hover:scale-105">
          <MdOutlineDesignServices className="w-20 h-20 rounded-full bg-red-500 text-white p-3" />
          <h2 className="text-xl font-bold">Projekty graficzne</h2>
          <p className="max-w-[300px] text-center">
            Oferuję kompleksowe usługi z zakresu projektowania graficznego,
            obejmujące tworzenie logotypów, branding, materiałów reklamowych
            oraz koncepcji wizualnych dostosowanych do kampanii reklamowych.
            Działać wspólnie możemy nad stworzeniem spójnego wizerunku marki,
            skutecznie przyciągającego uwagę i wyróżniającego się na rynku.
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
