import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductBanner from '../Assets/Products/ProductBanner.png'
import AdhamsWhite from '../Assets/whitered.png'
import ExteriorCladding from '../Assets/Products/001.png'
import ExteriorLaminate from '../Assets/Products/015.png'
import SoffitPanels from '../Assets/Products/007.png'
import PvcForm from '../Assets/Products/010.png'
import Acrylic from '../Assets/Products/006.png'
import FrenchMould from '../Assets/Products/004.png'
import Pastel from '../Assets/Products/003.png'
import WpvcLouvers from '../Assets/Products/008.png'
import PVCMirror from '../Assets/Products/011.png'
import PU from '../Assets/Products/013.png'
import PVCFalse from '../Assets/Products/014.png'
import PVCFluted from '../Assets/Products/005.png'
import CharcolePanels from '../Assets/Products/002.png'
import Nonails from '../Assets/Products/009.png'

// Product Modal Component
const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 montserrat">
      <div className="bg-white rounded-lg shadow-xl w-full  max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header with title and close button */}
        <div className="bg-red-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">{product.title}</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 text-2xl focus:outline-none"
          >
            ×
          </button>
        </div>
        
        <div className="p-0">
          {/* Product banner section */}
          <div className="flex flex-col md:flex-row">
            {/* Product image */}
            <div className="w-full md:w-2/3">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover" 
              />
            </div>
            
            {/* Product description box */}
            <div className="w-full md:w-2/3 bg-red-600 text-white p-4">
              <p className="text-sm md:text-base">
                {product.fullDescription || product.description}
              </p>
            </div>
          </div>
          
          {/* What is WPC Exterior Cladding */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">What is WPC Exterior Cladding?</h3>
            <div className="p-4">
              <p className="text-gray-700">
                WPC (Wood Plastic Composite) exterior cladding is a composite material made from a blend of wood fibers, thermoplastics, and additives. It is
                engineered to mimic the natural look of wood while offering enhanced durability and minimal maintenance.
              </p>
            </div>
          </div>
          
          {/* Composition */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Composition</h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">WOOD FIBER</div>
                <div className="text-lg font-semibold text-red-600">53%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">HDPE</div>
                <div className="text-lg font-semibold text-red-600">38%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">ADDITIVE</div>
                <div className="text-lg font-semibold text-red-600">9%</div>
              </div>
            </div>
          </div>
          
          {/* Size */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Size</h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Length</div>
                <div className="text-lg font-semibold">290cm</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Width</div>
                <div className="text-lg font-semibold">22cm</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Thickness</div>
                <div className="text-lg font-semibold">26mm</div>
              </div>
            </div>
            <div className="px-4 pb-4 text-gray-700">
              <p>Co-extrusion, surface without brushed</p>
              <p>Packing: 3pcs/pack Shrink packing.</p>
            </div>
          </div>
          
          {/* Specifications table */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Specifications</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {product.specifications && Object.entries(product.specifications).map(([key, value], index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3 bg-gray-50 font-medium w-1/3">{key}</td>
                      <td className="p-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Key Features */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Key Features and Benefits</h3>
            <div className="p-4">
              <ol className="list-decimal pl-5 space-y-2">
                <li className="text-gray-700">
                  <span className="font-semibold">Durability:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Resistant to rot, decay, and pests, unlike traditional wood.</li>
                    <li>Withstands harsh weather conditions, including rain, sun, and humidity.</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Low Maintenance:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Requires minimal cleaning and no painting, staining, or sealing.</li>
                    <li>Easy to clean with water and mild detergents.</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Aesthetic Appeal:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Available in a wide range of colors, textures, and finishes to suit various design styles.</li>
                    <li>Provides a sleek, modern look while maintaining a natural feel.</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Eco-Friendly:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Made from recycled wood and plastic materials, reducing environmental impact.</li>
                    <li>Sustainable and recyclable at the end of its lifespan.</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Ease of Installation:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Lightweight and designed for easy installation with concealed fixings.</li>
                    <li>Can be used for both new constructions and renovations.</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Versatility:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Suitable for various applications, including residential, commercial, and industrial projects.</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">UV and Water Resistance:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Protects against color fading and water damage, ensuring a long-lasting appearance.</li>
                    <li>Deziner ceiling co. provide 7 years warranty*(Conditions applied)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Warranty Information */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Warranty Information</h3>
            <div className="p-4">
              <p className="text-gray-700">
                Deziner ceiling co. warrants to Adhams WPC Exterior panels, that the product will be free from manufacturing defects, the color will not fade or change by more than 5%. Gloss loss will not exceed
                40% on matte finish and the color leach during the first 7 years after initial installation. Warranty will void on wrong or rude installation process or removal without convey proper information to the
                supplier.
              </p>
            </div>
          </div>
          
          {/* Installation Guide */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Installation Guide</h3>
            <div className="p-4">
              <ol className="list-alpha pl-5 space-y-2">
                <li className="text-gray-700"><span className="font-semibold">Preparation:</span> Clean and prepare the exterior wall surface before installation.</li>
                <li className="text-gray-700"><span className="font-semibold">Measurement:</span> Measure the area accurately to determine the number of panels required.</li>
                <li className="text-gray-700"><span className="font-semibold">Cutting:</span> Use standard woodworking tools to cut the panels to size.</li>
                <li className="text-gray-700"><span className="font-semibold">Fixing:</span> Secure the panels with screws or clips, ensuring they are aligned and level.</li>
                <li className="text-gray-700"><span className="font-semibold">Finishing:</span> Apply finishing touches, such as trim or molding, to enhance the overall look.</li>
              </ol>
            </div>
          </div>
          
          {/* Care Instructions */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">How to Care</h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">
                  <span className="font-semibold">Avoid harsh chemicals:</span> Use a mild detergent and warm water, and avoid harsh chemicals or abrasive cleaners. These can damage the surface and reduce the life-span of the panels.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Keep dry:</span> While WPC panels are designed to resist moisture and water damage, it's still important to keep them as dry as possible.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Clean regularly:</span> Regular cleaning and maintenance is important to ensure the durability of WPC panels. Dirt-filled panels can produce stains and mold.
                </li>
              </ul>
              <p className="mt-3 text-gray-700">WPC panels can extend its life-span with proper care.</p>
            </div>
          </div>
          
          {/* Applications */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Applications</h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Residential Buildings: Enhance the facade of homes, balconies, and fences.</li>
                <li className="text-gray-700">Commercial Spaces: Used in office buildings, retail outlets, and restaurants for a contemporary look.</li>
                <li className="text-gray-700">Outdoor Structures: Ideal for gazebos, pergolas, and garden walls.</li>
                {product.applications && product.applications.map((application, index) => (
                  <li key={index} className="text-gray-700">{application}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Why Choose Our WPC Exterior Cladding?</h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Premium-quality materials for exceptional durability and aesthetics.</li>
                <li className="text-gray-700">Wide selection of styles, colors, and finishes.</li>
                <li className="text-gray-700">Expert guidance and support for selection and installation.</li>
              </ul>
            </div>
          </div>
          
          {/* Product tags */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags && product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onLearnMore }) => {
  return (
    <div className="flex gap-3 sm:gap-1 montserrat items-center md:m-16 mb-4">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-auto h-24 md:h-64 object-cover rounded-md md:ml-24" 
      />

      <div className="transform scale-75 md:scale-95 origin-left md:origin-center">
        <h3 className="text-sm sm:text-sm md:text-3xl font-semibold">{product.title}</h3>
        <p className="text-xs md:text-xl md:mt-4 leading-tight w-[250px] md:w-full text-gray-700">
          {product.description}
        </p>
        <button 
          onClick={() => onLearnMore(product)} 
          className="text-red-500 md:text-lg hover:text-red-500 transition cursor-pointer"
        >
          Learn More --- 
        </button>
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
    </div>
  );
};

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      fullDescription: "PVC foam boards are versatile, lightweight, and durable construction materials composed of expanded polyvinyl chloride. These boards feature a closed-cell structure that provides excellent water resistance and insulation properties. Available in various densities and thicknesses to meet diverse project requirements, PVC foam boards have become indispensable in modern interior and exterior design applications. Their smooth surface, consistent quality, and ease of fabrication make them a preferred choice for designers and contractors.",
      features: [
        "Lightweight yet rigid construction",
        "Excellent water and moisture resistance",
        "Good thermal and acoustic insulation properties",
        "Fire-retardant options available",
        "Easy to cut, drill, and fabricate",
        "Smooth surface ideal for printing and laminating",
        "Available in various thicknesses and densities"
      ],
      applications: [
        "Interior wall cladding and partitions",
        "False ceiling systems",
        "Cabinet and furniture manufacturing",
        "Exhibition and display stands",
        "Signage and advertising panels",
        "Bathroom and kitchen installations",
        "Decorative architectural elements"
      ],
      specifications: {
        "Material": "Expanded Polyvinyl Chloride (PVC)",
        "Density": "0.55-0.65 g/cm³ (standard)",
        "Sheet Size": "1220mm x 2440mm (standard)",
        "Thickness": "1mm to 30mm",
        "Color": "White (standard), custom colors available",
        "Surface": "Smooth, matte finish"
      },
      tags: ["PVC", "WPC"],
    },
    {
      image: Acrylic,
      title: "ACRYLIC LAMINATES",
      description: "Acrylic laminates are high-gloss, durable and aesthetically appealing surfacing materials widely used in modern interior designs. Available in various finishes ...",
      fullDescription: "Acrylic laminates are premium, high-gloss surfacing materials that combine exceptional durability with striking aesthetic appeal. Manufactured using advanced technology, these laminates feature a multi-layer construction with a transparent acrylic top layer that provides outstanding depth, clarity, and reflectivity. Available in a wide range of colors, patterns, and finishes, acrylic laminates have revolutionized modern interior design by offering a luxurious alternative to traditional surfacing materials.",
      features: [
        "Ultra-high gloss finish with mirror-like reflectivity",
        "Superior scratch and abrasion resistance",
        "UV resistant - maintains color brilliance over time",
        "Stain resistant and easy to clean",
        "Seamless application possible",
        "Available in solid colors, metallic finishes, and patterns",
        "More affordable alternative to glass panels"
      ],
      applications: [
        "Kitchen cabinet doors and panels",
        "Wardrobe and closet facades",
        "Retail display fixtures",
        "Office furniture and partitions",
        "Wall paneling in luxury environments",
        "Hotel and restaurant interiors",
        "Bathroom vanities and shower panels"
      ],
      specifications: {
        "Material": "Multi-layer acrylic composite",
        "Sheet Size": "1220mm x 2440mm (standard)",
        "Thickness": "0.8mm to 1.5mm",
        "Gloss Level": "Above 90 GU (gloss units)",
        "Finishes": "High gloss, metallic, matte, textured, transparent",
        "Application": "Adheres to MDF, plywood, particle board"
      },
      tags: ["WOODEN", "MARBLE", "MATT", "TRANSPARENT"],
    },
    {
      image: FrenchMould,
      title: "FRENCH MOULDINGS",
      description: "French moldings are intricate architectural details that enhance the elegance and sophistocation of interiors. Often inspired by classical French Design...",
      fullDescription: "French mouldings are exquisite architectural elements that draw inspiration from classical French design traditions, particularly the ornate styles of the Baroque, Rococo, and Neoclassical periods. These decorative profiles feature intricate details such as scrolls, foliage, egg-and-dart patterns, and other motifs that add sophistication and timeless elegance to interior spaces. Our collection of French mouldings is crafted using high-quality materials and advanced manufacturing techniques to ensure both aesthetic appeal and durability.",
      features: [
        "Authentic replication of classical French designs",
        "Lightweight compared to traditional plaster mouldings",
        "Pre-primed and ready for painting",
        "Moisture resistant",
        "Easy installation with adhesive mounting",
        "Flexible options available for curved surfaces",
        "Seamless joining capabilities"
      ],
      applications: [
        "Ceiling and wall transitions (coving/cornices)",
        "Door and window surrounds",
        "Wall paneling and wainscoting details",
        "Ceiling medallions and roses",
        "Fireplace mantels and surrounds",
        "Pilasters and columns",
        "Dado rails and chair rails"
      ],
      specifications: {
        "Material": "High-density polyurethane or polymer composite",
        "Length": "2.44m standard (customizable)",
        "Width": "Varies by profile (40mm to 200mm)",
        "Finish": "Smooth, pre-primed surface",
        "Installation": "Adhesive mounting with finishing nails for support",
        "Paintability": "Accepts all standard interior paints"
      },
      tags: ["SKIRTINGS", "COVINGS", "BORDERS", "CORNER ROSE", "CEILING ROSES", "DADO RAILS"],
    },
    {
      image: Pastel,
      title: "WPVC PASTEL LOUVERS",
      description: "WPVC pastel-colored louvers are a modern, elegant solution for interior walls and ceiling decoration. Thses louvers combine the aesthetic appeal of pastel shades with the durability of WPVC materials. Soft pastel colors bring a vlaming and saphisticated look to any space.",
      fullDescription: "WPVC pastel louvers represent a perfect fusion of modern aesthetics and practical functionality for contemporary interior spaces. These elegant wall and ceiling coverings feature a series of angled slats in delicate pastel shades that create a soft, soothing ambiance while maintaining structural integrity. Manufactured from Wood Plastic Composite (WPVC), these louvers combine the warm appearance of wood with the durability and low maintenance benefits of engineered materials. The soft pastel color palette offers a sophisticated, calming influence that works harmoniously with a variety of interior design styles.",
      features: [
        "Soothing pastel color palette (mint, lavender, blush, sky blue, etc.)",
        "Moisture-resistant and washable surface",
        "Lightweight yet durable construction",
        "Fire-retardant properties",
        "Excellent sound absorption qualities",
        "UV-resistant to prevent color fading",
        "Easy installation with clip systems"
      ],
      applications: [
        "Accent walls in residential spaces",
        "Ceiling treatments in retail environments",
        "Wall coverings in nurseries and children's rooms",
        "Hospitality industry interiors",
        "Spa and wellness center designs",
        "Medical facility waiting areas",
        "Modern office spaces"
      ],
      specifications: {
        "Material": "Wood Plastic Composite (WPVC)",
        "Profile Width": "100mm standard (other sizes available)",
        "Length": "2.9m, 3.66m, 5.8m options",
        "Thickness": "8mm",
        "Installation": "Interlocking system or direct mounting",
        "Maintenance": "Wipeable with mild soap solution"
      },
      tags: ["PASTELCOLOUR"],
    },
    {
      image: WpvcLouvers,
      title: "WPVC INTERIOR LOUVERS",
      description: "WPVC interior louvers with wooden and marble textures are premium decorative materials designed to enhance the elegance and functionality of interior walls and ceilings.",
      fullDescription: "WPVC interior louvers represent the pinnacle of decorative wall and ceiling solutions, combining sophisticated aesthetics with practical functionality. These premium panels feature precisely angled slats that create a dynamic visual effect while offering privacy and light control. Available in authentic wood grain and luxurious marble textures, these louvers bring natural elegance to any interior space. The advanced Wood Plastic Composite (WPVC) material ensures exceptional durability, dimensional stability, and resistance to environmental factors without sacrificing the beauty of natural materials.",
      features: [
        "Ultra-realistic wood grain and marble textures",
        "Stable in varying humidity conditions - no warping or cracking",
        "Termite and pest resistant",
        "Easy to clean and maintain",
        "Multiple profile designs available",
        "Lightweight for easy installation",
        "Recyclable and eco-friendly material"
      ],
      applications: [
        "Feature walls in living rooms and bedrooms",
        "Office partition systems",
        "Hotel corridor and lobby wall cladding",
        "Restaurant and bar interior decoration",
        "Retail store display backgrounds",
        "Ceiling treatments in luxury spaces",
        "Media room acoustic treatments"
      ],
      specifications: {
        "Material": "Wood Plastic Composite (WPVC)",
        "Panel Width": "100mm, 150mm, 200mm options",
        "Length": "2.9m standard (customizable)",
        "Profile Types": "V-groove, Square edge, Beveled",
        "Surface Finish": "Wood grain, marble, textured",
        "Installation": "Tongue and groove or clip system"
      },
      tags: ["WOOD FINISH", "MARBLE", "TEXTURED"],
    },
    {
      image: CharcolePanels,
      title: "PS PANELS (CHARCOAL PANELS)",
      description: "PS Planks are innovative materials crafted to elecate the aesthetics of interior spaces. These panels offer superior durability and sleek design.",
      fullDescription: "PS Panels, also known as Charcoal Panels, represent a revolutionary approach to interior wall and ceiling treatments. These distinctive panels are manufactured using advanced polystyrene technology infused with activated charcoal components, creating a material that combines striking aesthetics with functional benefits. The panels feature a proprietary surface treatment that delivers exceptional depth and visual interest, available in a range of sophisticated finishes including wood grains, marble effects, gold-line accents, textured surfaces, and solid colors. Beyond their visual appeal, these panels also offer subtle odor-absorbing properties thanks to their charcoal composition.",
      features: [
        "Distinctive depth and dimensional appearance",
        "Subtle odor-absorbing properties",
        "Excellent thermal insulation characteristics",
        "Lightweight yet structurally sound",
        "Water-resistant and humidity stable",
        "Scratch and impact resistant surface",
        "Available in premium finishes including gold-line accents"
      ],
      applications: [
        "Luxury residential interiors",
        "Boutique hotel guest rooms",
        "High-end retail environments",
        "Executive office spaces",
        "Home theater and entertainment rooms",
        "Restaurant and lounge design",
        "Spa and wellness center interiors"
      ],
      specifications: {
        "Material": "Polystyrene with activated charcoal",
        "Panel Size": "600mm x 2440mm standard",
        "Thickness": "9mm, 12mm options",
        "Weight": "Approximately 2.3 kg/m²",
        "Fire Rating": "Class B fire resistance",
        "Installation": "Adhesive application or mechanical fixing"
      },
      tags: ["WOOD FINISH", "MARBLE", "GOLD LINE", "TEXTURED", "SOLID"],
    },
    {
      image: PVCFluted,
      title: "PVC FLUTED PANELS",
      description: "PVC fluted panels are versatile decorative material designed to enhance the aesthetics and functionality of interiors. Known for their vertical grooves and seek finish, these panels add a modern and elegant touch to walls and ceilings.",
      fullDescription: "PVC fluted panels represent a contemporary approach to interior wall treatments, characterized by their distinctive vertical ridges or grooves that create a rhythmic, three-dimensional surface texture. These architectural elements draw inspiration from classical fluted columns while offering a modern interpretation suitable for today's interior spaces. Manufactured from high-quality polyvinyl chloride, these panels combine aesthetic sophistication with practical durability, making them an ideal choice for designers seeking to add visual interest and texture to walls without compromising on functionality. Available in wooden finishes, marble effects, and plain solid colors, these panels adapt seamlessly to various design schemes from minimalist contemporary to luxurious classical.",
      features: [
        "Distinctive vertical grooves creating visual rhythm and texture",
        "Consistent groove depth and spacing for professional appearance",
        "Excellent acoustic properties for sound absorption",
        "Water and moisture resistant",
        "Easy to clean and maintain",
        "Lightweight for simple installation",
        "Available in wooden, marble, and plain finishes"
      ],
      applications: [
        "Feature walls in residential living spaces",
        "Reception desk fronts and backdrops",
        "Hotel lobby and corridor walls",
        "Retail store display backgrounds",
        "Restaurant and bar wall treatments",
        "Office partition systems",
        "Media room acoustic treatments"
      ],
      specifications: {
        "Material": "Virgin PVC with UV stabilizers",
        "Panel Size": "600mm x 2440mm standard",
        "Thickness": "12mm, 15mm, 18mm options",
        "Groove Pattern": "Regular spacing (10mm, 15mm, or 20mm)",
        "Groove Depth": "5mm standard",
        "Finish Options": "Matte, semi-gloss, or high-gloss"
      },
      tags: ["WOODEN", "MARBLE", "PLAIN"],
    },
    {
      image: PVCFalse,
      title: "PVC FALSE CEILING",
      description: "PVC false ceiling panels are a highly durable and aesthetically appealing ooption for enhancing interior spaces. These panels are lightweight, easy to install , and available in a wide variety of shades, making them a preferred choice for both residential and commercial applications.",
      fullDescription: "PVC false ceiling panels represent a modern alternative to traditional ceiling materials, offering a perfect balance of functionality, aesthetics, and ease of installation. These lightweight yet durable panels are designed to create a finished, attractive ceiling appearance while concealing structural elements, wiring, ductwork, and plumbing. Available in 12-inch thick (TKT) decorative profiles and 10-inch plain designs, these panels provide designers with versatile options to achieve the desired ceiling effect. The advanced polyvinyl chloride formulation ensures resistance to moisture, mold, and mildew, making these panels especially suitable for kitchens, bathrooms, and other humid environments.",
      features: [
        "100% waterproof and moisture resistant",
        "Lightweight for reduced structural load",
        "Fire-retardant options available",
        "Excellent thermal and sound insulation",
        "Available in 12-inch decorative and 10-inch plain profiles",
        "Easy to clean and maintain",
        "Quick installation with concealed grid systems"
      ],
      applications: [
        "Residential living spaces and bedrooms",
        "Kitchen and bathroom ceilings",
        "Office and commercial interiors",
        "Retail environments",
        "Hospitality settings",
        "Educational institutions",
        "Healthcare facilities"
      ],
      specifications: {
        "Material": "Virgin PVC with UV stabilizers",
        "Panel Width": "200mm (10-inch plain), 250mm (12-inch TKT)",
        "Length": "3m, 4m, 5m standard lengths",
        "Thickness": "8mm (standard)",
        "Surface Finish": "Matte, embossed, or semi-gloss",
        "Installation": "Tongue and groove or clip-in system"
      },
      tags: ["12 INCH TKT", "10 INCH PLAIN"],
    },
    {
      image: PU,
      title: "PU (Polyurethane) WALL COVERINGS",
      description: "PU wall coverings are premium decorative materilas known for their versatilty and intricate designs. Featuring patterns like leaves, stone textures, and jail. Bring a natural, organic look to interiors with 3D feel....",
      fullDescription: "Polyurethane (PU) wall coverings represent the pinnacle of decorative wall treatments, combining artistic expression with modern material technology. These premium architectural elements feature intricate three-dimensional designs including realistic leaf and feather patterns, authentic stone textures, and elegant jali (lattice) motifs. The advanced polyurethane formulation allows for exceptional detail reproduction while maintaining lightweight properties and durability. Each panel is meticulously crafted to create stunning visual impact with tactile dimension that transforms ordinary walls into artistic focal points. The material's flexibility and resilience make it ideal for creating continuous, seamless installations even on curved or irregular surfaces.",
      features: [
        "Highly detailed 3D designs with tactile textures",
        "Realistic reproduction of natural elements (leaves, stone)",
        "Intricate jali (lattice) patterns for elegant screening",
        "Flexible material suitable for curved surfaces",
        "Lightweight yet durable construction",
        "Paintable surface for customized color schemes",
        "Resistant to impacts, scratches, and moisture"
      ],
      applications: [
        "Feature walls in luxury residential projects",
        "Hotel lobbies and reception areas",
        "Spa and wellness center interiors",
        "High-end restaurant and lounge designs",
        "Retail boutique display backgrounds",
        "Exhibition and event backdrop walls",
        "Residential master bedroom headboard walls"
      ],
      specifications: {
        "Material": "High-density polyurethane",
        "Panel Size": "Varies by design (typically 600mm x 600mm)",
        "Thickness": "15mm to 25mm depending on design",
        "Weight": "Approximately 3-4 kg/m²",
        "Surface Finish": "Unfinished (ready for painting)",
        "Installation": "Adhesive mounting with minimal jointing"
      },
      tags: ["LEAF/FEATHER", "STONE", "JALI"],
    },
    {
      image: PVCMirror,
      title: "PVC MIRROR STRIPS",
      description: "PVC mirror strips are stylish and functional decorative materials that add a touch of elegance and modernity to interior spaces. Their reflective surface enhance lighting and provide a luxurious apprearance, making them a popular choice for contemporary interior designs.",
      fullDescription: "PVC mirror strips represent an innovative approach to interior decoration, combining the reflective properties of mirrors with the versatility and practicality of PVC material. These sleek, narrow panels feature a highly reflective surface coating applied to a durable PVC base, creating a lightweight alternative to traditional glass mirrors. Available in sophisticated metallic finishes including golden, rose gold, and silver, these mirror strips add luminosity, depth, and luxury to interior spaces. Their linear format allows for creative installation patterns that can transform walls into stunning decorative features while enhancing the perception of space and light.",
      features: [
        "High reflectivity similar to traditional mirrors",
        "Shatter-resistant and safer than glass alternatives",
        "Lightweight and easy to install",
        "Available in premium metallic finishes (golden, rose gold, silver)",
        "Flexible strips that can conform to curved surfaces",
        "Water-resistant and suitable for humid environments",
        "Can be cut to custom lengths with standard tools"
      ],
      applications: [
        "Accent wall features in living spaces",
        "Bathroom and vanity area enhancements",
        "Retail display backgrounds and highlighting",
        "Restaurant and bar decorative elements",
        "Hotel corridor and lobby design features",
        "Ceiling treatments and light reflectors",
        "Furniture and cabinet embellishments"
      ],
      specifications: {
        "Material": "Reflective PVC composite",
        "Strip Width": "25mm, 50mm, 100mm options",
        "Length": "2.44m standard (customizable)",
        "Thickness": "2mm",
        "Finishes": "Golden, Rose Gold, Silver",
        "Installation": "Adhesive backing or mounting tape"
      },
      tags: ["GOLDEN", "ROSE GOLD", "SILVER"],
    },
    {
      image: Nonails,
      title: "NO NAIL - SPECIAL ADHESIVE",
      description: "NO NAIL is a high-performance adhesive designed for versatile applications, offering an increadibly strong bond for various materials without the need for nails or screws. It's putty-colored formulation blends seamlessly with most surfaces.",
      fullDescription: "NO NAIL Special Adhesive is a revolutionary construction and installation solution that eliminates the need for traditional mechanical fasteners like nails, screws, and bolts. This high-performance adhesive features a unique putty-colored formulation that delivers exceptional bonding strength for a wide range of materials including wood, metal, plastic, ceramic, concrete, and more. Developed with advanced polymer technology, NO NAIL creates chemical bonds that often exceed the strength of the materials being joined. Its versatility, ease of application, and professional results have made it the preferred choice for contractors, designers, and DIY enthusiasts seeking efficient, clean installation solutions.",
      features: [
        "Exceptional bonding strength (up to 150 kg/cm²)",
        "Works on multiple substrates including damp surfaces",
        "Non-shrinking and gap-filling properties",
        "Weather-resistant for indoor and outdoor applications",
        "Quick initial grab with rapid curing",
        "Low odor, solvent-free formulation",
        "Putty color blends with most construction materials"
      ],
      applications: [
        "Installation of decorative panels and mouldings",
        "Mounting mirrors and glass elements",
        "Bonding countertops and worksurfaces",
        "Fixing baseboards and trim without visible fasteners",
        "Attaching construction elements to walls and ceilings",
        "Securing loose components in furniture repair",
        "Creating waterproof seals in bathroom installations"
      ],
      specifications: {
        "Material": "Advanced hybrid polymer",
        "Color": "Putty (natural beige)",
        "Working Time": "10-15 minutes",
        "Full Cure": "24 hours (80% strength in 4 hours)",
        "Temperature Resistance": "-40°C to +90°C",
        "Package Size": "290ml cartridge",
        "Coverage": "Approximately 10 linear meters per cartridge"
      },
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
              <h1 className="text-white text-sm md:text-4xl font-bold bg-opacity-45 bg-gray-800 px-7 py-3 md:py-6 w-full md:w-full">
                Products
              </h1>
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
        <div className="p-2 border-b-4 m-2">
          <h2 style={{fontWeight:'bold'}} className="md:text-4xl text-1xl font-bold mt-3 md:m-12 border-b montserrat"> EXTERIOR & INTERIOR </h2>
          <div className="md:mt-5">
            {exteriorProducts.map((product, index) => (
              <ProductCard key={index} product={product} onLearnMore={handleLearnMore} />
            ))}
          </div>
        </div>

        {/* Interior Section */}
        <div className="p-2 border-b-4 m-2">
          <h2 style={{fontWeight:'bold'}} className="md:text-4xl text-1xl font-bold mt-3 md:m-12 border-b montserrat">INTERIOR</h2>
          <div className="md:mt-5">
            {interiorProducts.map((product, index) => (
              <div key={index}>
                <ProductCard product={product} onLearnMore={handleLearnMore} />
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