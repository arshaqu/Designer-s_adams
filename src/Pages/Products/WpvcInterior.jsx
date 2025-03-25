import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import WpvcPastelBanner from '../../Assets/Products/Banners/WpvcInteriors.png';



import Image1 from '../../Assets/Products/WpvcInterior/Image1.png'
import Image2 from '../../Assets/Products/WpvcInterior/Image2.png'
import Image3 from '../../Assets/Products/WpvcInterior/Image3.png'
import Image4 from '../../Assets/Products/WpvcInterior/Image4.png'
import Image5 from '../../Assets/Products/WpvcInterior/Image5.png'
import Image6 from '../../Assets/Products/WpvcInterior/Image6.png'
import Image7 from '../../Assets/Products/WpvcInterior/Image7.png'
import Image8 from '../../Assets/Products/WpvcInterior/Image8.png'
import Image9 from '../../Assets/Products/WpvcInterior/Image9.png'
import Image10 from '../../Assets/Products/WpvcInterior/Image10.png'
import Image11 from '../../Assets/Products/WpvcInterior/Image11.png'
import Image12 from '../../Assets/Products/WpvcInterior/Image12.png'
import Image13 from '../../Assets/Products/WpvcInterior/Image13.png'
import Image14 from '../../Assets/Products/WpvcInterior/Image14.png'
import Image15 from '../../Assets/Products/WpvcInterior/Image15.png'
import Image16 from '../../Assets/Products/WpvcInterior/Image16.png'
import Image17 from '../../Assets/Products/WpvcInterior/Image17.png'
import Image18 from '../../Assets/Products/WpvcInterior/Image18.png'
import Image19 from '../../Assets/Products/WpvcInterior/Image19.png'
import Image20 from '../../Assets/Products/WpvcInterior/Image20.png'
import Image21 from '../../Assets/Products/WpvcInterior/Image21.png'
import Image22 from '../../Assets/Products/WpvcInterior/Image22.png'
import Image23 from '../../Assets/Products/WpvcInterior/Image23.png'
import Image24 from '../../Assets/Products/WpvcInterior/Image24.png'
import Image25 from '../../Assets/Products/WpvcInterior/Image25.png'
import Image26 from '../../Assets/Products/WpvcInterior/Image26.png'
import Image27 from '../../Assets/Products/WpvcInterior/Image27.png'
import Image28 from '../../Assets/Products/WpvcInterior/Image28.png'
import Image29 from '../../Assets/Products/WpvcInterior/Image29.png'
import Image30 from '../../Assets/Products/WpvcInterior/Image30.png'




import Image1Zoom from '../../Assets/Products/WpvcInterior/Image1Zoom.png'
import Image2Zoom from '../../Assets/Products/WpvcInterior/Image2Zoom.png'
import Image3Zoom from '../../Assets/Products/WpvcInterior/Image3Zoom.png'
import Image4Zoom from '../../Assets/Products/WpvcInterior/Image4Zoom.png'
import Image5Zoom from '../../Assets/Products/WpvcInterior/Image5Zoom.png'
import Image6Zoom from '../../Assets/Products/WpvcInterior/Image6Zoom.png'
import Image7Zoom from '../../Assets/Products/WpvcInterior/Image7Zoom.png'
import Image8Zoom from '../../Assets/Products/WpvcInterior/Image8Zoom.png'
import Image9Zoom from '../../Assets/Products/WpvcInterior/Image9Zoom.png'
import Image10Zoom from '../../Assets/Products/WpvcInterior/Image10Zoom.png'
import Image11Zoom from '../../Assets/Products/WpvcInterior/Image11Zoom.png'
import Image12Zoom from '../../Assets/Products/WpvcInterior/Image12Zoom.png'
import Image13Zoom from '../../Assets/Products/WpvcInterior/Image13Zoom.png'
import Image14Zoom from '../../Assets/Products/WpvcInterior/Image14Zoom.png'
import Image15Zoom from '../../Assets/Products/WpvcInterior/Image15Zoom.png'
import Image16Zoom from '../../Assets/Products/WpvcInterior/Image16Zoom.png'
import Image17Zoom from '../../Assets/Products/WpvcInterior/Image17Zoom.png'
import Image18Zoom from '../../Assets/Products/WpvcInterior/Image18Zoom.png'
import Image19Zoom from '../../Assets/Products/WpvcInterior/Image19Zoom.png'
import Image20Zoom from '../../Assets/Products/WpvcInterior/Image20Zoom.png'
import Image21Zoom from '../../Assets/Products/WpvcInterior/Image21Zoom.png'
import Image22Zoom from '../../Assets/Products/WpvcInterior/Image22Zoom.png'
import Image23Zoom from '../../Assets/Products/WpvcInterior/Image23Zoom.png'
import Image24Zoom from '../../Assets/Products/WpvcInterior/Image24Zoom.png'
import Image25Zoom from '../../Assets/Products/WpvcInterior/Image25Zoom.png'
import Image26Zoom from '../../Assets/Products/WpvcInterior/Image26Zoom.png'
import Image27Zoom from '../../Assets/Products/WpvcInterior/Image27Zoom.png'
import Image28Zoom from '../../Assets/Products/WpvcInterior/Image28Zoom.png'
import Image29Zoom from '../../Assets/Products/WpvcInterior/Image29Zoom.png'
import Image30Zoom from '../../Assets/Products/WpvcInterior/Image30Zooom.png'



