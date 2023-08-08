import { useRef, useEffect, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import "./features.css";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import BackgroundRight from "./background_right";
import Screen4 from "./screen4";
import Screen5 from "./screen5";
import Lenis from "@studio-freight/lenis";
import Screen6 from './screen6';
gsap.registerPlugin(ScrollTrigger);

function FeaturesMobile() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // console.log("position=", position)
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  

  const lenis = new Lenis();

  lenis.on("scroll", (e: any) => {
    console.log(e);
  });

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // const t1 = gsap.timeline({
  //   scrollTrigger:{
  //     trigger: ".bg-text",
  //     markers:true,
  //     start: "top top",
  //     end:"bottom center"
  //   }
  // })



  // t1.to('.bg-text',{
  //     opacity:0
  // })

  



  

  return (
    <div
      className="bg-black md:hidden"
      id="feature_1"
      data-component="FeaturesMobile"
    >
      <Controller>
        <Scene duration={1000} pin>
          <div className="w-full">
            <BackgroundRight />
            <Screen1 />
          </div>
        </Scene>
      </Controller>
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Screen6/>
    </div>
  );
}

export default FeaturesMobile;
