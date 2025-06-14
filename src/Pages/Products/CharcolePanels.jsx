import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdhamsWhite from '../../Assets/whitered.png';
import BannerImg from '../../Assets/Products/Banners/EXTERIOR.png';

// Small
import Image1 from '../../Assets/Products/CharcolePanels/small/Image1.png'
import Image2 from '../../Assets/Products/CharcolePanels/small/Image2.png'
import Image3 from '../../Assets/Products/CharcolePanels/small/Image3.png'
import Image5 from '../../Assets/Products/CharcolePanels/small/Image5.png'
import Image6 from '../../Assets/Products/CharcolePanels/small/Image6.png'
import Image7 from '../../Assets/Products/CharcolePanels/small/Image7.png'
import Image8 from '../../Assets/Products/CharcolePanels/small/Image8.png'
import Image9 from '../../Assets/Products/CharcolePanels/small/Image9.png'
import Image10 from '../../Assets/Products/CharcolePanels/small/Image10.png'
import Image11 from '../../Assets/Products/CharcolePanels/small/Image11.png'
import Image12 from '../../Assets/Products/CharcolePanels/small/Image12.png'
import Image13 from '../../Assets/Products/CharcolePanels/small/Image13.png'
import Image14 from '../../Assets/Products/CharcolePanels/small/Image14.png'
import Image15 from '../../Assets/Products/CharcolePanels/small/Image15.png'
import Image16 from '../../Assets/Products/CharcolePanels/small/Image16.png'
import Image17 from '../../Assets/Products/CharcolePanels/small/Image17.png'
import Image18 from '../../Assets/Products/CharcolePanels/small/Image18.png'
import Image19 from '../../Assets/Products/CharcolePanels/small/Image19.png'
import Image20 from '../../Assets/Products/CharcolePanels/small/Image20.png'
import Image21 from '../../Assets/Products/CharcolePanels/small/Image21.png'
import Image22 from '../../Assets/Products/CharcolePanels/small/Image22.png'
import Image23 from '../../Assets/Products/CharcolePanels/small/Image23.png'
import Image24 from '../../Assets/Products/CharcolePanels/small/Image24.png'
import Image25 from '../../Assets/Products/CharcolePanels/small/Image25.png'
import Image26 from '../../Assets/Products/CharcolePanels/small/Image26.png'
import Image27 from '../../Assets/Products/CharcolePanels/small/Image27.png'
import Image28 from '../../Assets/Products/CharcolePanels/small/Image28.png'
import Image29 from '../../Assets/Products/CharcolePanels/small/Image29.png'
import Image30 from '../../Assets/Products/CharcolePanels/small/Image30.png'
import Image31 from '../../Assets/Products/CharcolePanels/small/Image31.png'
import Image32 from '../../Assets/Products/CharcolePanels/small/Image32.png'
import Image33 from '../../Assets/Products/CharcolePanels/small/Image33.png'
import Image34 from '../../Assets/Products/CharcolePanels/small/Image34.png'
import Image35 from '../../Assets/Products/CharcolePanels/small/Image35.png'
import Image36 from '../../Assets/Products/CharcolePanels/small/Image36.png'
import Image37 from '../../Assets/Products/CharcolePanels/small/Image37.png'

// 30ps
import Image101 from '../../Assets/Products/CharcolePanels/30ps/Image101.png'
import Image102 from '../../Assets/Products/CharcolePanels/30ps/Image102.png'
import Image103 from '../../Assets/Products/CharcolePanels/30ps/Image103.png'
import Image104 from '../../Assets/Products/CharcolePanels/30ps/Image104.png'
import Image105 from '../../Assets/Products/CharcolePanels/30ps/Image105.png'
import Image106 from '../../Assets/Products/CharcolePanels/30ps/Image106.png'
import Image107 from '../../Assets/Products/CharcolePanels/30ps/Image107.png'
import Image108 from '../../Assets/Products/CharcolePanels/30ps/Image108.png'
import Image109 from '../../Assets/Products/CharcolePanels/30ps/Image109.png'
import Image110 from '../../Assets/Products/CharcolePanels/30ps/Image110.png'
import Image111 from '../../Assets/Products/CharcolePanels/30ps/Image111.png'
import Image112 from '../../Assets/Products/CharcolePanels/30ps/Image112.png'
import Image113 from '../../Assets/Products/CharcolePanels/30ps/Image113.png'
import Image114 from '../../Assets/Products/CharcolePanels/30ps/Image114.png'
import Image115 from '../../Assets/Products/CharcolePanels/30ps/Image115.png'
import Image116 from '../../Assets/Products/CharcolePanels/30ps/Image116.png'
import Image117 from '../../Assets/Products/CharcolePanels/30ps/Image117.png'
import Image118 from '../../Assets/Products/CharcolePanels/30ps/Image118.png'
import Image119 from '../../Assets/Products/CharcolePanels/30ps/Image119.png'
import Image120 from '../../Assets/Products/CharcolePanels/30ps/Image120.png'
import Image121 from '../../Assets/Products/CharcolePanels/30ps/Image1121.png'
import Image122 from '../../Assets/Products/CharcolePanels/30ps/Image122.png'
import Image123 from '../../Assets/Products/CharcolePanels/30ps/Image123.png'


