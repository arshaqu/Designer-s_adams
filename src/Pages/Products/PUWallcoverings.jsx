import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import SoffitBanner from '../../Assets/Products/Banners//PU.png';

import Image1 from '../../Assets/Products/PuWallcovering/Image1.png'
import Image2 from '../../Assets/Products/PuWallcovering/Image2.png'

import Image1Zoom from '../../Assets/Products/PuWallcovering/Image1Zoom.png'
import Image2Zoom from '../../Assets/Products/PuWallcovering/Image2Zoom.png'

import Asset1 from '../../Assets/Products/PuWallcovering/Asset1.png'
import Asset2 from '../../Assets/Products/PuWallcovering/Asset2.png'

import Asset1Zoom from '../../Assets/Products/PuWallcovering/Asset1Zoom.png'
import Asset2Zoom from '../../Assets/Products/PuWallcovering/Asset2Zoom.png'




const products = [
    { image: Asset1, zoomImage: Asset1Zoom },
    { image: Asset2, zoomImage: Asset2Zoom },


    { image: Image1, zoomImage: Image1Zoom },
    { image: Image2, zoomImage: Image2Zoom },


];


function PUWallcoverings() {
     const [selectedProduct, setSelectedProduct] = useState(null);


    const closePopup = () => {
      setSelectedProduct(null);
    };


    return (
      <div className="w-full min-h-screen bg-neutral-50">
        <Navbar />
        <div className="flex flex-col items-center montserrat">
          <div className="relative">
            <img src={SoffitBanner} alt="Company Banner" className="w-auto h-auto" />
            <div className="absolute inset-0 flex items-center justify-center mt-40 md:ml-60 ml-40">
              <div className="relative w-full md:ml-[596px] md:mt-[550px] ">
                <div style={{ overflow: 'hidden' }}>
                  <h1 className="text-white text-xs sm:text-sm md:text-lg lg:text-2xl montserrat font-bold bg-opacity-45 bg-gray-800 px-4 sm:px-5 md:px-6 py-4 sm:py-3 md:py-5 w-full">
                    <span className="text-xxs md:text-lg">Interior Wall Panels<br /></span>
                    PU (Polyurethane) WALL COVERINGS
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
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={`Product ${index}`}
                  className="w-full h-auto md:h-auto md:w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Popup Overlay */}
        {selectedProduct && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={closePopup} // Clicking outside closes the popup
          >
            <div
              className="relative bg-gray-300 w-[300px] md:w-[500px] p-4 md:p-6 rounded-lg shadow-4xl border"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <img
                src={selectedProduct.zoomImage}
                alt="Large Product"
                className="w-[300px] md:w-[500px] h-auto object-cover transition-transform duration-300 scale-105"
              />
            

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm"
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
export default PUWallcoverings
