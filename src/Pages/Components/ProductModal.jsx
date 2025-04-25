import React from 'react';
import Image1 from '../../Assets/Products/MirrorStrips/gold.jpg';
import Image2 from '../../Assets/Products/MirrorStrips/rose gold.jpg';

function MirrorStrips() {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 py-8 md:py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 montserrat tracking-wide text-center px-4">Mirror Strip Concepts</h2>
      <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-16 max-w-2xl text-center px-4">Elegant reflective designs that transform any space with a touch of luxury</p>
      
      {/* Flex container for images */}
      <div className="w-full flex flex-col">
        {/* Image Card 1 - Responsive Height */}
        <div className="h-[50vh] md:h-[70vh] lg:h-screen w-full flex-1 group relative cursor-pointer overflow-hidden mb-8 md:mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <img
            src={Image1}
            alt="Gold Mirror Strip"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-30 group-hover:opacity-70 transition duration-500"></div>
          
          {/* Caption - Responsive Font Sizes */}
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8 transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition duration-500">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider text-yellow-300 mb-2 md:mb-4 montserrat">Gold Mirror Strip</h3>
            <p className="text-white text-sm md:text-base lg:text-lg text-opacity-0 group-hover:text-opacity-100 transition-opacity duration-500 delay-100 max-w-md">Timeless elegance with a brilliant gold finish that captures and reflects light beautifully.</p>
            <button className="mt-3 md:mt-4 lg:mt-6 px-4 md:px-6 lg:px-8 py-2 md:py-3 bg-yellow-500 text-black font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hover:bg-yellow-400 text-sm md:text-base">View Details</button>
          </div>
        </div>

        {/* Image Card 2 - Responsive Height */}
        <div className="h-[50vh] md:h-[70vh] lg:h-screen w-full flex-1 group relative cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-600 opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <img
            src={Image2}
            alt="Rose Gold Mirror Strip"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-30 group-hover:opacity-70 transition duration-500"></div>
          
          {/* Caption - Responsive Font Sizes */}
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8 transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition duration-500">
            <p className="text-white text-sm md:text-base lg:text-lg text-opacity-0 group-hover:text-opacity-100 transition-opacity duration-500 delay-100 max-w-md">Contemporary luxury with a soft rose gold hue that adds warmth to any interior setting.</p>
            <button className="mt-3 md:mt-4 lg:mt-6 px-4 md:px-6 lg:px-8 py-2 md:py-3 bg-rose-500 text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hover:bg-rose-400 text-sm md:text-base">View Details</button>
          </div>
        </div>
      </div>
      
      {/* Responsive Button */}
      <div className="mt-8 md:mt-12 lg:mt-16 w-full flex justify-center px-4">
        <button className="w-full max-w-xs md:max-w-sm px-6 md:px-8 py-2 md:py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-lg font-semibold text-base md:text-xl">
          Explore Full Collection
        </button>
      </div>
    </div>
  );
}

export default MirrorStrips;