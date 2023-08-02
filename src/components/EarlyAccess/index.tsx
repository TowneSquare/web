import axios from 'axios';
import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import Waitlist from '../Waitlist';
import { BsGithub, BsGit } from "react-icons/bs";

function EarlyAccess() {
  return (
    <div id='earlyAccessDiv' className="early-access component" data-component="Early">
      <div className='z-50 bg-black'>
        <div className='relative max-md:hidden'>
          <img src='/images/early_left.svg' alt="left" className='absolute top-[0px] z-0' />
        </div>
        <div className="justify-center lg:flex">
          <p className="text-[29px] max-md:text-5xl max-sm:text-[27px] pt-32 pb-24 text-center text-white font-Outfit font-bold">Backed by the best</p>
        </div>
        <div className='flex justify-center pb-12 lg:space-x-24 max-lg:justify-between max-lg:px-12'>
          <img className='max-sm:w-[156px]' src="/images/bixin.svg" alt="bixin_image"/>
          <img className='max-sm:w-[156px]' src="/images/aptos.svg" alt="aptos_image"/>
        </div>
        <div className='w-full pb-64 lg:flex'>
        <Marquee autoFill={true} style={{ overflowY: "hidden" }}>
            <p className='z-10 px-24 pt-24 font-bold text-center text-white font-Outfit text-7xl max-sm:text-5xl'>Let's connect</p>
          </Marquee>
        </div>
        <div className='relative'>
          <img className='w-full absolute mt-[-200px] max-2xl:mt-[-140px] max-lg:mt-[-100px] max-md:mt-[-50px]' src="/images/line.svg" alt="line_image"/>
          <img className='w-full' src="/images/bottom.svg" alt="bottom_image"/>
          <div className="absolute inset-0 flex items-center justify-center w-full bottom-[70%]">
            <Waitlist isModel={false}/>
          </div>
          <div className='absolute text-center w-full bottom-[12%]'>
            <p className="text-[20px] text-center text-white font-Outfit font-bold">Find out more about TowneSquare</p>
            <div className='flex justify-center pt-6 space-x-8'>
              <a href='https://twitter.com/TowneSquarexyz' target="_blank" rel="noreferrer">
                <img src="/images/twitter.svg" alt="twitter_image"/>
              </a>
              <div className="w-6 md:w-8 h-6 md:h-8">
                <a href='https://github.com/TowneSquare' target="_blank" rel="noreferrer">
                  <BsGithub
                    size="auto"
                    style={{
                      color: "#F2F0FF",
                    }}
                  />
                </a>
              </div>
              <div className="w-6 md:w-8 h-6 md:h-8">
                <a href="https://docs.townesquare.xyz/townesquare-whitepaper/">
                  <BsGit
                    size="auto"
                    style={{
                      color: "#F2F0FF",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
};

export default EarlyAccess
