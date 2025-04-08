import React from "react";
import Image1 from "../../Assets/DezinerTr.png";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full">
      <footer className="bg-gray-200 py-6 mt-5">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Logo and Navigation */}
          <div className="flex flex-col items-center mb-4">
            {/* Navigation Links */}
            <nav className="mb-4 w-full">
              <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-10 text-gray-700 montserrat text-xs sm:text-sm md:text-base">
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>|</li>
                <li>
                  <a href="/products">PRODUCTS</a>
                </li>
                <li>|</li>
                <li>
                  <a href="/aboutus">ABOUT US</a>
                </li>
                <li>|</li>
                <li>
                  <a href="/contactus">CONTACT US</a>
                </li>
              </ul>
            </nav>

            {/* Logo */}
            <img
              src={Image1}
              alt="Deziner Ceiling Co."
              className="h-24 sm:h-36 mb-4"
            />

            {/* Social Media Links */}
            <div className="flex flex-col sm:flex-row items-center text-black space-y-4 sm:space-y-0">
  {/* Facebook and Instagram in a row */}
  <div className="flex space-x-6">
   <div className="md:ml-[50px]">
   <a href="#" className="flex items-center text-white space-x-2">
      <div className="border border-red-600 bg-red-500 ml-[-25px] rounded-full px-1 py-1">
        <FaFacebookF className="" size={20} />
      </div>
      <span className="text-gray-900 md:w-[120px]">adhams-laminates</span>
    </a>
   </div>

   
   <a href="https://wa.me/1234567890" className="flex items-center text-white space-x-2">
      <div className="border border-red-600 bg-red-500 rounded-full px-1 py-1">
        <FaWhatsapp size={20} />
      </div>
      <span className="text-gray-900">WhatsApp</span>
    </a>
  </div>

  {/* WhatsApp centered below Facebook & Instagram */}
  <div className="flex justify-center w-full md:ml-12">
  <a href="https://www.instagram.com/adhams_profiles/" className="flex items-center text-white space-x-2">
      <div className="border border-red-600 bg-red-500 rounded-full px-1 py-1">
        <FaInstagram size={20} />
      </div>
      <span className="text-gray-900">adhams_profiles</span>
    </a>
  </div>
</div>


            {/* Copyright */}
            <div className="text-center text-sm text-gray-600 mt-5 montserrat">
              <p>@2024 DEZINER CEILING CO. All rights reserved.</p>
              <p>Powered by Cybernms</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
