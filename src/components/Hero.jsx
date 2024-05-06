import React from "react";
import HeroPic from "../assets/HeroPicture.jpg";

const Hero = () => {
  return (
    <div className="relative font-Josefin my-2">
      <div className="md:mx-8 absolute inset-0 flex flex-col items-start justify-center text-white p-4">
        <h1 className="md:text-6xl text-sm">GARDEN FLOWER</h1>
        <p className="md:text-2xl text-sm font-light">Notre passion ... Votre Histoire ...</p>
      </div>
      <img src={HeroPic} className="object-cover w-full md:h-[50vh] h-[20vh] rounded-br-2xl rounded-bl-2xl" alt="Background" />
    </div>
  );
};

export default Hero;
