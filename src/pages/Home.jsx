import React from "react";
import booinkgImg from "../assets/booing.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white/45 flex items-center justify-center">
      <div className="bg-[url('../src/assets/bg-image.jpg')] bg-cover bg-center  h-[100vh] w-full">
        <img src={booinkgImg} alt="" className="h-10 w-[200px]" />
        <div className="flex flex-col gap-12 items-center justify-center h-[60%] ">
          <h1 className="text-white text-4xl w-1/2 cursor-pointer hover:scale-105  transition-all duration-500 ease-in-out">
            Make your journey unforgettable by booking our luxurious yet
            affordable world-class hotel rooms!
          </h1>
          <div className="border bottom-2 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:scale-125  transition-all duration-500 ease-in-out">
            <Link to={"/hotels"}>
              <FaArrowRight className="text-white text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
