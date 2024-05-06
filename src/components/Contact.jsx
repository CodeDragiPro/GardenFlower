import React from "react";
import Section from "./Section";
import Button from "./Button";
import flowerImage from "../assets/fleuristephotocontact.jpeg";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-4 font-Josefin">
      <Section text="NOUS CONTACTER" />
      <div>
        <div className="flex flex-col md:flex-row py-2 ">

          <div className=" w-30 md:w-2/3 h-auto mx-2 md:my-0 my-2 p-4">
            {/* Contenu du premier bloc (Formulaire) */}
            <form id="form-input">
              {/* Nom et prénom */}
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 md:pr-2 py-2">
                  <input
                    type="text"
                    className="w-full bg-flowerpink rounded-xl px-4 py-2 focus:outline-none "
                    placeholder="Nom"
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-2 py-2">
                  <input
                    type="text"
                    className="w-full bg-flowerpink rounded-xl px-4 py-2 focus:outline-none"
                    placeholder="Prénom"
                  />
                </div>
              </div>
              {/* Email et téléphone */}
              <div className="flex flex-wrap mb-2">
                <div className="w-full md:w-1/2 md:pr-2 py-2">
                  <input
                    type="email"
                    className="w-full bg-flowerpink rounded-xl px-4 py-2 focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-2 py-2">
                  <input
                    type="tel"
                    className="w-full bg-flowerpink rounded-xl px-4 py-2 focus:outline-none"
                    placeholder="Téléphone"
                  />
                </div>
              </div>
              {/* Sujet du message (sélection) */}
              <div className="mb-4">
                <select className="w-full bg-flowerpink rounded-xl px-4 py-2 focus:outline-none">
                  <option value="">Choisir un sujet</option>
                  <option value="Support">Support</option>
                  <option value="Ventes">Ventes</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              {/* Message */}
              <div className="mb-2">
                <textarea
                  className="w-full bg-flowerpink rounded-xl px-4 py-2 focus:outline-none"
                  rows="4"
                  placeholder="Votre message"
                ></textarea>
              </div>
              {/* Bouton Envoyer */}
              <Button text="ENVOYER" className="rounded-xl" />
            </form>
          </div>

          <div className="bg-flowergreen w-30 md:w-1/3 h-auto mx-4 m-6 relative rounded-xl">
            {/* Image obscurcie */}
            <div className="absolute inset-0 bg-flowergreen opacity-60 rounded-xl"></div>
            <img
              src={flowerImage}
              alt="Flower"
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Textes et formulaire */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
              <h2 className="text-xl font-bold mb-4">NOTRE NEWSLETTER</h2>
              <p className="text-base mb-4">Abonnez-vous à notre Newsletter</p>
              <input
                type="email"
                placeholder="Votre email"
                className="bg-flowergreen w-full text-white px-4 py-2 rounded-full mb-4 focus:outline-none"
              />
              <Button text="ENVOYER" className="rounded-full w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:py-2 py-0 text-center">
          <div className="bg-[#FFF5F2] w-30 md:w-1/3 h-64 mx-2 md:my-0 my-2 flex justify-center items-center">
            {/* Contenu du premier petit bloc */}
            <div className="flex flex-col items-center mx-4">
              <FaEnvelope size={24} className="text-flowergreen" />
              <p className="font-bold mt-2">Email</p>
              <p>GardenFlower@gmail.com</p>
            </div>
          </div>
          <div className="bg-[#FCE6E1] w-30 md:w-1/3 h-64 mx-2 md:my-0 my-2 flex justify-center items-center">
            {/* Contenu du deuxième petit bloc */}
            <div className="flex flex-col items-center mx-4">
              <FaPhone size={24} className="text-flowergreen" />
              <p className="font-bold mt-2">Téléphone</p>
              <p>00.00.00.00.00</p>
            </div>
          </div>
          <div className="bg-flowerpink w-30 md:w-1/3 h-64 mx-2 md:my-0 my-2 flex justify-center items-center">
            {/* Contenu du troisième petit bloc */}
            <div className="flex flex-col items-center mx-4">
              <FaMapMarkerAlt size={24}  className="text-flowergreen" />
              <p className="font-bold mt-2">Localisation</p>
              <p>7 rue des fleurs 76700 Gonfreville L'orcher</p>
            </div>
          </div>
        </div>
        <div className=" md:my-2 my-2 text-center h-72 mx-2">
          <iframe
            title="Google Maps"
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.8146376116683!2d0.7224761776607466!3d49.52577507143054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0f81fdfbeac53%3A0xa9a73c21d1766bbf!2sAu%20Coin%20Fleuri%2C%20Artisan%20Fleuriste%20Rives%20en%20Seine!5e0!3m2!1sfr!2sfr!4v1714386592024!5m2!1sfr!2sfr"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

