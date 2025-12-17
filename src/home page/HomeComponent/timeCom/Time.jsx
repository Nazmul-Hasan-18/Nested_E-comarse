import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

const Time = () => {
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      id: 1,
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-5.png",
      description: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      dollar: "22$",
      PreDollar: "23$",
    },
    {
      id: 2,
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-6.png",
      description: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      dollar: "20$",
      PreDollar: "21$",
    },
    {
      id: 3,
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-7.png",
      description: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      dollar: "24$",
      PreDollar: "32$",
    },
    {
      id: 4,
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-8.png",
      description: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      dollar: "32$",
      PreDollar: "42$",
    },
  ];

  return (
    <div className="container mx-auto px-16 py-7 mb-9">
      <div className="flex  items-center justify-between p-8">
        <h2 className="text-[22px] sm:text-[26px] md:text-[29px] font-bold text-gray-700">
          Deals Of The Day
        </h2>
        <div className="flex items-center gap-2">
          <p
            className=" cursor-pointer
                 font-semibold text-gray-700  hover:text-[#29A56C] duration-300 csor-pointer hover:-translate-y-1  text-sm sm:text-base
                "
          >
            All deals
          </p>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-7">
        {data.map((item) => (
          <div key={item.id} className="bg- relative">
            <img
              className="rounded-2xl"
              src={item.img}
              alt={item.description}
            />
            <div className="flex flex-col items-center  px-5 bg- absolute top-34">
              <div className="flex  gap-3 text-center auto-cols-max ">
                <div className="flex flex-col py-3 h-16 px-3 items-center  bg-white text-gray-400 rounded-box ">
                  <p className="countdown font-mono text-xl text-[#29A56C]">
                    {timeLeft.days}
                  </p>
                  days
                </div>

                <div className="flex flex-col py-3 h-16 px-2 items-center  bg-white text-gray-400 rounded-box ">
                  <p className="countdown font-mono text-xl text-[#29A56C]">
                    {timeLeft.hours}
                  </p>
                  hours
                </div>

                <div className="flex flex-col py-3 h-16 px-3 items-center  bg-white text-gray-400 rounded-box ">
                  <p className="countdown font-mono text-xl text-[#29A56C]">
                    {timeLeft.minutes}
                  </p>
                  min
                </div>

                <div className="flex flex-col py-3 h-16 px-3 items-center  bg-white text-gray-400 rounded-box ">
                  <p className="countdown font-mono text-xl text-[#29A56C]">
                    {timeLeft.seconds}
                  </p>
                  sec
                </div>
              </div>
              <div className="bg-white shadow px-5 rounded-xl py-6 mt-3">
                <p className="font-semibold">{item.description}</p>
                <div className="text-sm flex items-center gap-1 text-yellow-500 mt-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <p className="text-gray-400">(5.0)</p>
                </div>
                <div>
                  <p className="text-[12px] mt-1">
                    By <span className="text-[#29A56C]">NestFood</span>
                  </p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold mt-2">
                    {item.dollar}{" "}
                    <span className="line-through text-gray-400">
                      {item.PreDollar}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 bg-[#29A56C] px-3 py-[6px] rounded-sm hover:font-semibold text-white hover:-translate-y-1 hover:bg-[#21905c] duration-300 cursor-pointer">
                    <LuShoppingCart />
                    <a className="text-[14px]" href="#">
                      Add
                    </a>
                  </div>
                </div>
              </div>

              {/* Countdown Section */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Time;
