import { useEffect, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { LuTableOfContents } from "react-icons/lu";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { NavLink } from "react-router";

const BottomHeader = () => {
  const [bottom, setBottom] = useState(false);
  const [bottomCategory, setBottomCategory] = useState([]);

  const handleBrowse = () => {
    setBottom(!bottom);
  };

  useEffect(() => {
    fetch("headerCategory.json")
      .then((res) => res.json())
      .then((data) => setBottomCategory(data));
  }, []);
  return (
    <div className="py-3 border-b border-gray-300">
      <div className="container mx-auto px-16 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5 ">
            <div
              className="flex items-center gap-2 bg-[#29A56C] rounded-md cursor-pointer px-4 py-[10px] text-white relative"
              onClick={handleBrowse}
            >
              <div className="text-2xl text-white">
                <LuTableOfContents />
              </div>
              <a href="#">Browse All Categories</a>
              <IoChevronDownSharp />
              <div className="absolute bg-accent top-14 z-10 left-0">
                {bottom && (
                  <div className=" grid grid-cols-2 w-120 gap-3 bg-white   text-gray-500 text-sm border border-[#29A56C] px-7 py-5 rounded-">
                    {bottomCategory.map((bottomCt) => (
                      <div className="">
                        <div className="flex items-center gap-3 border border-gray-200 px-2 py-2 rounded-sm hover:shadow-sm cursor-pointer shadow-gray-300 duration-500">
                          <img className="w-7" src={bottomCt.image} alt="" />
                          <h3>{bottomCt.name}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-7 text-sm font-semibold text-gray-600">
            <div className="flex items-center gap-1 hover:text-[#29A56C] duration-300 ">
              <div className="text-2xl text-[#29A56C] ">
                <MdOutlineLocalFireDepartment />
              </div>
              <a className="font-smi" href="#">
                Deal
              </a>
            </div>
            <div className="flex items-center gap-1 text-[#29A56C] duration-300">
              <NavLink to="/">Home</NavLink>
              <div className="text-sm">
                <IoChevronDownSharp />
              </div>
            </div>
            <div className="flex items-center gap-1 hover:text-[#29A56C] duration-300">
              <NavLink to="/about">About</NavLink>
            </div>
            <div className="flex items-center gap-1 hover:text-[#29A56C] duration-300">
              <NavLink to="/blog">Shop</NavLink>
              <div className="text-sm">
                <IoChevronDownSharp />
              </div>
            </div>
            <div className="flex items-center gap-1 hover:text-[#29A56C] duration-300">
              <a href="#">Vendor</a>
              <div className="text-sm">
                <IoChevronDownSharp />
              </div>
            </div>
            <div className="flex items-center gap-1 hover:text-[#29A56C] duration-300">
              <a href="#">Mega menu</a>
              <div className="text-sm">
                <IoChevronDownSharp />
              </div>
            </div>
            <div className="flex items-center gap-1 hover:text-[#29A56C] duration-300">
              <a href="#">Blog</a>
              <div className="text-sm">
                <IoChevronDownSharp />
              </div>
            </div>
            <div className="flex items-center gap-1 hover:text-[#29A56C] duration-300">
              <a href="#">Pages</a>
              <div className="text-sm">
                <IoChevronDownSharp />
              </div>
            </div>
            <div className="flex items-center gap-1 hover:text-[#29A56C] duration-300">
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 hover:text-[#29A56C] duration-300">
          <div className="text-4xl">
            <TfiHeadphoneAlt />
          </div>
          <div>
            <h className="text-xl font-semibold text-[#29A56C]">01756966372</h>
            <p className="text-[10px] text-gray-400">24/7 Support Center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
