import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import CladdingBanner from '../../Assets/Products/Banners/Wpc exterior.png';

import Ipe from '../../Assets/Products/ExteriorCladding/image1.png';
import Teak from '../../Assets/Products/ExteriorCladding/image2.png';
import Stone from '../../Assets/Products/ExteriorCladding/image3.png';
import TeakBg from '../../Assets/Products/ExteriorCladding/image4.png';
import StoneBg from '../../Assets/Products/ExteriorCladding/image5.png';

// Define images for zoomed-in effect
import IpeZoom from '../../Assets/Products/ExteriorCladding/Ipezoom.png';
import TeakZoom from '../../Assets/Products/ExteriorCladding/Teakzoom.png';
import StoneZoom from '../../Assets/Products/ExteriorCladding/stonegrey.png';
import TeakBgZoom from '../../Assets/Products/ExteriorCladding/TeakBgzoom.png';
import StoneBgZoom from '../../Assets/Products/ExteriorCladding/stonegreybg.png';

// Product List with both normal and zoomed-in images
const products = [
  { image: Ipe, zoomImage: IpeZoom },
  { image: Teak, zoomImage: TeakZoom },
  { image: Stone, zoomImage: StoneZoom },
  { image: TeakBg, zoomImage: TeakBgZoom },
  { image: StoneBg, zoomImage: StoneBgZoom },
];

function ExteriorCladding() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to close the popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectedImage && !event.target.closest('.zoom-popup')) {
        setSelectedImage(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

  return (
    <div className="w-full min-h-screen bg-neutral-50">
      <Navbar />
      <div className="flex flex-col items-center montserrat">
        <div className="relative">
          <img src={CladdingBanner} alt="Company Banner" className="w-auto h-auto" />
          <div className="absolute inset-0 flex items-center justify-center mt-40 md:ml-60 ml-40">
            <div className="relative w-full md:ml-[596px] md:mt-[550px] ">
              <div style={{ overflow: 'hidden' }}>
                <h1 className="text-white text-xs sm:text-sm md:text-lg lg:text-2xl montserrat font-bold bg-opacity-45 bg-gray-800 px-4 sm:px-5 md:px-6 py-4 sm:py-3 md:py-5 w-full">
                  <span className="text-xxs md:text-lg">Co-extrusion|Non brushed<br /></span>
                  EXTERIOR CLADDINGS
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
                onClick={() => setSelectedImage(product.zoomImage)} // Show zoomed-in image on click
              >
                <img src={product.image} alt={`Product ${index}`} className="w-full h-auto md:h-auto md:w-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Popup for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="zoom-popup relative bg-gray-300 w-[300px] md:w-[500px] p-4 md:p-6 rounded-lg shadow-4xl border">
              <img src={selectedImage} alt="Large Product" className="w-[300px] md:w-[680px] h-auto object-cover transition-transform duration-300 scale-105" />
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  src={AdhamsWhite}
                  alt="Large Product"
                  className="md:w-auto md:h-[80px]  h-[50px] w-auto mt-3 md:mt-8 object-cover"
                />
                <h1 className="ml-0 sm:ml-5 mt-3 sm:mt-5 md:mt-10 md:ml-12 text-center sm:text-left text-sm sm:text-lg">
                  Co-extrusion | Non brushed<br />
                  21.9cm X 26mm X 2.9m<br />
                  WPC EXTERIOR CLADDINGS
                </h1>
              </div>
              {/* Close button */}
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ExteriorCladding;
