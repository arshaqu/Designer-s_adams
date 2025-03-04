// Components/ProductModal.js
import React from "react";

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Function to handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 montserrat"
      onClick={handleBackdropClick} // Add click handler to the backdrop
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
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
        
        {/* Rest of the modal content */}
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

          {/* Dynamic Content Based on Product Type */}
          {product.title === "WPC EXTERIOR CLADDING" && (
        <>
          {/* What is WPC Exterior Cladding? */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What is WPC Exterior Cladding?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                WPC (Wood-Plastic Composite) Exterior Cladding is a durable and eco-friendly alternative to traditional wood and PVC panels. 
                It is used for covering building facades, offering superior weather resistance, aesthetic appeal, and low maintenance.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Wood Fiber</div>
                <div className="text-lg font-semibold text-red-600">50% – 60%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Recycled Plastic (HDPE/PP)</div>
                <div className="text-lg font-semibold text-red-600">30% – 40%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Additives & Binders</div>
                <div className="text-lg font-semibold text-red-600">10% – 15%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Applications of WPC Exterior Cladding
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Residential & Commercial Facades</li>
                <li className="text-gray-700">Balcony & Terrace Wall Coverings</li>
                <li className="text-gray-700">Garden & Landscape Walls</li>
                <li className="text-gray-700">Gazebo & Pergola Side Panels</li>
                <li className="text-gray-700">Public Infrastructure & Institutional Buildings</li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Advantages of WPC Exterior Cladding
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Eco-Friendly & Sustainable</li>
                <li className="text-gray-700">Highly Durable & Weatherproof</li>
                <li className="text-gray-700">Resistant to Moisture, Rot & Termites</li>
                <li className="text-gray-700">Low Maintenance & Easy to Clean</li>
                <li className="text-gray-700">Fire & UV Resistant</li>
                <li className="text-gray-700">Easy Installation & Lightweight</li>
              </ul>
            </div>
          </div>

          {/* Tags Section */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}


      

          {product.title === "HPL EXTERIOR LAMINATE" && (
            <>
            {/* What is HPL Exterior Laminate? */}
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
                What is HPL Exterior Laminate?
              </h3>
              <div className="p-4">
                <p className="text-gray-700">
                  HPL (High-Pressure Laminate) Exterior Laminate is a highly durable and weather-resistant surface material used 
                  for outdoor wall cladding, facades, and decorative applications. It is made by pressing layers of kraft paper, 
                  resins, and protective overlays under high pressure and temperature.
                </p>
              </div>
            </div>
  
            {/* Composition Section */}
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
                Composition
              </h3>
              <div className="p-4 flex flex-wrap justify-around text-center">
                <div className="p-2 w-1/3">
                  <div className="font-bold">Kraft Paper Layers</div>
                  <div className="text-lg font-semibold text-red-600">60% – 70%</div>
                </div>
                <div className="p-2 w-1/3">
                  <div className="font-bold">Phenolic & Melamine Resins</div>
                  <div className="text-lg font-semibold text-red-600">20% – 30%</div>
                </div>
                <div className="p-2 w-1/3">
                  <div className="font-bold">Protective Overlay</div>
                  <div className="text-lg font-semibold text-red-600">5% – 10%</div>
                </div>
              </div>
            </div>
  
            {/* Applications Section */}
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
                Applications of HPL Exterior Laminate
              </h3>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">Building Facades & Cladding</li>
                  <li className="text-gray-700">Balcony & Terrace Wall Coverings</li>
                  <li className="text-gray-700">Public Spaces & Commercial Buildings</li>
                  <li className="text-gray-700">Outdoor Furniture & Partitions</li>
                  <li className="text-gray-700">Signage & Decorative Panels</li>
                </ul>
              </div>
            </div>
  
            {/* Advantages Section */}
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
                Advantages of HPL Exterior Laminate
              </h3>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">High Durability & Strength</li>
                  <li className="text-gray-700">Weather & UV Resistant</li>
                  <li className="text-gray-700">Scratch & Impact Resistant</li>
                  <li className="text-gray-700">Low Maintenance & Easy to Clean</li>
                  <li className="text-gray-700">Fire Retardant & Anti-Fungal Properties</li>
                  <li className="text-gray-700">Wide Range of Colors & Textures</li>
                </ul>
              </div>
            </div>
  
            {/* Tags Section */}
            <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
          )}

          {/* Specifications Table (Common for All Products) */}
      

     




          {product.title === "PVC SOFFIT PANELS" && (
              <>
              {/* Features Section for HPL Exterior Laminate */}
              <div className="border-t border-gray-300 mt-4">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">What is PVC Soffit panels</h3>
                <div className="p-4">
                  <p className="text-gray-700">
                  PVC (Polyvinyl Chloride) Soffit Panels are lightweight, durable panels used to cover the underside of roof overhangs
                  , eaves, and porch ceilings. They provide ventilation, protect the roof structure from moisture and pests, and enhance
                   the building’s aesthetics.
                  </p>
                </div>
              </div>
              
              {/* Composition */}
              <div className="border-t border-gray-300 mt-4">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Composition</h3>
                <div className="p-4 flex flex-wrap justify-around text-center">
                  <div className="p-2 w-1/3">
                    <div className="font-bold">Polyvinyl Chloride (PVC)</div>
                    <div className="text-lg font-semibold text-red-600">80% – 85%</div>
                  </div>
                  <div className="p-2 w-1/3">
                    <div className="font-bold">Calcium Carbonate</div>
                    <div className="text-lg font-semibold text-red-600">10% – 15%</div>
                  </div>
                  <div className="p-2 w-1/3">
                    <div className="font-bold">Titanium Dioxide</div>
                    <div className="text-lg font-semibold text-red-600">2% – 5%</div>
                  </div>
                </div>
              </div>
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Applications of PVC Soffit Panels</h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
               
                  <li  className="text-gray-700">Roof Overhangs & Eaves</li>
                  <li  className="text-gray-700">Porch & Ceiling Covering</li>
                  <li  className="text-gray-700">Gable Ends & Fascia Boards</li>
                  <li  className="text-gray-700">Carports & Patio Ceilings</li>
                  <li  className="text-gray-700">Commercial & Industrial Buildings</li>

          
              </ul>
            </div>
          </div>


          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Advantages of PVC Soffit Panels</h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
               
                  <li  className="text-gray-700"> Weather Resistant</li>
                  <li  className="text-gray-700"> Low Maintenance</li>
                  <li  className="text-gray-700"> Lightweight & Easy to Install</li>
                  <li  className="text-gray-700"> Ventilation Options</li>
                  <li  className="text-gray-700">Fire & UV Resistant</li>
                  <li className="text-gray-700"> Pest & Mold Resistant</li>

          
              </ul>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
            </>
          )}

       



{product.title === "WPVC INTERIOR LOUVERS" && (
        <>
          {/* What is WPVC Interior Louvers Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What are WPVC Interior Louvers?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                WPVC (Wood Polymer Composite) Interior Louvers are decorative panels designed to enhance interiors with a modern, stylish, and functional aesthetic. 
                They are used for wall cladding, partitions, ceilings, and other architectural elements, offering durability, moisture resistance, and easy maintenance.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Wood Polymer Composite (WPVC)</div>
                <div className="text-lg font-semibold text-red-600">70% – 75%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Calcium Carbonate</div>
                <div className="text-lg font-semibold text-red-600">15% – 20%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Additives & Binders</div>
                <div className="text-lg font-semibold text-red-600">5% – 10%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Applications of WPVC Interior Louvers
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Wall Cladding & Decorative Panels</li>
                <li className="text-gray-700">Room Partitions & Dividers</li>
                <li className="text-gray-700">Ceiling Panels & Accent Walls</li>
                <li className="text-gray-700">Commercial & Residential Interiors</li>
                <li className="text-gray-700">Retail Stores & Hospitality Spaces</li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Advantages of WPVC Interior Louvers
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Elegant & Modern Look</li>
                <li className="text-gray-700">Waterproof & Moisture Resistant</li>
                <li className="text-gray-700">Lightweight & Easy to Install</li>
                <li className="text-gray-700">Termite & Pest Resistant</li>
                <li className="text-gray-700">Fire & UV Resistant</li>
                <li className="text-gray-700">Low Maintenance & Long Lasting</li>
              </ul>
            </div>
          </div>

          {/* Tags Section */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}





          {product.title === "PVC FOAM BOARDS" && (
            <>
              {/* Features Section for HPL Exterior Laminate */}
              <div className="border-t border-gray-300 mt-4">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">What is PVC FOAM BOARD</h3>
                <div className="p-4">
                  <p className="text-gray-700">
                  PVC (Polyvinyl Chloride) foam board is a lightweight, rigid, and durable material made from polyvinyl chloride (PVC). It is widely used in construction,
                  advertising, furniture, and interior design due to its excellent strength, moisture resistance, and ease of fabrication.


                  </p>
                </div>
              </div>
              
              {/* Composition */}
              <div className="border-t border-gray-300 mt-4">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">Composition</h3>
                <div className="p-4 flex flex-wrap justify-around text-center">
                  <div className="p-2 w-1/3">
                    <div className="font-bold">POLYVINYL CHLORIDE (PVC)</div>
                    <div className="text-lg font-semibold text-red-600">60%</div>
                  </div>
                  <div className="p-2 w-1/3">
                    <div className="font-bold">FOAMING AGENTS</div>
                    <div className="text-lg font-semibold text-red-600">20%</div>
                  </div>
                  <div className="p-2 w-1/3">
                    <div className="font-bold">ADDITIVES & STABILIZERS</div>
                    <div className="text-lg font-semibold text-red-600">20%</div>
                  </div>
                </div>
              </div>


              <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Applications Section */}
      <div className="border-t border-gray-300 mt-4">
        <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300">Applications of PVC Foam Board</h3>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Advertising & Signage", description: "Used for billboards, displays, and digital printing." },
            { title: "Furniture & Interior Decor", description: "Kitchen cabinets, partitions, and ceiling panels." },
            { title: "Construction", description: "Wall cladding, roofing, and insulation panels." },
            { title: "Automotive & Marine", description: "Used in vehicle interiors and boats due to water resistance." },
            { title: "Industrial Applications", description: "Chemical-resistant panels for labs and factories." }
          ].map((app, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg">{app.title}</h4>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Properties Section */}
      <div className="border-t border-gray-300 mt-6">
        <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300">Key Properties of PVC Foam Board</h3>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Lightweight – Easy to handle and install.",
            "Moisture & Waterproof – Does not absorb water, making it ideal for outdoor applications.",
            "Corrosion & Chemical Resistant – Resistant to acids, alkalis, and other chemicals.",
            "Weatherproof & UV Resistant – Can withstand sun exposure without degrading.",
            "Fire Retardant – Offers high resistance to flames and does not propagate fire easily.",
            "Easy to Cut & Shape – Can be sawed, drilled, glued, and painted easily.",
            "Smooth Surface – Suitable for printing and lamination."
          ].map((property, index) => (
            <div key={index} className="p-3 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
              <span className="text-green-700 font-medium">✅ {property}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

            </>
          )}





{product.title === "FRENCH MOULDINGS" && (
        <>
          {/* What is French Moulding Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What are French Mouldings?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                French mouldings are decorative trim and profiles used in interior and furniture design 
                to create elegant, classical, and sophisticated architectural details. They are commonly 
                crafted from wood, MDF, or polyurethane and are used to enhance ceilings, walls, doors, 
                and furniture pieces.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">SOLID WOOD / MDF</div>
                <div className="text-lg font-semibold text-red-600">70%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">PRIMERS & PAINTS</div>
                <div className="text-lg font-semibold text-red-600">20%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">ADHESIVES & SEALERS</div>
                <div className="text-lg font-semibold text-red-600">10%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300">
                Applications of French Mouldings
              </h3>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Wall & Ceiling Décor", description: "Used to enhance walls and ceilings with intricate detailing." },
                  { title: "Furniture & Cabinetry", description: "Adds classic decorative trims to furniture and cabinets." },
                  { title: "Doors & Windows", description: "Provides an elegant frame to doors and windows." },
                  { title: "Interior Paneling", description: "Enhances luxury interiors with panel mouldings and trims." },
                  { title: "Commercial & Residential Spaces", description: "Used in hotels, luxury homes, and offices for premium finishes." }
                ].map((app, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
                    <h4 className="font-semibold text-lg">{app.title}</h4>
                    <p className="text-gray-700">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Properties Section */}
            <div className="border-t border-gray-300 mt-6">
              <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300">
                Key Properties of French Mouldings
              </h3>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Elegant & Classic – Enhances interiors with a luxurious touch.",
                  "Durable & Long-Lasting – Resistant to wear and tear over time.",
                  "Customizable – Available in various designs, sizes, and finishes.",
                  "Easy to Install – Can be glued, nailed, or screwed into place.",
                  "Paintable & Stainable – Can be finished to match any décor style.",
                  "Lightweight – Especially in MDF or polyurethane variants, making installation easy.",
                  "Moisture Resistant – Certain materials offer resistance to humidity and temperature changes."
                ].map((property, index) => (
                  <div key={index} className="p-3 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
                    <span className="text-green-700 font-medium">✅ {property}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}






{product.title === "ACRYLIC LAMINATES" && (
        <>
          {/* What is Acrylic Laminate Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What is Acrylic Laminate?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                Acrylic laminate is a high-gloss, durable surface finish commonly used in interior 
                applications such as cabinetry, furniture, and wall paneling. It is known for its 
                excellent aesthetic appeal, scratch resistance, and ease of maintenance.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">ACRYLIC RESIN</div>
                <div className="text-lg font-semibold text-red-600">70%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">BINDER & ADHESIVES</div>
                <div className="text-lg font-semibold text-red-600">20%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">ADDITIVES & STABILIZERS</div>
                <div className="text-lg font-semibold text-red-600">10%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="border-t border-gray-300 mt-4">
              <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300">
                Applications of Acrylic Laminates
              </h3>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Furniture & Cabinetry", description: "Used in high-end furniture and modular kitchen cabinets." },
                  { title: "Interior Decor", description: "Applied on wall panels, ceilings, and decorative surfaces." },
                  { title: "Retail & Commercial Spaces", description: "Provides a premium finish to showrooms and offices." },
                  { title: "Doors & Partitions", description: "Used for stylish doors and partition panels." },
                  { title: "Automotive & Aviation", description: "Enhances interiors of luxury vehicles and aircraft." }
                ].map((app, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
                    <h4 className="font-semibold text-lg">{app.title}</h4>
                    <p className="text-gray-700">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Properties Section */}
            <div className="border-t border-gray-300 mt-6">
              <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300">
                Key Properties of Acrylic Laminates
              </h3>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "High Gloss Finish – Offers a premium, mirror-like appearance.",
                  "Scratch & Stain Resistant – Protects against scratches and stains, maintaining a new look.",
                  "Moisture & Waterproof – Resistant to water, making it ideal for kitchen and bathroom use.",
                  "UV & Weather Resistant – Does not fade or degrade under sunlight exposure.",
                  "Durable & Long-Lasting – Highly resistant to wear and tear over time.",
                  "Easy to Clean – Simple to maintain with just a damp cloth.",
                  "Wide Range of Colors – Available in various colors and textures."
                ].map((property, index) => (
                  <div key={index} className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
                    <span className="text-green-700 font-medium">✅ {property}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}





{product.title === "WPVC PASTEL LOUVERS" && (
        <>
          {/* What is WPVC Pastel Louvers? */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What is WPVC Pastel Louvers?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                WPVC (Wood Polymer Composite) Pastel Louvers are decorative, durable panels designed for both interior and exterior applications. 
                These louvers provide a sleek, modern appearance while offering excellent resistance to weather, moisture, and pests.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Wood Polymer Composite (WPVC)</div>
                <div className="text-lg font-semibold text-red-600">50% – 60%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">PVC Resin</div>
                <div className="text-lg font-semibold text-red-600">30% – 40%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Additives & Stabilizers</div>
                <div className="text-lg font-semibold text-red-600">5% – 10%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Applications of WPVC Pastel Louvers
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Interior Wall Accents & Cladding</li>
                <li className="text-gray-700">Exterior Facades & Decorative Panels</li>
                <li className="text-gray-700">Ceiling Coverings & Partitions</li>
                <li className="text-gray-700">Commercial & Residential Spaces</li>
                <li className="text-gray-700">Retail & Hospitality Interiors</li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Advantages of WPVC Pastel Louvers
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Weather & Moisture Resistant</li>
                <li className="text-gray-700">Durable & Long-lasting</li>
                <li className="text-gray-700">Low Maintenance & Easy to Clean</li>
                <li className="text-gray-700">Eco-Friendly & Recyclable</li>
                <li className="text-gray-700">Available in Various Colors & Finishes</li>
                <li className="text-gray-700">Resistant to Termites & Pests</li>
              </ul>
            </div>
          </div>

          {/* Tags Section */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}
    






    {product.title === "PS PANELS (CHARCOAL PANELS)" && (
        <>
          {/* What are PS Panels (Charcoal Panels)? */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What are PS Panels (Charcoal Panels)?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                PS (Polystyrene) Charcoal Panels are stylish, lightweight decorative panels designed for modern interiors. 
                They offer a **matte charcoal finish** that enhances aesthetics while providing durability, sound absorption, and resistance to moisture and pests.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polystyrene (PS)</div>
                <div className="text-lg font-semibold text-red-600">70% – 80%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Pigments & Stabilizers</div>
                <div className="text-lg font-semibold text-red-600">10% – 15%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Additives</div>
                <div className="text-lg font-semibold text-red-600">5% – 10%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Applications of PS Panels (Charcoal Panels)
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Interior Wall Cladding</li>
                <li className="text-gray-700">Ceiling Panels & Partitions</li>
                <li className="text-gray-700">Commercial & Residential Interiors</li>
                <li className="text-gray-700">Retail Store & Showroom Decor</li>
                <li className="text-gray-700">Accent Walls & Feature Panels</li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Advantages of PS Panels (Charcoal Panels)
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Sleek, Modern Charcoal Finish</li>
                <li className="text-gray-700">Lightweight & Easy to Install</li>
                <li className="text-gray-700">Water & Moisture Resistant</li>
                <li className="text-gray-700">Sound Absorption Properties</li>
                <li className="text-gray-700">Termite & Pest Resistant</li>
                <li className="text-gray-700">Low Maintenance & Durable</li>
              </ul>
            </div>
          </div>

          {/* Tags Section */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}






{product.title === "PVC FLUTED PANELS" && (
        <>
          {/* What are PVC Fluted Panels? */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What are PVC Fluted Panels?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                PVC Fluted Panels are decorative wall panels made from **Polyvinyl Chloride (PVC)** with a grooved or fluted design. 
                These panels are widely used for **interior wall cladding** due to their **elegant appearance, durability, and low maintenance**.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyvinyl Chloride (PVC)</div>
                <div className="text-lg font-semibold text-red-600">80% – 85%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Calcium Carbonate</div>
                <div className="text-lg font-semibold text-red-600">10% – 15%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Additives & Stabilizers</div>
                <div className="text-lg font-semibold text-red-600">2% – 5%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Applications of PVC Fluted Panels
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Interior Wall Cladding</li>
                <li className="text-gray-700">Feature Walls & Accent Panels</li>
                <li className="text-gray-700">Commercial & Residential Interiors</li>
                <li className="text-gray-700">Retail Store & Showroom Decor</li>
                <li className="text-gray-700">Ceiling Panels & Partitions</li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Advantages of PVC Fluted Panels
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Elegant & Modern Design</li>
                <li className="text-gray-700">Lightweight & Easy to Install</li>
                <li className="text-gray-700">Water & Moisture Resistant</li>
                <li className="text-gray-700">Termite & Pest Resistant</li>
                <li className="text-gray-700">Fire & UV Resistant</li>
                <li className="text-gray-700">Low Maintenance & Durable</li>
              </ul>
            </div>
          </div>

          {/* Tags Section */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}





{product.title === "PVC FALSE CEILING" && (
        <>
          {/* What is PVC False Ceiling? */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What is PVC False Ceiling?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                PVC False Ceiling is a **lightweight, durable, and moisture-resistant** ceiling solution made from **Polyvinyl Chloride (PVC)**. 
                It is used in **residential, commercial, and industrial spaces** to enhance aesthetics, provide insulation, and protect the ceiling structure.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyvinyl Chloride (PVC)</div>
                <div className="text-lg font-semibold text-red-600">80% – 85%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Calcium Carbonate</div>
                <div className="text-lg font-semibold text-red-600">10% – 15%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Stabilizers & Additives</div>
                <div className="text-lg font-semibold text-red-600">2% – 5%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Applications of PVC False Ceiling
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Residential Ceilings (Bedrooms, Living Rooms, Kitchens)</li>
                <li className="text-gray-700">Commercial Spaces (Offices, Retail Stores, Hotels)</li>
                <li className="text-gray-700">Healthcare Facilities (Hospitals, Clinics, Laboratories)</li>
                <li className="text-gray-700">Educational Institutions (Schools, Colleges, Libraries)</li>
                <li className="text-gray-700">Industrial & Warehouse Ceilings</li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Advantages of PVC False Ceiling
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Water & Moisture Resistant</li>
                <li className="text-gray-700">Lightweight & Easy to Install</li>
                <li className="text-gray-700">Termite & Pest Resistant</li>
                <li className="text-gray-700">Fire & UV Resistant</li>
                <li className="text-gray-700">Low Maintenance & Durable</li>
                <li className="text-gray-700">Cost-Effective Ceiling Solution</li>
              </ul>
            </div>
          </div>

          {/* Tags Section */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}








{product.title === "PU (Polyurethane) WALL COVERINGS" && (
        <>
          {/* What is PU Wall Covering? */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What is PU (Polyurethane) Wall Covering?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                PU (Polyurethane) Wall Coverings are **durable, lightweight, and
                aesthetically appealing** wall panels designed to mimic
                **natural materials** like wood, brick, and stone. They are
                widely used in **residential, commercial, and hospitality
                spaces** due to their **high insulation properties, moisture
                resistance, and low maintenance**.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyurethane Resin</div>
                <div className="text-lg font-semibold text-red-600">
                  80% – 90%
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Additives & Fillers</div>
                <div className="text-lg font-semibold text-red-600">
                  5% – 10%
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">UV & Fire Retardants</div>
                <div className="text-lg font-semibold text-red-600">
                  2% – 5%
                </div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Applications of PU Wall Coverings
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">
                  Residential Interiors (Living rooms, Bedrooms, Hallways)
                </li>
                <li className="text-gray-700">
                  Commercial Spaces (Offices, Retail Stores, Hotels, Restaurants)
                </li>
                <li className="text-gray-700">
                  Hospitality Industry (Resorts, Cafes, Lounges)
                </li>
                <li className="text-gray-700">
                  Feature Walls (Accent Walls, TV Panels, Reception Areas)
                </li>
                <li className="text-gray-700">
                  Outdoor Applications (Exterior Facades, Patios, Balconies)
                </li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Advantages of PU Wall Coverings
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Lightweight & Easy to Install</li>
                <li className="text-gray-700">Waterproof & Moisture Resistant</li>
                <li className="text-gray-700">Termite & Pest Resistant</li>
                <li className="text-gray-700">Fire & UV Resistant</li>
                <li className="text-gray-700">Low Maintenance & Cost-Effective</li>
                <li className="text-gray-700">
                  Enhances Sound & Heat Insulation
                </li>
              </ul>
            </div>
          </div>

          {/* Tags Section */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}




{product.title === "PVC MIRROR STRIPS" && (
        <>
          {/* What are PVC Mirror Strips? */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What are PVC Mirror Strips?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                **PVC Mirror Strips** are **decorative, lightweight, and durable** strips designed to enhance interior aesthetics. They combine the **reflective beauty of mirrors** with the **flexibility and resilience of PVC**, making them an excellent choice for **wall designs, ceilings, furniture, and commercial spaces**.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyvinyl Chloride (PVC)</div>
                <div className="text-lg font-semibold text-red-600">80% – 90%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Acrylic Mirror Coating</div>
                <div className="text-lg font-semibold text-red-600">5% – 10%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Adhesive & Protective Layers</div>
                <div className="text-lg font-semibold text-red-600">2% – 5%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Applications of PVC Mirror Strips
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Wall & Ceiling Decor</li>
                <li className="text-gray-700">Furniture & Cabinet Finishes</li>
                <li className="text-gray-700">Partition & Paneling Designs</li>
                <li className="text-gray-700">Retail & Commercial Interiors</li>
                <li className="text-gray-700">Hotel & Luxury Spaces</li>
                <li className="text-gray-700">Event & Exhibition Decor</li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Advantages of PVC Mirror Strips
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Lightweight & Easy to Install</li>
                <li className="text-gray-700">Moisture & Termite Resistant</li>
                <li className="text-gray-700">Flexible & Shatterproof</li>
                <li className="text-gray-700">Enhances Aesthetics & Brightness</li>
                <li className="text-gray-700">Low Maintenance & Durable</li>
                <li className="text-gray-700">Cost-Effective Alternative to Glass Mirrors</li>
              </ul>
            </div>
          </div>

          {/* Tags Section */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}





{product.title === "NO NAIL - SPECIAL ADHESIVE" && (
        <>
          {/* What is No Nail - Special Adhesive? */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              What is No Nail - Special Adhesive?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                **No Nail - Special Adhesive** is a **high-strength bonding solution** designed to replace traditional nails, screws, and mechanical fasteners. It provides a **strong, durable, and seamless** adhesion to various surfaces, making it ideal for **construction, interior decor, and panel installations**.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyurethane / Acrylic Base</div>
                <div className="text-lg font-semibold text-red-600">60% – 70%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Solvents & Additives</div>
                <div className="text-lg font-semibold text-red-600">20% – 30%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Curing Agents</div>
                <div className="text-lg font-semibold text-red-600">5% – 10%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Applications of No Nail - Special Adhesive
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Fixing Wall Panels & Cladding</li>
                <li className="text-gray-700">Securing Wooden & PVC Boards</li>
                <li className="text-gray-700">Bonding Tiles & Stones</li>
                <li className="text-gray-700">Installation of Decorative Elements</li>
                <li className="text-gray-700">Automotive & Industrial Uses</li>
                <li className="text-gray-700">General Construction & Repairs</li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
              Advantages of No Nail - Special Adhesive
            </h3>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Eliminates Need for Nails & Screws</li>
                <li className="text-gray-700">Strong & Durable Bonding</li>
                <li className="text-gray-700">Water & Heat Resistant</li>
                <li className="text-gray-700">Quick Drying & Easy to Apply</li>
                <li className="text-gray-700">Suitable for Multiple Surfaces</li>
                <li className="text-gray-700">Seamless & Aesthetic Finish</li>
              </ul>
            </div>
          </div>

          {/* Tags Section */}
          <div className="p-4 bg-gray-50 border-t border-gray-300 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}





        </div>
      </div>
    </div>
  );
};

export default ProductModal;