import React from "react";
import biodiversite from '../assets/biodiversite.svg';
import communaute from '../assets/communaute.svg';
import ecoresponsable from '../assets/ecoresponsable.svg';
import empreintecarbone from '../assets/empreintecarbone.svg';
import responsabledeleau from '../assets/responsabledeleau.svg';

const CommitmentSection = () => {
  return (
    <div className="bg-gray-200 p-8 my-6 md:text-medium text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex flex-col items-center px-2 mb-4 md:mb-0">
          <img src={ecoresponsable} className="md:w-20 w-12 md:h-20 h-12 mb-2" alt="Logo 1" />
          <p className="text-gray-800 text-center font-josefin">CULTURE RESPONSABLE DE L'ENVIRONNEMENT</p>
        </div>

        <div className="flex flex-col items-center px-2 mb-4 md:mb-0">
          <img src={empreintecarbone} className="md:w-20 w-12 md:h-20 h-12 mb-2" alt="Logo 2" />
          <p className="text-gray-800 text-center">REDUCTION DE L'EMPREINTE CARBONE</p>
        </div>

        <div className="flex flex-col items-center px-2 mb-4 md:mb-0">
          <img src={responsabledeleau} className="md:w-20 w-12 md:h-20 h-12 mb-2" alt="Logo 3" />
          <p className="text-gray-800 text-center">UTILISATION RESPONSABLE DE L'EAU</p>
        </div>

        <div className="flex flex-col items-center px-2 mb-4 md:mb-0">
          <img src={communaute} className="md:w-20 w-12 md:h-20 h-12 mb-2" alt="Logo 4" />
          <p className="text-gray-800 text-center">SUPPORT A LA COMMUNAUTÉ LOCALE</p>
        </div>

        <div className="flex flex-col items-center px-2">
          <img src={biodiversite} className="md:w-20 w-12 md:h-20 h-12 mb-2" alt="Logo 5" />
          <p className="text-gray-800 text-center">CONSERVATION DE BIODIVERSITÉ</p>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
