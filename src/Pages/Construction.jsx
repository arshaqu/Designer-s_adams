import React from 'react';
import desinger from '../Assets/DezinerTr.png'
import Lottie from 'lottie-react'; // Ensure this import is correct
import errorAnimation from '../Assets/Animation2.json'; 
// import sadFace from '../Assets/sadFace.png'; 

const UnderConstruction = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white text-center px-4">
    <img src={desinger} alt="Sad face" className="w-28 mb-4 animate-pulse" />
      
    <div className="w-72 sm:w-96 mb-6">
      <Lottie animationData={errorAnimation} loop={true} />
    </div>

    {/* Optional Image */}

    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">404</h1>
    <p className="text-xl sm:text-2xl text-gray-600 mb-4 montserrat">Oops! The page you're looking for doesn't exist.</p>
    <a
      href="/"
      className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow hover:scale-105 transition-transform duration-300"
    >
      Go Back Home
    </a>
  </div>
);
};


export default UnderConstruction;