import Image101Zoom from '../../Assets/Products/CharcolePanels/30ps/Image101Zoom.png'
import Image102Zoom from '../../Assets/Products/CharcolePanels/30ps/Image102Zoom.png'
import Image103Zoom from '../../Assets/Products/CharcolePanels/30ps/Image103Zoom.png'
import Image104Zoom from '../../Assets/Products/CharcolePanels/30ps/Image104Zoom.png'
import Image105Zoom from '../../Assets/Products/CharcolePanels/30ps/Image105Zoom.png'
import Image106Zoom from '../../Assets/Products/CharcolePanels/30ps/Image106Zoom.png'
import Image107Zoom from '../../Assets/Products/CharcolePanels/30ps/Image107Zoom.png'
import Image108Zoom from '../../Assets/Products/CharcolePanels/30ps/Image108Zoom.png'
import Image109Zoom from '../../Assets/Products/CharcolePanels/30ps/Image109Zoom.png'
import Image110Zoom from '../../Assets/Products/CharcolePanels/30ps/Image110Zoom.png'
import Image111Zoom from '../../Assets/Products/CharcolePanels/30ps/Image111Zoom.png'
import Image112Zoom from '../../Assets/Products/CharcolePanels/30ps/Image112Zoom.png'
import Image113Zoom from '../../Assets/Products/CharcolePanels/30ps/Image113Zoom.png'
import Image114Zoom from '../../Assets/Products/CharcolePanels/30ps/Image114Zoom.png'
import Image115Zoom from '../../Assets/Products/CharcolePanels/30ps/Image115Zoom.png'
import Image116Zoom from '../../Assets/Products/CharcolePanels/30ps/Image116Zoom.png'
import Image117Zoom from '../../Assets/Products/CharcolePanels/30ps/Image117Zoom.png'
import Image118Zoom from '../../Assets/Products/CharcolePanels/30ps/Image118Zoom.png'
import Image119Zoom from '../../Assets/Products/CharcolePanels/30ps/Image119Zoom.png'
import Image120Zoom from '../../Assets/Products/CharcolePanels/30ps/Image120Zoom.png'
import Image121Zoom from '../../Assets/Products/CharcolePanels/30ps/Image121Zoom.png'
import Image122Zoom from '../../Assets/Products/CharcolePanels/30ps/Image122Zoom.png'
import Image123Zoom from '../../Assets/Products/CharcolePanels/30ps/Image123Zoom.png'

