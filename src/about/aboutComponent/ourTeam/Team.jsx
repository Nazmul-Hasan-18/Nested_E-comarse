import React from "react";
import Left from "./teamComponent/Left";
import Midle from "./teamComponent/Midle";
import Right from "./teamComponent/Right";

const Team = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-5xl font-bold text-gray-700 text-center">
          Our Team
        </h2>
        <img
          src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/wave.png"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center gap-9 container mx-auto px-36 py-13">
        <Left />
        <div className="flex justify-between gap-5">
          <Midle />
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Team;
