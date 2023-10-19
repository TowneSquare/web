import { useRef, useMemo } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import "./features.css";

function Screen2() {
  const ref1 = useRef(null);

  useMemo(() => {
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
          node.style.transform = `translate(calc(-50% - 100vw - ${100 * self.progress}vw), -50%)`
        }
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={ref1} className="absolute flex items-center gap-32 -translate-x-1/2 -translate-y-1/2"
      style={{ left: "150vw", top: `50vh`, minWidth: "1000px" }}
    >
      <div className="relative min-w-[316px]">
        <picture>
          <source
            srcSet="/images/features/feature2/layout_1x.webp"
            type="image/webp"
          />
          <img srcSet="/images/features/feature2/layout_1x.webp" alt='layout' className="min-w-[316px]"/>
        </picture>
        <div className="hide-scrollbar absolute inset-0 mt-[114px] mb-[58px] mx-[10px] overflow-x-hidden overflow-y-scroll">
        <picture>
          <source
            srcSet="/images/features/feature2/content_1x.webp"
            type="image/webp"
          />
          <img srcSet="/images/features/feature2/content_1x.webp" alt='content' className="min-w-[316px]"/>
        </picture>
        </div>
      </div>
      <div>
        <h1 className="contextual-title">
          One-click community onboarding
        </h1>
        <span className="townesquare-text-base">
            Users now have to hop between multiple platforms to access the full offerings of a community.
          </span>
          <div className='feature-text-seperator'></div>
          <span className="townesquare-text-base">
            Community members on TowneSquare can access community servers with their token or NFT in just one-click. It also allows non-token communities to be created with the same full suite of features from governance to townhall spaces.
          </span>
      </div>
    </div>
  )
}

export default Screen2