import React from 'react';
import { GrSend } from "react-icons/gr";



const Subscribe = () => {
    return (
        <div>
            <div className='container mx-auto px-16 pt-20'>
                <div className='relative'>
                    <img className='rounded-3xl h-100' src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-10.png" alt="" />
                      <div className=' absolute top-0 right-0'>
                        <img className='w-142' src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-13.png" alt="" />
                    </div>
                    <div className='absolute top-22 left-16'>
                        <h2 className='text-[38px] font-bold leading-12 text-gray-700'>Stay home & get your daily <br /> needs from our shop </h2>
                        <p className='text-gray-500 mt-4 font-semibold'> Start You'r Daily Shopping with <span className='text-[#29A56C]'>Nest Mart</span></p>
                        <div className='  w-119 mt-9 flex items-center text-gray-400 gap-5 px-5 rounded-full bg-white '>
                            <div className=' text-lg'>
                                <GrSend />
                            </div>
                            <input className='outline-none border-none  pr-7' type="email" placeholder='Your email address' />
                            <a className='font-bold bg-[#29A56C] px-11 py-4 rounded-full text-white ' href="#">Subscribe</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;