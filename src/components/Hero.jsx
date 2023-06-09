import { DownloadIcon } from "@heroicons/react/outline";
import React from "react";
import heroFirstImage from "../assets/hero-first-image.svg";
import heroSecondImage from "../assets/hero-second-image.svg";

function Hero() {
  return (
    <div className="bg-discord_blue pb-8 md:pb-0 md:h-83vh">
      <div className="p-7 py-9 h-screen md:flex md:h-[83vh] relative overflow-x-hidden">
        <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
          <h1 className="text-5xl text-white font-bold">Your place to talk</h1>
          <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">
            Whether you're part of a school club, gaming group, worldwide art
            community, or just a handful of friends that want to spend time
            together, Discord makes it easy to talk every day and hang out more
            often.
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-start md:flex-col md:item-start lg:flex-row gap-6">
            <button className="bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out">
              <DownloadIcon className="w-6 mr-2" />
              Download for Mac
            </button>
            <button className="flex text-white font-medium bg-gray-900 w-72 rounded-full p-4 justify-center hover:shadow-2xl items-center text-lg hover:bg-gray-800 transition duration-200 ease-in-out focus:outline-none">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <img src={heroFirstImage} alt="" className="absolute -left-36 mt-16 sm:-left-44 md:hidden"/>
          <img src={heroSecondImage} alt="" className="hidden md:inline absolute"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
