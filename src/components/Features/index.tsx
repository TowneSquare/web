import React, { useEffect, useState, forwardRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import "./features.css";
import Splin from './spline';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import Screen4 from './screen4';
import Screen5 from './screen5';
import Screen6 from './screen6';
import Screen7 from './screen7';
import Screen8 from './screen8';
import BackgroundRight from './background_right';
gsap.registerPlugin(ScrollTrigger);


const Features = forwardRef((props) => {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // console.log("position=", position)
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="features component bg-black hidden md:block lg:block scroll-margin-features" id="feature" data-component="Features">
      <Controller>
        <Scene duration={5000} pin offset={`${offset}px`}>
          <div className="w-full relative">
            <BackgroundRight />
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Screen4 />
            <Splin />
            <Screen5 />
            <Screen6 />
            <Screen7 />
            <Screen8 />
          </div>
        </Scene>
      </Controller>
    </div>
  )
})

export default Features