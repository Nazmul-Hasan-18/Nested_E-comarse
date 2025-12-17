import React from 'react';

const Top = () => {
    const data =[
        {
            name:"Top Selling"
        },
        {
            name:"Trending Productsg"
        },
        {
            name:"Recently added"
        },
        {
            name:"Top Rated"
        }
    ]
    return (
        <div className='container px-16 mx-auto mt-30 grid grid-cols-4 gap-8'>
         {
              data.map(data=>(
                <div className=' border-b border-gray-300 py-5'>
                    <h2 className='text-[24px] font-bold text-gray-600 mb-2'>{data.name}</h2>
                    <div className='h-[2px] w-30 bg-[#65bc94]'>

                    </div>
                </div>
              ))
         }
        </div>
    );
};

export default Top;