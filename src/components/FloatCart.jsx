import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const FloatCart = ({ closeCart }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
  
    if (cartItems) {
      try {
        const parsedData = JSON.parse(cartItems);
        if (Array.isArray(parsedData)) {
          setCartItems(parsedData);
          if (parsedData.length > 0) {
            setOpen(true);
          }
        } else {
          console.error('Les données du panier ne sont pas un tableau valide.');
          setCartItems([]);
        }
      } catch (error) {
        console.error('Erreur lors de la conversion des données du panier :', error);
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }
  }, []);
  
  const handleCloseCart = () => {
    closeCart(); 
  };

  const handleRemoveItem = (itemId) => {
    const cartData = localStorage.getItem('cartItems');
  
    if (cartData) {
      try {
        const parsedCartData = JSON.parse(cartData);
        const updatedCartItems = parsedCartData.filter((item) => item.id !== itemId);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
      } catch (error) {
        console.error('Erreur lors de la mise à jour des données du panier :', error);
      }
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog onClose={handleCloseCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Panier</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleCloseCart}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.title}</a>
                                      </h3>
                                      <p className="ml-4">{`${product.price} €`}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qté {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => handleRemoveItem(product.id)}
                                      >
                                        Supprimer
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-flowergreen">
                        <p>Total</p>
                        <p>{cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)} €</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-flowergreen px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Valider
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-flowergreen">
                        <p>
                          ou{' '}
                          <button
                            type="button"
                            className="font-medium text-text-flowergreen hover:text-indigo-500"
                            onClick={handleCloseCart}
                          >
                            Continuer le shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FloatCart;
