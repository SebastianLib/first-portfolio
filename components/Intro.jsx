"use client"
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";

const Intro = () => {
    const comp = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false)
    },[])

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          const t1 = gsap.timeline()
          t1.from(["#title-1", "#title-2", "#title-3"], {
              opacity: 0,
              y: "+=30",
              stagger: 0.5,
            })
            .to(["#title-1", "#title-2", "#title-3"], {
              opacity: 0,
              y: "-=30",
              delay: 0.3,
              stagger: 0.5,
            })
            .to("#intro-slider", {
              xPercent: "-100",
              duration: 1.3,
            })
        }, comp)
  
      return () => ctx.revert();
    }, []);

  return (
    <div className="relative" ref={comp}>
    <div
        id="intro-slider"
        className="h-screen z-50 p-10 bg-white fixed top-0 left-0 
        z-100 w-full flex items-center justify-center gap-10 tracking-tight"
      >
        <span className={`text-9xl font-bold text-red-600 ${loading ? "opacity-0": "opacity-100"}`} id="title-1">
          Seli
        </span>
        <span className={`text-9xl font-bold text-red-600 ${loading ? "opacity-0": "opacity-100"}`} id="title-2">
          Code
        </span>
        <span className={`text-9xl font-bold text-red-600 ${loading ? "opacity-0": "opacity-100"}`} id="title-3">
          Studio
        </span>
      </div>
    </div>
  )
}

export default Intro