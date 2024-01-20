"use client"
import first from "@/public/assets/first.jpg";
import second from "@/public/assets/second.jpg";
import third from "@/public/assets/third.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="min-h-screen container mx-auto py-4 px-6 md:px-2">
        <h2 className="text-center pt-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-normal">
          Dlaczego Wybrać{" "}
          <span className="bg-red-600 text-white px-4">Mnie?</span>
        </h2>

        <div className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full md:gap-28 py-8 md:py-16">
            <motion.div 
            className="flex justify-end"
            initial={{ x: -150 }}
            whileInView={{ x:0 }}
            transition={{ duration: 0.3}}
            viewport={{ once: true }}
            >
              <Image
              src={first}
              width={400}
              alt="seo image w-[75%] md:w-[100%]"
              />
            </motion.div>
            <motion.div
              initial={{ x: 150 }}
              whileInView={{ x:0 }}
              transition={{ duration: 0.3}}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-4xl text-red-600 font-bold text-center md:text-start leading-snug">
                Optymalizacja SEO
              </h3>
              <p className="max-w-[500px] text-base lg:text-lg mt-4 text-center md:text-start text-black/80">
                skuteczna optymalizacja SEO nie tylko przyciąga większą ilość
                ruchu na stronę, ale także poprawia jej jakość i wpływa na
                ogólny sukces biznesowy online klienta.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start w-full md:gap-28 py-8 md:py-16">
            <motion.div
              initial={{ x: -150 }}
              whileInView={{ x:0 }}
              transition={{ duration: 0.3}}
              viewport={{ once: true }}
              >
              <h3 className="text-2xl lg:text-4xl text-red-600 font-bold text-center md:text-start leading-snug">
                Indywidualne Podejście
              </h3>
              <p className="max-w-[500px] text-base lg:text-lg mt-4 text-center md:text-start text-black/80">
                Zaczynam od głębokiego zrozumienia Twoich celów biznesowych i
                unikalnych potrzeb, tworząc strony dostosowane do Twojej marki.
                Wybierając mnie, otrzymujesz nie tylko estetyczną stronę, ale
                także funkcjonalne rozwiązanie dopasowane do oczekiwań Twoich
                klientów.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 150 }}
              whileInView={{ x:0 }}
              transition={{ duration: 0.3}}
              viewport={{ once: true }}
               className="flex justify-start"
               >
              <Image
              src={second}
              width={400}
              alt="seo image w-[75%] md:w-[100%]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full md:gap-28 py-8 md:py-16">
            <motion.div
              initial={{ x: -150 }}
              whileInView={{ x:0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3}} className="flex justify-end">
               <Image
              src={third}
              width={400}
              alt="seo image w-[75%] md:w-[100%]"
              />
            </motion.div>
            <motion.div
              initial={{ x: 150 }}
              whileInView={{ x:0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3}}>
              <h3 className="text-2xl lg:text-4xl text-red-600 font-bold text-center md:text-start leading-snug">
                Estetyka i design
              </h3>
              <p className="max-w-[500px] text-base lg:text-lg mt-4 text-center md:text-start text-black/80">
                Tworzę strony, które nie tylko zachwycają estetyką, ale również
                oferują intuicyjne i funkcjonalne doświadczenie użytkownika. Mój
                design nie tylko przyciąga wzrok, lecz również skutecznie
                komunikuje wartości Twojej marki, zyskując uznanie i zaufanie
                odwiedzających.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
