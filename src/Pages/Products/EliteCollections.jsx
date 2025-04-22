import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import EliteBanner from '../../Assets/Elite/eliteBg.jpg';

import Image1 from '../../Assets/Elite/Image1.png'
import Image2 from '../../Assets/Elite/Image2.png'
import Image3 from '../../Assets/Elite/Image3.png'
import Image4 from '../../Assets/Elite/Image4.png'
import Image5 from '../../Assets/Elite/Image5.png'
import Image6 from '../../Assets/Elite/Image6.png'
import Image7 from '../../Assets/Elite/Image7.png'
import Image8 from '../../Assets/Elite/Image8.png'
import Image9 from '../../Assets/Elite/Image9.png'
import Image10 from '../../Assets/Elite/Image10.png'
import Image11 from '../../Assets/Elite/Image11.png'
import Image12 from '../../Assets/Elite/Image12.png'
import Image13 from '../../Assets/Elite/Image13.png'
import Image14 from '../../Assets/Elite/Image14.png'
import Image15 from '../../Assets/Elite/Image15.png'
import Image16 from '../../Assets/Elite/Image16.png'
import Image17 from '../../Assets/Elite/Image17.png'
import Image18 from '../../Assets/Elite/Image18.png'


// Define images for zoomed-in effect
import Image1Zoom from '../../Assets/Elite/Image11Zoom.png'
import Image2Zoom from '../../Assets/Elite/Image2Zoom.png'
import Image3Zoom from '../../Assets/Elite/Image3Zoom.png'
import Image4Zoom from '../../Assets/Elite/Image4Zoom.png'
import Image5Zoom from '../../Assets/Elite/Image5Zoom.png'
import Image6Zoom from '../../Assets/Elite/Image6Zoom.png'
import Image7Zoom from '../../Assets/Elite/Image7Zoom.png'
import Image8Zoom from '../../Assets/Elite/Image8Zoom.png'
import Image9Zoom from '../../Assets/Elite/Image9Zoom.png'
import Image10Zoom from '../../Assets/Elite/Image10Zoom.png'
import Image11Zoom from '../../Assets/Elite/Image11Zoom.png'
import Image12Zoom from '../../Assets/Elite/Image12Zoom.png'
import Image13Zoom from '../../Assets/Elite/Image13Zoom.png'
import Image14Zoom from '../../Assets/Elite/Image14Zoom.png'
import Image15Zoom from '../../Assets/Elite/Image15Zoom.png'
import Image16Zoom from '../../Assets/Elite/Image16Zoom.png'
import Image17Zoom from '../../Assets/Elite/Image17Zoom.png'
import Image18Zoom from '../../Assets/Elite/Image18Zoom.png'



// Product List with both normal and zoomed-in images
const products = [
    { image: Image1, zoomImage: Image1Zoom ,title:'150X14X2900mm'},
    { image: Image2, zoomImage: Image2Zoom ,title:'150X14X2900mm'},
    { image: Image3, zoomImage: Image3Zoom ,title:'150X14X2900mm'},
    { image: Image4, zoomImage: Image4Zoom ,title:'150X14X2900mm'},
    { image: Image5, zoomImage: Image5Zoom ,title:'150X14X2900mm'},
    { image: Image6, zoomImage: Image6Zoom },
    { image: Image7, zoomImage: Image7Zoom },
    { image: Image8, zoomImage: Image8Zoom },
    { image: Image9, zoomImage: Image9Zoom },
    { image: Image10, zoomImage: Image10Zoom },
    { image: Image11, zoomImage: Image11Zoom },
    { image: Image12, zoomImage: Image12Zoom },
    { image: Image13, zoomImage: Image13Zoom },
    { image: Image14, zoomImage: Image14Zoom },
    { image: Image15, zoomImage: Image15Zoom },
    { image: Image16, zoomImage: Image16Zoom },
    { image: Image17, zoomImage: Image17Zoom },
    { image: Image18, zoomImage: Image18Zoom },

];

function EliteCollections() {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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
      <div className="w-full min-h-screen bg-gray-800">
        <Navbar />
        <div className="flex flex-col items-center montserrat">
          <div className="relative">
            <img src={EliteBanner} alt="Company Banner" className="w-auto h-auto" />
            <div className="absolute inset-0 flex items-center justify-center mt-40 md:ml-60 ml-40">
              <div className="relative w-full md:ml-[596px] md:mt-[550px] ">
                <div style={{ overflow: 'hidden' }}>
                  <h1 className="text-white text-xs sm:text-sm md:text-lg lg:text-2xl montserrat font-bold bg-opacity-45 bg-gray-800 px-4 sm:px-5 md:px-6 py-4 sm:py-3 md:py-5 w-full">
                    <span className="text-xxs md:text-lg">WPVC INTERIOR WALL PANELS<br /></span>
                    PREMIUM COLLECTIONS
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
              <div className="zoom-popup relative bg-gray-900 w-[300px] md:w-[500px] p-4 md:p-6 rounded-lg shadow-4xl border">
                <img src={selectedImage} alt="Large Product" className="w-[300px] md:w-[680px] h-auto object-cover transition-transform duration-300 scale-105" />
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <img
                    src={AdhamsWhite}
                    alt="Large Product"
                    className="md:w-auto md:h-[80px]  h-[50px] w-auto mt-3 md:mt-8 object-cover"
                  />
                  <h1 className="ml-0 sm:ml-5 mt-3 sm:mt-5 md:mt-10 md:ml-12 text-center sm:text-left text-sm sm:text-lg">
                   
                 
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

export default EliteCollections
