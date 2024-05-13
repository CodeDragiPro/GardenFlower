import React from "react";
import formSvg from '../assets/FormSection.svg';

const Section = ({ text }) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center py-12">
      <img src={formSvg} className="absolute left-0 right-0 mx-auto w-48 md:w-64" alt="Form SVG" />
      <p className="absolute text-black text-center md:pt-6 pt-5 w-48 md:w-full text-medium sm:text-xl font-Josefin">{text}</p>
    </div>
  );
};

export default Section;
