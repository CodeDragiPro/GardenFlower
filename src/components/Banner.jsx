import React from 'react';
import redrosesbanner from '../assets/banner.jpg';

const Banner = () => {
  return (
    <div className="w-full mx-auto relative py-2">
      <div className="relative">
        <img src={redrosesbanner} alt="Image de la publicité" className="w-full h-24 object-cover mb-4" />
        <div className="absolute inset-0 bg-black opacity-40"></div> 
      </div>
      
      <div className="absolute top-0 left-0 w-full text-center text-white font-Josefin py-3">
        <p className="font-light">Du 1er Mai au 10 Mai</p>
        <p className="font-bold text-4xl">OBTENEZ -10%</p>
        <p className="font-light">Valable uniquement sur les roses</p>
      </div>
    </div>
  );
};

export default Banner;
