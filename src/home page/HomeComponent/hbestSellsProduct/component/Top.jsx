import React from "react";

const Top= () => {
  const counts = [
    { name: "Featured" },
    { name: "Popular" },
    { name: "New added" }
   
  ];

  return (
    <div className='container mx-auto sm:px-16 pt-5 '>
      <div
        className="sm:flex justify-between sm:items-center py-6 md:py-8 gap-4 md:gap-0
        "
      >
        {/* Title */}
        <h2 className="text-[22px] sm:text-[26px] md:text-[29px] font-bold text-gray-700">
          Daily Best Sells
        </h2>

        {/* Category Menu */}
        <div
          className="
            flex flex-wrap items-center  gap-3 sm:gap-4 md:gap-5 text-center mt-3 sm:mt-0
          "
        >
          {counts.map((count, index) => (
            <div key={index}>
              <p
                className=" cursor-pointer
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
  );
};

export default Top;
