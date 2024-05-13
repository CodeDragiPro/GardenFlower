import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { HashLink as Link } from "react-router-hash-link";
import { auth } from '../../firebaseConfig'; 
import logo from '../assets/logoGardenFlower.png';
const navigation = [
  { name: 'Acceuil', to: '/', current: true },
  { name: 'Nos Engagements', to: '#commitments', current: false },
  { name: 'Nos Produits', to: '#products', current: false },
  { name: 'Notre Equipe', to: '/#team', current: false },
  { name: 'Contact', to: '/#contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ openCart }) {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('Déconnexion réussie');
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de la déconnexion :', error);
      });
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-flowerpink hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                 <h1 className='text-flowerpink text-xl uppercase font-black'>Gardenflower</h1>
                 </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                      
                    ))}
                         {!user && (
                           <Link to="/login">
                <button
                  type="button"
                  className="block w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black hover:text-white bg-flowerpink hover:bg-gray-700"
                >
                  Connexion
                </button>
                </Link>
              )}
                  </div>
                </div>
                {/* Affichage de l'email de l'utilisateur connecté et du bouton de déconnexion */}
                {user && (
                  <div className="hidden sm:block sm:ml-6 md:pt-1.5">
                    <p className="text-gray-300">{user.email}</p>
                  </div>
                )}
                {user && (
                  <button
                    type="button"
                    className="ml-3 relative rounded-md  p-1 text-black bg-flowerpink hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:ml-6 md:block hidden"
                    onClick={handleLogout}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Logout</span>
                   Deconnexion
                  </button>
                )}
              </div>
              <div>
                
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-flowerpink hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={openCart}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open Cart</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Affichage du bouton de déconnexion en version mobile */}
           
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
  <a
    key={item.name}
    href={item.to}  // Utilisez l'attribut href pour définir l'ancre
    className={classNames(
      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'block rounded-md px-3 py-2 text-sm font-medium'
    )}
    aria-current={item.current ? 'page' : undefined}
  >
    {item.name}
  </a>
))}

              {/* Affichage de l'email de l'utilisateur connecté en version mobile */}
              <hr className='pb-2'/>
              {user && (
                <p className="text-gray-300 pl-2 pb-2">{user.email}</p>
              )}
              {/* Affichage du bouton de connexion en version mobile */}
             
              {!user && (
                <Link to="/login">
                <button
                  type="button"
                  className="block py-2 px-2 border border-transparent  font-medium rounded-md text-black bg-flowerpink hover:bg-gray-700"
                >
                  Connexion
                </button>
                </Link>
              )}
               {user && (
                  <button
                    type="button"
                    className="ml-3 relative rounded-md  p-1 text-black bg-flowerpink hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={handleLogout}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Logout</span>
                   Deconnexion
                  </button>
                )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
