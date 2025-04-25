import React from 'react';
import Image1 from '../../Assets/Products/MirrorStrips/gold.jpg';
import Image2 from '../../Assets/Products/MirrorStrips/rose gold.jpg';

function MirrorStrips() {
  return (
    <div style={{overflow:'hidden'}} className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 py-10 md:py-20 flex flex-col items-center">
      <h2 style={{fontWeight:'bold'}} className="text-5xl font-bold text-white mb-4 montserrat tracking-wide m-5">Mirror Strip </h2>
      <p className="text-gray-300 text-lg mb-16 max-w-2xl text-center m-6">Elegant reflective designs that transform any space with a touch of luxury</p>
      
      {/* Changed to flex container */}
      <div className="w-full flex flex-col">
        {/* Image Card 1 - Full Width/Height */}
        <div className="h-screen w-full flex-1 group relative cursor-pointer overflow-hidden m-0 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <img
            src={Image1}
            alt="Gold Mirror Strip"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-30 group-hover:opacity-70 transition duration-500"></div>
          
          {/* Caption */}
          <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-8 group-hover:translate-y-0 transition duration-500">
            {/* <h3 className="text-4xl font-semibold tracking-wider text-yellow-300 mb-4">Gold Mirror Strip</h3> */}
            <p className="text-white text-lg text-opacity-0 group-hover:text-opacity-100 transition-opacity duration-500 delay-100">Timeless elegance with a brilliant gold finish that captures and reflects light beautifully.</p>
            <button className="mt-6 px-8 py-3 bg-yellow-500 text-black font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hover:bg-yellow-400">View Details</button>
          </div>
        </div>

        {/* Image Card 2 - Full Width/Height */}
        <div className="h-scree mt-12 w-full flex-1 group relative cursor-pointer overflow-hidden m-0 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-600 opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <img
            src={Image2}
            alt="Rose Gold Mirror Strip"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-30 group-hover:opacity-70 transition duration-500"></div>
          
          {/* Caption */}
          <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-8 group-hover:translate-y-0 transition duration-500">
            {/* <h3 className="text-4xl font-semibold tracking-wider text-rose-300 mb-4">Rose Gold Mirror Strip</h3> */}
            <p className="text-white text-lg text-opacity-0 group-hover:text-opacity-100 transition-opacity duration-500 delay-100">Contemporary luxury with a soft rose gold hue that adds warmth to any interior setting.</p>
            <button className="mt-6 px-8 py-3 bg-rose-500 text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hover:bg-rose-400">View Details</button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 w-full flex justify-center">
       <a href="/products">
       <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-lg font-semibold text-xl">
          Explore Full Collection
        </button>
       </a>
      </div>
    </div>
  );
}

export default MirrorStrips;