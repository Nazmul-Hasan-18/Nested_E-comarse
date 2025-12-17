import React, { useEffect, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { AiOutlineX } from "react-icons/ai";

const Product = ({CategoriesId}) => {
  const [Location, setLocation] = useState(false);
  const [cat, setCat] = useState(false);
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    fetch("blogCategories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);


  const handleClick = () => {
    setLocation(!Location);
  };
  const handleCat = () => {
    setCat(!cat);
  };
 const blogId =CategoriesId ? Category.filter(cate=>cate.id == CategoriesId) : Category
  return (
      <div >
        <div className="flex justify-between pb-5">
          <p className="text-sm text-gray-500">We found 29 items for you!</p>
          <div className="flex items-center gap-4">
            <div className="bg- relative">
              <div
                className="  cursor-pointer flex items-center gap-2 text-gray-500 border border-gray-300 px-3 py-[6px] rounded-md "
                onClick={handleClick}
              >
                <div>
                  <BsFillGridFill />
                </div>
                <p className="text-[13px]">Show : 50 </p>
                <div>
                  <MdKeyboardArrowDown />
                </div>
                <div className="absolute top-10 left-0">
                  {Location && (
                    <div className="text-sm text-gray-400 shadow-gray-200 shadow-md  py-2 px-3 w-35 flex flex-col gap-1 bg-white absolute z-10">
                      <a href="#">30</a>
                      <a href="#">30</a>
                      <a href="#">30</a>
                      <a href="#">30</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg- relative">
              <div
                className=" cursor-pointer flex items-center gap-2 text-gray-500 border border-gray-300 px-3 py-[6px] rounded-md"
                onClick={handleCat}
              >
                <div>
                  <BsFillGridFill />
                </div>
                <p className="text-[13px]"> Sort by: Featured </p>
                <div>
                  <MdKeyboardArrowDown />
                </div>
                <div className="absolute top-10 left-0">
                  {cat && (
                    <div className="text-sm text-gray-400 shadow-gray-200 shadow-md  py-2 px-3 w-35 flex flex-col gap-1 bg-white absolute z-11">
                      <a href="#">30</a>
                      <a href="#">30</a>
                      <a href="#">30</a>
                      <a href="#">30</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="">
              <div className="grid grid-cols-5 gap-5 mt-2">
                {blogId.map((cat) => (
                  <div
                    key={cat.id}
                    className="group border border-gray-300 rounded-xl w-48 px-3 py-5 hover:shadow-lg shadow-gray-300 duration-500 relative cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        className="w-[140px]"
                        src={cat.image}
                        alt={cat.title}
                      />
                    </div>

                    <div className="text-left">
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

                      <div className="flex justify-between items-center mt-5">
                        <h4 className="text-[#29A56C] font-semibold">
                          {cat.price}$
                          <span className="font-medium text-gray-300 text-sm ml-[2px] line-through">
                            55$
                          </span>
                        </h4>

                        <div className="flex items-center gap-1 bg-[#29A56C] px-3 py-[6px] rounded-sm hover:font-semibold text-white hover:-translate-y-1 hover:bg-[#21905c] duration-300 cursor-pointer">
                          <LuShoppingCart />
                          <a className="text-[14px]" href="#">
                            Add
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* 👇 Group hover effect */}
                    <div className="flex items-center border bg-white border-[#29A56C] rounded-sm  bg- group-hover:-translate-y-60 w-[90px] absolute -translate-y-58 left-[52px] opacity-0 duration-500 group-hover:opacity-100">
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
      </div>
      
    
  );
};

export default Product;
