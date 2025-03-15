import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import HplBanner from '../../Assets/Products/Banners/HPL.png';

import Teak from '../../Assets/Products/HplExterior/Teak.png';
import Walnut from '../../Assets/Products/HplExterior/Walnut.png';

import TeakZoom from '../../Assets/Products/HplExterior/TeakZoom.png';
import WalnutZoom from '../../Assets/Products/HplExterior/WalnutZoom.png';


const products = [
    { image: Teak, zoomImage: TeakZoom },
    { image: Walnut, zoomImage: WalnutZoom },
];

function HplExteriorLaminate() {
    const [hoveredImage, setHoveredImage] = useState(null); 

    return (
      <div className="w-full min-h-screen bg-neutral-50">
        <Navbar />
        <div className="flex flex-col items-center montserrat">
          <div className="relative">
            <img src={HplBanner} alt="Company Banner" className="w-auto h-auto" />
            <div className="absolute inset-0 flex items-center justify-center mt-40 md:ml-60 ml-40">
              <div className="relative w-full md:ml-[596px] md:mt-[550px] ">
                <div style={{ overflow: 'hidden' }}>
                  <h1 className="text-white text-xs sm:text-sm md:text-lg lg:text-2xl montserrat font-bold bg-opacity-45 bg-gray-800 px-4 sm:px-5 md:px-6 py-4 sm:py-3 md:py-5 w-full">
                    <span className="text-xxs md:text-lg">Double Sided<br /></span>
                    HPL EXTERIOR LAMINATES
                  </h1>
                </div>
                <div style={{ backgroundColor: '#eb4c34' }} className="absolute mt-1 bottom-0 left-0 w-full h-3 md:h-6"></div>
              </div>
            </div>
            <img
              src={AdhamsWhite}
              alt="Small Icon"
              className="absolute bottom-[-12px] md:bottom-8 left-1 md:left-12 w-24 h-16 m-5 md:w-64 md:h-auto object-contain"
            />
          </div>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-6xl px-4">
            {products.map((product, index) => (
              <div key={index} className="relative flex justify-center">
                {/* Product Card */}
                <div
                  className="border p-3 shadow-lg bg-white w-64 md:w-full rounded-md flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHoveredImage(product.zoomImage)} // Show zoomed-in image
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img src={product.image} alt={`Product ${index}`} className="w-full h-auto md:h-auto md:w-full object-cover" />
                </div>
  
                {/* Popup for enlarged image */}
                {/* Popup for enlarged image */}
                {hoveredImage === product.zoomImage && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-300 w-[300px] md:w-[500px] p-4 md:p-6 rounded-lg shadow-4xl border">
                    <img src={hoveredImage} alt="Large Product" className="w-[300px] md:w-[500px] h-auto object-cover transition-transform duration-300 scale-105" />
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <img
                        src={AdhamsWhite}
                        alt="Large Product"
                        className="md:w-auto md:h-[100px] h-[50px] w-auto mt-3 object-cover"
                        />
                        <div className='flex align-center justify-center'>
                        <h1 className="ml-0 sm:ml-5 mt-3 md:mt-12 sm:mt-5 text-center r  sm:text-left text-sm sm:text-lg">
                        Double Sided<br />
                        HPL EXTERIOR LAMINATES
                        </h1>
                        </div>
                    </div>
                    </div>
                 )}
  
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
export default HplExteriorLaminate
