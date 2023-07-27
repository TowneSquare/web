import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function BackgroundRight() {
  const ref1 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-2700px",
      end: "top top+=-3000px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(0, ${-50 * self.progress}vh)`
        }
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <img ref={ref1} src="/images/features/right_web.svg" alt='feature1' className="absolute bg-cover"
        style={{ right: "0", top: "-600px" }}
      />
     
    </>
  )
}

export default BackgroundRight