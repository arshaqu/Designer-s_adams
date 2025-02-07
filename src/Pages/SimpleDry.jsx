import React, { useEffect } from "react";
import Balcony from '../Assets/SimpleTry/balcony clth.jpg';
import Balcony2 from '../Assets/SimpleTry/balcony2.png';
import Balcony3 from '../Assets/SimpleTry/balcony3.jpg'
import Balcony4 from '../Assets/SimpleTry/balcony4.jpg'
import DezignerLogo from '../Assets/DezinerTr.png'
import Simpletool from '../Assets/SimpleTry/simpletool.png'
import simpleLogo from '../Assets/dff.png'

function SimpleDry() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="flex flex-col items-center md:mt-12 mt-5">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Main Image */}
        <div className="flex flex-col items-center relative">
      <div className="relative">
        {/* Main Image */}
        <img 
          src={Balcony} 
          alt="Main" 
          className="rounded-lg h-[50rem] md:h-[52rem] p-1 w-[32rem] md:w-[48rem] shadow-lg"
        />
         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-80 p-4 bg-gradient-to-t from-black via-black/80 to-transparent rounded-b-lg"></div>
        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 w-full  text-white rounded-b-lg">
        <div className="text-end md:text-6xl text-5xl mb-5 mr-2 bagel">
          No more rushes !!
          <p className="text-xl md:text-6xl font-bold">
          </p>
          <p className="text-3xl md:text-4xl mr-16">in your balcony</p>
        </div>
          <div className="bg-black  bg-opacity-50 h-7 ml-2 w-90% ">
          <p className="text-xs md:text-sm text-center uppercase montserrat">
            Ceiling Mounted Cloth Drying Hanger
          </p>
          </div>
        </div>
      </div>
    </div>

        {/* Side Images (Stack under main image in small screens) */}
        <div className=" md:flex-col md:ml-5 md:mt-0 mt-4 p-1">
          <img src={Balcony2} alt="Side view" className="rounded-lg h-[22rem] md:h-[22rem] w-96 md:w-[20rem] shadow-lg mt-" />
          <img src={Balcony3} alt="Side view" className="rounded-lg h-84 md:h-[14rem] w-96 md:w-[20rem]  shadow-lg mt-3" />
          <img src={Balcony4} alt="Side view" className="rounded-lg h-84 md:h-[14rem] w-96 md:w-[20rem]  shadow-lg mt-3" />

        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
  {/* Logo/Image */}
  <div className="mb-4 md:mb-0">
    <img src={simpleLogo} alt="Adhams Logo" className="h-28 md:h-48 mx-auto md:ml-[-50px]" />
  </div>

  {/* Text Content (Aligned to the right of the Image) */}
  <div className="ml-0 md:ml-8">
    <p className="text-gray-500 montserrat">for enquiry</p>
    <div className="h-[1px] bg-gray-600 w-24 mx-auto md:mx-0"></div>
    <p style={{ fontFamily: 'cursive' }} className="text-2xl md:text-3xl text-gray-500 mt-2">
      8301955233
    </p>
  </div>
</div>




<div className="flex flex-col  lg:flex-row">

<div className="bg-gray-300 mt-5 p-6 mb-24 md:px-48">
  <div className="flex flex-row md:flex-row w-full items-center ">
    <div className="bg-gray-200 md:ml-12 flex items-center justify-center text-center p-5   w-3/3 md:w-1/3">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-600 leading-tight">
        100% <br /> Space <br /> Gain
      </h1>
    </div>

    <div className="mt-4 md:mt-0 md:ml-12  ">
      <p className="text-md md:text-2xl ml-4 text-gray-600 leading-[30px] md:leading-[40px]">
        Easy Installation <br />
        <span>Effortless usage</span> <br />
        30+ cloths at a time <br />
        40 kg maximum load <br />
        Length : 8ft
      </p>
    </div>
  </div>
</div>

<div style={{overflow:'hidden'}} className="w-68 md:w-[496px] absolute mt-40 md:mt-[-156px] ml-[-80px] md:ml-[556px]" >
<img src={Simpletool} alt="" />
</div>

    <div style={{overflow:'hidden'}}>
    <img  src={DezignerLogo} alt="" className="w-48 h-48 mt-[50px] lg:mt-[85px] ml-20   flex flex-row"  />

    </div>
</div>






    </div>
  );
}

export default SimpleDry;
