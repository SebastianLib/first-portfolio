import About from "@/components/About";
import ButtonToStart from "@/components/ButtonToStart";
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
    icon: "/logoSvg.svg",
  },
};
export default function Home() {
  
  return (
    <div className="relative">
      <div className="relative hidden lg:flex">
        <Intro />
      </div>
      <Toaster />
      <Hero />
      <About />
      <Offer />
      <Contact />
      <ButtonToStart/>
    </div>
  );
}
