import React from "react";
import Slider from "react-slick";
import { GrSend } from "react-icons/gr";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto px-16 py-8 ">
      <Slider {...settings}>
        <div className="relative">
          <img
            className="rounded-3xl"
            src="https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-1.png"
            alt=""
          />
          <div className="absolute top-22 left-16">
            <h1 className="text-[67px] leading-18 font-bold text-gray-700">
              {" "}
              Don`t miss amazing<br /> Grocery deals
            </h1>
            <h3 className="text-2xl font-semibold mt-6 text-gray-400">
              {" "}
              Sing up for the daily newsletter
            </h3>
            <div className="  w-119 mt-9 flex items-center text-gray-400 gap-5 px-5 rounded-full bg-white ">
              <div className=" text-lg">
                <GrSend />
              </div>
              <input
                className="outline-none border-none  pr-7"
                type="email"
                placeholder="Your email address"
              />
              <a
                className="font-bold bg-[#29A56C] px-11 py-4 rounded-full text-white "
                href="#"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-3xl"
            src="https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-2.png"
            alt=""
          />
          <div className="absolute top-22 left-16">
            <h1 className="text-[67px] leading-18 font-bold text-gray-700">
              {" "}
              Fresh Vegetable <br /> Big Discount
            </h1>
            <h3 className="text-2xl font-semibold mt-6 text-gray-400">
              {" "}
              Save Up to 50% off your first order
            </h3>
            <div className="  w-119 mt-9 flex items-center text-gray-400 gap-5 px-5 rounded-full bg-white ">
              <div className=" text-lg">
                <GrSend />
              </div>
              <input
                className="outline-none border-none  pr-7"
                type="email"
                placeholder="Your email address"
              />
              <a
                className="font-bold bg-[#29A56C] px-11 py-4 rounded-full text-white "
                href="#"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
