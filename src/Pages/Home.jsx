import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Image2 from '../Assets/Home/homeSlider 1.png';
import Image3 from '../Assets/Home/homeSlider 2.png';
import Image4 from '../Assets/Home/homeSlider 3.png';
import Image5 from '../Assets/Home/homeSlider 4.png';
import Deziner from '../Assets/DezinerTr.png';
import Adhams from '../Assets/Home/ADHAMS.jpg';
import Navbar from './Components/Navbar';
import overlay from '../Assets/Home/OVERLAY RED.png';
import Carosel from './Components/Carosel';
import Footer from './Components/Footer';
import Simple from '../Assets/Home/simple.jpg'
import SimpleDry from '../Assets/dff.png'

function Home() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(Image2);
  const imageContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (imageContainerRef.current) {
      const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    const images = [Image2, Image3, Image4, Image5];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="relative w-full h-[50vh] sm:h-[40vh] md:h-[100vh]">
          <div
            ref={imageContainerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-full overflow-hidden"
          >
            <img
              src={currentImage}
              alt="Background"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              style={{ transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`, transform: 'scale(1.1)' }}
            />
            <img src={overlay} alt="Overlay" className="absolute inset-0 w-full h-full z-10" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-full text-center border-b border-black lg:p-24 py-4">
            <p className="text-xs text-gray-500 sm:text-lg montserrat">
              Deziner Ceiling Co. invites you to visit our website to explore our complete range of products
              and experience the difference. Whether you're renovating your home, designing a new office, or working
              on a commercial project, we have a tremendous collection of materials to bring your vision to life.
            </p>
          </div>
          <div className="w-full max-w-full text-center montserrat py-8 border-b border-black">
            <p className="text-green-600 text-lg md:text-xl">Our</p>
            <p className="text-gray-600 text-lg md:text-xl">Premium Brand</p>
            <div className="flex justify-center py-4">
              <img src={Adhams} alt="Adhams Logo" className="h-64 md:h-80" />
            </div>
            <p className="text-gray-700 w-full mt-4 px-4 md:px-6">
              Our leading brand, "Adhams - The Royal Definition", epitomizes our commitment to quality and luxury. The brand encompasses a diverse range of wall panels, ceiling solutions.
            </p>
          </div>
          <div className="w-full flex justify-center py-6">
            <button className="bg-gray-300 text-gray-800 px-16 md:px-24 py-2 rounded-full shadow-md w-full max-w-xs">
              FEATURED
            </button>
          </div>
          <div className="flex justify-center py-4">
            <div className="w-full max-w-4xl flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mt-6">
              <img src={Simple} alt="Featured Product" className="w-full h-full md:w-1/2" />
              <div style={{backgroundColor:'#f24424'}} className="w-full h-full md:w-1/2  text-white p-6">
                <ul className="space-y-2 text-lg md:text-[21px] mt-12 font-semibold montserrat">
                  <li>STAINLESS STEEL ROPES </li>
                  <li style={{marginTop:'20px'}} className='mt-12'>FULL ALUMINIUM BODY</li>
                  <li style={{marginTop:'20px'}} className='mt-5'>UPTO 30KG CLOTHS HOLDING</li>
                  <li style={{marginTop:'20px'}} className='mt-5'>EASY INSTALLATION</li>
                  <li style={{marginTop:'20px'}} className='mt-5'>ANYWHERE DELIVERY</li>
                  <li style={{marginTop:'20px'}} className='mt-5'>2 YEARS WARRANTY</li>
                  <li style={{marginTop:'20px'}} className='mt-5'>100% SPACE GAIN</li>
                  </ul>
<div className="mt-12 flex justify-end">
  <button  onClick={() => navigate('/simpletry')} className="bg-white text-red-600 px-4 py-2 rounded-full shadow-md text-sm font-semibold">
    Learn more &gt;&gt;
  </button>
</div>


              </div>
              
            </div>
            
          </div> 
          <div className="flex justify-center  py-4">
              <div><img src={SimpleDry} alt="Adhams Logo" className="h-32 md:h-48" /></div>
            </div>
              <p className='font-bold mt-[-20px] montserrat'>CLOTH DRYING HANGER</p>
          <Carosel />
        </div>
        <div className="flex flex-col items-center space-y-4 mt-2 px-4">
          <button className="bg-[#E6492D] text-white font-bold text-lg px-6 py-3 rounded-md uppercase w-full max-w-xs sm:max-w-md">
            Explore Products
          </button>
          <div style={{marginTop:'20px'}} className=" flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 text-black ">
            <a href="https://www.instagram.com/adhams_profiles/" target="_blank" rel="noopener noreferrer" className="flex items-center ml-[-5px]  space-x-2">
              <FaInstagram className="text-2xl text-[#E6492D]" />
              <span className="text-lg">adhams_profiles</span>
            </a>
            <a href="https://facebook.com/adhams-laminates" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaFacebookF className="text-2xl text-[#E6492D]" />
              <span className="text-lg">adhams-laminates</span>
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="flex items-center ml-[-48px] space-x-2">
              <FaWhatsapp className="text-2xl  text-[#E6492D]" />
              <span className="text-lg">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
