import React from "react";
import HeroPic from "../assets/HeroPicture.jpg";

const Hero = () => {
  return (
    <div className="relative font-Josefin my-2">
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-4 md:mx-8">
        <h1 className="text-sm md:text-6xl">GARDEN FLOWER</h1>
        <p className="text-sm md:text-2xl font-light">Notre passion ... Votre Histoire ...</p>
      </div>
      <img src={HeroPic} className="object-cover w-full md:h-[50vh] h-[20vh] rounded-br-2xl rounded-bl-2xl" alt="Background" />
    </div>
  );
};

export default Hero;
