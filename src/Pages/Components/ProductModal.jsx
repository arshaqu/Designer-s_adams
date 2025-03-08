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




          {product.title === "WPC EXTERIOR CLADDING" && (
        <>
          <div className="mt-6 space-y-6">}
    <section className="border rounded-lg shadow-md overflow-hidden">
      <h3 className="text-xl font-bold bg-red-600 text-white p-4">What is WPC Exterior Cladding?</h3>
      <div className="p-6 bg-gray-50">
        <p className="text-gray-700 leading-relaxed">
          WPC (Wood-Plastic Composite) Exterior Cladding is a durable and eco-friendly alternative to traditional wood and PVC panels. It is used for covering building facades, offering superior weather resistance, aesthetic appeal, and low maintenance.
        </p>
      </div>
    </section>
    <section className="border rounded-lg shadow-md overflow-hidden">
      <h3 className="text-xl font-bold bg-red-600 text-white p-4">Composition</h3>
      <div className="p-6 bg-gray-50 space-y-4">
        <p><span className="font-semibold">Core Material:</span> Multiple layers of kraft paper impregnated with phenolic resin.</p>
        <p><span className="font-semibold">Surface Layer:</span> Decorative paper impregnated with melamine resin.</p>
        <p><span className="font-semibold">Overlay:</span> Protective transparent top layer for enhanced durability and wear resistance.</p>
      </div>
    </section>
    <section className="border rounded-lg shadow-md overflow-hidden">
      <h3 className="text-xl font-bold bg-red-600 text-white p-4">Key Features and Benefits of HPL Boards</h3>
      <div className="p-6 bg-gray-50 space-y-4">
        {["Durability", "Weather Resistance", "Aesthetic Versatility", "Low Maintenance", "Fire and Moisture Resistance", "Eco-Friendly", "Warranty"].map((feature, index) => (
          <div key={index} className="flex gap-2">
            <span className="font-semibold">{index + 1}. {feature}:</span>
            <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
        ))}
      </div>
    </section>
    <section className="border rounded-lg shadow-md overflow-hidden">
      <h3 className="text-xl font-bold bg-red-600 text-white p-4">Warranty & Installation Guidelines</h3>
      <div className="p-6 bg-gray-50 space-y-4">
        <p>Deziner Ceiling Co. warrants that Adhams HPL sheets will be free from manufacturing defects...</p>
        <h4 className="font-bold">Installation Guidelines:</h4>
        <ul className="list-disc pl-6 space-y-2">
          {["Preparation", "Measurement", "Cutting", "Fixing", "Finishing"].map((step, index) => (
            <li key={index} className="text-gray-700"><span className="font-semibold">{step}:</span> Lorem ipsum dolor sit.</li>
          ))}
        </ul>
      </div>
    </section>
    <div className="p-4 bg-gray-100 border rounded-lg flex flex-wrap gap-2">
      {product.tags.map((tag, index) => (
        <span key={index} className="bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md">
          {tag}
        </span>
      ))}
    </div>
  </div> 
        </>
      )}





          {product.title === "HPL EXTERIOR LAMINATE" && (
            <>
            {/* What is HPL Exterior Laminate? */}
            <div className="border-t border-gray-300 mt-4 montserrat">
  <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
    Composition
  </h3>
  <div className="p-4 space-y-4 text-start">
    <div className="p-2">
      <div className="font-bold">Core Material</div>
      <div className="text-lg  text-red-600">
        Multiple layers of kraft paper impregnated with phenolic resin.
      </div>
    </div>
    <div className="p-2">
      <div className="font-bold">Surface Layer</div>
      <div className="text-lg  text-red-600">
        Decorative paper impregnated with melamine resin.
      </div>
    </div>
    <div className="p-2">
      <div className="font-bold">Overlay</div>
      <div className="text-lg  text-red-600">
        Protective transparent top layer for enhanced durability and wear resistance.
      </div>
    </div>
  </div>

  <h3 className="text-lg  p-4 bg-gray-100 border-b border-gray-300 mt-4">
    Sizes
  </h3>
  <div className="p-4 space-y-4 text-start">
    <div className="p-2">
      <div className="font-bold">Size 1</div>
      <div className="text-lg  text-red-600">Length - 244cm</div>
      <div className="text-lg  text-red-600">Width - 122cm</div>
    </div>
    <div className="p-2">
      <div className="font-bold">Size 2</div>
      <div className="text-lg  text-red-600">Length - 305cm</div>
      <div className="text-lg  text-red-600">Width - 129cm</div>
    </div>
    <div className="p-2">
      <div className="font-bold">Size 3</div>
      <div className="text-lg  text-red-600">Thickness - 6 mm</div>
    </div>
  </div>

  <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300 mt-4">
    Key Features and Benefits of HPL Boards
  </h3>
  <div className="p-4 space-y-4">
    <div className="p-2">
      <div className="font-bold">1. Durability</div>
      <ul className="text-lg text-red-600 list-disc list-inside">
        <li>Resistant to impact, scratches, and abrasions.</li>
        <li>Ideal for high-traffic areas due to its robust construction.</li>
      </ul>
    </div>
    <div className="p-2">
      <div className="font-bold">2. Weather Resistance (Exterior Grade)</div>
      <ul className="text-lg  text-red-600 list-disc list-inside">
        <li>Withstands UV rays, rain, and temperature fluctuations.</li>
        <li>Perfect for outdoor use.</li>
      </ul>
    </div>
    <div className="p-2">
      <div className="font-bold">3. Aesthetic Versatility</div>
      <ul className="text-lg  text-red-600 list-disc list-inside">
        <li>Available in various colors, patterns, textures, and finishes.</li>
        <li>Enhances spaces with sleek, modern designs.</li>
      </ul>
    </div>
    <div className="p-2">
      <div className="font-bold">4. Low Maintenance</div>
      <ul className="text-lg  text-red-600 list-disc list-inside">
        <li>Easy to clean with water or mild detergents.</li>
        <li>Resistant to stains; no frequent polishing or repainting needed.</li>
      </ul>
    </div>
    <div className="p-2">
      <div className="font-bold">5. Fire and Moisture Resistance</div>
      <ul className="text-lg  text-red-600 list-disc list-inside">
        <li>Meets safety standards with fire-resistant grades.</li>
        <li>Non-porous surface prevents moisture absorption.</li>
      </ul>
    </div>
    <div className="p-2">
      <div className="font-bold">6. Eco-Friendly</div>
      <ul className="text-lg  text-red-600 list-disc list-inside">
        <li>Made from sustainable materials and recyclable.</li>
        <li>Protects against color fading and water damage.</li>
      </ul>
    </div>
  </div>

  <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300 mt-4">
    Warranty
  </h3>
  <div className="p-4 text-lg text-red-600">
    Deziner Ceiling Co. warrants Adhams HPL sheets against manufacturing defects, ensuring that color fade will not exceed 5%, gloss loss on matte finishes will not exceed 40%, and color leach is minimal within the first 15 years of installation. Warranty will be void if installed incorrectly or removed without informing the supplier.
  </div>

  <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300 mt-4">
    Installation Process
  </h3>
  <ul className="p-4 text-lg text-red-600 list-disc list-inside">
    <li><strong>Preparation:</strong> Clean and prepare the exterior wall surface before installation.</li>
    <li><strong>Measurement:</strong> Accurately measure the area to determine the required number of panels.</li>
    <li><strong>Cutting:</strong> Use standard woodworking tools to cut panels to the desired size.</li>
    <li><strong>Fixing:</strong> Secure panels with screws or clips, ensuring proper alignment.</li>
    <li><strong>Finishing:</strong> Apply trim or molding for a refined appearance.</li>
  </ul>

  <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300 mt-4">
    How to Care for HPL Sheets
  </h3>
  <ul className="p-4 text-lg text-red-600 list-disc list-inside">
    <li><strong>Avoid Harsh Chemicals:</strong> Clean with mild detergent and warm water.</li>
    <li><strong>Keep Dry:</strong> While moisture-resistant, keeping them dry prolongs lifespan.</li>
    <li><strong>Clean Regularly:</strong> Prevent stains and mold with regular maintenance.</li>
  </ul>

  <h3 className="text-lg p-4 bg-gray-100 border-b border-gray-300 mt-4">
    Applications of HPL Boards
  </h3>
  <div className="p-4">
    <div className="font-bold">1. Interior Applications</div>
    <ul className="text-lg text-red-600 list-disc list-inside">
      <li>Furniture surfacing for cabinets, wardrobes, and countertops.</li>
      <li>Wall cladding for residential and commercial interiors.</li>
      <li>Partitions in offices, bathrooms, and hospitals.</li>
    </ul>
    <div className="font-bold mt-4">2. Exterior Applications</div>
    <ul className="text-lg text-red-600 list-disc list-inside">
      <li>Facade cladding for improved aesthetics and weather protection.</li>
      <li>Outdoor furniture and signage.</li>
      <li>Balconies, railings, and soffits.</li>
    </ul>
    <div className="font-bold mt-4">3. Specialized Uses</div>
    <ul className="text-lg text-red-600 list-disc list-inside">
      <li>Compact HPL boards for laboratory countertops and industrial use.</li>
      <li>Decorative panels for retail spaces and exhibition booths.</li>
    </ul>
  </div>
</div>
<h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300 mt-4">
Why Choose Our HPL Boards?
  </h3>
  <ul className="p-4 text-lg text-red-600 list-disc list-inside">
    <li><strong>Superior Quality:</strong> High-grade materials that ensure long-lasting performance.    </li>
    <li><strong>Design Variety:</strong>  A wide range of designs and finishes to suit all styles.</li>
    <li><strong>Custom Solutions:</strong>Tailored sizes and finishes for specific project needs.</li>
    <li><strong>Sustainability:</strong>Eco-friendly production and recyclable products</li>

  </ul>
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
                <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Composition</h3>
                <div className="p-4 flex flex-wrap justify-around text-center">
                  <div className="p-2 w-1/3">
                    <div className="font-bold">Polyvinyl Chloride (PVC)</div>
                    <div className="text-lg font-semibold text-red-600">70%</div>
                  </div>
                  <div className="p-2 w-1/3">
                    <div className="font-bold">Calcium Carbonate</div>
                    <div className="text-lg font-semibold text-red-600">25%</div>
                  </div>
                  <div className="p-2 w-1/3">
                    <div className="font-bold">Others</div>
                    <div className="text-lg font-semibold text-red-600">5%</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 mt-4">
                <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Size</h3>
                <div className="p-4 flex flex-wrap justify-around text-center">
                  <div className="p-2 w-1/3">
                    <div className="font-bold">Length</div>
                    <div className="text-lg font-semibold text-red-600">305cm</div>
                  </div>
                  <div className="p-2 w-1/3">
                    <div className="font-bold">Width</div>
                    <div className="text-lg font-semibold text-red-600">30cm</div>
                  </div>
                  <div className="p-2 w-1/3">
                    <div className="font-bold">Thickness</div>
                    <div className="text-lg font-semibold text-red-600">12mm</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 mt-4">
      <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
        PVC Soffit Panels
      </h3>
      <div className="p-4 text-gray-700 space-y-4">
        <p>
          PVC Soffit panels are versatile and can also be used for interior ceiling applications. 
          They are lightweight, moisture-resistant, and easy to install—ideal for cost-effective and 
          low-maintenance solutions.
        </p>

        <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Key Features of Soffit Panels:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Durability:</span> Made from PVC for long-lasting performance. 
            Resistant to moisture, pests, and rot.
          </li>
          <li>
            <span className="font-semibold">Aesthetic Appeal:</span> Available in a variety of finishes, including woodgrain, 
            metallic, and solid colors. Enhances exterior and interior spaces with a polished look.
          </li>
          <li>
            <span className="font-semibold">Ventilation:</span> Many soffit panels are perforated to allow proper airflow, reducing 
            moisture buildup and preventing roof damage.
          </li>
          <li>
            <span className="font-semibold">Weather Resistance:</span> Protects the underside of roofs from rain, wind, and UV exposure. 
            Suitable for harsh outdoor conditions.
          </li>
          <li>
            <span className="font-semibold">Low Maintenance:</span> Easy to clean and maintain with minimal upkeep required over time.
          </li>
          <li>
            <span className="font-semibold">Fire Resistance:</span> Some soffit panels come with fire-retardant properties, enhancing safety.
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-300 mt-4">
      <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
        Applications of Soffit Panels
      </h3>
      <div className="p-4 text-gray-700 space-y-4">
        <h4 className="text-lg font-semibold">Exterior Use:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Under Roof Overhangs:</span> Protects rafters and roof structures from weather damage.
          </li>
          <li>
            <span className="font-semibold">Eaves and Porch Ceilings:</span> Adds a finished look while maintaining ventilation.
          </li>
          <li>
            <span className="font-semibold">Outdoor Kitchens or Shelters:</span> Provides a durable and stylish ceiling finish.
          </li>
        </ul>

        <h4 className="text-lg font-semibold">Interior Use:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Ceilings in Hallways or Living Areas:</span> Creates a clean, modern appearance.
          </li>
          <li>
            <span className="font-semibold">Accent Panels:</span> Adds texture and design to ceilings in homes or commercial spaces.
          </li>
        </ul>

        <h4 className="text-lg font-semibold">Benefits of Using Our Soffit Panels:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Premium Quality:</span> Manufactured to withstand diverse environmental conditions.
          </li>
          <li>
            <span className="font-semibold">Wide Range of Styles:</span> Multiple designs, finishes, and materials to match architectural needs.
          </li>
          <li>
            <span className="font-semibold">Easy Installation:</span> Lightweight and designed for quick and efficient installation.
          </li>
          <li>
            <span className="font-semibold">Low Maintenance:</span> Long-lasting materials that reduce upkeep costs.
          </li>
          <li>
            <span className="font-semibold">Custom Solutions:</span> Tailored sizes and finishes for unique projects.
          </li>
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
      {/* Composition Section */}
      <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
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
        <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
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
        <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
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
                    0.5  0.5  0.45  0.5  0.55  0.6  0.5  0.55  0.6  0.45  0.5  0.55  0.6  0.7
                  </td>
                  <td className="border border-gray-300 p-2">
                    5  8  12  12  12  12  15  15  15  17  17  17  17  17
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Density Options */}
      <div className="border-t border-gray-300 mt-4">
        <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
          Density Options
        </h3>
        <div className="p-4 text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Low-Density Boards:</span>
              <ul className="list-disc pl-5">
                <li>Lightweight and easy to handle.</li>
                <li>Best for applications like signage, decorative panels, and exhibition displays.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Medium-Density Boards:</span>
              <ul className="list-disc pl-5">
                <li>Balanced strength and flexibility.</li>
                <li>Suitable for furniture, partitions, and interior cladding.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">High-Density Boards:</span>
              <ul className="list-disc pl-5">
                <li>High strength and rigidity.</li>
                <li>Ideal for load-bearing applications, outdoor cladding, and industrial use.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Applications of PVC Foam Boards */}
      <div className="border-t border-gray-300 mt-4">
        <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
          Applications of PVC Foam Boards
        </h3>
        <div className="p-4 text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Signage and Advertising:</span>
              <ul className="list-disc pl-5">
                <li>Ideal for banners, hoardings, and display boards.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Interior Design:</span>
              <ul className="list-disc pl-5">
                <li>Wall cladding, ceiling panels, and decorative partitions.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Furniture:</span>
              <ul className="list-disc pl-5">
                <li>Used for lightweight and moisture-resistant furniture, especially in kitchens and bathrooms.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Outdoor Applications:</span>
              <ul className="list-disc pl-5">
                <li>Building facades, fences, and temporary structures.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Industrial Use:</span>
              <ul className="list-disc pl-5">
                <li>Used in packaging, insulation, and construction templates.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="border-t border-gray-300 mt-4">
        <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
          Key Features of PVC Foam Boards
        </h3>
        <div className="p-4">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><span className="font-semibold">Lightweight and Strong:</span> Easy to handle with excellent durability.</li>
            <li><span className="font-semibold">Weather Resistance:</span> Resistant to moisture, UV rays, and temperature changes.</li>
            <li><span className="font-semibold">Fire Retardant:</span> Meets fire safety standards.</li>
            <li><span className="font-semibold">Eco-Friendly:</span> Recyclable and non-toxic.</li>
            <li><span className="font-semibold">Customizable:</span> Easy to cut, drill, and shape.</li>
          </ul>
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
          Acrylic laminates are high-gloss, durable, and aesthetically appealing surfacing materials widely used in modern interior designs. These laminates are known for their superior finish, vibrant colors, and versatility. Available in various finishes such as plain solid colors, sparkling, matte, marble, and wood textures, they are a preferred choice for furniture, walls, and cabinetry.
        </p>
      </div>
    </div>

    {/* Composition Section */}
    <div className="border-t border-gray-300 mt-4">
      <h3 className="text-lg font-semibold p-4 bg-gray-100 border-b border-gray-300">
        Composition
      </h3>
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[ 
          { title: "Hard Coating", value: "Protects surface" },
          { title: "Acrylic Layer", value: "Enhances durability" },
          { title: "Printing Layer", value: "Adds decorative finish" },
          { title: "PVC Based Layer", value: "Provides strength & stability" },
          { title: "Primer Layer", value: "Ensures adhesion to surfaces" }
        ].map((item, index) => (
          <div key={index} className="p-3 bg-gray-50 border rounded-lg shadow-sm">
            <div className="font-bold">{item.title}</div>
            <div className="text-gray-700">{item.value}</div>
          </div>
        ))}
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
            { title: "Kitchens", description: "Glossy cabinet finishes and matte backsplashes." },
            { title: "Living Rooms", description: "Accent walls, shelves, and furniture surfaces." },
            { title: "Bedrooms", description: "Wardrobe shutters and headboards." },
            { title: "Offices", description: "Enhance lobbies, meeting rooms, or partitions with metallic finishes." },
            { title: "Retail Stores", description: "Attractive backdrops for product displays." },
            { title: "Hotels & Restaurants", description: "Luxurious touch to hospitality spaces." }
          ].map((app, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg">{app.title}</h4>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Key Features Section */}
    <div className="border-t border-gray-300 mt-6">
  {/* Introduction Section */}
  <h3 className="text-2xl font-bold p-4 bg-gray-100 border-b border-gray-300">
    Acrylic Laminates: Versatile and Premium Decorative Surfaces
  </h3>
  <p className="p-4 text-gray-700">
    Acrylic laminates are high-gloss, durable, and aesthetically appealing surfacing materials widely used in modern interior designs. 
    These laminates are known for their superior finish, vibrant colors, and versatility. Available in various finishes such as plain solid colors, 
    sparkling, matte, marble, and wood textures, they are a preferred choice for furniture, walls, and cabinetry.
  </p>

  {/* Key Features of Acrylic Laminates */}
  <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300 mt-6">
    Key Features of Acrylic Laminates
  </h3>
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      { title: "Plain Solid Colors", description: "Bold and vibrant hues for contemporary designs." },
      { title: "Sparkling", description: "Glittery and reflective surfaces for luxurious interiors." },
      { title: "Matte Finish", description: "Subtle and sophisticated, ideal for minimalistic designs." },
      { title: "Marble Texture", description: "Replicates the natural beauty of marble at a fraction of the cost." },
      { title: "Wood Texture", description: "Adds warmth and a natural feel to spaces." }
    ].map((feature, index) => (
      <div key={index} className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
        <span className="text-green-700 font-medium">✅ {feature.title}:</span> {feature.description}
      </div>
    ))}
  </div>

  {/* Key Features of Acrylic Fluted Panels */}
  <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300 mt-6">
    Key Features of Acrylic Fluted Panels
  </h3>
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      { title: "Solid Colors", description: "Clean, vibrant options for contemporary interiors." },
      { title: "Sparkle/Metallic", description: "Shimmery finishes for a bold and glamorous look." },
      { title: "Marble Texture", description: "Perfect for a luxurious yet lightweight alternative to real marble." },
      { title: "Wood Texture", description: "Adds warmth and a natural touch to walls and ceilings." },
      { title: "Transparent Panels", description: "Creates a sense of openness with subtle elegance." }
    ].map((feature, index) => (
      <div key={index} className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-sm">
        <span className="text-green-700 font-medium">✅ {feature.title}:</span> {feature.description}
      </div>
    ))}
  </div>

  {/* Other Common Features */}
  <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300 mt-6">
    Other Common Features
  </h3>
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      { title: "High Durability", description: "Scratch-resistant, UV-stable, and moisture-resistant. Long-lasting shine and color retention." },
      { title: "Eco-Friendly", description: "Non-toxic and made from recyclable materials." },
      { title: "Easy to Maintain", description: "Smooth surface allows for effortless cleaning with a damp cloth." },
      { title: "Versatile & Lightweight", description: "Easy to install on walls, ceilings, and furniture. Suitable for straight or curved applications due to flexibility." }
    ].map((feature, index) => (
      <div key={index} className="p-3 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
        <span className="text-green-700 font-medium">✅ {feature.title}:</span> {feature.description}
      </div>
    ))}
  </div>

  {/* Applications of Acrylic Laminates */}
  <h3 className="text-xl font-bold p-4 bg-gray-100 border-b border-gray-300 mt-6">
    Applications of Acrylic Laminates
  </h3>
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      { category: "Residential Spaces", applications: ["Kitchens: Use for glossy cabinet finishes or matte backsplashes.", "Living Rooms: Accent walls, shelves, and furniture surfaces.", "Bedrooms: Wardrobe shutters and headboards."] },
      { category: "Commercial Interiors", applications: ["Offices: Enhance lobbies, meeting rooms, or partitions with metallic finishes.", "Retail Stores: Attractive backdrops for product displays."] },
      { category: "Hospitality & Public Spaces", applications: ["Adds a luxurious touch to hotels, restaurants, and cafes."] }
    ].map((section, index) => (
      <div key={index} className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-sm">
        <span className="text-green-700 font-medium">🏢 {section.category}:</span>
        <ul className="list-disc pl-5 mt-2">
          {section.applications.map((app, i) => (
            <li key={i} className="text-gray-700">{app}</li>
          ))}
        </ul>
      </div>
    ))}
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