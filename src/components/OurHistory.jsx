import React from 'react';
import Section from './Section';
import AvatarComponent from './AvatarComponent';
import avatar1 from '../assets/avatar1.png';
import avatar2 from'../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const OurHistory = () => {
  return (
    <div>
      <Section text="NOTRE HISTOIRE"/>
      <p className='font-Josefin text-center py-4'>Garden Flower, fondée par Sarah Smith avec le soutien de son frère David et de sa sœur Emily, est une boutique de fleurs engagée dans la création d'arrangements floraux exceptionnels. Située au cœur d'une vallée verdoyante, notre entreprise est dédiée à la passion pour les fleurs et à leur capacité à illuminer les moments de la vie. Nous croyons fermement en la qualité, l'éco-responsabilité et le soutien à la communauté. Grâce à notre engagement envers ces valeurs, nous sommes devenus bien plus qu'une simple boutique de fleurs ; nous sommes devenus un symbole d'espoir, de partage et d'engagement dans notre ville. Sous la direction de Sarah, David et Emily, Garden Flower continue de prospérer en offrant des créations florales uniques et en faisant une différence positive dans notre communauté et notre environnement.</p>
      <div className='py-2 flex flex-col md:flex-row justify-center items-center'>
        <AvatarComponent
          avatarSrc={avatar1}
          name="Sarah Smith"
          role="Fondatrice"
        />
        <div className="hidden md:block mx-4"></div> {/* Marge horizontale seulement en desktop */}
        <AvatarComponent
          avatarSrc={avatar2}
          name="David Smith"
          role="Co-Fondateur"
        />
        <div className="hidden md:block mx-4"></div> {/* Marge horizontale seulement en desktop */}
        <AvatarComponent
          avatarSrc={avatar3}
          name="Emily Smith"
          role="Directrice"
        />
      </div>
    </div>
  );
};

export default OurHistory;
