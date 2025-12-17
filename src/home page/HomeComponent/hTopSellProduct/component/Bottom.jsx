import React from "react";
import useCustomHook from "../../../../shared/useCustomHook";
import { FaStar } from "react-icons/fa6"; 
const Bottom = () => {
  const { items } = useCustomHook("bestSell.json");
  return (
    <div className="container mx-auto px-16 grid grid-cols-4 gap-8 py-8">
      {items.map((item) => (
        <div>
          <div className="flex items-center gap-4 hover:-translate-y-2 duration-500">
            <img className="w-24 rounded-lg " src={item.image} alt="" />
            <div className=" pr-2">
              <h3 className="font-semibold leading-5 cursor-pointer hover:text-[#29A56C] duration-300 ">{item.description}</h3>
              <div className="text-[12px] flex items-center  text-yellow-500 mt-">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-gray-400">(5.0)</p>
              </div>
              <div className="flex items-center mt-1 ">
                <p className="text-[#29A56C] font-semibold mt-1">{item.finalPrice} <span className="line-through text-sm ml-2 text-gray-500">{item.price}</span></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bottom;
