import React from "react";
import formSvg from '../assets/FormSection.svg';

const Section = ({ text }) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center py-12">
      <img src={formSvg} className="absolute left-0 right-0 mx-auto w-48 md:w-64" alt="Form SVG" />
      <p className="absolute text-black text-center font-light text-sm md:text-lg md:pt-6 pt-5 w-48 md:w-full font-Josefin">{text}</p>
    </div>
  );
};

export default Section;
