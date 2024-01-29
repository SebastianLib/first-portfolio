"use client"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_90t14ic",
        "template_kbnpzws",
        form.current,
        "5TmnBVOUWbmLhfLnq"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Wiadomość została wysłana!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Coś poszło nie tak..");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-50">
      <div className="h-screen relative">
        <div className="h-[50%] relative bg-red-300 bg-contactSmall  md:bg-contactBig bg-fixed bg-cover flex justify-center items-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="h-[50%] bg-gray-50"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] absolute w-full py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Skontaktuj się ze mną
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-8 py-8 px-4">
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
                placeholder="Jan Kowalski?"
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
              className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-red-600 text-white"
            >
              Wyślij wiadomość
            </button>
          </form>
        </motion.div>
      </div>

      <div className="flex max-w-lg mx-auto justify-between items-center pb-12 flex-wrap px-2 md:px-0">
        <div className="flex flex-col items-center justify-center transition-transform hover:scale-105 gap-2 cursor-pointer">
          <FaPhone className="w-20 h-20 p-6 bg-white rounded-full" />
          <h2 className="font-bold text-xl">Zadzwoń do mnie:</h2>
          <p>881 372 416</p>
        </div>
        <div className="flex flex-col items-center justify-center transition-transform hover:scale-105 gap-2 cursor-pointer">
          <IoIosMail className="w-20 h-20 p-6 bg-white rounded-full" />
          <h2 className="font-bold text-xl">Mój adres email:</h2>
          <p>selicode04@gmail.com</p>
        </div>
        
      </div>
      
    </section>
  );
};

export default Contact;
