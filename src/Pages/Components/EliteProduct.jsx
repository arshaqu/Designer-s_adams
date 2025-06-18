import React, { useState, useEffect, useRef } from 'react';
import EliteVideo from '../../Assets/Elite/ElitePro.mp4';
import { useNavigate } from 'react-router-dom';


function EliteProduct() {
 const navigate = useNavigate()
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  const handleOnExplore = () =>{
      navigate('/elite_collections')
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            videoRef.current.play();
          } else {
            setIsVideoVisible(false);
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="elite-container flex flex-col items-center justify-center overflow-hidden w-full min-h-auto bg-black text-white ">
    
    

<div className="w-full flex flex-col items-center ">

{/* Wrapper for image and video */}
<div className="flex flex-col md:flex-row md:justify-center md:items-center w-full mt-6">
 


 
<video 
          ref={videoRef}
          loop 
          controls 
          muted  // <-- add this line
          className="elite-video w-[90%] ml-5 md:w-[40%] h-auto rounded-lg shadow-lg"
        >
          <source src={EliteVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

</div>

  <button 
    onClick={handleOnExplore}  
    className="bg-white m-5 text-gray-900 font-bold text-lg px-6 py-3 rounded-md uppercase w-full max-w-xs sm:max-w-md"
  >
    EXPLORE ELITE
  </button>

</div>

    </div>
  );
}
export default EliteProduct

