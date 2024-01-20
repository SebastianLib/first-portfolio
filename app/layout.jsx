import {Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: 'SeliCode - tworzenie stron internetowych',
  description: 'Projektowanie i tworzenie najwyższej jakości stron internetowych, będące świetną wizytówką twojej firmy.',
  icons: {
    icon: "/assets/logoSvg.svg",
  },
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar/>
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
