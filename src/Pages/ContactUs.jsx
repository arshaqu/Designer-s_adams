import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BannerContact from '../Assets/contact.jpg'
import Adhams from '../Assets/Home/ADHAMS.jpg';
import AdhamsWhite from '../Assets/whitered.png'

function ContactUs() {
  return (
    <div style={{overflow:'hidden'}} className="w-full min-h-screen bg-neutral-50">

    <Navbar/>
  <div className="  flex flex-col items-center montserrat">
    {/* Header Image */}
    <div className="relative w-full">
<img src={BannerContact} style={{width:'100%'}} alt="Company Banner" className="w-full  h-auto" />

{/* Text with Background and Underline Effect */}
<div className="absolute inset-0 flex items-center justify-center mt-40 ml-60">
<div className="relative w-full md:ml-[596px] md:mt-[550px] ">
  <h1  className="text-white text-sm  md:text-4xl montserrat font-bold bg-opacity-45 bg-gray-800 px-7 py-3 md:py-6 w-full md:w-full">
    Contact<span className="ml-2">Us</span>
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

      </div>

      {/* Contact Information Section */}
      <div  className="flex justify-center container mx-auto md:ml-48 px-6 py-12 montserrat ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 text-start ">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl md:text-3xl ml-[-70px] flex justify-center font-bold mb-4">Our Address:</h3>
            <p className="text-gray-700 text-3x1 md:text-lg md:ml-[-50px] flex justify-center">
              Deziner Ceiling Co. <br />
              34H, Inkel Greens <br />
              Inkel City, Karathode, <br />
              Oorakam Melmuri PO, <br />
              Malappuram-Dt, Kerala, <br />
              INDIA - 676 519
            </p>

            <div className="flex justify-center ">
           <div>
           <div> <h3 className=" ml-[50px] md:ml-[120px]  text-2xl md:text-3xl  font-bold mt-8 mb-2 ">Email:</h3></div>
          <div className="ml-[60px] ">
          <p className="text-gray-700 md:text-2xl md:ml-20 ">dezineradhams@gmail.com</p>
          <p className="text-gray-700 md:text-2xl md:ml-20">customercare.adhams@gmail.com</p>
          </div>
           </div>
            </div>

              <div className="flex justify-center">
                <div>
                <h3 className="text-2xl font-bold mt-6 mb-2 md:ml-[-50px]">Call or WhatsApp:</h3>
                <p className="text-gray-700  md:ml-[-45px] md:text-2xl">+91 8301 955 233</p>
                </div>
              </div>




            <div className="flex flex-col items-center md:ml-[-12] mt-3">
              <h3 className="text-2xl font-bold mb-4 mt-5  mr-[80px]">Follow Us:</h3>
              <div className="flex flex-col mr-6 gap-4">
               


                <a href="#" className="flex items-center md:ml-4 text-white space-x-2 ">
                  <div className="border border-red-600 bg-red-500 rounded-full px-1 py-1">
                    <FaFacebookF size={20} />
                  </div>  <span className="text-red-600 md:ml-5 md:text-2xl">adhams-laminates</span>
                </a>

                <a href="#" className="flex items-center text-white md:ml-4 space-x-2 ">
                  <div className="border border-red-600 bg-red-500 rounded-full px-1 py-1">
                    <FaInstagram size={20} />

                  </div>  <span className="text-red-600 md:text-2xl">adhams_profiles</span>
                </a>


                <a href="#" className="flex items-center text-white md:ml-4 space-x-2 ">
                  <div className="border border-red-600 bg-red-500 rounded-full px-1 py-1">
                    <FaWhatsapp size={20} />
                  </div>  <span className="text-red-600 md:text-2xl">WhatsApp</span>
                </a>

              </div>

              <h3 className="text-2xl font-bold mt-6 md:text-3xl mb-2 mr-32">Visit Us:</h3>
              <a href="#" className="flex items-center mr-28 text-red-600 space-x-2">
                <FaMapMarkerAlt size={20} />
                <span className="md:text-3xl">Sitemap</span>
              </a>

              {/* Message Box */}
              <h3 className="text-2xl font-bold mt-6 md:ml-1 ml-10 mb-2 mr-12">Leave a Message:</h3>
              <textarea
                className="border p-2 w-full h-24 mt-2 rounded-md ml-1 md:ml-80"
                placeholder="Please write to us..."
              ></textarea>
              <button
          style={{
            borderRadius: '5px',
            borderColor: 'red',
            borderWidth: '2px',
            borderStyle: 'solid'
          }}
          className="mt-2  text-red-600 text-lg px-6 py-2 shadow-md hover:bg-red-700 hover:text-white"
        >
          Submit
        </button>

            </div>


          <div className="mt-8">
      <button className="bg-red-600 md:ml-48 ml-12 text-white text-lg px-6 py-3 shadow-md hover:bg-red-700">
        EXPLORE PRODUCTS
      </button>
    </div>

 
          </div>

        </div>

   
  </div>
    <Footer/>
  </div>
   
  );
}

export default ContactUs;
