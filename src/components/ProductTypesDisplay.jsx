import React from "react";
import rosetype from '../assets/rosetype.jpg';
import plantetype from '../assets/plantetype.jpg';
import evenementstype from '../assets/evenementstype.jpg';
import mariagetype from '../assets/mariagetype.jpg';

const ProductTypesDisplay = () => {
  return (
    <div className="flex flex-col font-Josefin my-4">
      {/* MOBILE*/}
      <div className="md:hidden">
        <div className="w-full h-72 mb-4 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={rosetype} className="object-cover w-full h-full" alt="Rosetype" />
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white font-bold text-4xl">ROSES</p>
        </div>
        <div className="w-full h-72 mb-4 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={plantetype} className="object-cover w-full h-full" alt="Rosetype" />
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white font-bold text-4xl">PLANTES</p>
        </div>
        <div className="w-full h-72 mb-4 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={evenementstype} className="object-cover w-full h-full" alt="Rosetype" />
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white font-bold text-4xl">ÉVÈNEMENTS</p>
        </div>
        <div className="w-full h-72 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={mariagetype} className="object-cover w-full h-full" alt="Rosetype" />
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white font-bold text-4xl">MARIAGE</p>
        </div>
      </div>
      
      {/* DESKTOP */}
      <div className="hidden md:flex mb-4 md:mb-2">
        <div className="w-3/4 h-96 mr-4 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={rosetype} className="object-cover w-full h-full" alt="Rosetype" />
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white font-bold text-4xl">ROSES</p>
        </div>
        <div className="w-1/2 h-96 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={plantetype} className="object-cover w-full h-full" alt="Rosetype" />
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white font-bold text-4xl">PLANTES</p>
        </div>
      </div>

      <div className="hidden md:flex my-2">
        <div className="w-1/2 h-96 mr-4 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={evenementstype} className="object-cover w-full h-full" alt="Rosetype" />
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white font-bold text-4xl">ÉVÈNEMENTS</p>
        </div>
        <div className="w-3/4 h-96 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={mariagetype} className="object-cover w-full h-full" alt="Rosetype" />
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white font-bold text-4xl">MARIAGE</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTypesDisplay;