function WpvcInterior() {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        { image: Image1, zoomImage: Image1Zoom, content: "WPVC INTERIOR LOUVERS",size: "16cm X 23mm X 2.9m" },
        { image: Image2, zoomImage: Image2Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 23mm X 2.9m"},
        { image: Image3, zoomImage: Image3Zoom, content: "WPVC INTERIOR LOUVERS",size: "16cm X 23mm X 2.9m" },
        { image: Image4, zoomImage: Image4Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 23mm X 2.9m"},
        { image: Image5, zoomImage: Image5Zoom, content: "WPVC INTERIOR LOUVERS",size: "16cm X 23mm X 2.9m" },
        { image: Image6, zoomImage: Image6Zoom, content: "WPVC INTERIOR LOUVERS",size: "16cm X 23mm X 2.9m" },
        { image: Image7, zoomImage: Image7Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 23mm X 2.9m"},
        { image: Image8, zoomImage: Image8Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "168mm X 18mm X 2900mm"},
        { image: Image9, zoomImage: Image9Zoom, content: "WPVC INTERIOR LOUVERS",size: "19.5cm X 13mm X 2.9m" },
        { image: Image10, zoomImage: Image10Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "19.5cm X 13mm X 2.9m"},
        { image: Image11, zoomImage: Image11Zoom, content: "WPVC INTERIOR LOUVERS",size: "195m X 12mm X 2900mm" },
        { image: Image12, zoomImage: Image12Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "19.5cm X 13mm X 2.9m"},
        { image: Image13, zoomImage: Image13Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "19.5cm X 13mm X 2.9m"},
        { image: Image14, zoomImage: Image14Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "195mm X 12mm X 2900mm"},
        { image: Image15, zoomImage: Image15Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 17mm X 2.9m00000000000"},
        { image: Image16, zoomImage: Image16Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "150mm X 15mm X 2900mm"},
        { image: Image17, zoomImage: Image17Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 8mm X 2.9m"},
        { image: Image18, zoomImage: Image18Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 18mm X 2.9m"},
        { image: Image19, zoomImage: Image19Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "196mm X 12mm X 2900mm"},
        { image: Image20, zoomImage: Image20Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "195mm X 14mm X 2900mm"},
        { image: Image21, zoomImage: Image21Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "150mm X 15mm X 2900mm"},
        { image: Image22, zoomImage: Image22Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 17mm X 2.9mm"},
        { image: Image23, zoomImage: Image23Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 18mm X 2.9m"},
        { image: Image24, zoomImage: Image24Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 23mm X 2.9m"},
        { image: Image25, zoomImage: Image25Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "196mm X 12mm X 2900mm"},
        { image: Image26, zoomImage: Image26Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 23mm X 2.9m"},
        
            
        { image: Image27, zoomImage: Image27Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 23mm X 2.9m"},
        { image: Image28, zoomImage: Image28Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 18mm X 2.9m"},
        { image: Image29, zoomImage: Image29Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 23mm X 2.9m"},
        { image: Image30, zoomImage: Image30Zoom, content: "WPVC INTERIOR LOUVERS" ,size: "16cm X 17mmm X 2.9m"},



    ];
    

      useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

        const [hoveredImage, setHoveredImage] = useState(null); 

        return (
          <div className="w-full min-h-screen bg-neutral-50">
            <Navbar />
            <div className="flex flex-col items-center montserrat">
              <div className="relative">
                <img src={WpvcPastelBanner} alt="Company Banner" className="w-auto h-auto" />
                <div className="absolute inset-0 flex items-center justify-center mt-40 md:ml-60 ml-40">
                  <div className="relative w-full md:ml-[596px] md:mt-[550px] ">
                    <div style={{ overflow: 'hidden' }}>
                      <h1 className="text-white text-xs sm:text-sm md:text-lg lg:text-2xl montserrat font-bold bg-opacity-45 bg-gray-800 px-4 sm:px-5 md:px-6 py-4 sm:py-3 md:py-5 w-full">
                        <span className="text-xxs md:text-lg">Interior Wall and Ceiling<br /></span>
                        WPVC PANELS
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
                            className="md:w-auto md:h-[100px] h-[50px] w-auto mt-5 object-cover"
                            />
                            <div className='flex align-center justify-center'>
                            <h1 className="ml-0 sm:ml-5 md:ml-12 mt-3 md:mt-12 sm:mt-5 text-center r  sm:text-left text-sm sm:text-lg">
                                
                            {product.content}<br/>
                                {product.size}
                            </h1>
                            <h1>
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



export default WpvcInterior
