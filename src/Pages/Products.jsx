import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import ProductBanner from '../Assets/Products/ProductBanner.png';
import AdhamsWhite from '../Assets/whitered.png';
import ExteriorCladding from '../Assets/Products/001.png';
import ExteriorLaminate from '../Assets/Products/015.png';
import SoffitPanels from '../Assets/Products/007.png';
import PvcForm from '../Assets/Products/010.png';
import Acrylic from '../Assets/Products/006.png';
import FrenchMould from '../Assets/Products/004.png';
import Pastel from '../Assets/Products/003.png';
import WpvcLouvers from '../Assets/Products/008.png';
import PVCMirror from '../Assets/Products/011.png';
import PU from '../Assets/Products/013.png';
import PVCFalse from '../Assets/Products/014.png';
import PVCFluted from '../Assets/Products/005.png';
import CharcolePanels from '../Assets/Products/002.png';
import Nonails from '../Assets/Products/009.png';
import image121 from '../Assets/Products/Banners/No nail banner.png'; // Import the image for NO NAIL popup

// Custom Image Popup Component
const ImagePopup = ({ isOpen, onClose, imageSrc }) => {
  const popupRef = useRef(null);
  
  // Handle click outside the popup content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div 
        ref={popupRef}
        className="bg-gray-800 p-4 rounded-lg max-w-4xl md:w-3xl max-h-screen overflow-auto"
      >
        <div className="flex justify-end mb-2">
          <button 
            onClick={onClose}
            className="text-white hover:text-red-500 font-bold text-xl"
          >
            ×
          </button>
        </div>
        <img 
          src={imageSrc} 
          alt="NO NAIL - SPECIAL ADHESIVE" 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};




const PvcFoamBoardPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  
  // Handle click outside the popup content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    
<div style={{marginTop:'250px',marginBottom:'250px'}} className="fixed m-5 mt-12 mb-12  shadow-lg inset-0 bg-opacity-70 flex items-center justify-center z-50">

      <div  
        ref={popupRef}
        className="bg-gray-200 rounded-lg shadow-lg max-w-4xl w-full max-h-screen overflow-auto"
      >
        <div className="flex justify-end mb-2">
          <button 
            onClick={onClose}
            className="text-black hover:text-red-500 text-xl mr-8 mt-3"
          >
            ×
          </button>
        </div>
        
        {/* PVC Foam Board Content */}
        <div>
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">What is PVC FOAM BOARD</h3>
            <div className="p-4">
              <p className="text-gray-700">
                PVC foam boards are lightweight, durable, and versatile materials widely used in both interior and exterior applications. 
                These boards are known for their excellent strength-to-weight ratio and resistance to moisture, chemicals, and fire.
              </p>
            </div>
          </div>
          
          {/* Composition */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyvinyl Chloride (PVC) Resin</div>
                <div className="text-lg font-semibold text-red-600">78%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Foaming Agent</div>
                <div className="text-lg font-semibold text-red-600">13%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Calcium Carbonate (CaCO₃)</div>
                <div className="text-lg font-semibold text-red-600">6%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Other</div>
                <div className="text-lg font-semibold text-red-600">3%</div>
              </div>
            </div>

            {/* Size Section */}
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
                Size
              </h3>
              <div className="p-4 text-center">
                <p className="text-gray-700">
                  <span className="font-semibold">Length:</span> 244cm &nbsp;
                  <span className="font-semibold">Width:</span> 122cm
                </p>
              </div>
            </div>

            {/* Available Density & Thickness Section */}
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
                Available Density & Thickness
              </h3>
              <div className="p-4 text-center">
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Density (g/cm³)</th>
                        <th className="border border-gray-300 p-2">Thickness (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">
                          0.40 &nbsp;&nbsp;&nbsp; 0.45 &nbsp;&nbsp;&nbsp; 0.55 &nbsp;&nbsp;&nbsp; 0.60 &nbsp;&nbsp;&nbsp;0.70
                        </td>
                        <td className="border border-gray-300 p-2">
                          5&nbsp;mm &nbsp;&nbsp;&nbsp;8&nbsp;mm &nbsp;&nbsp;&nbsp;12&nbsp;mm &nbsp;&nbsp;&nbsp;15&nbsp;mm &nbsp;&nbsp;&nbsp;17&nbsp;mm &nbsp;&nbsp;&nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Density Options */}
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
                Density Options
              </h3>
              <div className="p-4 text-gray-700">
                <ul className="list-disc pl-5 space-y-2">
                  <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
                    <span className="font-semibold">Low-Density Boards:</span>
                    <ul className="list-disc pl-5">
                      <li>Lightweight and easy to handle.</li>
                      <li>Best for applications like signage, decorative panels, and exhibition displays.</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
                    <span className="font-semibold">Medium-Density Boards:</span>
                    <ul className="list-disc pl-5">
                      <li>Balanced strength and flexibility.</li>
                      <li>Suitable for furniture, partitions, and interior cladding.</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
                    <span className="font-semibold">High-Density Boards:</span>
                    <ul className="list-disc pl-5">
                      <li>High strength and rigidity.</li>
                      <li>Ideal for load-bearing applications, outdoor cladding, and industrial use.</li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>

            {/* Key Features Section */}
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
                Key Features of PVC Foam Boards
              </h3>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
                    <span className="font-semibold">Weather Resistance:</span> Resistant to moisture, UV rays, and temperature changes<br/>- Suitable for outdoor applications.
                  </div>
                  <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
                    <span className="font-semibold">Fire Retardant:</span> Meets fire safety standards, adding an extra layer of safety.
                  </div>
                  <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
                    <span className="font-semibold">Eco-Friendly:</span> Recyclable and non-toxic, contributing to sustainable building practices.
                  </div>
                  <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
                    <span className="font-semibold">Customizable:</span> Easy to cut, drill, and shape, making it ideal for creative applications.
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Applications Section */}
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-xl font-bold p-4 bg-red-600 text-white border-b border-gray-300">Applications of PVC Foam Board</h3>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Signage and Advertising", description: "Ideal for banners, hoardings, and display boards." },
                  { title: "Interior Design", description: "Wall cladding, ceiling panels, and decorative partitions." },
                  { title: "Furniture", description: "Used for lightweight and moisture-resistant furniture, especially in kitchens and bathrooms." },
                  { title: "Outdoor Applications", description: "Building facades, fences, and temporary structures." },
                  { title: "Industrial Use", description: "Used in packaging, insulation, and construction templates." }
                ].map((app, index) => (
                  <div key={index} className="p-4 bg-yellow-50 rounded-lg shadow-md">
                    <h4 className="font-semibold text-lg">{app.title}</h4>
                    <p className="text-gray-700">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProductCard = ({ product, onLearnMore, navigateToExteriorCladding }) => {
  const navigate = useNavigate();
  const [showNoNailPopup, setShowNoNailPopup] = useState(false);
  const [showPvcFoamPopup, setShowPvcFoamPopup] = useState(false); 

  const handleClick = () => {
    if (product.title === "WPC EXTERIOR CLADDING") {
      navigateToExteriorCladding();
    }
    if (product.title === "HPL EXTERIOR LAMINATE") {
      navigate('/hpl_exterior');
    } 
    if (product.title === "PVC SOFFIT PANELS") {
      navigate('/pvc_soffit');
    }
    if (product.title === "PVC FALSE CEILING") {
      navigate('/pvc_ceiling');
    }
    if (product.title === "WPVC PASTEL LOUVERS") {
      navigate('/wpvc_pastel');
    }
    if (product.title === "ACRYLIC LAMINATES") {
      navigate('/acrylic_laminates');
    }
    if (product.title === "PVC FLUTED PANELS") {
      navigate('/pvc_flutedplanels');
    }
    if (product.title === "PS PANELS (CHARCOAL PANELS)") {
      navigate('/charcole_panels');
    }
    if (product.title === "NO NAIL - SPECIAL ADHESIVE") {
      setShowNoNailPopup(true);
    }    
    if (product.title === "FRENCH MOULDINGS") {
      navigate('/french_modules');
    } 
    if (product.title === "PVC FOAM BOARDS") {
      setShowPvcFoamPopup(true);
    } 
    if (product.title === "WPVC INTERIOR LOUVERS") {
      navigate('/wpvc_interiors');
    } 
    if (product.title === "PU (Polyurethane) WALL COVERINGS") {
      navigate('/pu_wallcovering');
    } 
  };
  
  const shouldShowLearnMore = 
    product.title !== "NO NAIL - SPECIAL ADHESIVE" && 
    product.title !== "PVC MIRROR STRIPS";

  return (
    <div className="flex gap-3 sm:gap-1 montserrat items-center md:m-16 mb-4">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-auto h-24 md:h-64 object-cover rounded-md md:ml-24 cursor-pointer" 
        onClick={handleClick}
      />

      <div className="transform scale-75 md:scale-95 origin-left md:origin-center">
        <h3 
          className="text-sm sm:text-sm md:text-3xl font-semibold cursor-pointer" 
          onClick={handleClick}
        >
          {product.title}
        </h3>
        <p className="text-xs md:text-xl md:mt-4 leading-tight w-[250px] md:w-full text-gray-700">
          {product.description}
        </p>
        {shouldShowLearnMore && (
          <button 
            onClick={() => onLearnMore(product)} 
            className="text-red-500 md:text-lg hover:text-red-500 transition cursor-pointer"
          >
            Learn More --- 
          </button>
        )}
        <div className="mt-1 flex flex-wrap gap-1 sm:gap-2">
          {product.tags.map((tag, index) => (
            <button 
              key={index} 
              className="bg-red-500 md:mt-3 text-white text-xs md:text-lg px-1 md:px-5 py-1 md:py-2 sm:py-1 rounded-md hover:bg-red-600 transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      {/* NO NAIL Image Popup */}
      <ImagePopup 
        isOpen={showNoNailPopup} 
        onClose={() => setShowNoNailPopup(false)} 
        imageSrc={image121}
      />


<PvcFoamBoardPopup 
      isOpen={showPvcFoamPopup} 
      onClose={() => setShowPvcFoamPopup(false)} 
    />


    </div>
  );
};

function Products() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateToExteriorCladding = () => {
    navigate('/exterior_cladding');
  };

  const exteriorProducts = [
    {
      image: ExteriorCladding,
      title: "WPC EXTERIOR CLADDING",
      description: "WPC (Wood Plastic Composite) exterior cladding is a modern and durable solution for enhancing the appearance and functionality of building exterior. It is engineered to mimic the natural look.",
      fullDescription: "WPC (Wood Plastic Composite) exterior cladding is a modern and durable solution for enhancing the appearance and functionality of building exteriors. It is engineered to mimic the natural look of wood while offering superior resistance to environmental elements. This innovative material combines the aesthetic appeal of wood with the durability of plastic, creating a low-maintenance alternative to traditional wood cladding.",
      features: [
        "Weather-resistant and waterproof",
        "UV-resistant to prevent fading",
        "Termite and pest resistant",
        "Low maintenance requirements",
        "Eco-friendly material using recycled components",
        "Available in a variety of wood-like textures and colors"
      ],
      applications: [
        "Residential building exteriors",
        "Commercial facades",
        "Garden structures",
        "Outdoor living spaces",
        "Balcony and terrace cladding"
      ],
      specifications: {
        "Material": "Wood Plastic Composite (60% wood fiber, 40% plastic)",
        "Thickness": "8-12mm (customizable)",
        "Width": "150-300mm",
        "Length": "2.9m standard (customizable)",
        "Installation": "Clip system or direct screw mounting"
      },
      tags: ["WALL PANEL"],
    },
    {
      image: ExteriorLaminate,
      title: "HPL EXTERIOR LAMINATE",
      description: "HPL laminate boards are a versatile, durable, and aesthetic solution widely used in interior and exterior applications. It's also known as Gate planks, because it's widely using on gates",
      fullDescription: "HPL (High Pressure Laminate) exterior laminates are premium, weather-resistant surfacing materials designed specifically for outdoor architectural applications. These laminates combine exceptional durability with aesthetic versatility, making them ideal for exterior cladding, gates, fences, and other outdoor structures. Also known as Gate Planks due to their widespread use in gate construction, HPL exterior laminates offer a sophisticated alternative to traditional materials.",
      features: [
        "Exceptional resistance to UV radiation and weathering",
        "Impact and scratch resistant",
        "Graffiti-resistant surface",
        "Fire-retardant properties",
        "Maintains color stability over time",
        "Resistant to moisture and humidity"
      ],
      applications: [
        "Exterior wall cladding",
        "Gate and fence panels",
        "Balcony partitions",
        "Facade elements",
        "Outdoor furniture",
        "Signage and decorative elements"
      ],
      specifications: {
        "Material": "High Pressure Laminate",
        "Thickness": "6mm, 8mm, 10mm, 12mm",
        "Panel Size": "1220mm x 2440mm standard (customizable)",
        "Surface Finish": "Matte, textured, or high gloss",
        "Color Range": "Over 100 designs including wood grains and solid colors",
        "Installation": "Mechanical fixing or adhesive systems"
      },
      tags: ["WOODEN"],
    },
    {
      image: SoffitPanels,
      title: "PVC SOFFIT PANELS",
      description: "PVC Soffit panels are essential architectural elements installed under roof overhangs or eaves to protect the structure and enhance its aesthetic appeal. They are designed for both functional and decorative purpose.",
      fullDescription: "PVC Soffit panels are essential architectural elements installed under roof overhangs or eaves to protect the structure and enhance its aesthetic appeal. These panels serve the dual purpose of ventilating the roof space while preventing wildlife and insects from accessing the roof structure. Made from high-quality polyvinyl chloride (PVC), these panels combine durability with a clean, finished appearance that complements any building design.",
      features: [
        "Lightweight yet durable construction",
        "100% waterproof and moisture resistant",
        "UV-stabilized to prevent color fading",
        "Fire-resistant properties",
        "Available in solid or vented designs for proper attic ventilation",
        "Low maintenance with no painting required"
      ],
      applications: [
        "Residential eaves and overhangs",
        "Commercial building soffits",
        "Porch ceilings",
        "Carport ceilings",
        "Outdoor covered areas"
      ],
      specifications: {
        "Material": "Virgin PVC with UV stabilizers",
        "Panel Width": "300mm to 400mm standard",
        "Length": "2.9m, 4m, 5m (customizable)",
        "Thickness": "8-10mm",
        "Design": "Solid, fully vented, or center vented",
        "Finish": "Smooth, wood grain, or beaded patterns"
      },
      tags: ["WOODEN", "SOLID"],
    },
  ];
  
  const interiorProducts = [
    {
      image: PvcForm,
      title: "PVC FOAM BOARDS",
      description: "PVC foam boards are widely used in both interior and exterior applications.Available in various densities and thicknesses to meet project requirments. In interior design ,used for wall cladding ,partition ,false ceilings , and decorative panels.",
      fullDescription: "PVC foam boards are versatile, lightweight, and durable construction materials composed of expanded polyvinyl chloride. These boards feature a closed-cell structure that provides excellent water resistance and insulation properties. Available in various densities and thicknesses to meet diverse project requirements, PVC foam boards have become indispensable in modern interior and exterior design applications.",
      tags: ["PVC", "WPC"],
    },
    {
      image: Acrylic,
      title: "ACRYLIC LAMINATES",
      description: "Acrylic laminates are high-gloss, durable and aesthetically appealing surfacing materials widely used in modern interior designs. Available in various finishes ...",
      fullDescription: "Acrylic laminates are premium, high-gloss surfacing materials that combine exceptional durability with striking aesthetic appeal. Manufactured using advanced technology, these laminates feature a multi-layer construction with a transparent acrylic top layer that provides outstanding depth, clarity, and reflectivity. Available in a wide range of colors, patterns, and finishes, acrylic laminates have revolutionized modern interior design by offering a luxurious.",
      tags: ["WOODEN", "MARBLE", "MATT", "TRANSPARENT"],
    },
    {
      image: FrenchMould,
      title: "FRENCH MOULDINGS",
      description: "French moldings are intricate architectural details that enhance the elegance and sophistocation of interiors. Often inspired by classical French Design...",
      fullDescription: "French mouldings are exquisite architectural elements that draw inspiration from classical French design traditions, particularly the ornate styles of the Baroque, Rococo, and Neoclassical periods. These decorative profiles feature intricate details such as scrolls, foliage, egg-and-dart patterns, and other motifs that add sophistication and timeless elegance to interior spaces. Our collection of French mouldings is crafted using high-quality materials.",
      tags: ["SKIRTINGS", "COVINGS", "BORDERS", "CORNER ROSE", "CEILING ROSES", "DADO RAILS"],
    },
    {
      image: Pastel,
      title: "WPVC PASTEL LOUVERS",
      description: "WPVC pastel-colored louvers are a modern, elegant solution for interior walls and ceiling decoration. Thses louvers combine the aesthetic appeal of pastel shades with the durability of WPVC materials. Soft pastel colors bring a vlaming and saphisticated look to any space.",
      fullDescription: "WPVC pastel louvers represent a perfect fusion of modern aesthetics and practical functionality for contemporary interior spaces. These elegant wall and ceiling coverings feature a series of angled slats in delicate pastel shades that create a soft, soothing ambiance while maintaining structural integrity. Manufactured from Wood Plastic Composite (WPVC), these louvers combine the warm appearance of wood with the durability and low maintenance benefits of engineered materials.",
      tags: ["PASTELCOLOUR"],
    },
    {
      image: WpvcLouvers,
      title: "WPVC INTERIOR LOUVERS",
      description: "WPVC interior louvers with wooden and marble textures are premium decorative materials designed to enhance the elegance and functionality of interior walls and ceilings.",
      fullDescription: "WPVC interior louvers represent the pinnacle of decorative wall and ceiling solutions, combining sophisticated aesthetics with practical functionality. These premium panels feature precisely angled slats that create a dynamic visual effect while offering privacy and light control. Available in authentic wood grain and luxurious marble textures, these louvers bring natural elegance to any interior space. The advanced Wood Plastic Composite (WPVC) material ensures exceptional durability, dimension.",
      tags: ["WOOD FINISH", "MARBLE", "TEXTURED"],
    },
    {
      image: CharcolePanels,
      title: "PS PANELS (CHARCOAL PANELS)",
      description: "PS Planks are innovative materials crafted to elecate the aesthetics of interior spaces. These panels offer superior durability and sleek design.",
      fullDescription: "PS Panels, also known as Charcoal Panels, represent a revolutionary approach to interior wall and ceiling treatments. These distinctive panels are manufactured using advanced polystyrene technology infused with activated charcoal components, creating a material that combines striking aesthetics with functional benefits. The panels feature a proprietary surface treatment that delivers exceptional depth and visual interest, available in a range of sophisticated finishes ",
      tags: ["WOOD FINISH", "MARBLE", "GOLD LINE", "TEXTURED", "SOLID"],
    },
    {
      image: PVCFluted,
      title: "PVC FLUTED PANELS",
      description: "PVC fluted panels are versatile decorative material designed to enhance the aesthetics and functionality of interiors. Known for their vertical grooves and seek finish, these panels add a modern and elegant touch to walls and ceilings.",
      fullDescription: "PVC fluted panels represent a contemporary approach to interior wall treatments, characterized by their distinctive vertical ridges or grooves that create a rhythmic, three-dimensional surface texture. These architectural elements draw inspiration from classical fluted columns while offering a modern interpretation suitable for today's interior spaces. Manufactured from high-quality polyvinyl chloride, these panels combine aesthetic sophistication with practical durability.",
      tags: ["WOODEN", "MARBLE", "PLAIN"],
    },
    {
      image: PVCFalse,
      title: "PVC FALSE CEILING",
      description: "PVC false ceiling panels are a highly durable and aesthetically appealing ooption for enhancing interior spaces. These panels are lightweight, easy to install , and available in a wide variety of shades, making them a preferred choice for both residential and commercial applications.",
      fullDescription: "PVC false ceiling panels represent a modern alternative to traditional ceiling materials, offering a perfect balance of functionality, aesthetics, and ease of installation. These lightweight yet durable panels are designed to create a finished, attractive ceiling appearance while concealing structural elements, wiring, ductwork, and plumbing. Available in 12-inch thick (TKT) decorative profiles and 10-inch plain designs, these panels provide designers with versatile options to achieve the desired ceiling effect.",
      tags: ["12 INCH TKT", "10 INCH PLAIN"],
    },
    {
      image: PU,
      title: "PU (Polyurethane) WALL COVERINGS",
      description: "PU wall coverings are premium decorative materilas known for their versatilty and intricate designs. Featuring patterns like leaves, stone textures, and jail. Bring a natural, organic look to interiors with 3D feel....",
      fullDescription: "Polyurethane (PU) wall coverings represent the pinnacle of decorative wall treatments, combining artistic expression with modern material technology. These premium architectural elements feature intricate three-dimensional designs including realistic leaf and feather patterns, authentic stone textures, and elegant jali (lattice) motifs. The advanced polyurethane formulation allows for exceptional detail reproduction while maintaining lightweight properties and durability. ",
      tags: ["LEAF/FEATHER", "STONE", "JALI"],
    },
    {
      image: PVCMirror,
      title: "PVC MIRROR STRIPS",
      description: "PVC mirror strips are stylish and functional decorative materials that add a touch of elegance and modernity to interior spaces. Their reflective surface enhance lighting and provide a luxurious apprearance, making them a popular choice for contemporary interior designs.",
      fullDescription: "PVC mirror strips represent an innovative approach to interior decoration, combining the reflective properties of mirrors with the versatility and practicality of PVC material. These sleek, narrow panels feature a highly reflective surface coating applied to a durable PVC base, creating a lightweight alternative to traditional glass mirrors. Available in sophisticated metallic finishes including golden, rose gold, and silver, these mirror strips add luminosity, depth, and luxury to interior spaces. ",
      tags: ["GOLDEN", "ROSE GOLD", "SILVER"],
    },
    {
      image: Nonails,
      title: "NO NAIL - SPECIAL ADHESIVE",
      description: "NO NAIL is a high-performance adhesive designed for versatile applications, offering an increadibly strong bond for various materials without the need for nails or screws. It's putty-colored formulation blends seamlessly with most surfaces.",
      fullDescription: "NO NAIL Special Adhesive is a revolutionary construction and installation solution that eliminates the need for traditional mechanical fasteners like nails, screws, and bolts. This high-performance adhesive features a unique putty-colored formulation that delivers exceptional bonding strength for a wide range of materials including wood, metal, plastic, ceramic, concrete, and more. Developed with advanced polymer technology.",
      tags: ["EXPLORE"],
    },
  ];

  return (
    <div className="w-full md:w-full min-h-screen bg-neutral-50">
      <Navbar />

      <div className="flex flex-col items-center">
        {/* Header Image */}
        <div className="relative">
          <img src={ProductBanner} alt="Company Banner" className="w-auto h-auto" />
          <div className="absolute inset-0 flex items-center justify-center mt-40 ml-60">
            <div className="relative w-full md:ml-[596px] md:mt-[550px]">
             <div style={{overflow:'hidden'}} className="">
             <h1 className="text-white text-sm md:text-4xl font-bold bg-opacity-45 bg-gray-800 px-7 py-3 md:py-6 w-full md:w-full">
                Products
              </h1>
             </div>
              <div style={{ backgroundColor: '#eb4c34' }} className="absolute mt-1 bottom-0 left-0 w-full h-3 md:h-6"></div>
            </div>
          </div>
          <img
            src={AdhamsWhite}
            alt="Small Icon"
            className="absolute bottom-[-12px] md:bottom-8 left-1 md:left-12 w-24 h-16 m-5 md:w-64 md:h-auto object-contain"
          />
        </div>

        {/* Exterior Section */}
        <div style={{overflow:'hidden'}} className="p-2 border-b-4 m-2">
          <h2 style={{fontWeight:'bold'}} className="md:text-4xl text-1xl font-bold mt-3 md:m-12 border-b montserrat"> EXTERIOR & INTERIOR </h2>
          <div className="md:mt-5">
            {exteriorProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                onLearnMore={handleLearnMore} 
                navigateToExteriorCladding={navigateToExteriorCladding}
              />
            ))}
          </div>
        </div>

        {/* Interior Section */}
        <div style={{overflow:'hidden'}} className="p-2 border-b-4 m-2">
          <h2 style={{fontWeight:'bold'}} className="md:text-4xl text-1xl font-bold mt-3 md:m-12 border-b montserrat">INTERIOR</h2>
          <div className="md:mt-5">
            {interiorProducts.map((product, index) => (
              <div key={index}>
                <ProductCard 
                  product={product} 
                  onLearnMore={handleLearnMore} 
                  navigateToExteriorCladding={navigateToExteriorCladding}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}

      <Footer />
    </div>
  );
}

export default Products;