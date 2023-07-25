 import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function Screen2() {
  const ref1 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-900px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(-50% - ${100 * self.progress}vw), -50%)`
        }
      },
    });
    
    ScrollTrigger.create({
      trigger: "#feature",
       start: "top top+=-1500px",
      end: "top top+=-1800px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(-50% - 100vw - ${100 * self.progress}vw), calc(-50% + ${100 * self.progress}vh))`
        }
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={ref1} className="absolute flex items-center gap-32 -translate-x-1/2 -translate-y-1/2"
      style={{ left: "150vw", top: `50vh`, minWidth: "1000px" }}
    >
      <img src="/images/features/feature2.svg" alt='feature2' className="min-w-[300px]" />
      <div>
        <h1 className="text-[40px] leading-[50px] font-bold">
          One-click community onboarding
        </h1>
        <span className="flex flex-col self-stretch text-base sm:text-xl md:text-2xl lg:text-2xl font-[Outfit] font-normal leading-[24px] sm:leading-[30px] md:leading-[34px] text-white mt-4 mb-16">
            Users now have to hop between multiple platforms to access the full offerings of a community.
          </span>
          <span className="flex flex-col self-stretch text-base sm:text-xl md:text-2xl lg:text-2xl font-[Outfit] font-normal leading-[24px] sm:leading-[30px] md:leading-[34px] text-white">
            Community members on TowneSquare can access community servers with their token or NFT in just one-click. It also allows non-token communities to be created with the same full suite of features from governance to townhall spaces.
          </span>
      </div>
    </div>
  )
}

export default Screen2