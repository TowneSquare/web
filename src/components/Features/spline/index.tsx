import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Spline1 from './spline1';
import Spline2 from './spline2';
import Spline3 from './spline3';
import Text1 from './text1';
import Text2 from './text2';

function Splin() {
  const ref1 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-2700px",
      end: "top top+=-3000px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(0, ${-50 * self.progress}vh)`;
          node.style.clipPath = ``;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-3300px",
      end: "top top+=-3600px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(${-40 * self.progress}vw, calc(-50vh - ${80 * self.progress}vh))`
          node.style.clipPath = ``;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-4900px",
      end: "top top+=-5450px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          let numPoint = 10;
          const r = 24;

          let clipPath = `polygon(
            calc(30vw + ${10 * self.progress}vw) 0, 
            calc(130vw - ${10 * self.progress}vw) 0, `;

          for (let i = 0; i < numPoint; i++) {
            let offsetX = r * Math.cos(i * 90.0 / numPoint / 180.0 * Math.PI);
            let offsetY = r * Math.sin(i * 90.0 / numPoint / 180.0 * Math.PI);
            clipPath += `
            calc(130vw - ${10 * self.progress}vw - ${r}px + ${offsetX}px) calc(100% - ${r}px + ${offsetY}px),`;
          }
          for (let i = 0; i < numPoint; i++) {
            let offsetX = r * Math.cos((90 - i * 90.0 / numPoint) / 180.0 * Math.PI);
            let offsetY = r * Math.sin((90 - i * 90.0 / numPoint) / 180.0 * Math.PI);
            clipPath += `
            calc(30vw + ${10 * self.progress}vw + ${r}px - ${offsetX}px) calc(100% - ${r}px + ${offsetY}px)`;
            if (i < numPoint - 1)
              clipPath += ",";
          }
          clipPath += ")";

          node.style.clipPath = clipPath;
        }
      },
    });

  }, []);

  return (
    <div ref={ref1} className="w-[160vw] h-[130vh] overflow-hidden absolute bg-[#5E409E] rounded-3xl"
      style={{
        left: "10vw", top: "100vh", transform: "translate(0px, 0vh)"
      }}
    >
      <Spline1 />
      <Spline2 />
      <Spline3 />
      <Text1 />
      <Text2 />
    </div>
  )
}

export default Splin