import { FaStar } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { AiOutlineX } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Product = ({ data }) => {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    fetch("blogCategories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const ProductId = data
    ? Category.filter((cate) => cate.id == data)
    : Category;
  return (
    <div>
      <div>
        <div className="">
          <div className="grid grid-cols-5 container mx-auto px-16  gap-8 py-1">
            {ProductId.map((cat) => (
              <div
                key={cat.id}
                className="group  border border-gray-300 rounded-xl  px-3 py-5 hover:shadow-lg shadow-gray-300 duration-500 relative cursor-pointer"
              >
                <div className="">
                  <img className="" src={cat.image} alt={cat.title} />
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
                    <Link to={`singleProduct/ ${cat.id}`}>
                      <div className="flex items-center gap-1 bg-[#29A56C] px-3 py-[6px] rounded-sm font-semibold text-white hover:-translate-y-1 hover:bg-[#21905c] duration-300 cursor-pointer">
                      <LuShoppingCart />
                      <p className="text-[14px]">Add</p>
                    </div>
                    </Link>
                  
                  </div>
                </div>

                {/* 👇 Group hover effect */}
                <div className="flex items-center border  bg-white border-[#29A56C] rounded-sm   group-hover:-translate-y-70 w-[90px] absolute -translate-y-68 left-[79px] opacity-0 duration-500 group-hover:opacity-100">
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
