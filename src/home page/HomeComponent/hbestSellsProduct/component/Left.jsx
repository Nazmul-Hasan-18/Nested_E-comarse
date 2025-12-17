import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Left = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="rounded-xl"
          src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-4.png"
          alt=""
        />
        <div className="px-9 absolute top-14">
          <h2 className="text-[22px] sm:text-[26px] md:text-4xl font-bold text-gray-700 ">
            Bring nature <br /> into your <br /> home
          </h2>
          <div className="text-[11px] sm:text-[12px] font-semibold flex items-center gap-2 text-white bg-[#29A56C] justify-center w-[110px] sm:w-[130px] py-2 rounded-sm mt-12 hover:bg-[#218b5c] duration-300">
            <p>Shop Now</p>
            <FaArrowRight className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
