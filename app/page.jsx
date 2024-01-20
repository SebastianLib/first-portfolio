import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Offer from '@/components/Offer'
import { Toaster } from "react-hot-toast";

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
