import React, { useEffect, useState } from "react";

const Bottom = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("homeCategory.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to load categories:", err));
  }, []);

  return (
    <div
      className="
        grid 
        grid-cols-2          /* 📱 Mobile: 2 column */
        sm:grid-cols-3       /* 📱 Small devices: 3 column */
        md:grid-cols-5       /* 💻 Tablet: 5 column */
        lg:grid-cols-8       /* 🖥️ Large: 8 column */
        xl:grid-cols-10      /* 🖥️ Extra large: 10 column */
        gap-4 
        md:gap-5 
        py-6 
        md:py-8 
        px-3
      "
    >
      {categories.map((cat, index) => (
        <div
          key={index}
          className="
            hover:border  border-[#29A56C] duration-300 rounded-xl hover:scale-105 flex flex-col items-center  bg-[#ECFFEC] py-4 cursor-pointer
          "
        >
          <img
            className="w-[70px] md:w-[88px]"
            src={cat?.image}
            alt={cat?.name}
          />
          <h4 className="text-sm  font-bold text-gray-700 mt-2 text-center">
            {cat?.name}
          </h4>
          <p className="text-[12px] md:text-[13px] font-semibold text-gray-500 mt-1">
            {cat?.itemCount} item
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bottom;
