import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../../Assets/DezinerTr.png';
import '../Home.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  // Function to get link class based on active state
  const getLinkClass = (path) => {
    return `block py-2 px-3 rounded-sm md:p-0 ${
      isActivePath(path) ? 'text-red-700' : 'text-gray-900'
    }`;
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Icon} className="h-32" alt="Logo" />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-end justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 montserrat">
            <li>
              <a
                href="/"
                className={getLinkClass('/')}
                aria-current={isActivePath('/') ? 'page' : undefined}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className={getLinkClass('/aboutus')}
                aria-current={isActivePath('/aboutus') ? 'page' : undefined}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/products"
                className={getLinkClass('/products')}
                aria-current={isActivePath('/products') ? 'page' : undefined}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contactus"
                className={getLinkClass('/contactus')}
                aria-current={isActivePath('/contactus') ? 'page' : undefined}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;