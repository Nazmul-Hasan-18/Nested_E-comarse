
import { RiArrowDownSLine } from "react-icons/ri";

const TopHeader = () => {
    return (
        <div className='border-b border-gray-200'>
            <div className='flex justify-between items-center container mx-auto px-16 py-3'>
                <div className='text-[13px] '>
                    <a className='border-r  pr-4 border-gray-400 mr-4 text-gray-500 hover:text-black duration-300' href="#">About Us</a>
                    <a className='border-r  pr-4 border-gray-400 mr-4 text-gray-500 hover:text-black duration-300' href="#">My Acount</a>
                    <a className='border-r  pr-4 border-gray-400 mr-4 text-gray-500 hover:text-black duration-300' href="#">Wishlist</a>
                    <a className=' text-gray-500 hover:text-black duration-300' href="#">Order Traking</a>
                </div>
                <p className='text-[13px] text-gray-500 hover:text-black duration-300'>100% Secure delivery without contacting the courier Supper</p>
                <div className='flex '>
                   <p className='text-[13px] border-r  pr-4 border-gray-400 mr-4 text-gray-500 hover:text-black duration-300'>Need help? Call Us: <span className='text-[#29A56C]'>+ 1800 900</span></p>
                   <div className='relative group cursor-pointer'>
                        <div className='  border-r  pr-4 border-gray-400 mr-4 text-gray-500 hover:text-black duration-300 text-[13px] flex items-center gap-1'>
                          <p>English</p>
                          <RiArrowDownSLine />
                        </div>
                        <div className='shadow-md rounded-sm pl-4 pr-12 py-2   absolute z-20 top-6 bg-white group-hover:block duration-500 transition-all hidden'>
                            <div className='text-[12px] text-gray-500 flex items-center gap-2 mb-2'>
                              <img className='w-[15px]' src="/../public/img/—Pngtree—wavy french flag_13207567.png" alt="" />
                              <p>Francais</p>
                            </div>
                            <div className='text-[12px] text-gray-500 flex items-center gap-2 mb-2 '>
                                <img className='w-[15px]' src="/../public/img/garmany.png" alt="" />
                                <p>Garmany</p>
                            </div>
                            <div className='text-[12px] text-gray-500 flex items-center gap-2 '>
                                <img className='w-[15px]' src="/../public/img/usa.png" alt="" />
                                <p>United</p>
                           </div>
                        </div>
                   </div>
                   <div className='relative group'>
                    <div className='border-r  pr-4 border-gray-400 mr-4 text-gray-500 hover:text-black duration-300 text-[13px] flex items-center gap-1'>
                        <p>USD</p>
                        <RiArrowDownSLine />
                        <div className='shadow-md rounded-sm pl-4 pr-12 py-2   absolute top-6 z-10 bg-white group-hover:block duration-500 transition-all hidden'>
                            <div className='text-[12px] text-gray-500 flex items-center gap-2 '>
                              <img className='w-[15px]' src="/../public/img/—Pngtree—wavy french flag_13207567.png" alt="" />
                              <p>INR</p>
                            </div>
                            <div className='text-[12px] text-gray-500 flex items-center gap-2 mb-2 '>
                                <img className='w-[15px]' src="/../public/img/garmany.png" alt="" />
                                <p>MBP</p>
                            </div>
                            <div className='text-[12px] text-gray-500 flex items-center gap-2  '>
                                <img className='w-[15px]' src="/../public/img/usa.png" alt="" />
                                <p>EU</p>
                           </div>
                        </div>
                    </div>
                   </div>
                  
                </div>
            </div>
           
        </div>
    );
};

export default TopHeader;