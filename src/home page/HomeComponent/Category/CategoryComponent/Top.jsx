import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Top = () => {
  return (
    <div className="px-3 md:px-0">
      {/* --- Top Bar --- */}
      <div className="flex flex-wrap justify-between items-center gap-4 md:gap-0">
        {/* Left side (Title + Categories) */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          <h2 className="text-[22px] sm:text-[26px] md:text-[33px] font-bold text-gray-700">
            Featured Categories
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 md:gap-6">
            <p className="font-semibold text-gray-700 hover:text-[#29A56C] hover:-translate-y-1 duration-300 cursor-pointer">
              Cake & Milk
            </p>
            <p className="font-semibold text-gray-700 hover:text-[#29A56C] hover:-translate-y-1 duration-300 cursor-pointer">
              Coffes & Teas
            </p>
            <p className="font-semibold text-gray-700 hover:text-[#29A56C] hover:-translate-y-1 duration-300 cursor-pointer">
              Pet Foods
            </p>
            <p className="font-semibold text-gray-700 hover:text-[#29A56C] hover:-translate-y-1 duration-300 cursor-pointer">
              Vegetables
            </p>
          </div>
        </div>

        {/* Right side (Arrows) */}
        <div className="flex items-center gap-3">
          <button className="bg-gray-200 hover:bg-[#29A56C] hover:text-white p-2 sm:p-3 rounded-full duration-300">
            <IoIosArrowBack className="text-lg sm:text-xl" />
          </button>
          <button className="bg-gray-200 hover:bg-[#29A56C] hover:text-white p-2 sm:p-3 rounded-full duration-300">
            <IoIosArrowForward className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;
