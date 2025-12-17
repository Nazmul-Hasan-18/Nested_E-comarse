import { useEffect, useState } from "react";
import Product from "../productComponent/Product";


const Category = () => {
  const [Categories, setCategories] = useState([]);
  
  
  useEffect(() => {
    fetch("cate.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="container grid grid-cols-12 mx-auto px-16 gap-4">
      <div className="col-span-9 py-">
        <Product />
      </div>
      <div className="col-span-3 shadow-lg shadow-gray-200 h-110">
        <div className="px-7">
          <div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-600 border-b border-gray-300 py-4">
                Category
              </h2>
            </div>
            <div className="mt-5">
              <div className="flex flex-col gap-4">
                {Categories.map((cate) => (
                  <div   className=" cursor-pointer flex  items-center justify-between px-6 border border-gray-300 py-3 rounded-sm hover:shadow-md shadow-gray-200 duration-300">
                    <div className="flex items-center gap-2 ">
                      <img className="w-7" src={cate.image} alt="" />
                      <p className="text-[13px]">{cate.name}</p>
                    </div>
                    <p className="text-[10px] bg-[#29A56C] text-white py-1 px-[5px] rounded-full">43</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
