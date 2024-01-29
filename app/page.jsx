import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Offer from "@/components/Offer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SeliCode - tworzenie stron internetowych",
  description:
    "Projektowanie i tworzenie najwyższej jakości stron internetowych, będące świetną wizytówką twojej firmy.",
  icons: {
    icon: "/assets/logoSvg.svg",
  },
};
export default function Home() {

  return (
    <>
    <div className="hidden lg:flex">
    <Intro/>
    </div>
      <Toaster />
      <Hero />
      <About />
      <Offer />
      <Contact />
    </>
  );
}
