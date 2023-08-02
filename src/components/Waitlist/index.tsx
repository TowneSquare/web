import React, { useEffect, useRef, useState } from 'react';
import EarlyAccess from '../EarlyAccess';
import axios from 'axios';

type Props = {
    isModel: boolean;
    onClose?: () => void;
};
const Waitlist: React.FC<Props> = ({ isModel, onClose }) => {  
    const [isComplete, setIsComplete] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const checkEmail = async () => {
        setError('');
        const apiUrl = `${process.env.REACT_APP_API_HOST}/early/signup`;
        await axios.post(apiUrl, {
            email
        })
        .then(response => {
            // console.log(response)
            if(response?.data.success) {
                setIsComplete(true);
                setEmail('');
                setError('');
                if(onClose) {
                    onClose();
                }
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

     const handleClose = () => {
        onClose?.()
        setEmail(' ')
    }

  return (
    <div className="w-8/12 py-20 bg-gray-500 border border-white rounded-md bg-opacity-40 backdrop-blur-2xl">
        {
            isModel ?
            <div className='absolute top-1 right-4'>
                <button
                    onClick={handleClose}
                    className="bg-transparent text-white text-[50px] leading-none p-1 rounded-full"
                >
                    <span className="font-thin">×</span>
                </button>
            </div>
            :
            null
        }
        <p className="text-[32px] text-center text-white font-Outfit font-bold">Be among the first to try out TowneSquare</p>
        <p className="text-[18px] text-center text-white font-Outfit pt-4">We’ll send you an invite to try out TowneSquare as soon as we’re ready.<br/>No spam, no junk mail or other mumbo-jumbo, pinky promise!</p>
        <div>
            <div className='flex justify-center space-x-6 pt-14'>
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
  );
};

export default Waitlist;
