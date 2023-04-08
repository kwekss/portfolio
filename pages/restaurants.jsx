import Image from "next/image";
import React from "react";
import restaurantsImg from "../public/projects/resturant-search.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const restaurants = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={restaurantsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white  dark:text-gray-500">
          <h2 className="py-2">Restaurants Search</h2>
          <h3>React Native</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8  dark:text-gray-500">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>This app was built using React Native and is hosted on Expo.</p>
          <Link
            href="exp://exp.host/@kwekss/resturants-search?release-channel=default"
            target={"_blank"}
            rel={"noopener norefferer"}
          >
            <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-cyan-500 to-teal-500 text-white dark:shadow-none dark:text-gray-300">
              Demo
            </button>
          </Link>
          <Link
            href="https://github.com/kwekss/restaurant-search-mobile-app-"
            target={"_blank"}
            rel={"noopener norefferer"}
          >
            <button className="px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-cyan-500 to-teal-500 text-white dark:shadow-none dark:text-gray-300">
              Code
            </button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 dark:shadow-none dark:text-gray-500 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                REACT Native
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default restaurants;
