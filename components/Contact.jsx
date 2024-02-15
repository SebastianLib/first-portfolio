"use client"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Something = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true)
      emailjs
        .sendForm(
          "service_90t14ic",
          "template_mjakj7b",
          form.current,
          "dZSinQh5WQnwArhvk"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false)
            toast.success("Wiadomość została wysłana!");
          },
          (error) => {
            console.log(error.text);
            setLoading(false)
            toast.error("Coś poszło nie tak..");
          }
        );
    };
  return (
    <section id="contact" className="bg-gray-50 relative flex flex-col justify-center items-center">
        <div className="h-[50%] w-full absolute top-0  bg-contactBig bg-fixed">
        <div className="absolute inset-0 bg-black/50"></div>
        </div>  

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white h-[80%] rounded-xl shadow-xl w-full z-20 my-8 py-6 lg:py-8 xl:py-16 px-4 mx-auto max-w-screen-md"
        >
          <h2 className="mb-4 text-3xl xl:text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Skontaktuj się ze mną
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-8 py-6 xl:py-8 px-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Imię
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Jan Kowalski"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                twój adres email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="przykładowyemail@gmail.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                twoja wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="zostaw wiadomość..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`py-3 px-5 text-sm font-medium text-center rounded-lg bg-red-600 text-white ${loading && "bg-red-600/50"}`}
            >
              Wyślij wiadomość
            </button>
          </form>
        </motion.div>

    <div className="flex max-w-lg justify-center mx-auto pt-8 sm:mt-0 gap-6 md:gap-16 lg:gap-32 sm:justify-between items-center pb-12 flex-wrap px-2 md:px-0">
        <div className="flex flex-col items-center justify-center transition-transform hover:scale-105 gap-2 cursor-pointer">
          <FaPhone className="w-20 h-20 p-6 bg-white rounded-full" />
          <h2 className="font-bold text-xl">Zadzwoń do mnie:</h2>
          <p>881 372 416</p>
        </div>
        <div className="flex flex-col items-center justify-center transition-transform hover:scale-105 gap-2 cursor-pointer">
          <IoIosMail className="w-20 h-20 p-6 bg-white rounded-full" />
          <h2 className="font-bold text-xl">Mój adres email:</h2>
          <p>kontakt@selicode.pl</p>
        </div>    
      </div>

    </section>
  )
}

export default Something