
import { useState } from "react";
import Product from "./Product";


const ProductCategory = () => {
  const counts = [
    { name: "All", id: 1 },
    { name: "Milk & Dairies", id: 2 },
    { name: "Coffe & Teas", id: 3 },
    { name: "Pet Foods", id: 4 },
    { name: "Meat", id: 5 },
    { name: "Vegetable", id: 6 },
    { name: "Fruits", id: 7 },
  ];

  const [data, setData] = useState()
  const hanldecatId = (id)=>{
    setData(id);
  }
  return (
    <div>
      <div className="container mx-auto sm:px-16 pt-5">
        <div
          className="sm:flex justify-between sm:items-center py-6 md:py-8 gap-4 md:gap-0
        "
        >
          {/* Title */}
          <h2 className="text-[22px] sm:text-[26px] md:text-[29px] font-bold text-gray-700">
            Popular Products
          </h2>

          {/* Category Menu */}
          <div 
            className=" cursor-pointer
            flex flex-wrap items-center  gap-3 sm:gap-4 md:gap-5 text-center mt-3 sm:mt-0
          "
          >
            {counts.map((count, index) => (
              <div key={index}>
                <p  onClick={()=>hanldecatId(count.id)}
                  className="
                 font-semibold text-gray-700  hover:text-[#29A56C] duration-300 csor-pointer hover:-translate-y-1  text-sm sm:text-base
                "
                >
                  {count.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Product data={data}/>
      </div>
    </div>
  );
};

export default ProductCategory;
