import React, { useEffect, useRef, useState } from 'react'
import { BsTwitter, BsGithub } from "react-icons/bs";
import { images } from '../../constants/images';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.to("#header", {
      scrollTrigger: {
        trigger: "#home",
        start: "top top+=-1830px",
        end: "top top+=-2050px",
        scrub: true,
      },
      opacity: 0,
    });

    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-2300px",
      end: "top top+=-2800px",
      onUpdate: (self) => {
        if (headerRef.current != null && (headerRef.current as any).style != null)
          (headerRef.current as any).style.opacity = self.progress;
      },
    });
    ScrollTrigger.refresh();
  });

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      console.log("position=", position)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full px-6 py-4 z-20 fixed flex justify-between bg-red" id="header" ref={headerRef}
    >
      <div className="flex gap-2 items-center">
        <img className="w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12" src={images.logo} alt="logo" />
        <span
          className="font-[Urbanist] text-[22px] md:text-[35px] lg:text-[42px] font-bold text-white"
        >
          TowneSquare
        </span>

      </div>
      <div className="flex gap-4 md:gap-8 items-center">
        <div className="w-6 md:w-8 h-6 md:h-8">
          <a href="https://twitter.com/TowneSquarexyz">
            <BsTwitter
              size="auto"
              style={{
                color: "#F2F0FF",
              }}
            />
          </a>
        </div>
        <div className="w-6 md:w-8 h-6 md:h-8">
          <a href="https://github.com/TowneSquare">
            <BsGithub
              size="auto"
              style={{
                color: "#F2F0FF",
              }}
            />
          </a>
        </div>
        <button
          className="hidden md:block px-6 py-2 text-[18px] text-black font-semibold bg-white hover:bg-[#CCCCCC] active:bg-[#AAAAAA] rounded-full cursor-pointer"
        >
          Join waitlist
        </button>
      </div>
    </div>
  )
}

export default Header