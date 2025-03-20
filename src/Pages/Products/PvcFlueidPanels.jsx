import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import BannerImg from '../../Assets/Products/Banners/WPVC PASTEL LOUVERS.png';


import Image1 from '../../Assets/Products/PvcFluied/Image1.png'
import Image2 from '../../Assets/Products/PvcFluied/Image2.png'
import Image3 from '../../Assets/Products/PvcFluied/Image3.png'
import Image4 from '../../Assets/Products/PvcFluied/Image4.png'
import Image5 from '../../Assets/Products/PvcFluied/Image5.png'
import Image6 from '../../Assets/Products/PvcFluied/Image6.png'
import Image7 from '../../Assets/Products/PvcFluied/Image7.png'
import Image8 from '../../Assets/Products/PvcFluied/Image8.png'
import Image9 from '../../Assets/Products/PvcFluied/Image9.png'
import Image10 from '../../Assets/Products/PvcFluied/Image10.png'
import Image11 from '../../Assets/Products/PvcFluied/Image11.png'
import Image12 from '../../Assets/Products/PvcFluied/Image12.png'
import Image13 from '../../Assets/Products/PvcFluied/Image13.png'
import Image14 from '../../Assets/Products/PvcFluied/Image14.png'
import Image15 from '../../Assets/Products/PvcFluied/Image15.png'
import Image16 from '../../Assets/Products/PvcFluied/Image16.png'
import Image17 from '../../Assets/Products/PvcFluied/Image17.png'
import Image18 from '../../Assets/Products/PvcFluied/Image18.png'
import Image19 from '../../Assets/Products/PvcFluied/Image19.png'
import Image20 from '../../Assets/Products/PvcFluied/Image20.png'
import Image21 from '../../Assets/Products/PvcFluied/Image21.png'


import Image1Zoom from '../../Assets/Products/PvcFluied/Image1Zoom.png'
import Image2Zoom from '../../Assets/Products/PvcFluied/Image2Zoom.png'
import Image3Zoom from '../../Assets/Products/PvcFluied/Image3Zoom.png'
import Image4Zoom from '../../Assets/Products/PvcFluied/Image4Zoom.png'
import Image5Zoom from '../../Assets/Products/PvcFluied/Image5Zoom.png'
import Image6Zoom from '../../Assets/Products/PvcFluied/Image6Zoom.png'
import Image7Zoom from '../../Assets/Products/PvcFluied/Image7Zoom.png'
import Image8Zoom from '../../Assets/Products/PvcFluied/Image8Zoom.png'
import Image9Zoom from '../../Assets/Products/PvcFluied/Image9.png'
import Image10Zoom from '../../Assets/Products/PvcFluied/Image10Zoom.png'
import Image11Zoom from '../../Assets/Products/PvcFluied/Image11Zoom.png'
import Image12Zoom from '../../Assets/Products/PvcFluied/Image12Zoom.png'
import Image13Zoom from '../../Assets/Products/PvcFluied/Image13Zoom.png'
import Image14Zoom from '../../Assets/Products/PvcFluied/Image14Zoom.png'
import Image15Zoom from '../../Assets/Products/PvcFluied/Image15Zoom.png'
import Image16Zoom from '../../Assets/Products/PvcFluied/Image16Zoom.png'
import Image17Zoom from '../../Assets/Products/PvcFluied/Image17Zoom.png'
import Image18Zoom from '../../Assets/Products/PvcFluied/Image18Zoom.png'
import Image19Zoom from '../../Assets/Products/PvcFluied/Image19Zoom.png'
import Image20Zoom from '../../Assets/Products/PvcFluied/Image20Zoom.png'
import Image21Zoom from '../../Assets/Products/PvcFluied/Image21Zoom.png'





const products = [
    { image: Image1, zoomImage: Image1Zoom },
    { image: Image2, zoomImage: Image2Zoom },
    { image: Image3, zoomImage: Image3Zoom },
    { image: Image4, zoomImage: Image4Zoom },
    { image: Image5, zoomImage: Image5Zoom },
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
    { image: Image19, zoomImage: Image19Zoom },
    { image: Image20, zoomImage: Image20Zoom },
    { image: Image21, zoomImage: Image21Zoom },


];



function PvcFlueidPanels() {
    const [hoveredImage, setHoveredImage] = useState(null); 
    return (
      <div className="w-full min-h-screen bg-neutral-50">
        <Navbar />
        <div className="flex flex-col items-center montserrat">
          <div className="relative">
            <img src={BannerImg} alt="Company Banner" className="w-auto h-auto" />
            <div className="absolute inset-0 flex items-center justify-center mt-40 md:ml-60 ml-40">
              <div className="relative w-full md:ml-[596px] md:mt-[550px] ">
                <div style={{ overflow: 'hidden' }}>
                  <h1 className="text-white text-xs sm:text-sm md:text-lg lg:text-2xl montserrat font-bold bg-opacity-45 bg-gray-800 px-4 sm:px-5 md:px-6 py-4 sm:py-3 md:py-5 w-full">
                    <span className="text-xxs md:text-lg">Interior Wall and Ceiling<br /></span>
                    PVC FLUTED PANELS
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
                {hoveredImage === product.zoomImage && (
                    <div className="absolute md:mt-0 mt-40 top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-300 w-[300px] md:w-[500px] p-4 md:p-6 rounded-lg shadow-4xl border">
                    <img src={hoveredImage} alt="Large Product" className="w-[300px] md:w-[500px] h-auto object-cover transition-transform duration-300 scale-105" />
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <img
                        src={AdhamsWhite}
                        alt="Large Product"
                        className="md:w-auto md:h-[100px] h-[50px] w-auto mt-5 object-cover"
                        />
                        <div className='flex align-center justify-center'>
                        <h1 className="ml-0 sm:ml-5 mt-3 md:mt-12 sm:mt-5 text-center r  sm:text-left text-sm sm:text-lg">
                        Outdoor-Indoor under roof<br />
                        PVC SOFFIT PANELS<br/>
                        30cm X 12mm X 3.05m
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
  )
}
export default PvcFlueidPanels
