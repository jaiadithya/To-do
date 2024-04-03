'use client'
import React, { useState } from 'react';

const UserInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">To-Do List</span>
        </a>
        <div className="relative">
          <button
            type="button"
            onClick={toggleModal}
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded={isModalOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-10 h-10 rounded-full"
              src="/user.jpg"
              alt="user photo"
            />
          </button>

          {isModalOpen && (
            <div className="absolute mt-2 right-0 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
            <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">Name</span>
                <span className="block text-sm text-gray-500 truncate">name@gmail.com</span>
              </div>
              <ul aria-labelledby="user-menu-button">
                <li>
                  <a href="/dashboard" className="block px-4 py-2 mt-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </a>
                </li>
                
                <li>
                  <a href="/" className="block px-4 py-2 mb-2 text-sm text-red-500 hover:bg-gray-100">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default UserInfo;
