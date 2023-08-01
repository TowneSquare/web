import { useState } from "react";
import {
  Reveal,
  Tween,
  SplitChars,
  ScrollTrigger,
  SplitWords,
} from "react-gsap";

let percentage = 0;

function Vision() {
  // const [first, setFirst] = useState<undefined | number>(0);
  // const [second, setSecond] = useState<undefined | number>(0);
  const transform = () => {
    const sticky = document.querySelector(".sticky_2");
    const offSetTop = sticky?.parentElement?.offsetTop;
    const scrollSection = sticky?.querySelector(".scroll_section");
    let value = 0;

    if (offSetTop !== undefined) {
      value = ((window.scrollY - offSetTop) / window.innerHeight) * 100;
      percentage = value < 0 ? 0 : value > 400 ? 400 : value;
    }
    // const intro = document.querySelector(".intro")?.parentElement?.offsetWidth;
    // if (intro !== undefined) {
    //   setFirst(intro * 2);
    // }
    scrollSection?.setAttribute(
      "style",
      `transform:translate3d(${-percentage}vw, 0, 0)`
    );
  };

  window.addEventListener("scroll", (e) => {
    transform();
  });

  return (
    <div id="visionDiv" className="h-full bg-black bg-right-bottom bg-no-repeat bg-contain scroll-smooth lg:bg-vision-bg">
      <div className="h-[550vh]">
        <ScrollTrigger start="800px" end="900px" scrub={0.5}>
          <div className="sticky sticky_2 overflow-hidden top-0 h-[100vh]">
            <Tween
              from={{
                opacity: 1,
              }}
              to={{
                opacity: 0,
              }}
            >
              <div className="absolute w-screen h-full">
                <p className="absolute hidden font-bold opacity-50 lg:top-20 lg:left-1/2 lg:inline-block">
                  ~ equal access to financial service
                </p>
                <p className="absolute hidden font-bold opacity-25 lg:left-[40%] lg:top-1/4 lg:inline-block">
                  ~ seamless networking
                </p>
                <p className="absolute  hidden font-bold opacity-25 lg:top-1/4 lg:right-[13%] lg:inline-block">
                  ~ protect personal data
                </p>
                <p className="absolute hidden font-bold opacity-25 left-20 whitespace-nowrap md:top-32 md:inline-block md:text-2xl lg:font-medium lg:font-mediumlg:inline-block md:left-[63%] lg:top-[85%] lg:left-[21%]">
                  ~ manage personal data
                </p>
                <p className="absolute font-bold opacity-50 top-16 lg:left-[5%] lg:top-1/4 md:top-[25%] md:left-[6%] md:text-2xl lg:font-medium  ">
                  ~ full control
                </p>
                <p className="absolute font-bold opacity-20 top-32 right-px md:top-[33%] lg:top-[69%] lg:left-[48%] md:text-2xl lg:font-medium">
                  = P2P payment
                </p>
                <p className="absolute font-bold opacity-50 bottom-40 focus-visible:opacity-100 right-4 lg:left-[3%] md:left-[61%] md:bottom-[31%] md:text-2xl lg:font-medium lg:top-[47%]">
                  ~ financial freedom
                </p>
                <p className="absolute font-bold opacity-25 -left-1 bottom-20 lg:top-[69%] whitespace-nowrap lg:left-[80%] md:bottom-[35%] md:text-2xl lg:font-medium">
                  =Identity freedom
                </p>
                <p className="absolute font-bold opacity-20 whitespace-nowrap -right-2 bottom-6 lg:bottom-[20%] md:bottom-[15%] md:left-[32%]  md:text-2xl lg:left-[7%]">
                  =Open finance
                </p>
              </div>
            </Tween>

            <div className="relative scroll_section h-[100%] w-[600vw] will-change-transform flex">
              <div className="bg-no-repeat bg-cover bg-L3">
                <div className="relative flex items-center justify-center w-screen h-screen text-white bg-black left-100 lg:bg-transparent font-Outfit">
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center intro">
                      <p className="md:text-[48px] text-[40px] text-center font-Outfit font-medium ">
                        We want to put the power of Web3 in
                      </p>
                      <p className="md:text-[48px] text-[40px] text-center font-Outfit font-medium ">
                        the hands of billions, so we created
                      </p>
                      <p className="md:text-[48px] text-[40px] text-center font-Outfit font-medium ">
                        {" "}
                        TowneSquare
                      </p>
                      <img
                        alt="signature"
                        className="transition ease-in delay-1000 bottom-52"
                        src="/images/signature.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="z-[50] bg-no-repeat bg-cover bg-L3" data-component="Vision">
                <div className="flex items-center justify-center w-screen h-screen envision">
                  <div className="text-center">
                    <p className="text-[32px] text-center text-white">
                      Envision a future where everyone has
                    </p>
                    <h1  className="md:text-[48px] text-[40px] font-Outfit font-medium">
                      finance, informational, and identity freedom
                    </h1>
                    {/* <Reveal repeat>
                      <Tween
                        from={{ color: "#FFF" }}
                        to={{ color: "#FFF" }}
                        duration={4}
                        stagger={0.2}
                      >
                        <SplitChars
                          wrapper={
                            <h1
                              className="md:text-[48px] font-Outfit font-medium"
                              style={{ display: "inline-block" }}
                            />
                          }
                        >
                          finance, informational ,and identity freedom
                        </SplitChars>
                      </Tween>
                    </Reveal> */}
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat bg-cover bg-L5" data-component="Vision">
                <div className="flex flex-col items-center justify-center w-screen h-screen px-2 text-white financial z-100 font-Outfit lg:flex-row md:flex-row">
                  <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                    <img
                      className="w-full"
                      src="/images/financial_freedom.svg"
                      alt="financial_freedom"
                    />
                  </div>
                  <div>
                    <p className="py-2 font-light">With TowneSquare you get</p>
                    <div className="py-4">
                      <h1 className="md:text-[40px] text-[30px] font-bold ">Financial freedom</h1>
                      <img
                        src="/images/financial_img.svg"
                        alt="financial_image"
                      />
                    </div>
                    <p className="font-normal text-[18px] leading-[30px] md:leading-[34px] md:text-[22px]">
                      Don't like centralized institutions or other third{" "}
                      <p>parties mess with your finance? Neither do we</p>
                      <p> Liberate yourself and seize limitless financial</p>
                      <p>opportunities with TowneSquare.</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat bg-cover bg-L6" data-component="Vision">
                <div className="flex flex-col items-center justify-center w-screen h-screen px-2 text-white font-Outfit lg:flex-row md:flex-row">
                  <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                    <img
                      className="w-full"
                      src="/images/informational_freedom.svg"
                      alt="financial_freedom"
                    />
                  </div>
                  <div>
                    <p className="py-2 font-light">With TowneSquare you get</p>
                    <div className="py-4">
                      <h1 className="md:text-[40px] text-[30px] font-bold ">Informational freedom</h1>
                      <img
                        src="/images/financial_img.svg"
                        alt="financial_image"
                      />
                    </div>
                    <p className="font-normal text-[18px] leading-[30px] md:leading-[34px]  md:text-[22px]">
                      Ignite the flow of information and ideas{" "}
                      <p>in a public town square, governed by</p>
                      <p> user-defined rules, liberated from the </p>
                      <p>grasp of centralized data managers.</p>
                      <p>Explore, share and discover without</p>
                      <p>Limitation</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat bg-cover bg-L7" data-component="Vision">
                <div className="flex flex-col items-center justify-center w-screen h-screen px-2 text-white font-Outfit lg:flex-row md:flex-row">
                   <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                    <img
                      className="w-full"
                      src="/images/Identity_freedom.svg"
                      alt="financial_freedom"
                    />
                  </div>
                  <div>
                    <p className="py-2 font-light">With TowneSquare you get</p>
                    <div className="py-4">
                      <h1 className="md:text-[40px] text-[30px] font-bold">Identity freedom</h1>
                      <img
                        src="/images/financial_img.svg"
                        alt="financial_image"
                      />
                    </div>
                    <p className="font-normal text-[18px] leading-[30px] md:leading-[34px] md:text-[22px]">
                      Embrace the power to shape and{" "}
                      <p>cultivate your unique identity and </p>{" "}
                      <p> persona. Own your verifable history </p>{" "}
                      <p> records, securely stored on decentralized</p>
                      <p>ledgers, empowering you to define and </p>{" "}
                      <p> express yourself authentically.</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Vision;