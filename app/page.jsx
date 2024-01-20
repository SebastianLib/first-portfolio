import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Offer from '@/components/Offer'
import { Toaster } from "react-hot-toast";
export const metadata= {
  title: 'SeliCode - tworzenie stron internetowych',
  description: 'Projektowanie i tworzenie najwyższej jakości stron internetowych, będące świetną wizytówką twojej firmy.',
  icons: {
    icon: "/assets/logoSvg.svg",
  },
}
export default function Home() {
  return (
    <>
    <Toaster/>
    <Hero/>
    <About/>
    <Offer/>
    <Contact/>
    </>
  )
}
