import React from "react";
import { BsGithub } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


export const Footer = (props: any) => {
  return (
    <footer  className="w-full z-50 pt-8 md:h-[279px] bg-[#1D1431] flex flex-col justify-between pb-4">
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="grid grid-cols-6 pb-12 max-md:grid-cols-1 max-md:px-12">
          <div></div>
          <div>
            <div className="pb-2 text-sm font-semibold text-white font-Outfit">Follow us</div>
            <div className="flex">
              <a className="items-center justify-center pr-3 mt-1 mr-3"href="https://twitter.com/TowneSquarexyz">
                {/* <BsTwitter
                  size={34}
                  style={{
                    color: "#F2F0FF",
                    paddingRight: "12px",
                    marginRight: "12px",
                  }}
                /> */}
                <img src="/images/sm-twitter.svg" alt="twitter_image"/>
              </a>
              <a href="https://github.com/TowneSquare">
                <BsGithub
                  size={34}
                  style={{
                    color: "#F2F0FF",
                    paddingRight: "12px",
                    marginRight: "12px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:px-12 ">
          <div className="block max-md:hidden">
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-sm font-bold text-white font-Outfit">Docs</div>
            <div className="text-[#CCCCCC] text-sm font-Outfit flex flex-col space-y-2">
              <a href="https://github.com/TowneSquare" target="_blank">GitHub</a>
              <a href="https://docs.townesquare.xyz/townesquare-whitepaper/" target="_blank">Gitbook</a>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-sm font-bold text-white font-Outfit">Legal</div>
            <div className="text-[#CCCCCC] text-sm font-Outfit flex flex-col space-y-2">
              <Link to="/TermsOfService">Terms of Service</Link>
              <Link to="/">Legal</Link>
              {/* <a href="/privacypolicy" target="_blank">Privacy Policy</a> */}
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-sm font-bold text-white font-Outfit">Community</div> 
            <div className="text-[#CCCCCC] text-sm font-Outfit flex flex-col space-y-2">
              <a href="https://twitter.com/TowneSquarexyz" target="_blank">Twitter</a>
              <a href="https://discord.gg/yMRmqFzrDW" target="_blank">Discord</a>
              <a href="https://medium.com/" target="_blank">Medium</a>
              <a href="https://telegram.org/" target="_blank">Telegram</a>
            </div>
          </div>
        </div>
      </div> 
      <div className="grid grid-cols-12 max-md:grid-cols-1 max-md:px-12 max-md:py-12">
        <div></div>
        <div className="text-[#CCCCCC] text-sm font-Outfit col-span-11">Copyright © 2023 TowneSquare. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer
