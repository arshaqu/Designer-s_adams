import React, { useEffect, useRef, useState } from "react";

// Importing images
import cara1 from "../../Assets/Home/carasol/cara1.png";
import cara2 from "../../Assets/Home/carasol/cara2.png";
import cara3 from "../../Assets/Home/carasol/cara3.png";
import cara4 from "../../Assets/Home/carasol/cara4.png";
import cara5 from "../../Assets/Home/carasol/cara5.png";
import cara6 from "../../Assets/Home/carasol/cara6.png";
import cara7 from "../../Assets/Home/carasol/cara7.png";
import cara8 from "../../Assets/Home/carasol/cara8.png";
import cara9 from "../../Assets/Home/carasol/cara9.png";
import cara10 from "../../Assets/Home/carasol/cara10.png";
import cara11 from "../../Assets/Home/carasol/cara11.png";
import cara12 from "../../Assets/Home/carasol/cara12.png";
import cara13 from "../../Assets/Home/carasol/cara13.png";

function Carosel() {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [imageWidth, setImageWidth] = useState(272);
  const [imagesPerView, setImagesPerView] = useState(1);

  // Image list
  const cards = [
    { id: 1, image: cara1, alt: "MGO services in Malappuram" },
    { id: 2, image: cara2, alt: "MGO services in Malappuram" },
    { id: 3, image: cara3, alt: "MGO services in Malappuram" },
    { id: 4, image: cara4, alt: "MGO services in Malappuram" },
    { id: 5, image: cara5, alt: "MGO services in Malappuram" },
    { id: 6, image: cara6, alt: "MGO services in Malappuram" },
    { id: 7, image: cara7, alt: "MGO services in Malappuram" },
    { id: 8, image: cara8, alt: "MGO services in Malappuram" },
    { id: 9, image: cara9, alt: "MGO services in Malappuram" },
    { id: 10, image: cara10, alt: "MGO services in Malappuram" },
    { id: 11, image: cara11, alt: "MGO services in Malappuram" },
    { id: 12, image: cara12, alt: "MGO services in Malappuram" },
    { id: 13, image: cara13, alt: "MGO services in Malappuram" },
  ];

  useEffect(() => {
    // Dynamically set image width based on screen size
    const updateImageWidth = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.clientWidth;
        if (window.innerWidth <= 768) {
          // Mobile: Show 1 image at a time
          setImagesPerView(1);
        } else {
          // Desktop: Show 3 images at a time
          setImagesPerView(5);
        }
        setImageWidth(containerWidth / imagesPerView);
      }
    };

    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);

    return () => window.removeEventListener("resize", updateImageWidth);
  }, [imagesPerView]);

  // Handle manual scrolling
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -imageWidth : imageWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoScrolling && scrollContainerRef.current) {
        handleScroll("right");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, imageWidth]);

  return (
    <section id="features" className="py-8 overflow-hidden relative">
      {/* Left Button */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-4 top-1/2 z-10 bg-red-600 hover:bg-white text-white hover:text-red-600 rounded-full p-2 transform -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right Button */}
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-4 top-1/2 z-10 bg-red-600 hover:bg-white text-white hover:text-red-600 rounded-full p-2 transform -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden" ref={scrollContainerRef}>
        <div className="flex whitespace-nowrap">
          {cards.map((card) => (
            <img
              key={card.id}
              className="flex-shrink-0 p-1 object-cover"
              src={card.image}
              loading="lazy"
              alt={card.alt}
              style={{ width: `${imageWidth}px` }} // Ensuring perfect width
            />
          ))}
          {/* Duplicate images for seamless looping */}
          {cards.map((card) => (
            <img
              key={`${card.id}-duplicate`}
              className="flex-shrink-0 p-1 object-cover"
              src={card.image}
              loading="lazy"
              alt={card.alt}
              style={{ width: `${imageWidth}px` }} // Ensuring perfect width
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carosel;
