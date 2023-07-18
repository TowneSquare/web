import axios from 'axios';
import React, { useState } from 'react'
import Marquee from "react-fast-marquee";

function EarlyAccess() {
  const [isComplete, setIsComplete] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkEmail = async () => {
    setError('');
    const apiUrl = `${process.env.REACT_APP_API_HOST}/early/signup`;
    await axios.post(apiUrl, {
      email
    })
    .then(response => {
      console.log(response)
      if(response?.data.success) {
        setIsComplete(true);
        setEmail('');
        setError('');
      } else {
        setIsComplete(false);
        setError(response.data.error);
      }
    })
    .catch(function(error) {
      setError(error.message);
    });
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsComplete(false);
  };

  return (
    <>
      <div className='bg-black'>
        <div className='relative max-md:hidden'>
          <img src='/images/early_left.svg' alt="left" className='absolute top-[0px] z-0' />
        </div>
        <div className="justify-center lg:flex">
          <p className="text-[29px] max-md:text-5xl max-sm:text-[27px] pt-32 pb-24 text-center text-white font-Outfit font-bold">Backed by the best</p>
        </div>
        <div className='justify-center flex lg:space-x-24 pb-12 max-lg:justify-between max-lg:px-12'>
          <img className='max-sm:w-[156px]' src="/images/bixin.svg" alt="bixin_image"/>
          <img className='max-sm:w-[156px]' src="/images/aptos.svg" alt="aptos_image"/>
        </div>
        <div className='lg:flex w-full pb-64'>
          <Marquee autoFill={true}>
            <p className='text-center text-white font-Outfit font-bold text-7xl max-sm:text-5xl pt-24 z-10 px-24'>Let's connect</p>
          </Marquee>
        </div>
        <div className='relative'>
          <img className='w-full absolute mt-[-200px] max-2xl:mt-[-140px] max-lg:mt-[-100px] max-md:mt-[-50px]' src="/images/line.svg" alt="line_image"/>
          <img className='w-full' src="/images/bottom.svg" alt="bottom_image"/>
          <div className="absolute inset-0 flex items-center justify-center w-full bottom-[70%]">
            <div className="bg-gray-500 bg-opacity-40 backdrop-blur-2xl py-20 border border-white w-8/12 rounded-md">
              <p className="text-[32px] text-center text-white font-Outfit font-bold">Be among the first to try out Townesquare</p>
              <p className="text-[18px] text-center text-white font-Outfit pt-4">We’ll send you an invite to try out TowneSquare as soon as we’re ready.<br/>No spam, no junk mail or other mumbo-jumbo, pinky promise!</p>
              <div>
              <div className='flex space-x-6 justify-center pt-14'>
                <div className='w-6/12 h-24'>
                  <input value={email} className="placeholder-shown:border-gray-500 border-[#CCCCCC] border rounded-full bg-black px-5 w-full text-white text-[16px] py-1 h-12" placeholder='Your email' onChange={handleEmailChange} />
                  {
                    error ?
                      <p className='text-[#FF6069] font-Outfit text-lg pt-3'>{error}</p>
                    :
                    isComplete ?
                      <p className='text-[#32D583] font-Outfit text-lg pt-3'>Thanks for signing up, we won't let you down!</p>
                    :
                    null
                  }
                </div>
                <button className="rounded-full bg-[#9264F8] hover:bg-[#B882FF] active:bg-[#6646AE] active:border-[#6646AE] text-[18px] font-Outfit text-white py-2 px-6 h-12 focus:border-white-600 focus-visible:border-white-600" 
                  onClick={checkEmail}
                >
                  Join waitlist
                </button>
              </div>
              </div>
            </div>
          </div>
          <div className='absolute text-center w-full bottom-[12%]'>
            <p className="text-[20px] text-center text-white font-Outfit font-bold">Find out more about Townesquare</p>
            <div className='flex justify-center pt-6 space-x-8'>
              <a href='https://twitter.com/TowneSquarexyz' target="_blank" rel="noreferrer">
                <img src="/images/twitter.svg" alt="twitter_image"/>
              </a>
              <a href='https://github.com/TowneSquare' target="_blank" rel="noreferrer">
                <img src="/images/github.svg" alt="github_image"/>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default EarlyAccess
