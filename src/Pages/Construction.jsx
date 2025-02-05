import React from 'react';
import desinger from '../Assets/DezinerTr.png'
import Lottie from 'lottie-react'; // Ensure this import is correct
import Lottieanimi from '../Assets/Animation - 1738754339152.json'; // Ensure the path is correct

const UnderConstruction = () => {
  return (
    <div 
      className="flex justify-center mt-[-100px] lg:mt-[-40px] items-center min-h-screen bg-white" 
      style={{ textAlign: 'center' }}
    >
      <div className="text-center">
        <div className='flex justify-center'>

      <img src={desinger} alt=""  className='mt-4 w-48   text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 font-bold p-3 animate-bounce'/>
        </div>
        {/* Render the Lottie animation */}
        <Lottie 
          style={{ width: '70%', height: 'auto' }} 
          className="mx-auto" 
          animationData={Lottieanimi} 
          loop={true} 
        />
        
        {/* Text in red with custom bounce animation */}
        <h1 
          className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 font-bold p-3 animate-bounce"
        >
          OUR SITE IS UNDER CONSTRUCTION WILL UPDATE SOON...
        </h1>
      </div>
    </div>
  );
};

export default UnderConstruction;
