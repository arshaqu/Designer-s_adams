import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import BannerImg from '../../Assets/Products/Banners/1.png';


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


import Asset1 from '../../Assets/Products/PvcFluied/Asset1.png'
import Asset2 from '../../Assets/Products/PvcFluied/Asset2.png'
import Asset3 from '../../Assets/Products/PvcFluied/Asset3.png'
import Asset4 from '../../Assets/Products/PvcFluied/Asset4.png'
import Asset5 from '../../Assets/Products/PvcFluied/Asset5.png'
import Asset6 from '../../Assets/Products/PvcFluied/Asset6.png'
import Asset7 from '../../Assets/Products/PvcFluied/Asset7.png'
import Asset8 from '../../Assets/Products/PvcFluied/Asset8.png'


import Asset1Zoom from '../../Assets/Products/PvcFluied/Asset1Zoom.png'
import Asset2Zoom from '../../Assets/Products/PvcFluied/Asset2Zoom.png'
import Asset3Zoom from '../../Assets/Products/PvcFluied/Asset3Zoom.png'
import Asset4Zoom from '../../Assets/Products/PvcFluied/Asset4Zoom.png'
import Asset5Zoom from '../../Assets/Products/PvcFluied/Asset5Zoom.png'
import Asset6Zoom from '../../Assets/Products/PvcFluied/Asset6Zoom.png'
import Asset7Zoom from '../../Assets/Products/PvcFluied/Asset7Zoom.png'
import Asset8Zoom from '../../Assets/Products/PvcFluied/Asset8Zoom.png'





const products = [
  { image: Asset1, zoomImage: Asset1Zoom , name:'GL IN 315' ,Description:'width: 3050 X 300mm'},
  { image: Asset2, zoomImage: Asset2Zoom , name:'EMO3' ,Description:'width: 3050 X 300mm'},
  { image: Asset3, zoomImage: Asset3Zoom , name:'2075' ,Description:'width: 3050 X 300mm'},
  { image: Asset4, zoomImage: Asset4Zoom , name:'2034 GREY' ,Description:'width: 3050 X 300mm'},
  { image: Asset5, zoomImage: Asset5Zoom , name:'IN 2012' ,Description:'width: 3050 X 300mm'},
  { image: Asset6, zoomImage: Asset6Zoom , name:'IN 2015' ,Description:'width: 3050 X 300mm'},
  { image: Asset7, zoomImage: Asset7Zoom , name:'IN 1248 uPVC' ,Description:'width: 3050 X 300mm'},
  { image: Asset8, zoomImage: Asset8Zoom , name:'IN 1264 uPVC' ,Description:'width: 3050 X 300mm'},


    { image: Image1, zoomImage: Image1Zoom , name:'305 - BEIGE' ,Description:'width: 10 inch Length : 10ft'},
    { image: Image2, zoomImage: Image2Zoom , name:'7012 - STONE GREY' ,Description:'width: 10 inch Length : 10ft'},
    { image: Image3, zoomImage: Image3Zoom , name:'2024 - WALNUT' ,Description:'width: 12 inch Length : 10ft' },
    { image: Image4, zoomImage: Image4Zoom , name:'3025 - DARK OAK' ,Description:'width: 12 inch Length : 10ft'},
    { image: Image5, zoomImage: Image5Zoom  , name:'356 - GOLDLINE',Description:'width: 12 inch Length : 10ft'},
    { image: Image6, zoomImage: Image6Zoom , name:'2007 - MAHAGONY',Description:'width: 12 inch Length : 10ft'},
    { image: Image7, zoomImage: Image7Zoom , name:'2052 - WHITE MARBLE',Description:'width: 12 inch Length : 10ft'},
    { image: Image8, zoomImage: Image8Zoom , name:'2023 - RED OAK',Description:'width: 12 inch Length : 10ft'},
    { image: Image9, zoomImage: Image9Zoom , name:'2004 - WHITE OAK',Description:'width: 12 inch Length : 10ft'},
    { image: Image10, zoomImage: Image10Zoom , name:'2006 - FOREST TEAK',Description:'width: 12 inch Length : 10ft'},
    { image: Image11, zoomImage: Image11Zoom , name:'2010 - WHITE',Description:'width: 12 inch Length : 10ft'},
    { image: Image12, zoomImage: Image12Zoom , name:'2020',Description:'width: 12 inch Length : 10ft'},
    { image: Image13, zoomImage: Image13Zoom , name:'2017 - PLJW',Description:'width: 12 inch Length : 10ft'},
    { image: Image14, zoomImage: Image14Zoom , name:'1251 - UPVC',Description:'width: 12 inch Length : 10ft'},
    { image: Image15, zoomImage: Image15Zoom , name:'1252 - UPVC',Description:'width: 12 inch Length : 10ft'},
    { image: Image16, zoomImage: Image16Zoom , name:'2016',Description:'width: 12 inch Length : 10ft'},
    { image: Image17, zoomImage: Image17Zoom , name:'L - 102',Description:'width: 12 inch Length : 10ft'},
    { image: Image18, zoomImage: Image18Zoom , name:'L - 539',Description:'width: 12 inch Length : 10ft'},
    { image: Image19, zoomImage: Image19Zoom , name:'1505',Description:'width: 12 inch Length : 10ft'},
    { image: Image20, zoomImage: Image20Zoom , name:'1516',Description:'width: 12 inch Length : 10ft'},
    { image: Image21, zoomImage: Image21Zoom , name:'1520',Description:'width: 12 inch Length : 10ft'},


];



function PvcFlueidPanels() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="w-full min-h-screen bg-neutral-50">
      <Navbar />
      <div className="flex flex-col items-center montserrat">
        <div className="relative">
          <img src={BannerImg} alt="Company Banner" className="w-auto h-auto" />
          <div className="absolute inset-0 flex items-center justify-center mt-40 md:ml-60 ml-40">
            <div className="relative w-full md:ml-[596px] md:mt-[550px] ">
              <div style={{ overflow: "hidden" }}>
                <h1 className="text-white text-xs sm:text-sm md:text-lg lg:text-2xl montserrat font-bold bg-opacity-45 bg-gray-800 px-4 sm:px-5 md:px-6 py-4 sm:py-3 md:py-5 w-full">
                  <span className="text-xxs md:text-lg">Interior Wall and Ceiling<br /></span>
                  PVC FLUTED PANELS
                </h1>
              </div>
              <div style={{ backgroundColor: "#eb4c34" }} className="absolute mt-1 bottom-0 left-0 w-full h-3 md:h-6"></div>
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
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  src={AdhamsWhite}
                  alt="Large Product"
                  className="md:w-auto md:h-[80px] h-[50px] w-auto mt-5 md:mt-8 object-cover"
                />
                <div className="flex align-center justify-center">
                  <h1 className="ml-0 sm:ml-5 mt-3 md:mt-10 md:ml-12 sm:mt-5 text-center sm:text-left text-sm sm:text-lg">
                    {selectedProduct.name}<br />
                    PVC FLUTED PANELS<br />
                    {selectedProduct.Description}
                  </h1>
                </div>
              </div>

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

export default PvcFlueidPanels;