import React from 'react';

const Bottom = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className=' relative flex flex-col items-center'>
                <img className=' rounded-3xl' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-9.png" alt="" />
                <div className='bg-[#586F64]  rounded-3xl absolute top-0 w-full h-85 opacity-70 flex flex-col justify-center'>
                    <div className='grid grid-cols-5 gap-5'>
                        <div className='text-center opacity-200'>
                            <h2 className='text-6xl text-white font-bold'>25+</h2>
                            <h4 className='text-2xl font-semibold text-white'>Glorious years</h4>
                        </div>
                        <div className='text-center opacity-200'>
                            <h2 className='text-6xl text-white font-bold'>89+</h2>
                            <h4 className='text-2xl font-semibold text-white'>Happy clients</h4>
                        </div>
                        <div className='text-center opacity-200'>
                            <h2 className='text-6xl text-white font-bold'>55+</h2>
                            <h4 className='text-2xl font-semibold text-white'>Projects complete</h4>
                        </div>
                        <div className='text-center opacity-200'>
                            <h2 className='text-6xl text-white font-bold'>61+</h2>
                            <h4 className='text-2xl font-semibold text-white'>Team advisor</h4>
                        </div>
                        <div className='text-center opacity-200'>
                            <h2 className='text-6xl text-white font-bold'>52+</h2>
                            <h4 className='text-2xl font-semibold text-white'>Products Sale</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottom;