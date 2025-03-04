import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import CladdingBanner from '../../Assets/Home/homeSlider 3.png';

import Ipe from '../../Assets/Products/ExteriorCladding/image1.png';
import Teak from '../../Assets/Products/ExteriorCladding/image2.png';
import Stone from '../../Assets/Products/ExteriorCladding/image3.png';
import TeakBg from '../../Assets/Products/ExteriorCladding/image4.png';
import StoneBg from '../../Assets/Products/ExteriorCladding/image5.png';

const products = [
  { image: Ipe },
  { image: Teak },
  { image: Stone },
  { image: TeakBg },
  { image: StoneBg },
];

function ExteriorCladding() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="w-full min-h-screen bg-neutral-50">
      <Navbar />
      <div className="flex flex-col items-center montserrat">
        <div className="relative">
          <img src={CladdingBanner} alt="Company Banner" className="w-auto h-auto" />
          <div className="absolute inset-0 flex items-center justify-center mt-40 md:ml-60 ml-40">
            <div className="relative w-full md:ml-[596px] md:mt-[550px] ">
              <div style={{ overflow: 'hidden' }}>
                <h1 className="text-white text-base sm:text-md md:text-2xl lg:text-4xl montserrat font-bold bg-opacity-45 bg-gray-800 px-5 sm:px-6 md:px-7 py-3 sm:py-4 md:py-6 w-full">
                  <span className="text-sm md:text-2xl">Co-extrusion | Non brushed<br /></span>
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
                onMouseEnter={() => setHoveredImage(product.image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img src={product.image} alt={`Product ${index}`} className="w-full h-auto md:h-auto md:w-full object-cover" />
              </div>

              {/* Popup for enlarged image */}
              {hoveredImage === product.image && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-300 w-[200px] md:w-[400px] p-4 rounded-lg shadow-4xl border">
                  <img src={product.image} alt="Large Product" className="w-[800px] h-auto object-cover" />
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
  <img
    src={AdhamsWhite}
    alt="Large Product"
    className="md:w-auto md:h-[80px] h-[40px] w-auto mt-2 object-cover"
  />
  <h1 className="ml-0 sm:ml-5 mt-3 sm:mt-5 text-center sm:text-left text-sm sm:text-base">
    Co-extrusion | Non brushed<br />
    21.9cm X 26mm X 2.9m<br />
    WPC EXTERIOR CLADDINGS
  </h1>
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

export default ExteriorCladding;
