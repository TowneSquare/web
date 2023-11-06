import React, { useState } from "react";

type HeaderProps = {
  clickWaitlist: () => void;
};

const Home: React.FC<HeaderProps> = ({ clickWaitlist }) => {
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const onMouseMove = (e: any) => {
    const percentX =
      (window.innerWidth / 2 - e.clientX) / (window.innerWidth / 2);
    const percentY =
      (window.innerHeight / 2 - e.clientY) / (window.innerHeight / 2);

    const maxOffset = 30;
    setOffset({ left: maxOffset * percentX, top: maxOffset * percentY });
  };

  return (
    <>
      <div
        className="relative bg-black"
        onMouseMove={(e) => onMouseMove(e)}
        data-component="Home"
        id="homeDiv"
      >
        <div className="absolute z-0 hidden w-full h-screen lg:block">
          <img
            src="/images/home/left_web.svg"
            alt="background"
            className="top-0 left-0 h-full"
          />
          <img
            src="/images/home/right_web.svg"
            alt="background"
            className="absolute top-0 right-0 h-full"
          />
        </div>
        <div className="absolute z-0 hidden w-full md:block lg:hidden">
          <img
            src="/images/home/left_tablet.svg"
            alt="background"
            className="top-0 left-0 h-full"
          />
          <img
            src="/images/home/right_tablet.svg"
            alt="background"
            className="absolute top-[40vh] right-0 h-full"
          />
        </div>
        <div className="absolute z-0 block w-full md:hidden">
          <img
            src="/images/home/left_mobile.svg"
            alt="background"
            className="top-0 left-0"
          />
          <img
            src="/images/home/right_mobile.svg"
            alt="background"
            className="absolute top-[20vh] right-0"
          />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full pt-24 pb-8 lg:pt-40 lg:pb-40">
          <div className="flex flex-col-reverse items-center justify-center gap-8 px-4 md:flex-row-reverse lg:flex-row lg:gap-32">
            <div className="flex flex-col gap-6 max-w-[800px] md:pr-10 lg:pr-0">
              <div></div>
              <span className="text-[40px] md:text-[48px] lg:text-[56px] font-bold">
                <span className="text-[#00EEFD]">
                  The Web3 ”everything” app
                </span>
                <br />
                you have been waiting for
              </span>
              <span className="text-[24px] lg:text-[32px] font-medium ">
                By “everything”, we mean social, payments, community space,
                discover your favorite content & digital items – all in one
                place.
              </span>
              <div className="self-start md:self-auto lg:self-start">
                <div className="p-4 lg:p-6 flex flex-col lg:flex-row gap-4 lg:gap-0 text-xl font-semibold border border-1 border-[#666] rounded-xl bg-[#00000033]">
                  Coming soon on &nbsp;
                  <div className="flex">
                    <img
                      src="/images/home/android_logo.svg"
                      className="w-6"
                      alt="logo"
                    />
                    &nbsp;Android and&nbsp;
                    <img
                      src="/images/home/ios_logo.svg"
                      className="w-6"
                      alt="logo"
                    />
                    &nbsp;iOS
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full gap-6 lg:justify-start">
                <button
                  className="px-8 md:px-8 lg:px-8 h-12 text-[18px] text-black font-semibold bg-white hover:bg-[#CCCCCC] active:bg-[#AAAAAA] rounded-full whitespace-nowrap"
                  onClick={clickWaitlist}
                >
                  Join waitlist
                </button>
                <a href="https://twitter.com/townesquarexyz" target="_blank" rel="noreferrer">
                  <button className="px-8 md:px-8 lg:px-8 h-12 flex flex-row items-center justify-center text-[18px] text-white font-semibold  hover:bg-[#FFFFFF33] active:bg-[#FFFFFF66] border-2 border-white rounded-full whitespace-nowrap">
                    <span className="block">Follow us on</span>
                    <img src="/images/twitter-header.svg" alt="twitter_image" />
                    <span className="hidden pt-[2px] lg:block">Twitter</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[300px] relative">
              <img
                src="/images/home/glass.svg"
                alt="glass"
                className="absolute ease-in -right-2 -top-2"
                style={{
                  left: offset.left,
                  top: offset.top,
                }}
              />
              <div className="relative min-w-[316px] h-[650px] w-[300px]">
                <picture>
                  <source
                    srcSet="/images/home/index/layout_2x.webp"
                    type="image/webp"
                  />
                  <img srcSet="/images/home/index/layout_2x.webp" alt='layout' className="min-w-[316px]"/>
                </picture>
                <div className="hide-scrollbar absolute inset-0 mt-[114px] mx-[10px] overflow-x-hidden overflow-y-scroll z-10 h-[524px] w-[300px]">
                  <picture>
                    <source
                      srcSet="/images/home/index/content_2x.webp"
                      type="image/webp"
                    />
                    <img srcSet="/images/home/index/content_2x.webp" alt="content" className="w-full"/>
                  </picture>
                </div>
                <div className="absolute inset-0 mt-[545px] ml-[245px] mr-[10px] z-20">
                  <img src="/images/home/index/plus.svg" alt='layout' className="w-full"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
