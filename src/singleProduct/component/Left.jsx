import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineSwap } from "react-icons/ai";
import Category from "../../blog/blogComponent/product/productCategoryComponent/Category";

const Left = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/blogCategories.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const item = products.find((product) => product.id == id);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleCounts = () => {
    setCount(count - 1);
  };
  return (
    <div className="grid grid-cols-12 gap-10 container mx-auto px-25">
      <div className="col-span-4">
        <img
          className="h-120 border border-gray-200 rounded-xl"
          src={item?.image}
          alt=""
        />
      </div>
      <div className="col-span-5">
        <div className="flex flex-col justify-center mt-6">
          <p>Sell Off</p>
          <h2 className="text-4xl font-bold text-gray-700 mt-4">
            {item?.short_description}
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <div className="text-sm flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[13px] text-gray-400"> (32 reviews)</p>
          </div>
          <div >
            <h4 className="text-5xl font-bold text-[#29A56C] mt-5">
              38${" "}
              <span className=" mr-4 text-2xl font-semibold text-gray-400">
                52$
              </span>
            </h4>
          </div>
          <p className="mt-5 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus
            dolore impedit fuga eum eligendi.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm">
            <p className="font-bold text-gray-600">Size/Weight:</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <p className=" hover:bg-[#29A56C] px-3 py-2 hover:text-white rounded-sm  duration-500 cursor-pointer font-semibold">
                50kg
              </p>
              <p className=" hover:bg-[#29A56C] px-3 py-2 hover:text-white rounded-sm  duration-500 cursor-pointer font-semibold">
                60kg
              </p>
              <p className=" hover:bg-[#29A56C] px-3 py-2 hover:text-white rounded-sm  duration-500 cursor-pointer font-semibold">
                80kg
              </p>
              <p className=" hover:bg-[#29A56C] px-3 py-2 hover:text-white rounded-sm  duration-500 cursor-pointer font-semibold">
                100kg
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-5 border-2 border-[#29A56C] pl-7 pr-3 py-1 rounded-sm">
              <p className="text-lg font-semibold text-gray-500">{count}</p>
              <div className="flex flex-col gap-2 text-sm text-[#29A56C] ">
                <div onClick={handleCount} className="bg- cursor-pointer ">
                  <IoIosArrowUp />
                </div>
                <div onClick={handleCounts}>
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
            <div className="text-white bg-[#29A56C] px-7 flex gap-1 justify-center items-center py-[14px] rounded-sm  hover:bg-amber-400 duration-300">
              <div>
                <BsCart3 />
              </div>
              <p className="text-[13px] font-bold">Add To Card</p>
            </div>
            <div className="text-lg text-gray-500 border py-[14px] px-4 border-gray-300 rounded-sm duration-500 hover:text-white hover:bg-[#29A56C]">
              <FaRegHeart />
            </div>
            <div className="text-lg text-gray-500 border py-[14px] px-4 border-gray-300 rounded-sm duration-500 hover:text-white hover:bg-[#29A56C]">
              <AiOutlineSwap />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border">
        
      </div>
    </div>
  );
};

export default Left;
