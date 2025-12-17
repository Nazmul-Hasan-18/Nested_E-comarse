import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,         // optional
    autoplaySpeed: 2000,    // optional
  };

  return (
    <div className="w-[550px] h mx-auto mt-10 ">  {/* optional styling */}
      <Slider {...settings}>
        <div><img  className="ml-5" src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png" alt="" /></div>
        <div className="ml-2 mr-3"><img src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-3.png" alt="" /></div>
        <div><img src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-4.png" alt="" /></div>
        <div><img src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-3.png" alt="" /></div>
        <div><img src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png" alt="" /></div>
       
      </Slider>
    </div>
  );
}
