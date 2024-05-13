import React from 'react';
import Section from '../components/Section';

const people = [
  {
    name: 'Sophie Martin',
    role: 'Fondatrice / Directrice Générale',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Alexandre Dubois',
    role: 'Co-Fondateur / Responsable des Ventes',
    imageUrl:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emilie Dupont',
    role: 'Directrice Artistique',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Jeanne Durand',
    role: 'Responsable des Achats',
    imageUrl:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const OurHistory = () => {
  return (
    <div id="team">
    <Section text="Notre equipe"/>
    <div className="bg-gray-200 my-4">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 py-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rencontrez notre équipe</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Notre équipe est composée de professionnels passionnés par les fleurs et dédiés à créer des arrangements floraux uniques pour égayer vos moments spéciaux.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-flowergreen">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default OurHistory;
