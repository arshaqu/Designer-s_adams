import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import BannerImg from '../../Assets/Products/Banners/FRENCH MOULDINGS.jpg';





import Image1 from '../../Assets/Products/FrenchMouldings/Image1.jpg'
import Image2 from '../../Assets/Products/FrenchMouldings/Image2.jpg'
import Image3 from '../../Assets/Products/FrenchMouldings/Image3.jpg'
import Image4 from '../../Assets/Products/FrenchMouldings/Image4.jpg'
import Image5 from '../../Assets/Products/FrenchMouldings/Image5.jpg'
import Image6 from '../../Assets/Products/FrenchMouldings/Image6.jpg'
import Image7 from '../../Assets/Products/FrenchMouldings/Image7.jpg'
import Image8 from '../../Assets/Products/FrenchMouldings/Image8.jpg'
import Image9 from '../../Assets/Products/FrenchMouldings/Image9.jpg'
import Image10 from '../../Assets/Products/FrenchMouldings/Image10.jpg'
import Image11 from '../../Assets/Products/FrenchMouldings/Image11.jpg'
import Image12 from '../../Assets/Products/FrenchMouldings/Image12.jpg'
import Image13 from '../../Assets/Products/FrenchMouldings/Image13.jpg'
import Image14 from '../../Assets/Products/FrenchMouldings/Image14.jpg'
import Image15 from '../../Assets/Products/FrenchMouldings/Image15.jpg'
import Image16 from '../../Assets/Products/FrenchMouldings/Image16.jpg'
import Image17 from '../../Assets/Products/FrenchMouldings/Image17.jpg'
import Image18 from '../../Assets/Products/FrenchMouldings/Image18.jpg'
import Image19 from '../../Assets/Products/FrenchMouldings/Image19.jpg'
import Image20 from '../../Assets/Products/FrenchMouldings/Image20.jpg'
import Image21 from '../../Assets/Products/FrenchMouldings/Image21.jpg'
import Image22 from '../../Assets/Products/FrenchMouldings/Image22.jpg'




const products = [
    // Small
      { image: Image1, zoomImage: Image1 },
      { image: Image2, zoomImage: Image2 },
      { image: Image3, zoomImage: Image3 },
      { image: Image4, zoomImage: Image4 },
      { image: Image5, zoomImage: Image5 },
      { image: Image6, zoomImage: Image6 },
      { image: Image7, zoomImage: Image7 },
      { image: Image8, zoomImage: Image8 },
      { image: Image9, zoomImage: Image9 },
      { image: Image10, zoomImage: Image10 },
      { image: Image11, zoomImage: Image11 },
      { image: Image12, zoomImage: Image12 },
      { image: Image13, zoomImage: Image13 },
      { image: Image14, zoomImage: Image14 },
      { image: Image15, zoomImage: Image15 },
      { image: Image16, zoomImage: Image16 },
      { image: Image17, zoomImage: Image17 },
      { image: Image18, zoomImage: Image18 },
      { image: Image19, zoomImage: Image19 },
      { image: Image20, zoomImage: Image20 },
      { image: Image21, zoomImage: Image21 },
      { image: Image22, zoomImage: Image22 },
      
  ];

function FrenchModules() {
    const [hoveredImage, setHoveredImage] = useState(null); 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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
                    FRENCH MOULDINGS
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
                    <div className="absolute mt-40 md:mt-0 top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-300 w-[300px] md:w-[500px] p-4 md:p-6 rounded-lg shadow-4xl border">
                    <img src={hoveredImage} alt="Large Product" className="w-[300px] md:w-[500px] h-auto object-cover transition-transform duration-300 scale-105" />
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <img
                        src={AdhamsWhite}
                        alt="Large Product"
                        className="md:w-auto md:h-[100px] h-[50px] w-auto mt-5 md:mt-8 object-cover"
                        />
                        <div className='flex align-center justify-center'>
                        <h1 className="ml-0 sm:ml-5 mt-3 md:mt-12 sm:mt-5 text-center r  sm:text-left text-sm sm:text-lg">
                        Interior Wall and Ceiling<br />
                        French Moulds <br/>
                        
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
export default FrenchModules
