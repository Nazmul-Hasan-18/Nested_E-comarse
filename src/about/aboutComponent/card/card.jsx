
 
 const card = () => {
    return (
        <div className='container mx-auto px-36 py-5'>
            <div className='flex flex-col items-center gap-2'>
                <h2 className='text-4xl font-semibold text-gray-700 text-center'>What We Provide?</h2>
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/wave.png" alt="" />
            </div>
            <div className=' grid grid-cols-3 gap-6 py-13'>   
                <div className='border border-gray-200 rounded-xl hover:shadow-lg shadow-gray-200 duration-300 flex flex-col items-center justify-center py-15 '>
                    <img className='w-25 ' src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg" alt="" />
                    <h3 className='text-2xl font-semibold text-gray-600 mt-7'>Best Prices & Offers</h3>
                    <p className='text-[16px] leading-5 mt-5 px-7 text-center text-gray-500 mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a className='text-white bg-[#29A56C] px-4 py-2 rounded-sm hover:-translate-y-1 duration-300 text-sm' href="#">Read More</a>
                </div>
                <div className='border border-gray-200 rounded-xl hover:shadow-lg shadow-gray-200 duration-300 flex flex-col items-center justify-center py-10 '>
                    <img className='w-25 ' src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-2.svg" alt="" />
                    <h3 className='text-2xl font-semibold text-gray-600 mt-7'>Wide Assortment</h3>
                    <p className='text-[16px] leading-5 mt-5 px-7 text-center text-gray-500 mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a className='text-white bg-[#29A56C] px-4 py-2 rounded-sm hover:-translate-y-1 duration-300 text-sm' href="#">Read More</a>
                </div>
                <div className='border border-gray-200 rounded-xl hover:shadow-lg shadow-gray-200 duration-300 flex flex-col items-center justify-center py-10 '>
                    <img className='w-25 ' src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg" alt="" />
                    <h3 className='text-2xl font-semibold text-gray-600 mt-7'>Free Delivery</h3>
                    <p className='text-[16px] leading-5 mt-5 px-7 text-center text-gray-500 mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a className='text-white bg-[#29A56C] px-4 py-2 rounded-sm hover:-translate-y-1 duration-300 text-sm' href="#">Read More</a>
                </div>
                <div className='border border-gray-200 rounded-xl hover:shadow-lg shadow-gray-200 duration-300 flex flex-col items-center justify-center py-10 '>
                    <img className='w-25 ' src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-4.svg" alt="" />
                    <h3 className='text-2xl font-semibold text-gray-600 mt-7'>Easy Returns</h3>
                    <p className='text-[16px] leading-5 mt-5 px-7 text-center text-gray-500 mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a className='text-white bg-[#29A56C] px-4 py-2 rounded-sm hover:-translate-y-1 duration-300 text-sm' href="#">Read More</a>
                </div>
                <div className='border border-gray-200 rounded-xl hover:shadow-lg shadow-gray-200 duration-300 flex flex-col items-center justify-center py-10 '>
                    <img className='w-25 ' src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-5.svg" alt="" />
                    <h3 className='text-2xl font-semibold text-gray-600 mt-7'>100% Satisfaction</h3>
                    <p className='text-[16px] leading-5 mt-5 px-7 text-center text-gray-500 mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a className='text-white bg-[#29A56C] px-4 py-2 rounded-sm hover:-translate-y-1 duration-300 text-sm' href="#">Read More</a>
                </div>
                <div className='border border-gray-200 rounded-xl hover:shadow-lg shadow-gray-200 duration-300 flex flex-col items-center justify-center py-15 '>
                    <img className='w-25 ' src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-6.svg" alt="" />
                    <h3 className='text-2xl font-semibold text-gray-600 mt-7'>Great Daily Deal</h3>
                    <p className='text-[16px] leading-5 mt-5 px-7 text-center text-gray-500 mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a className='text-white bg-[#29A56C] px-4 py-2 rounded-sm hover:-translate-y-1 duration-300 text-sm' href="#">Read More</a>
                </div>
            </div>
        </div>
    );
 };
 
 export default card;