// Small
import Image1Zoom from '../../Assets/Products/CharcolePanels/small/Image1Zoom.png'
import Image2Zoom from '../../Assets/Products/CharcolePanels/small/Image2Zoom.png'
import Image3Zoom from '../../Assets/Products/CharcolePanels/small/Image3Zoom.png'
import Image5Zoom from '../../Assets/Products/CharcolePanels/small/Image5Zoom.png'
import Image6Zoom from '../../Assets/Products/CharcolePanels/small/Image6Zoom.png'
import Image7Zoom from '../../Assets/Products/CharcolePanels/small/Image7Zoom.png'
import Image8Zoom from '../../Assets/Products/CharcolePanels/small/Image8Zoom.png'
import Image9Zoom from '../../Assets/Products/CharcolePanels/small/Image9Zoom.png'
import Image10Zoom from '../../Assets/Products/CharcolePanels/small/Image10Zoom.png'
import Image11Zoom from '../../Assets/Products/CharcolePanels/small/Image11Zoom.png'
import Image12Zoom from '../../Assets/Products/CharcolePanels/small/Image12Zoom.png'
import Image13Zoom from '../../Assets/Products/CharcolePanels/small/Image13Zoom.png'
import Image14Zoom from '../../Assets/Products/CharcolePanels/small/Image14Zoom.png'
import Image15Zoom from '../../Assets/Products/CharcolePanels/small/Image15Zoom.png'
import Image16Zoom from '../../Assets/Products/CharcolePanels/small/Image16Zoom.png'
import Image17Zoom from '../../Assets/Products/CharcolePanels/small/Image17Zoom.png'
import Image18Zoom from '../../Assets/Products/CharcolePanels/small/Image18Zoom.png'
import Image19Zoom from '../../Assets/Products/CharcolePanels/small/Image19Zoom.png'
import Image20Zoom from '../../Assets/Products/CharcolePanels/small/Image20Zoom.png'
import Image21Zoom from '../../Assets/Products/CharcolePanels/small/Image21Zoom.png'
import Image22Zoom from '../../Assets/Products/CharcolePanels/small/Image22Zoom.png'
import Image23Zoom from '../../Assets/Products/CharcolePanels/small/Image23Zoom.png'
import Image24Zoom from '../../Assets/Products/CharcolePanels/small/Image24Zoom.png'
import Image25Zoom from '../../Assets/Products/CharcolePanels/small/Image25Zoom.png'
import Image26Zoom from '../../Assets/Products/CharcolePanels/small/Image26Zoom.png'
import Image27Zoom from '../../Assets/Products/CharcolePanels/small/Image27Zoom.png'
import Image28Zoom from '../../Assets/Products/CharcolePanels/small/Image28Zoom.png'
import Image29Zoom from '../../Assets/Products/CharcolePanels/small/Image29Zoom.png'
import Image30Zoom from '../../Assets/Products/CharcolePanels/small/Image30Zoom.png'
import Image31Zoom from '../../Assets/Products/CharcolePanels/small/Image31Zoom.png'
import Image32Zoom from '../../Assets/Products/CharcolePanels/small/Image32Zoom.png'
import Image33Zoom from '../../Assets/Products/CharcolePanels/small/Image33Zoom.png'
import Image34Zoom from '../../Assets/Products/CharcolePanels/small/Image34Zoom.png'
import Image35Zoom from '../../Assets/Products/CharcolePanels/small/Image35Zoom.png'
import Image36Zoom from '../../Assets/Products/CharcolePanels/small/Image36Zoom.png'
import Image37Zoom from '../../Assets/Products/CharcolePanels/small/Image37Zoom.png'



import Asset1 from '../../Assets/Products/CharcolePanels/Latest/Asset1.png'
import Asset2 from '../../Assets/Products/CharcolePanels/Latest/Asset2.png'
import Asset3 from '../../Assets/Products/CharcolePanels/Latest/Asset3.png'
import Asset4 from '../../Assets/Products/CharcolePanels/Latest/Asset4.png'
import Asset5 from '../../Assets/Products/CharcolePanels/Latest/Asset5.png'
import Asset6 from '../../Assets/Products/CharcolePanels/Latest/Asset6.png'
import Asset7 from '../../Assets/Products/CharcolePanels/Latest/Asset7.png'
import Asset8 from '../../Assets/Products/CharcolePanels/Latest/Asset8.png'
import Asset9 from '../../Assets/Products/CharcolePanels/Latest/Asset9.png'
import Asset10 from '../../Assets/Products/CharcolePanels/Latest/Asset10.png'
import Asset11 from '../../Assets/Products/CharcolePanels/Latest/Asset11.png'
import Asset12 from '../../Assets/Products/CharcolePanels/Latest/Asset12.png'
import Asset13 from '../../Assets/Products/CharcolePanels/Latest/Asset13.png'
import Asset14 from '../../Assets/Products/CharcolePanels/Latest/Asset14.png'
import Asset15 from '../../Assets/Products/CharcolePanels/Latest/Asset15.png'
import Asset16 from '../../Assets/Products/CharcolePanels/Latest/Asset16.png'
import Asset17 from '../../Assets/Products/CharcolePanels/Latest/Asset17.png'
import Asset18 from '../../Assets/Products/CharcolePanels/Latest/Asset18.png'
import Asset19 from '../../Assets/Products/CharcolePanels/Latest/Asset19.png'
import Asset20 from '../../Assets/Products/CharcolePanels/Latest/Asset20.png'
import Asset21 from '../../Assets/Products/CharcolePanels/Latest/Asset21.png'
import Asset22 from '../../Assets/Products/CharcolePanels/Latest/Asset22.png'
import Asset23 from '../../Assets/Products/CharcolePanels/Latest/Asset23.png'
import Asset24 from '../../Assets/Products/CharcolePanels/Latest/Asset24.png'
import Asset25 from '../../Assets/Products/CharcolePanels/Latest/Asset25.png'
import Asset26 from '../../Assets/Products/CharcolePanels/Latest/Asset26.png'
import Asset27 from '../../Assets/Products/CharcolePanels/Latest/Asset27.png'
import Asset28 from '../../Assets/Products/CharcolePanels/Latest/Asset28.png'
import Asset29 from '../../Assets/Products/CharcolePanels/Latest/Asset29.png'
import Asset30 from '../../Assets/Products/CharcolePanels/Latest/Asset30.png'
import Asset31 from '../../Assets/Products/CharcolePanels/Latest/Asset31.png'
import Asset32 from '../../Assets/Products/CharcolePanels/Latest/Asset32.png'
import Asset33 from '../../Assets/Products/CharcolePanels/Latest/Asset33.png'
import Asset34 from '../../Assets/Products/CharcolePanels/Latest/Asset34.png'
import Asset35 from '../../Assets/Products/CharcolePanels/Latest/Asset35.png'
import Asset36 from '../../Assets/Products/CharcolePanels/Latest/Asset36.png'
import Asset37 from '../../Assets/Products/CharcolePanels/Latest/Asset37.png'





