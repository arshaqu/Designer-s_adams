import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import WpvcPastelBanner from '../../Assets/Products/Banners/WPVC PASTEL LOUVERS.png';

import Image1 from '../../Assets/Products/WpvcPastel/Image1.png';
import Image2 from '../../Assets/Products/WpvcPastel/Image2.png';
import Image3 from '../../Assets/Products/WpvcPastel/Image3.png'
import Image4 from '../../Assets/Products/WpvcPastel/Image4.png'
import Image5 from '../../Assets/Products/WpvcPastel/Image5.png'
import Image6 from '../../Assets/Products/WpvcPastel/Image6.png'
import Image7 from '../../Assets/Products/WpvcPastel/Image7.png'
import Image8 from '../../Assets/Products/WpvcPastel/Image8.png'
import Image9 from '../../Assets/Products/WpvcPastel/Image9.png'
import Image10 from '../../Assets/Products/WpvcPastel/Image10.png'
import Image11 from '../../Assets/Products/WpvcPastel/Image11.png'
import Image12 from '../../Assets/Products/WpvcPastel/Image12.png'
import Image13 from '../../Assets/Products/WpvcPastel/Image13.png'
import Image14 from '../../Assets/Products/WpvcPastel/Image14.png'


import Image1Zoom from '../../Assets/Products/WpvcPastel/Image1Zoom.png';
import Image2Zoom from '../../Assets/Products/WpvcPastel/Image2Zoom.png';
import Image3Zoom from '../../Assets/Products/WpvcPastel/Image3Zoom.png';
import Image4Zoom from '../../Assets/Products/WpvcPastel/Image4Zoom.png';
import Image5Zoom from '../../Assets/Products/WpvcPastel/Image5Zoom.png';
import Image6Zoom from '../../Assets/Products/WpvcPastel/Image6Zoom.png';
import Image7Zoom from '../../Assets/Products/WpvcPastel/Image7Zoom.png';
import Image8Zoom from '../../Assets/Products/WpvcPastel/Image8Zoom.png';
import Image9Zoom from '../../Assets/Products/WpvcPastel/Image9Zoom.png';
import Image10Zoom from '../../Assets/Products/WpvcPastel/Image10Zoom.png';
import Image11Zoom from '../../Assets/Products/WpvcPastel/Image11Zoom.png';
import Image12Zoom from '../../Assets/Products/WpvcPastel/Image12Zoom.png';
import Image13Zoom from '../../Assets/Products/WpvcPastel/Image13Zoom.png';
import Image14Zoom from '../../Assets/Products/WpvcPastel/Image14Zoom.png';



const products = [
    { image: Image1, zoomImage: Image1Zoom, content: "WPVC PASTEL PANELS",size: "196mm X 12mm X 2900mm" },
    { image: Image2, zoomImage: Image2Zoom, content: "WPVC PASTEL PANELS" ,size: "196mm X 12mm X 2900mm"},
    { image: Image3, zoomImage: Image3Zoom, content: "WPVC PASTEL PANELS",size: "196mm X 12mm X 2900mm" },
    { image: Image4, zoomImage: Image4Zoom, content: "WPVC PASTEL PANELS" ,size: "150mm X 15mm X 2900mm"},
    { image: Image5, zoomImage: Image5Zoom, content: "WPVC PASTEL PANELS",size: "150mm X 15mm X 2900mm" },
    { image: Image6, zoomImage: Image6Zoom, content: "WPVC PASTEL PANELS",size: "196mm X 14mm X 2900mm" },
    { image: Image7, zoomImage: Image7Zoom, content: "WPVC PASTEL PANELS" ,size: "150mm X 09mm X 2900mm"},
    { image: Image8, zoomImage: Image8Zoom, content: "WPVC PASTEL PANELS" ,size: "150mm X 09mm X 2900mm"},
    { image: Image9, zoomImage: Image9Zoom, content: "WPVC PASTEL PANELS",size: "150mm X 09mm X 2900mm" },
    { image: Image10, zoomImage: Image10Zoom, content: "WPVC PASTEL PANELS" ,size: "150mm X 09mm X 2900mm"},
    { image: Image11, zoomImage: Image11Zoom, content: "WPVC PASTEL PANELS",size: "160mm X 23mm X 2900mm" },
    { image: Image12, zoomImage: Image12Zoom, content: "WPVC PASTEL PANELS" ,size: "160mm X 23mm X 2900mm"},
    { image: Image13, zoomImage: Image13Zoom, content: "WPVC PASTEL PANELS" ,size: "160mm X 23mm X 2900mm"},
    { image: Image14, zoomImage: Image14Zoom, content: "WPVC PASTEL PANELS" ,size: "160mm X 17mm X 2900mm"},
];

function WpvcPastel() {
    const [hoveredProduct, setHoveredProduct] = useState(null);

     useEffect(() => {
              window.scrollTo(0, 0);
            }, []);
    

    return (
        <div className="w-full min-h-screen bg-neutral-50">
            <Navbar />
            <div className="flex flex-col items-center montserrat">
                <div className="relative">
                    <img src={WpvcPastelBanner} alt="Company Banner" className="w-auto h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center mt-40 md:ml-60 ml-40">
                        <div className="relative w-full md:ml-[596px] md:mt-[550px]">
                            <div style={{ overflow: 'hidden' }}>
                                <h1 className="text-white text-xs sm:text-sm md:text-lg lg:text-2xl montserrat font-bold bg-opacity-45 bg-gray-800 px-4 sm:px-5 md:px-6 py-4 sm:py-3 md:py-5 w-full">
                                    <span className="text-xxs md:text-lg">Interior Wall and Ceiling<br /></span>
                                    WPVC PASTEL PANELS
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
                                onMouseEnter={() => setHoveredProduct(product)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <img src={product.image} alt={`Product ${index}`} className="w-full h-auto md:h-auto md:w-full object-cover" />
                            </div>

                            {/* Popup for enlarged image */}
                            {hoveredProduct === product && (
                                <div className="absolute mt-40 md:mt-0 top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-300 w-[300px] md:w-[500px] p-4 md:p-6 rounded-lg shadow-4xl border">
                                    <img src={hoveredProduct.zoomImage} alt="Large Product" className="w-[300px] md:w-[500px] h-auto object-cover transition-transform duration-300 scale-105" />
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                        <img
                                            src={AdhamsWhite}
                                            alt="Large Product"
                                            className="md:w-auto md:h-[100px] h-[50px] w-auto mt-5 object-cover"
                                        />
                                        <div className=" align-center justify-center">
                                            <h1 className="ml-0 sm:ml-5 mt-3 md:mt-12 md:ml-12 sm:mt-5 text-center sm:text-left text-sm sm:text-lg">
                                                {hoveredProduct.content}
                                            </h1>
                                            <h1 className="ml-0 sm:ml-5  md:ml-12 sm:mt-5 text-center sm:text-left text-sm sm:text-lg">
                                                {hoveredProduct.size}
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

export default WpvcPastel;
