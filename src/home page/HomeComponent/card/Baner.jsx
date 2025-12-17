import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <div
        className="
          flex flex-col md:flex-row items-center justify-between gap-6  container mx-auto px-4 sm:px-8 md:px-16  py-5
        "
      >
        {/* --------- Card 1 --------- */}
        <div className="group relative cursor-pointer w-full md:w-1/3">
          <img
            className="rounded-xl "
            src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-1.png"
            alt=""
          />
          <div className="absolute top-5 sm:mt-10 left-8 sm:left-10">
            <h3 className="text-2xl font-black text-gray-700 group-hover:-translate-y-1 duration-300 leading-snug">
              Everyday Fresh & <br /> Clean with Our <br /> Products
            </h3>
            <div className="text-[11px] sm:text-[12px] font-semibold flex items-center gap-2 text-white bg-[#29A56C] justify-center w-[110px] sm:w-[130px] py-2 rounded-sm mt-5 hover:bg-[#218b5c] duration-300">
              <p>Shop Now</p>
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>

        {/* --------- Card 2 --------- */}
        <div className="group relative cursor-pointer w-full md:w-1/3">
          <img
            className="rounded-xl  "
            src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-2.png"
            alt=""
          />
          <div className="absolute top-5 sm:mt-10 left-8 sm:left-10">
            <h3 className="text-2xl  font-black text-gray-700 group-hover:-translate-y-1 duration-300 leading-snug">
              Make your Breakfast <br /> Healthy and Easy
            </h3>
            <div className="text-[11px] sm:text-[12px] font-semibold flex items-center gap-2 text-white bg-[#29A56C] justify-center w-[110px] sm:w-[130px] py-2 rounded-sm mt-12 hover:bg-[#218b5c] duration-300">
              <p>Shop Now</p>
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>

        {/* --------- Card 3 --------- */}
        <div className="group relative cursor-pointer w-full md:w-1/3">
          <img
            className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-3.png"
            alt=""
          />
          <div className="absolute top-5 sm:top-13 left-8 sm:left-10">
            <h3 className="text-xl sm:text-2xl font-black text-gray-700 group-hover:-translate-y-1 duration-300 leading-snug">
              The best Organic <br /> Products Online
            </h3>
            <div className="text-[11px] sm:text-[12px] font-semibold flex items-center gap-2 text-white bg-[#29A56C] justify-center w-[110px] sm:w-[130px] py-2 rounded-sm mt-12 hover:bg-[#218b5c] duration-300">
              <p>Shop Now</p>
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