import Asset1Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset1Zoom.png'
import Asset2Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset2Zoom.png'
import Asset3Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset3Zoom.png'
import Asset4Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset4Zoom.png'
import Asset5Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset5Zoom.png'
import Asset6Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset6Zoom.png'
import Asset7Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset7Zoom.png'
import Asset8Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset8Zoom.png'
import Asset9Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset9Zoom.png'
import Asset10Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset10Zoom.png'
import Asset11Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset11Zoom.png'
import Asset12Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset12Zoom.png'
import Asset13Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset13Zoom.png'
import Asset14Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset14Zoom.png'
import Asset15Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset15Zoom.png'
import Asset16Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset16Zoom.png'
import Asset17Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset17Zoom.png'
import Asset18Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset18Zoom.png'
import Asset19Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset19Zoom.png'
import Asset20Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset20Zoom.png'
import Asset21Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset21Zoom.png'
import Asset22Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset22Zoom.png'
import Asset23Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset23Zoom.png'
import Asset24Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset24Zoom.png'
import Asset25Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset25Zoom.png'
import Asset26Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset26Zoom.png'
import Asset27Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset27Zoom.png'
import Asset28Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset28Zoom.png'
import Asset29Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset29Zoom.png'
import Asset30Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset30Zoom.png'
import Asset31Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset31Zoom.png'
import Asset32Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset32Zoom.png'
import Asset33Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset33Zoom.png'
import Asset34Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset34Zoom.png'
import Asset35Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset35Zoom.png'
import Asset36Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset36Zoom.png'
import Asset37Zoom from '../../Assets/Products/CharcolePanels/Latest/Asset37Zoom.png'



