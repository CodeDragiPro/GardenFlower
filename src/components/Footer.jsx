import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logoGardenFlower.png";

const Footer = () => {
  return (
    <footer className="bg-flowergreen text-flowerpink font-Josefin py-2 px-6 h-full">
      <div className="md:flex justify-between mx-auto w-full">
        <div className="md:hidden flex flex-col w-full items-center justify-center">
          <div className="my-2">
            <img src={logo} className="w-[10vh]" alt="Logo" />
          </div>
          <div className="my-2 flex flex-col items-center">
            <Link to="/lien1" className="">
              Accueil
            </Link>
            <Link to="/lien2" className="">
              Notre Engagement
            </Link>
            <Link to="/lien3" className="">
              Nos Produits
            </Link>
            <Link to="/lien3" className="">
              Notre Histoire
            </Link>
            <Link to="/lien3" className="">
              Contact
            </Link>
            <Link to="/lien3" className="">
              Identification
            </Link>
          </div>
          <div className="my-2">
            <div className="flex items-center py-2">
              <FaFacebook size={24} className="mr-4" />
              <FaInstagram size={24} className="mr-4" />
              <FaTwitter size={24} />
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-between w-full">
          <div className="w-1/4 flex flex-col items-start">
            <img src={logo} className="w-[10vh]" alt="Logo" />
          </div>
          <div className="w-full flex  items-end space-x-2 text-medium">
            <Link to="/lien1">Accueil</Link>
            <Link to="/lien2">Notre Engagement</Link>
            <Link to="/lien3">Nos Produits</Link>
            <Link to="/lien3">Notre Histoire</Link>
            <Link to="/lien3">Contact</Link>
            <Link to="/lien3">Identification</Link>
          </div>
          <div className="w-full flex flex-col items-end justify-end">
            <div className="flex items-center py-2">
              <FaFacebook size={24} className="mr-4" />
              <FaInstagram size={24} className="mr-4" />
              <FaTwitter size={24} />
            </div>
          </div>
        </div>
        <div className="text-center mt-2 md:hidden">
          <div className="w-full h-px bg-white"></div>
        </div>
        <div className="md:hidden text-center mt-2">
          <p>COPYRIGHT - 2024 - CODEDRAGI - WWW.CODEDRAGI.FR</p>
        </div>
      </div>
      <div className="hidden md:block text-center mt-2">
        <div className="w-full h-px bg-white"></div>
      </div>
      <div className="hidden md:block text-right mt-4">
        <p>COPYRIGHT - 2024 - CODEDRAGI - WWW.CODEDRAGI.FR</p>
      </div>
    </footer>
  );
};

export default Footer;
