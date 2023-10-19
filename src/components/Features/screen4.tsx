import { useRef, useMemo } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import "./features.css";

function Screen4() {
  const ref1 = useRef(null);
 
  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-2100px",
      end: "top top+=-2400px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(-50% - ${100 * self.progress}vw), -50%)`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-2700px",
      end: "top top+=-3000px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(-50% - 100vw), calc(-50% - ${50 * self.progress}vh))`
        }
      },
    });

    ScrollTrigger.refresh();
  }, [ref1]);

  return (
    <div ref={ref1} className="absolute flex items-center gap-[75px] -translate-x-1/2 -translate-y-1/2"
      style={{ left: "150vw", top: `50vh`, minWidth: "1000px" }}
    >
      
      <div className="relative min-w-[316px]">
        <picture>
          <source
            srcSet="/images/features/feature4/layout_1x.webp"
            type="image/webp"
          />
          <img srcSet="/images/features/feature4/layout_1x.webp" alt='layout' className="min-w-[316px]"/>
        </picture>
        <div className="hide-scrollbar absolute inset-0 mt-[88px] mb-[74px] mx-[10px] overflow-x-hidden overflow-y-scroll">
          <picture>
            <source
              srcSet="/images/features/feature4/content_1x.webp"
              type="image/webp"
            />
            <img srcSet="/images/features/feature4/content_1x.webp" alt='content' className="min-w-[316px]"/>
          </picture>
        </div>
      </div>
      <div className="feature-contextual-title-left-padding">
        <h1 className="contextual-title">
          An all-in-one DM system
        </h1>
        <p className="townesquare-text-base">
          Your user profile on TowneSquare is an identity system that seamlessly connects on-chain credentials, NFT membership, and other verifiable experiences to enable new use cases such as ticketing, reward drops, and authentication services.
        </p>
      </div>
    </div>
  )
}

export default Screen4