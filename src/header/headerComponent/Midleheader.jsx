
import { RiArrowDownSLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { useState } from "react";





const HeaderMidle = () => {
  const [down, setDown] = useState(false);
  const click = () => {
    setDown(!down);
  };

  const [Location, setLocation] = useState(false);
  const handleClick = () => {
    setLocation(!Location);
  };
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto px-16 flex items-center justify-between py-5 ">
        <div className="flex items-center gap-18">
          <div>
            <img className="w-44" src="/public/img/Logo.svg" alt="" />
          </div>
          <div className="flex items-center gap-4 border border-gray-400 rounded-sm py-[10px] px-4">
            <div
              className="flex items-center gap-3 text-sm cursor-pointer relative z-10 border-r border-gray-400 pr-3"
              onClick={click}
            >
              <p className="font-semibold text-gray-500"><a href="#">All Categories</a></p>
              <RiArrowDownSLine />
              <div className=" border-gray-200 rounded-sm border absolute top-10 bg-white">
                {down && (
                  <ul className="text-[13px] text-gray-500 w-50 px-2 py-3">
                    <li className="bg-gray-200 px-2 py-2 runded-sm">
                      <a href="#"></a>All Categories
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200">
                      <a href="#"></a>Milk and Dairies
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200">
                      <a href="#"></a>Wines & Alcohol
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200">
                      <a href="#"></a>Clothing & Beauty
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200 ">
                      <a href="#"></a>PetFoods & Toy
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200 ">
                      <a href="#"></a>PetFoods & Toy
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="flex items-center gap-35">
              <input
                className="outline-none text-sm"
                type="text"
                placeholder="Search for items..."
              />
              <div className="text-2xl text-gray-500">
                <IoSearchOutline />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="flex items-center gap-2 border border-gray-200  py-2 cursor-pointer px-2 rounded-sm shadow-md shadow-gray-100 relative z-10 hover:-translate-y-1 duration-500"
              onClick={handleClick}
            >
              <div className="text-xl text-gray-500">
                <TiLocationOutline />
              </div>
              <p className="text-[14px] text-[#29A56C]">Your Location</p>
              <div className="text-gray-500">
                <RiArrowDownSLine />
              </div>
              <div className=" absolute top-10">
                {Location && (
                  <ul className="text-[13px] text-gray-500 w-55 px-2 py-3 border bg-white border-gray-100 rounded-md">
                    <li className="bg-gray-200 px-2 py-2 runded-sm">
                      <a href="#"></a>Rampura,Dhaka
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200">
                      <a href="#"></a>Khilkhet,Dhaka
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200">
                      <a href="#"></a>Sirajganj,Raiganj
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200">
                      <a href="#"></a>Mohakhali,Dhaka
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200 ">
                      <a href="#"></a>Gazipu,Dhaka
                    </li>
                    <li className=" px-2 py-2 hover:bg-[#29A56C] duration-200 ">
                      <a href="#"></a>Uttara Dhaka
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="text-3xl relative">
                <IoMdHeartEmpty />
                <div className="bg-red-50 absolute top-[-6px] right-[-5px]">
                  <p className="text-[10px] text-white bg-[#29A56C] w-5 py-[4px] text-center rounded-full ">
                    6
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">Wishlist</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="text-3xl relative">
                <IoCartOutline />
                <div className="bg-red-50 absolute top-[-9px] right-[-5px]">
                  <p className="text-[10px] text-white bg-[#29A56C] w-5 py-[4px] text-center rounded-full ">
                    3
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">Cart</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="text-3xl relative">
                <CiUser />
                <div className="bg-red-50 absolute top-[-6px] right-[-5px]">
                  <p className="text-[10px] text-white bg-[#29A56C] w-5 py-[4px] text-center rounded-full ">
                    7
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMidle;
