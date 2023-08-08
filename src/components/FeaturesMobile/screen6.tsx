import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Screen6() {
  const transform = () => {
    const sticky = document.querySelector(".feature-sticky");
    const offSetTop = sticky?.parentElement?.offsetTop;
    const scrollSection = sticky?.querySelector(".scroll_section");
    let value = 0;
    let limit = 400;
    if (window.innerWidth < 768) {
      limit = 600;
    }
    let percentage = 0;

    if (offSetTop !== undefined) {
      value = ((window.scrollY - offSetTop) / window.innerHeight) * 100;
      percentage = value < 0 ? 0 : value > limit ? limit : value;
    }
    scrollSection?.setAttribute(
      "style",
      `transform:translate3d(${-percentage}vw, 0, 0)`
    );
  };

  window.addEventListener("scroll", (e) => {
    transform();
  });

  return (
    <div className="h-[320vh] mt-20">
      <div className=" bg-[#5E409E] bg-feature-line bg-no-repeat sticky feature-sticky overflow-hidden top-0 h-[100vh]">
        <div className="absolute w-screen h-full flex flex-col justify-evenly items-center bg-text opacity-100">
          <img className="w-full" src="/images/features/bg_text_1_mobile.svg" />
          <img className="w-full" src="/images/features/bg_text_2_mobile.svg" />
        </div>
        <div className="relative scroll_section h-[100%] w-[320vw] will-change-transform gap-x-[4.5rem] flex">
          <div className="flex flex-col items-center justify-center w-screen h-screen mx-8">
            <img src="/images/features/feature_mobile_1.svg" alt="feature7" />
            <p className="text-[18px] mx-6 mt-20 font-medium text-center">
              Self-bank yourself with crypto payments that can go to anyone
              anywhere you want
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-screen h-screen mx-8">
            <img
              className=""
              src="/images/features/feature_mobile_2.svg"
              alt="feature7"
            />
            <p className="text-[18px] mt-20 font-medium text-center">
              Discover new friends, communities, creators, and on-chain items
              based on your interests
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-screen h-screen">
            <img
              className=""
              src="/images/features/feature9.svg"
              alt="feature9"
            />
            <p className="text-[18px] mt-20 font-medium text-center">
              Experience boundless possibilities with your on-chain verifiable
              identity – gain exclusive event access, exciting airdrop rewards,
              and in-app perks!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen6;
