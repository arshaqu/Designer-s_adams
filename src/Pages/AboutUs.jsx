import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BannerAbout from '../Assets/Home/ABOUTUS.png'
import Adhams from '../Assets/Home/ADHAMS.jpg';
import AdhamsWhite from '../Assets/whitered.png'



function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-neutral-50">

      <Navbar/>
    <div className="  flex flex-col items-center montserrat">
      {/* Header Image */}
      <div className="relative ">
  <img src={BannerAbout} alt="Company Banner" className="w-auto h-auto" />
  
  {/* Text with Background and Underline Effect */}
  <div className="absolute inset-0 flex items-center justify-center mt-40 ml-60">
<div className="relative w-full md:ml-[596px] md:mt-[550px] ">
  <h1  className="text-white text-sm  md:text-4xl montserrat font-bold bg-opacity-45 bg-gray-800 px-7 py-3 md:py-6 w-full md:w-full">
    About<span className="ml-2">Us</span>
  </h1>
  <div style={{backgroundColor:'#eb4c34'}} className="absolutemd: mt-1 bottom-0 left-0 w-full h-3 md:h-6 "></div>
</div>
</div>
<img 
  src={AdhamsWhite} 
  alt="Small Icon" 
  className="absolute bottom-[-12px] md:bottom-8  left-1 md:left-12 w-24 h-16 m-5 md:w-64 md:h-auto object-contain"
/>
</div>


      {/* Content Section */}
      <div className=" md:p-24 p-6 bg-white  mt-16 ">
        <p style={{borderRadius:'4px'}} className="text-gray-700 text-lg">
          Deziner Ceiling Co. Established in 2015, We are the leading wholesale supplier and importer of high-quality decorative materials. Strategically located in INKEL City, within the INKEL Greens Business Park near Malappuram City, Kerala, we are committed to providing superior products and services to meet the diverse needs of our customers.
        </p>

        {/* Brand Section */}
      <div className="p-4 sm:p-6 md:p-12 lg:p-24">
  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center bg-gray-100 p-4 md:p-12 rounded-lg">
    {/* Image Section */}
    <img 
      src={Adhams} 
      alt="Adhams Logo" 
      className="w-96 sm:w-40 md:w-80 h-auto mb-4 md:mb-0 md:ml-3"
    />

    {/* Text Section */}
    <div className="text-center md:text-left md:ml-12">
      <p className="text-gray-700 text-sm sm:text-base md:text-lg md:text-xl p-1 sm:p-3 md:p-5">
        About our premium brand <span className="font-bold">Adhams</span>.
      </p>
      <p className="text-gray-700 text-xs sm:text-sm md:text-lg lg:text-xl p-1 sm:p-3 md:p-5 w-full" style={{ textAlign: 'justify' }}>
  Since 2015, our premium brand <span className="font-bold">Adhams</span> has been redefining interiors with 
  high-quality decoration concepts. Now, <span className="font-bold">Adhams</span> has conquered the front row 
  position with pride. It offers hundreds of premium products that bring timeless style to your every space.
</p>


    </div>
  </div>
</div>


        {/* Commitment Section */}
        <h2 className="text-2xl font-bold text-gray-800 mt-6 flex justify-center">Our Commitment</h2>
        <p className="text-gray-700 text-md md:text-lg mt-2">
          We are dedicated to delivering excellence. From sourcing the finest materials to providing expert guidance, our team is here to ensure your projects meet the highest standards.We prioritize customer satisfaction and strive to exceed expectations with every interaction. We specialize in a comprehernsive range of decorative materials for both residential and commercial applications.
        </p>

        {/* Why Choose Us */}
        <div className="flex flex-col items-center md:items-start md:flex-row justify-center px-4">
  <div className="max-w-3xl w-full">
    <h2 className="text-2xl font-bold flex justify-center text-gray-800 mt-6 text-center  md:text-left">Why Choose Us?</h2>

    <h3 className="mt-5 md:text-xl">
      <strong>Quality Products:</strong>
      <span className="ml-1 md:ml-2 md:text-lg">
        We ensure the highest quality in our materials, sourced from trusted manufacturers.
      </span>
    </h3>

    <h3 className="mt-3 md:text-xl">
      <strong>Wide Network:</strong>
      <span className="ml-1 md:ml-2 md:text-lg">
        We have hundreds of trusted dealers and can deliver anywhere in India, ensuring wide coverage and accessibility across the country.
      </span>
    </h3>

    <h3 className="mt-3 md:text-xl">
      <strong>Wide Range of Options:</strong>
      <span className="ml-1 md:ml-2 md:text-lg">
        Our extensive product range caters to diverse styles and requirements.
      </span>
    </h3>

    <h3 className="mt-3 md:text-xl">
      <strong>Expert Assistance:</strong>
      <span className="ml-1 md:ml-2 md:text-lg">
        Our knowledgeable staff is always available to help you choose the right materials for your needs.
      </span>
    </h3>

    <h3 className="mt-3 md:text-xl">
      <strong>Competitive Pricing:</strong>
      <span className="ml-1 md:ml-2 md:text-lg">
        We offer competitive prices without compromising quality, making our products accessible to all.
      </span>
    </h3>
  </div>
</div>

      </div>
      <div>
        <p className="p-5">Thank you for considering Deziner Ceiling Co. for your interior decoration needs .We look forward to serving you and helping you to create beautiful, lasting spaces . For more information, feel free to <span  style={{color:'blue',cursor:'pointer'}}><a href="/contactus"> contact us </a></span>.</p>
      </div>

      {/* Explore Products Button */}
      <div className="mt-8">
        <button className="bg-red-600 text-white text-lg px-6 py-3 shadow-md hover:bg-red-700">
          EXPLORE PRODUCTS
        </button>
      </div>

      {/* Color Circles */}
     
    </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
