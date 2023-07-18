import React from 'react'
import { BsTwitter, BsGithub } from "react-icons/bs";
import { images } from '../../constants/images';
import { ScrollTrigger, Tween } from 'react-gsap';

function Header() {
  return (
    <div
      className="w-full px-6 py-4 z-20 fixed flex justify-between"
    >
      <div className="flex gap-2 items-center">
        <img className="w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12" src={images.logo} alt="logo" />
        <ScrollTrigger start="0px" end="220px" scrub={0.5}>
          <Tween from={{
            opacity: 1
          }} to={{
            opacity: 0
          }}
          >
            <span
              className="font-[Urbanist] text-[22px] md:text-[35px] lg:text-[42px] font-bold text-white"
            >
              TowneSquare
            </span>
          </Tween>
        </ScrollTrigger>
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