const products = [
  // Small
    { image: Asset3, zoomImage: Asset3Zoom }, /* AD 2001-AQ */
    { image: Asset4, zoomImage: Asset4Zoom },  /* AD 2001-08 */
    { image: Asset5, zoomImage: Asset5Zoom },    /* AD 2001-LG */ 
    { image: Asset6, zoomImage: Asset6Zoom },   /* AD 2001-Q1 */
    { image: Asset7, zoomImage: Asset7Zoom },   /* AD 2003-MW */
    { image: Asset8, zoomImage: Asset8Zoom },   /* AD 2003-LG */
    { image: Asset9, zoomImage: Asset9Zoom },   /* AD 2003-BM */
    { image: Asset10, zoomImage: Asset10Zoom },  /* AD 2003-GR */
    { image: Asset27, zoomImage: Asset27Zoom },   /* AD 2005-KS */
    { image: Asset11, zoomImage: Asset11Zoom },   /* AD 2005-AQ */
    { image: Asset12, zoomImage: Asset12Zoom },   /* AD 2005-BB */
    { image: Asset13, zoomImage: Asset13Zoom },   /* AD 2005-WM */
    { image: Asset14, zoomImage: Asset14Zoom },   /* AD 2006-WM */
    { image: Asset15, zoomImage: Asset15Zoom },   /* AD 2006-BM */
    { image: Asset16, zoomImage: Asset16Zoom },   /* AD 2006-BR */
    { image: Asset17, zoomImage: Asset17Zoom },   /* AD 2006-BL */
    { image: Asset18, zoomImage: Asset18Zoom },   /* AD 2007-SW */
    { image: Asset19, zoomImage: Asset19Zoom },  /* AD 2007-SB */
    { image: Asset20, zoomImage: Asset20Zoom },  /* AD 2007-BM */
    { image: Asset21, zoomImage: Asset21Zoom },   /* AD 2007-WM */
    { image: Asset22, zoomImage: Asset22Zoom },/* AD 3002 -OW */
    { image: Asset23, zoomImage: Asset23Zoom },  /* AD 3002-BM */
    { image: Asset2, zoomImage: Asset2Zoom }, /* AD 3002-BG */
    { image: Asset24, zoomImage: Asset24Zoom },   /* AD 3002-GM */
    { image: Asset25, zoomImage: Asset25Zoom },   /* AD 3002-WM */
    { image: Asset31, zoomImage: Asset31Zoom },   /* AD 3003-WN */
    { image: Asset32, zoomImage: Asset32Zoom },   /* AD 3003-03 */
    { image: Asset30, zoomImage: Asset30Zoom },   /* AD 3003-BM */
    { image: Asset29, zoomImage: Asset29Zoom },   /* AD 3003-GB */
    { image: Asset26, zoomImage: Asset26Zoom },   /* AD 3007-A15 */
    { image: Asset28, zoomImage: Asset28Zoom },   /* AD 3007-A16 */
    { image: Asset1, zoomImage: Asset1Zoom },        /* AD 3007-A17 */
    { image: Asset33, zoomImage: Asset33Zoom },   /* AD 3007-A19 */
    { image: Asset34, zoomImage: Asset34Zoom },   /* AD 3009-WM */
    { image: Asset35, zoomImage: Asset35Zoom },   /* AD 3009-BM */
    { image: Asset36, zoomImage: Asset36Zoom },   /* AD 3009-AQ */
    { image: Asset37, zoomImage: Asset37Zoom },   /* AD 3009-MR */
    


     
    
    { image: Image1, zoomImage: Image1Zoom },
    { image: Image2, zoomImage: Image2Zoom },
    { image: Image3, zoomImage: Image3Zoom },
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
    { image: Image22, zoomImage: Image22Zoom },
    { image: Image23, zoomImage: Image23Zoom },
    { image: Image24, zoomImage: Image24Zoom },
    { image: Image25, zoomImage: Image25Zoom },
    { image: Image26, zoomImage: Image26Zoom },
    { image: Image27, zoomImage: Image27Zoom },
    { image: Image28, zoomImage: Image28Zoom },
    { image: Image29, zoomImage: Image29Zoom },
    { image: Image30, zoomImage: Image30Zoom },
    { image: Image31, zoomImage: Image31Zoom },
    { image: Image32, zoomImage: Image32Zoom },
    { image: Image33, zoomImage: Image33Zoom },
    { image: Image34, zoomImage: Image34Zoom },
    { image: Image35, zoomImage: Image35Zoom },
    { image: Image36, zoomImage: Image36Zoom },
    { image: Image37, zoomImage: Image37Zoom },



    { image: Image101, zoomImage: Image101Zoom },
    { image: Image102, zoomImage: Image102Zoom },
    { image: Image103, zoomImage: Image103Zoom },
    { image: Image104, zoomImage: Image104Zoom },
    { image: Image105, zoomImage: Image105Zoom },
    { image: Image106, zoomImage: Image106Zoom },
    { image: Image107, zoomImage: Image107Zoom },
    { image: Image108, zoomImage: Image108Zoom },
    { image: Image109, zoomImage: Image109Zoom },
    { image: Image110, zoomImage: Image110Zoom },
    { image: Image111, zoomImage: Image111Zoom },
    { image: Image112, zoomImage: Image112Zoom },
    { image: Image113, zoomImage: Image113Zoom },
    { image: Image114, zoomImage: Image114Zoom },
    { image: Image115, zoomImage: Image115Zoom },
    { image: Image116, zoomImage: Image116Zoom },
    { image: Image117, zoomImage: Image117Zoom },
    { image: Image118, zoomImage: Image118Zoom },
    { image: Image119, zoomImage: Image119Zoom },
    { image: Image120, zoomImage: Image120Zoom },
    { image: Image121, zoomImage: Image121Zoom },
    { image: Image122, zoomImage: Image122Zoom },
    { image: Image123, zoomImage: Image123Zoom },


];



function CharcolePanels() {
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
                  PS PANELS (CHARCOAL)
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
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the popup
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
                  <h1 className="ml-0 sm:ml-5 md:ml-10 mt-3 md:mt-12 sm:mt-5 text-center sm:text-left text-sm sm:text-lg">
                    Interior Wall and Ceiling<br />
                    PS PANELS <br />
                    Charcole Panels
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

export default CharcolePanels;
