import Marquee from "react-fast-marquee";
import Waitlist from "../Waitlist";
import { BsGithub, BsGit } from "react-icons/bs";

function EarlyAccess() {
  return (
    <div
      id="earlyAccessDiv"
      className="early-access component"
      data-component="Early"
    >
      <div className="z-50 bg-black">
        <div className="relative max-md:hidden">
          <img
            src="/images/early_left.svg"
            alt="left"
            className="absolute top-[0px] z-0"
          />
        </div>
        <div className="justify-center lg:flex">
          <p className="text-[29px] max-md:text-5xl max-sm:text-[27px] pt-32 pb-24 text-center text-white font-Outfit font-bold">
            Backed by the best
          </p>
        </div>
        <div className="flex flex-col h-[22vh] items-center md:flex-row justify-evenly pb-12 lg:space-x-24 max-lg:justify-between max-lg:px-12">
          <img
            className="max-sm:w-[156px]"
            src="/images/bixin.svg"
            alt="bixin_image"
          />
          <img
            className="max-sm:w-[156px]"
            src="/images/aptos.svg"
            alt="aptos_image"
          />
        </div>
        <div className="w-full pb-64 lg:flex">
          <Marquee autoFill={true} style={{ overflowY: "hidden" }}>
            <p className="z-10 px-[32px] py-[80px] md:py-24 font-bold text-center text-white font-Outfit md:text-[77px] leading-[48px] md:leading-normal text-[48px]">
              Let's connect
            </p>
          </Marquee>
        </div>
        <div className="relative h-[1000px] md:h-[1200px] lg:h-[auto] overflow-hidden lg:overflow-visible">
          <img
            className="w-full absolute mt-0 lg:mt-[-200px]"
            src="/images/line.svg"
            alt="line_image"
          />
          <img
            className="hidden lg:block w-full"
            src="/images/bottom.svg"
            alt="bottom_image"
          />
          <img
            className="hidden md:block lg:hidden w-full"
            src="/images/early_access/bottom_tablet.svg"
            alt="bottom_image"
          />
          <img
            className="md:hidden w-full"
            src="/images/early_access/bottom_mobile.svg"
            alt="bottom_image"
          />

          <div className="absolute flex flex-col items-center justify-center w-full bottom-[80px]">
            <Waitlist isModel={false} />
            <div className="text-center w-full mt-[60px] md:mt-[112px] lg:mt-[40px]">
              <p className="text-[20px] text-center text-white font-Outfit font-bold w-[60%] md:w-full mx-auto">
                Find out more about TowneSquare
              </p>
              <div className="flex justify-center pt-6 space-x-8">
                <a
                  href="https://twitter.com/TowneSquarexyz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/twitter.svg" alt="twitter_image" />
                </a>
                <div className="w-6 md:w-8 h-6 md:h-8">
                  <a
                    href="https://github.com/TowneSquare"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub
                      size="auto"
                      style={{
                        color: "F2F0FF",
                      }}
                    />
                  </a>
                </div>
                <div className="w-6 md:w-8 h-6 md:h-8">
                  <a
                    href="https://docs.townesquare.xyz/townesquare-whitepaper/"
                    target="_blank"
                  >
                    <BsGit
                      size="auto"
                      style={{
                        color: "#F2F0FF",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarlyAccess;
