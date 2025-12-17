
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Section = () => {
  return (
    <div className="mt-[-25px]">
      <div className="container mx-auto py-16 px-16 ">
        <div className="relative">
          <img
            className="rounded-xl"
            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/header-bg.png"
            alt=""
          />
          <div className=" absolute top-20 px-15">
            <div className="flex items-center  gap-85">
              <div>
                <h3 className="font-semibold text-4xl mb-3">Snack</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center  gap-2 text-[#29A56C] hover:text-yellow-600 duration-300">
                    <div className="text-lg">
                      <AiOutlineHome />
                    </div>
                    <a className="text-sm" href="#">
                      Home
                    </a>
                  </div>
                  <div className="flex items-center  gap-2">
                    <div className="">
                      <MdKeyboardArrowRight />
                    </div>
                    <a className="text-sm" href="#">
                      Shop
                    </a>
                  </div>
                  <div className="flex items-center  gap-2">
                    <div className="">
                      <MdKeyboardArrowRight />
                    </div>
                    <a className="text-sm" href="#">
                      Snack
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[15px] font-semibold text-gray-500">
                <div className="flex items-center gap-2 bg-white px-5 py-[10px] rounded-full text-[#29A56C] hover:-translate-y-1 duration-300 cursor-pointer hover:text-yellow-600">
                  <div className="text-gray-400">
                    <RxCross2 />
                  </div>
                  <p>Cabbage</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-[10px] rounded-full  hover:-translate-y-1 duration-300 cursor-pointer hover:text-yellow-600">
                  <div className="text-gray-400">
                    <RxCross2 />
                  </div>
                  <p>Broccoli</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-[10px] rounded-full  hover:-translate-y-1 duration-300 cursor-pointer hover:text-yellow-600">
                  <div className="text-gray-400">
                    <RxCross2 />
                  </div>
                  <p>Artichoke</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-[10px] rounded-full  hover:-translate-y-1 duration-300 cursor-pointer hover:text-yellow-600">
                  <div className="text-gray-400">
                    <RxCross2 />
                  </div>
                  <p>Celery</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-[10px] rounded-full  hover:-translate-y-1 duration-300 cursor-pointer hover:text-yellow-600">
                  <div className="text-gray-400">
                    <RxCross2 />
                  </div>
                  <p>Spanish</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
