import React from 'react';

const BestPrice = () => {
    const items =[
        {
            image:"https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg",
            name:"Best price & offers",
            author:"Orders $50 or more"
        },
        {
            image:"https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-2.svg",
            name:"Free delivery",
            author:"When you sign up"
        },
        {
            image:"https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg",
            name:"Great daily deal",
            author:"When you sign uP",
        },
        {
            image:"https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-4.svg",
            name:"Wide assortment",
            author:"Mega Discounts"
        },
        {
            image:"https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-5.svg",
            name:"Easy returns",
            author:"Within 30 days"
        }
    ]
    return (
        <div className='grid grid-cols-5 gap-6  container mx-auto px-16  py-12'>
            {
                items.map(item=>(
                    <div className='flex items-center gap-4 bg-gray-100 rounded-lg py-5 px-3 group'>
                        <img className='w-13 group-hover:-translate-y-1 duration-500' src={item.image} alt="" />
                        <div>
                            <h2 className='text-[17px] font-bold text-gray-700'>{item.name}</h2>
                            <p className='text-sm font-semibold text-gray-400'>{item.author}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default BestPrice;