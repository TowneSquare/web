import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { images } from '../../constants/images';

function Screen1() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-300px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(-50%, ${-20 * self.progress}vh)`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-300px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.transform = `translate(calc(-50% - ${20 * self.progress}vw), calc(-50% - ${10 * self.progress}vh))`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-300px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.opacity = self.progress;
          node.style.transform = `translate(calc(-50% + ${50 * self.progress}% - ${50 * self.progress}vw), -50%)`
        }
      },
    });

    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-900px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(calc(-50% - 20vw - ${50 * self.progress}vw), calc(-50% - 10vh + ${50 * self.progress}vh))`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-900px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(calc(-50vw - ${50 * self.progress}vw), calc(-50% + ${50 * self.progress}vh))`
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div ref={ref1} className="absolute w-[340px] flex flex-col left-1/2 -translate-x-1/2 top-0">
        <h1 className="text-3xl  font-semibold text-center">Introducing</h1>
        <div className="flex gap-4 self-center items-center">
          <img src={images.logo} alt="logo" className="w-12 h-12" />
          <h2 className="text-[40px] font-bold">Townsquare</h2>
        </div>
        <img src="/images/financial_img.png" alt="sign" className="self-center space-squiggle" />
      </div>
      <img ref={ref2} src="/images/features/feed.svg" alt='feature1' className="absolute w-[300px] self-center  -translate-x-1/2 -translate-y-1/2"
        style={{ left: `50vw`, top: `60vh` }}
      />
      <div ref={ref3} className="absolute w-[500px] opacity-0 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `100vw`, top: `50vh` }}
      >
        <h1 className="text-[40px] font-bold">
          Contextual social feed
        </h1>
        <span className="text-2xl">
          TowneSquare feed enables context-specific features for each post to maximize utility for viewers. Users can seamlessly transition between finance and social experience in one user-friendly feed.
        </span>
      </div>
    </>
  )
}

export default Screen1