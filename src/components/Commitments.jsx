import React from "react";
import Section from '../components/Section';
import biodiversite from '../assets/biodiversite.svg';
import communaute from '../assets/communaute.svg';
import ecoresponsable from '../assets/ecoresponsable.svg';
import empreintecarbone from '../assets/empreintecarbone.svg';
import responsabledeleau from '../assets/responsabledeleau.svg';

function Commitments() {
  return (
    <div id="commitments">
     <Section text="Nos engagements"/>
    <div className="bg-gray-200" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-4">
          <div className="flex flex-col items-center">
            <img
              className="max-h-20 w-full object-contain"
              src={biodiversite}
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="mt-2 text-gray-700 text-center">L'entreprise favorise la biodiversité en cultivant des plantes indigènes, ce qui contribue à maintenir un écosystème sain, à soutenir la faune locale et à préserver les espèces menacées.</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="max-h-20 w-full object-contain"
              src={communaute}
              alt="Reform"
              width={158}
              height={48}
            />
            <p className="mt-2 text-gray-700 text-center">Garden Flower soutient la communauté locale en créant des emplois durables, en contribuant au développement économique régional et en investissant dans des projets sociaux et éducatifs, renforçant ainsi les liens sociaux et le bien-être communautaire.</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="max-h-20 w-full object-contain pr-2"
              src={ecoresponsable}
              alt="Tuple"
              width={158}
              height={48}
            />
            <p className="mt-2 text-gray-700 text-center">Garden Flower place l'éco-responsabilité au cœur de ses pratiques, en utilisant des méthodes agricoles durables et en favorisant la réduction des déchets pour protéger l'environnement et préserver les ressources naturelles.</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="max-h-20 w-full object-contain"
              src={empreintecarbone}
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <p className="mt-2 text-gray-700 text-center">Garden Flower s'engage activement à réduire son empreinte carbone en adoptant des pratiques écologiques telles que l'utilisation de véhicules électriques et d'éclairage éco-énergétique, contribuant ainsi à atténuer le changement climatique.</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="max-h-20 w-full object-contain"
              src={responsabledeleau}
              alt="Statamic"
              width={158}
              height={48}
            />
            <p className="mt-2 text-gray-700 text-center">L'entreprise utilise l'eau de manière responsable en mettant en œuvre des systèmes d'irrigation efficaces et en sensibilisant à l'importance de la conservation de l'eau, préservant ainsi cette ressource essentielle pour les générations futures.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Commitments;
