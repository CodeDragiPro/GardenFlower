import React, { useState } from "react";
import HoverSvg from "../assets/flower.svg";

const Button = ({ text, onClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`relative flex items-center justify-center bg-flowerpink py-2 px-4 rounded-full font-Josefin  ${className}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-flowergreen text-sm font-Josefin pt-2">{text}</p>
      {isHovered && (
        <img
          className="absolute top-0 left-0 z-10"
          style={{ margin: "-8px 0 0 -8px" }}
          src={HoverSvg}
          alt="Hover SVG"
        />
      )}
    </button>
  );
};

export default Button;
