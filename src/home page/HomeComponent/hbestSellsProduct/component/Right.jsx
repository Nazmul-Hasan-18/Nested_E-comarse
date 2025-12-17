import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { AiOutlineX } from "react-icons/ai";
 import { BsCart3 } from "react-icons/bs";
const Product = () => {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    fetch("bestsells.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <div>
        <div className="">
          <div className="grid grid-cols-4   gap-4 py-1">
            {Category.map((cat) => (
              <div
                key={cat.id}
                className="group  border border-gray-300 rounded-xl  px-3 py-5 hover:shadow-lg shadow-gray-300 duration-500 relative cursor-pointer"
              >
                <div className="">
                  <img className="mt-[-9px]" src={cat.image} alt={cat.title} />
                </div>

                <div className="text-left mt-[-9px]">
                  <p className="text-[13px] text-gray-500">{cat.tag}</p>
                  <p className="mt-1 leading-5 text-[15px] font-semibold">
                    {cat.title}
                  </p>

                  <div className="text-sm flex items-center gap-1 text-orange-300 mt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <p className="text-gray-900">(5.0)</p>
                  </div>

                  <p className="text-[12px] mt-1">By: {cat.name}</p>

                  <div className="flex justify-between items-center mt-2">
                    <h4 className="text-[#29A56C] font-semibold">
                      {cat.price}$
                      <span className="font-medium text-gray-300 text-sm ml-[2px] line-through">
                        55$
                      </span>
                    </h4>
                  </div>
                  <div className="w-full h-1 bg-gray-300 rounded-full mt-2">
                    <div className="w-[50%] h-1 bg-[#29A56C] rounded-full"></div>
                  </div>
                  <p className="text-[11px] mt-2">Sold:90/120</p>
                  <div className="text-white bg-[#29A56C] w-full text-sm flex gap-1 justify-center items-center py-3 rounded-md  hover:bg-amber-400 mt-4 duration-300">
                    <div>
                        <BsCart3 />
                    </div>
                    <p className="text-[13px] font-bold">Add To Card</p>
                  </div>
                </div>

                {/* 👇 Group hover effect */}
                <div className="flex items-center border  bg-white border-[#29A56C] rounded-sm   group-hover:-translate-y-80 w-[90px] absolute -translate-y-78 left-[82px] opacity-0 duration-500 group-hover:opacity-100">
                  <div className="text-lg text-[#29A56C] border-r px-[6px] py-[4px]">
                    <CiHeart />
                  </div>
                  <div className="text-lg text-[#29A56C] border-r px-1 py-[2px]">
                    <AiOutlineX />
                  </div>
                  <div className="text-lg text-[#29A56C] px-1 py-[2px]">
                    <CiRead />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
