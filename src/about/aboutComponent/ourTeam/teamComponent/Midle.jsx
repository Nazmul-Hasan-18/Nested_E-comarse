import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";


const Midle = () => {
    return (
        <div>
            <div className='flex flex-col items-center relative'>
                <div>
                    <img  className='w-250 rounded-xl' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-6.png" alt="" />
                </div>
                <div className=' flex flex-col items-center justify-center w-77 bg-white py-8 rounded-2xl shadow-lg shadow-gray-200 absolute top-75 hover:-translate-y-2 duration-200'>
                    <h2 className='text-2xl font-bold text-gray-700'>H. Merinda</h2>
                    <p className='text-lg font-semibold text-gray-400 mt-1'>CEO & Co-Founder</p>
                    <div className='flex items-center gap-4 text-[#29A56C] mt-5  '>
                        <FaFacebookF />
                        <FaTwitter />
                        <IoLogoInstagram />
                        <IoLogoYoutube />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Midle;