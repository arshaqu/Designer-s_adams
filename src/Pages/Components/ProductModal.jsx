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

            <div className="border-t border-gray-300 mt-4 montserrat">
  



  <div className="border-t border-gray-300 mt-4">
        <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
        Composition
        </h3>
        <div className="p-4 text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-sm">
              <span className="font-semibold">Core Material</span>
              <ul className="list-disc pl-5">
                <li >Multiple layers of kraft paper impregnated with phenolic resin.</li>
              </ul>
            </div>
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-sm">
              <span className="font-semibold">Surface Layer</span>
              <ul className="list-disc pl-5">
                <li>Decorative paper impregnated with melamine resin.</li>
              </ul>
            </div>
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-sm">
              <span className="font-semibold">Overlay</span>
              <ul className="list-disc pl-5">
                <li>Protective transparent top layer for enhanced durability and wear resistance.</li>
              </ul>
            </div>
          </ul>
        </div>
      </div>




      <div className="border-t border-gray-300 mt-4">
  <h3 className="text-lg md:flex justify-center font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
    Size
  </h3>
  <div className="p-6 text-gray-700">
    <div className="grid md:grid-cols-3 gap-4">
      {[
        { title: "Size 1", details: ["Length - 244cm", "Width - 122cm" ,"Thickness - 6 mm"]  },
        { title: "Size 2", details: ["Length - 305cm", "Width - 129cm","Thickness - 6 mm "] },
      ].map((size, index) => (
        <div key={index} className="p-4 bg-gradient-to-r from-teal-200 to-teak-400 border borderteal-400 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-teal-800">{size.title}</h4>
          <ul className="mt-2 space-y-1 text-gray-800">
            {size.details.map((detail, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span> {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>



  <div className="p-4 space-y-4">
  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300 mt-4">
    Key Features and Benefits of HPL Boards
  </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {[
    {
      title: "Durability",
      points: [
        "Resistant to impact, scratches, and abrasions.",
        "Ideal for high-traffic areas due to its robust construction.",
      ],
    },
    {
      title: "Weather Resistance (Exterior Grade)",
      points: [
        "Specially designed HPL boards can withstand UV rays, rain, and temperature fluctuations, making them perfect for outdoor use.",
      ],
    },
    {
      title: "Aesthetic Versatility",
      points: [
        "Available in various colors, patterns, textures, and finishes.",
        "Enhances the visual appeal of spaces with sleek, modern designs.",
      ],
    },
    {
      title: "Low Maintenance",
      points: [
        "Easy to clean with water or mild detergents.",
        "Resistant to stains and does not require frequent polishing or repainting.",
      ],
    },
    {
      title: "Fire and Moisture Resistance",
      points: [
        "Engineered to meet safety standards, offering fire-resistant grades.",
        "Non-porous surface prevents moisture absorption, making it suitable for wet environments.",
      ],
    },
    {
      title: "Eco-Friendly",
      points: [
        "Made from sustainable materials and recyclable, contributing to environmentally conscious design.",
        "Protects against color fading and water damage, ensuring a long-lasting appearance.",
      ],
    },
  ].map((item, index) => (
    <div
      key={index}
      className=" shadow-lg bg-emerald-500 rounded-2xl p-5 border border-green-400 transition-transform hover:scale-105"
    >
      <h3 className="font-bold text-xl text-white mb-3">{index + 1}. {item.title}</h3>
      <ul className="text-md text-white list-disc list-inside space-y-1">
        {item.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

  </div>

  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300 mt-4">
    Warranty
  </h3>
  <div className="p-4 text-lg text-red-600">
    Deziner Ceiling Co. warrants Adhams HPL sheets against manufacturing defects, ensuring that color fade will not exceed 5%, gloss loss on matte finishes will not exceed 40%, and color leach is minimal within the first 15 years of installation. Warranty will be void if installed incorrectly or removed without informing the supplier.
  </div>

  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300 mt-4">
    Installation Process
  </h3>
  <ul className="p-4 text-lg text-red-600 list-disc list-inside">
    <li><strong>Preparation:</strong> Clean and prepare the exterior wall surface before installation.</li>
    <li><strong>Measurement:</strong> Accurately measure the area to determine the required number of panels.</li>
    <li><strong>Cutting:</strong> Use standard woodworking tools to cut panels to the desired size.</li>
    <li><strong>Fixing:</strong> Secure panels with screws or clips, ensuring proper alignment.</li>
    <li><strong>Finishing:</strong> Apply trim or molding for a refined appearance.</li>
  </ul>

  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300 mt-4">
    How to Care for HPL Sheets
  </h3>
  <ul className="p-4 text-lg text-red-600 list-disc list-inside">
    <li><strong>Avoid Harsh Chemicals:</strong> Clean with mild detergent and warm water.</li>
    <li><strong>Keep Dry:</strong> While moisture-resistant, keeping them dry prolongs lifespan.</li>
    <li><strong>Clean Regularly:</strong> Prevent stains and mold with regular maintenance.</li>
  </ul>

  <h3 className="text-lg p-4 bg-red-600 text-white border-b border-gray-300 mt-4">
    Applications of HPL Boards
  </h3>
  <div className="p-4">
    <div className="font-bold text-red-600">1. Interior Applications</div>
    <ul className="text-lg  list-disc list-inside">
      <li>Furniture surfacing for cabinets, wardrobes, and countertops.</li>
      <li>Wall cladding for residential and commercial interiors.</li>
      <li>Partitions in offices, bathrooms, and hospitals.</li>
    </ul>
    <div className="font-bold text-red-600 mt-4">2. Exterior Applications</div>
    <ul className="text-lg  list-disc list-inside">
      <li>Facade cladding for improved aesthetics and weather protection.</li>
      <li>Outdoor furniture and signage.</li>
      <li>Balconies, railings, and soffits.</li>
    </ul>
    <div className="font-bold text-red-600 mt-4">3. Specialized Uses</div>
    <ul className="text-lg  list-disc list-inside">
      <li>Compact HPL boards for laboratory countertops and industrial use.</li>
      <li>Decorative panels for retail spaces and exhibition booths.</li>
    </ul>
  </div>
</div>
<h3 className="text-lg font-semibold p-4 bg-red-700 text-white border-b border-gray-300 mt-4">
Why Choose Our HPL Boards?
  </h3>
  <ul className="p-4 text-lg  list-disc list-inside">
    <li><strong className="text-red-600">Superior Quality:</strong> High-grade materials that ensure long-lasting performance.    </li>
    <li><strong className="text-red-600">Design Variety:</strong>  A wide range of designs and finishes to suit all styles.</li>
    <li><strong className="text-red-600">Custom Solutions:</strong>Tailored sizes and finishes for specific project needs.</li>
    <li><strong className="text-red-600">Sustainability:</strong>Eco-friendly production and recyclable products</li>

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
                  PVC Soffit panels are essential architectural elements installed under roof overhangs or eaves to protect the structure and enhance its aesthetic appeal. They are designed for both functional and decorative purposes.
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
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b">
              What are WPVC Interior Louvers?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
                WPVC (Wood Polymer Composite) Interior Louvers are decorative panels designed to enhance interiors with a modern, stylish, and functional aesthetic. 
                They are used for wall cladding, partitions, ceilings, and other architectural elements, offering durability, moisture resistance, and easy maintenance.
              </p>
            </div>
          </div>

         
          <div className="border-t border-gray-300 mt-4">
  
  <div className="p-4 space-y-4">  
    <div>
      <h4 className="font-bold text-lg">WPVC Pastel-Colored Louvers for Interior Walls and Ceilings</h4>
      <p className="text-gray-700">                   
        WPVC pastel-colored louvers offer a modern and elegant solution for interior decoration. 
        Combining the soft aesthetic of pastel shades with the durability of WPVC materials, 
        they create a calming and sophisticated look for both residential and commercial spaces.
      </p>
    </div>

    <div>
      <h4 className="font-bold text-lg">Wooden Textured Louvers</h4>
      <p className="text-gray-700">
        Mimics the warm and timeless appeal of real wood. Available in oak, walnut, teak, 
        and other wood grain designs, these louvers bring a natural aesthetic to interiors.
      </p>
    </div>

    <div>
      <h4 className="font-bold text-lg">Marble Textured Louvers</h4>
      <p className="text-gray-700">
        Replicates the rich and elegant look of natural marble, making it perfect for 
        high-end interiors with a sleek and luxurious feel.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { title: "Versatile Application", description: "Suitable for classic, rustic, or modern interior themes." },
        { title: "Durability", description: "Resistant to moisture, termites, and wear, ensuring long-lasting use." },
        { title: "Lightweight & Easy Installation", description: "Designed for quick and hassle-free installation on walls and ceilings." },
        { title: "Eco-Friendly", description: "Made from recyclable materials, making it a sustainable choice." },
        { title: "Low Maintenance", description: "Easy to clean and maintain with minimal effort." },
        { title: "Modern Aesthetics", description: "Complements contemporary and minimalist styles." },
      ].map((feature, index) => (
        <div key={index} className="p-4 bg-blue-50 rounded-lg shadow-md">
          <h4 className="font-semibold text-lg">{feature.title}</h4>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>


<div className="border-t border-gray-300 mt-4">
  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
    Applications of WPVC Interior Louvers
  </h3>
  <div className="p-4">
    <ul className="list-disc pl-5 space-y-2">
      <li className="text-gray-700">
        <span className="font-semibold">Living Rooms:</span> Creates accent walls or stylish ceilings with a smooth and uniform finish.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Commercial Spaces:</span> Ideal for offices, retail outlets, and hotels, adding a modern touch to interiors.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Bedrooms:</span> Used for headboards or to enhance the cozy ambiance of the space.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Restaurants & Cafes:</span> Chic wall panels that resonate with trendy and upscale interiors.
      </li>
    </ul>
  </div>
</div>

{/* Advantages Section */}
<div className="border-t border-gray-300 mt-4">
  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
    Advantages of WPVC Interior Louvers
  </h3>
  <div className="p-4">
    <ul className="list-disc pl-5 space-y-2">
      <li className="text-gray-700">
        <span className="font-semibold">Durable & Long-Lasting:</span> Resistant to moisture, termites, and warping, ensuring longevity.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Lightweight & Easy to Install:</span> Simplifies installation and reduces structural load.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Eco-Friendly:</span> Made from recyclable materials, contributing to sustainability.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Low Maintenance:</span> Requires minimal cleaning and retains its finish over time.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Customizable:</span> Available in different sizes, patterns, and finishes to suit any design preference.
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





          {product.title === "PVC FOAM BOARDS" && (
            <>
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
      {/* Composition Section */}
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
                    0.40 &nbsp;&nbsp;&nbsp;  0.45 &nbsp;&nbsp;&nbsp; 0.55 &nbsp;&nbsp;&nbsp; 0.60 &nbsp;&nbsp;&nbsp;0.70
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
                <li >Lightweight and easy to handle.</li>
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
        <div className="p-4 ">
          <ul className="list-disc pl-5 space-y-2 text-gray-700 ">
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm"><span className="font-semibold ">Weather Resistance:</span> Resistant to moisture, UV rays, and temperature changes<br/>- Suitable for outdoor applications.</div>
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm"><span className="font-semibold">Fire Retardant:</span> Meets fire safety standards,, adding an extra layer of safety.</div>
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm"><span className="font-semibold">Eco-Friendly:</span> Recyclable and non-toxic,contributing to sustainable building practices.</div>
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm"><span className="font-semibold">Customizable:</span> Easy to cut, drill, and shape, making it ideal for creative applications.</div>
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
            </>
          )}





{product.title === "FRENCH MOULDINGS" && (
        <>
          {/* What is French Moulding Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              What are French Mouldings?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
              French moldings are intricate architectural details that enhance the elegance and sophistication of interiors.
               These elements are often inspired by classical French design, adding a timeless charm to any space.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyurethane Resin</div>
                <div className="text-lg font-semibold text-red-600">65%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Calcium Carbonate</div>
                <div className="text-lg font-semibold text-red-600">25%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Blowing Agents</div>
                <div className="text-lg font-semibold text-red-600">5%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="border-t border-gray-300 mt-4">
              <h3 className="text-xl font-bold p-4 bg-red-600 text-white border-b border-gray-300">
                Applications of French Molding
              </h3>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Residential Spaces",
                    description:
                      "Living rooms, dining areas, bedrooms, and hallways. Used for accent walls, ceilings, and door or window frames.",
                  },
                  {
                    title: "Commercial Spaces",
                    description:
                      "Hotels, restaurants, and retail stores for luxurious interior design.",
                  },
                  {
                    title: "Historical Restoration",
                    description:
                      "Ideal for restoring classical buildings or adding a vintage touch to modern structures.",
                  },
                ].map((app, index) => (
                  <div key={index} className="p-4 bg-yellow-50 rounded-lg shadow-md">
                    <h4 className="font-semibold text-lg">{app.title}</h4>
                    <p className="text-gray-700">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Key Properties Section */}
         

<div className="border-t border-gray-300 mt-6">
  <h3 className="text-xl font-bold p-4 bg-red-500 text-white border-b border-gray-300">
    Types of French Molding and Decorative Elements
  </h3>
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        title: "SKIRTING (Baseboards)",
        description:
          "Covers the joint between walls and floors, protecting against scuffs while adding a finished look. Available in plain, grooved, or ornate patterns.",
      },
      {
        title: "COVING (Cornices)",
        description:
          "Smooths transitions between walls and ceilings while adding a decorative touch. Designs range from simple curves to intricate motifs.",
      },
      {
        title: "BORDERS",
        description:
          "Frames walls, ceilings, or floors, creating a defined visual space. Used as trims for panels, doors, or to separate painted and wallpapered areas.",
      },
      {
        title: "CEILING ROSES",
        description:
          "Decorative ceiling centerpiece, often framing chandeliers or lighting fixtures. Available in floral, geometric, and French baroque styles.",
      },
      {
        title: "CORNER ROSES",
        description:
          "Complements ceiling roses by adding decorative corner elements for symmetry. Ideal for enhancing ceiling aesthetics.",
      },
      {
        title: "WAINSCORTING (Wall Panels)",
        description:
          "Adds depth and dimension to walls with traditional paneling, beadboard, or raised panels for a classic French elegance.",
      },
    ].map((type, index) => (
      <div key={index} className="p-4 bg-green-100 rounded-lg shadow-md">
        <h4 className="font-semibold text-lg">{type.title}</h4>
        <p className="text-gray-700">{type.description}</p>
      </div>
    ))}
  </div>
</div>

      <div className="border-t border-gray-300 mt-6">
        <h3 className="text-xl font-bold p-4 bg-red-600 text-white border-b border-gray-300">
          Why Choose Our French Molding and Decorative Elements?
        </h3>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Premium Quality",
              description:
                "Sourced from trusted manufacturers to ensure durability and aesthetic appeal.",
            },
            {
              title: "Wide Selection",
              description:
                "Extensive range of designs, patterns, and materials to suit diverse preferences.",
            },
            {
              title: "Customizable Options",
              description:
                "Tailored designs and finishes available to meet specific project requirements.",
            },
            {
              title: "Expert Support",
              description:
                "Professional guidance in selection, installation, and maintenance for a seamless experience.",
            },
          ].map((feature, index) => (
            <div key={index} className="p-4 bg-blue-50 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
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
      <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
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
      <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
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
          <div key={index} className="p-3 bg-teal-50 border rounded-lg shadow-sm">
            <div className="font-bold">{item.title}</div>
            <div className="text-gray-700">{item.value}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Applications Section */}
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="border-t border-gray-300 mt-4">
        <h3 className="text-xl font-bold p-4 bg-red-600 text-white border-b border-gray-300">
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
            <div key={index} className="p-4 bg-orange-50 rounded-lg shadow-md">
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
  <h3 className="text-2xl font-bold p-4 bg-red-600 text-white border-b border-gray-300">
    Acrylic Laminates: Versatile and Premium Decorative Surfaces
  </h3>
  <p className="p-4 text-gray-700">
    Acrylic laminates are high-gloss, durable, and aesthetically appealing surfacing materials widely used in modern interior designs. 
    These laminates are known for their superior finish, vibrant colors, and versatility. Available in various finishes such as plain solid colors, 
    sparkling, matte, marble, and wood textures, they are a preferred choice for furniture, walls, and cabinetry.
  </p>

  {/* Key Features of Acrylic Laminates */}
  <h3 className="text-xl font-bold p-4 bg-red-600 text-white border-b border-gray-300 mt-6">
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
  <h3 className="text-xl font-bold p-4 bg-red-600 text-white border-b border-gray-300 mt-6">
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
  <h3 className="text-xl font-bold p-4 bg-red-600 text-white border-b border-gray-300 mt-6">
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
  <h3 className="text-xl font-bold p-4 bg-red-600 text-white border-b border-gray-300 mt-6">
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
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
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
            <h3 className="text-lg font-semibold p-4 md:flex justify-center bg-red-600 text-white border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">PVC Resin</div>
                <div className="text-lg font-semibold text-red-600"> 60%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Calcium Carbonate (CaCO₃)</div>
                <div className="text-lg font-semibold text-red-600">35%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Other</div>
                <div className="text-lg font-semibold text-red-600">5%</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg md:flex justify-center  font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              size
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Length</div>
                <div className="text-lg font-semibold text-red-600"> 290cm</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Width</div>
                <div className="text-lg font-semibold text-red-600">variable</div>
              </div> 
              <div className="p-2 w-1/3">
                <div className="font-bold">Thickness</div>
                <div className="text-lg font-semibold text-red-600">variable</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
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
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
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
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              What are PS Panels (Charcoal Panels)?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
              PS Planks, commonly known as charcoal panels, are innovative decorative materials crafted to elevate the aesthetics of interior spaces. These panels are made using polystyrene (PS),
              offering a sleek, modern look with exceptional durability and functionality. Their unique charcoal-like texture adds a bold and sophisticated touch to walls and ceilings.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Expanded Polystyrene</div>
                <div className="text-lg font-semibold text-red-600">80%</div>
              </div>
               <div className="p-2 w-1/3">
                <div className="font-bold">Modifiedd Polystrene</div>
                <div className="text-lg font-semibold text-red-600">10%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Polystyrene</div>
                <div className="text-lg font-semibold text-red-600">5%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Recycled Polystyrene</div>
                <div className="text-lg font-semibold text-red-600">5%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
    Features of PS Planks (Charcoal Panels)
  </h3>
  <div className="p-4">
    <ul className="list-disc pl-5 space-y-4">
      <li className="text-gray-700">
        <span className="font-semibold">Modern Aesthetic Appeal:</span>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Distinctive textured surface, ideal for contemporary and industrial interior styles.</li>
          <li>Available in matte, glossy, or subtle grain finishes to suit various design preferences.</li>
        </ul>
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Durable & Lightweight:</span>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Resistant to moisture, warping, and pests, ensuring long-term reliability.</li>
          <li>Lightweight construction allows easy handling and installation.</li>
        </ul>
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Eco-Friendly:</span> Made from recyclable polystyrene, offering an environmentally responsible choice.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Versatile Applications:</span>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Ideal for both residential and commercial spaces.</li>
          <li>Enhances walls and ceilings with a bold, minimalist design.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

{/* Advantages Section */}
<div className="border-t border-gray-300 mt-4">
  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
    Advantages of PS Planks
  </h3>
  <div className="p-4">
    <ul className="list-disc pl-5 space-y-4">
      <li className="text-gray-700">
        <span className="font-semibold">Low Maintenance:</span> Easily cleaned with a damp cloth, retaining their original appearance over time.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Fire Retardant:</span> Offers enhanced safety for interiors.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Sound Insulation:</span> Provides acoustic benefits, reducing noise levels in enclosed spaces.
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Cost-Effective:</span> An affordable alternative to traditional wood or stone cladding.
      </li>
    </ul>
  </div>
</div>


          {/* Advantages Section */}
          <div className="border-t border-gray-300 mt-4">
  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
    Applications of PS Planks (Charcoal Panels)
  </h3>
  <div className="p-4">
    <ul className="list-disc pl-5 space-y-4">
      <li className="text-gray-700">
        <span className="font-semibold">Residential Interiors:</span>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Living rooms: Create accent walls with a bold, textured finish.</li>
          <li>Bedrooms: Add depth and character to headboards or feature walls.</li>
        </ul>
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Commercial Spaces:</span>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Offices: Use for elegant partitions or decorative wall panels.</li>
          <li>Retail Stores: Enhance product displays with a stylish backdrop.</li>
        </ul>
      </li>
      <li className="text-gray-700">
        <span className="font-semibold">Hospitality Sector:</span>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Restaurants and cafes: Introduce modern, chic wall cladding for a unique ambiance.</li>
          <li>Hotels: Elevate lobbies and guest rooms with a premium feel.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

{/* Why Choose PS Planks Section */}
<div className="border-t border-gray-300 mt-4">
  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
    Why Choose PS Planks (Charcoal Panels)?
  </h3>
  <div className="p-4">
    <ul className="list-disc pl-5 space-y-4">
      <li className="text-gray-700">Combines the aesthetic appeal of charcoal textures with the practicality of PS material.</li>
      <li className="text-gray-700">Offers superior durability while maintaining a lightweight and sleek design.</li>
      <li className="text-gray-700">Perfect for creating modern, minimalist, and industrial-themed interiors.</li>
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
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              What are PVC Fluted Panels?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
              PVC fluted panels are versatile decorative materials designed to enhance the aesthetics and functionality of interiors. 
              Known for their vertical grooves and sleek finish, these panels add a modern and elegant touch to walls and ceilings
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyurethane Resin</div>
                <div className="text-lg font-semibold text-red-600">65%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Calcium Carbonate</div>
                <div className="text-lg font-semibold text-red-600">30%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Others</div>
                <div className="text-lg font-semibold text-red-600">5%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
          <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
  
    PVC Fluted Panels: Stylish and Functional Wall & Ceiling Solutions
  </h3>
  <div className="p-4 text-gray-700 space-y-4">
    <p>
      PVC fluted panels are versatile decorative materials designed to enhance the aesthetics and functionality of interiors. 
      Known for their vertical grooves and sleek finish, these panels add a modern and elegant touch to walls and ceilings, 
      making them a popular choice for residential and commercial spaces.
    </p>

    <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
  Key Features of PVC Fluted Panels</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong className="text-red-700">Stylish Design:</strong> Features evenly spaced vertical grooves for a textured, linear look. Available in a range of colors, matte, glossy, wood, or marble textures.</li>
      <li><strong className="text-red-700">Durable & Long-Lasting:</strong> Resistant to moisture, termites, and UV light, making them ideal for humid environments. Does not warp, crack, or fade over time.</li>
      <li><strong className="text-red-700">Lightweight & Easy Installation:</strong> Simple to install using basic tools and adhesives. Can be customized for various dimensions and designs.</li>
      <li><strong className="text-red-700">Low Maintenance:</strong> Easy to clean with a damp cloth, requiring minimal upkeep.</li>
    </ul>

    <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Advantages of PVC Fluted Panels</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong className="text-red-700">Eco-Friendly:</strong> Made from recyclable PVC material, reducing environmental impact.</li>
      <li><strong className="text-red-700">Cost-Effective:</strong> An affordable alternative to traditional wood or stone panels while offering a premium appearance.</li>
      <li><strong className="text-red-700">Sound & Thermal Insulation:</strong> The fluted design provides acoustic and thermal benefits, improving indoor comfort.</li>
      <li><strong className="text-red-700">Waterproof & Fire-Resistant:</strong> Ideal for areas exposed to moisture or requiring fire safety compliance.</li>
    </ul>

    <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Applications of PVC Fluted Panels</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong className="text-red-700">Residential Spaces:</strong> 
        <ul className="list-disc pl-5">
          <li>Living Rooms: Create stylish accent walls or statement ceilings.</li>
          <li>Bedrooms: Add texture and warmth to feature walls or headboards.</li>
          <li>Bathrooms: Use moisture-resistant panels for a sleek and practical finish.</li>
        </ul>
      </li>
      <li><strong className="text-red-700">Commercial Interiors:</strong> 
        <ul className="list-disc pl-5">
          <li>Offices: Modernize meeting rooms and lobbies with clean, structured lines.</li>
          <li>Retail Stores: Use as a backdrop for displays or partitions.</li>
        </ul>
      </li>
      <li><strong className="text-red-700">Hospitality and Entertainment:</strong> 
        <ul className="list-disc pl-5">
          <li>Hotels and Restaurants: Enhance interiors with luxurious textures and finishes.</li>
          <li>Theaters and Lounges: Improve acoustics while adding a contemporary look.</li>
        </ul>
      </li>
    </ul>

    <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Why Choose PVC Fluted Panels?</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li>Offers a modern, linear aesthetic that complements minimalistic and contemporary designs.</li>
      <li>Combines visual appeal with practical benefits like durability, ease of maintenance, and eco-friendliness.</li>
      <li>Versatile and adaptable for various applications, transforming any space into a stylish masterpiece.</li>
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
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              What is PVC False Ceiling?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
              PVC false ceiling panels are a highly durable and aesthetically appealing option for enhancing interior spaces. These panels
              are lightweight, easy to install, and available in a wide variety of shades, making them a preferred choice for both residential 
              and commercial applications
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyvinyl Chloride Resign </div>
                <div className="text-lg font-semibold text-red-600">64%</div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Calcium Carbonate</div>
                <div className="text-lg font-semibold text-red-600">36%</div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
  <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
    PVC False Ceiling Panels: A Practical and Stylish Ceiling Solution
  </h3>
  <div className="p-4 text-gray-700 space-y-4">
    <p>
      PVC false ceiling panels are a highly durable and aesthetically appealing option for enhancing interior spaces. 
      These panels are lightweight, easy to install, and available in a wide variety of shades, making them a preferred choice for both 
      residential and commercial applications.
    </p>

   
    <h4 className="text-lg font-semibold">Panel Specifications</h4>
    <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-300 bg-red-600 text-white px-4 py-2" colSpan="3">Wooden finish Grooved</th>
      <th className="border border-gray-300 px-4 py-2 bg-red-600 text-white" colSpan="3">Plain panels</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100 font-bold">
      <td className="border border-red-600 px-4 py-2">Length</td>
      <td className="border border-red-600 px-4 py-2">Width</td>
      <td className="border border-red-600 px-4 py-2">Thickness</td>
      <td className="border border-red-600 px-4 py-2">Length</td>
      <td className="border border-red-600 px-4 py-2">Width</td>
      <td className="border border-red-600 px-4 py-2">Thickness</td>

    </tr>
    <tr>
      <td className="border border-red-600 px-4 py-2">366cm</td>
      <td className="border border-red-600 px-4 py-2">30cm</td>
      <td className="border border-red-600 px-4 py-2">9mm</td>
      <td className="border border-red-600 px-4 py-2">366cm</td>
      <td className="border border-red-600 px-4 py-2">25cm</td>
      <td className="border border-red-600 px-4 py-2">9mm</td>

    </tr>
    <tr>
      <td className="border border-red-600 px-4 py-2">305cm</td>
      <td className="border border-red-600 px-4 py-2">30cm</td>
      <td className="border border-red-600 px-4 py-2">9mm</td>
      <td className="border border-red-600 px-4 py-2">305cm</td>
      <td className="border border-red-600 px-4 py-2">25cm</td>
      <td className="border border-red-600 px-4 py-2">9mm</td>


    </tr>

  </tbody>
</table>


    </div>

        <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Key Features of PVC False Ceiling Panels</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-red-600">Durable & Long-Lasting:</strong> Resistant to moisture, termites, and corrosion, making them ideal for damp or humid environments. UV-resistant and does not warp or fade over time.</li>
          <li><strong className="text-red-600">Lightweight & Easy Installation:</strong> Designed for quick and hassle-free installation. Can be fitted using basic tools with minimal structural modifications.</li>
          <li><strong className="text-red-600">Aesthetic Versatility:</strong> Available in a wide range of colors, textures, and designs, including wood, marble, and metallic finishes. Offers seamless integration with lighting fixtures and air conditioning ducts.</li>
          <li><strong className="text-red-600">Low Maintenance:</strong> Smooth surface ensures easy cleaning with just a damp cloth. Stain-resistant and requires minimal upkeep.</li>
        </ul>

        <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Advantages of PVC False Ceiling Panels</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Waterproof and Fire-Resistant:</strong> Ideal for bathrooms, kitchens, and areas prone to moisture or heat.</li>
          <li><strong>Cost-Effective:</strong> More affordable than traditional false ceiling materials like gypsum or wood.</li>
          <li><strong>Sound and Thermal Insulation:</strong> Helps in reducing noise levels and improving indoor temperature regulation.</li>
          <li><strong>Eco-Friendly:</strong> Made from recyclable materials, supporting sustainable practices.</li>
        </ul>

        <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Applications of PVC False Ceiling Panels</h4>
        <ul className="list-disc pl-5 space-y-2">
          <div><strong className="text-red-600">Residential Spaces:</strong>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Living Rooms:</strong> For a modern, sleek ceiling design with integrated lighting.</li>
              <li><strong>Kitchens and Bathrooms:</strong> Moisture-resistant panels ensure durability in these spaces.</li>
              <li><strong>Bedrooms:</strong> Add texture and style with patterned or wood-finish panels.</li>
            </ul>
          </div>
          <div><strong className="text-red-600">Commercial Spaces:</strong>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Offices:</strong> Enhances professional environments with clean and contemporary ceiling designs.</li>
              <li><strong>Retail Stores:</strong> Creates visually appealing ceilings to complement product displays.</li>
            </ul>
          </div>
          <div ><strong className="text-red-600">Hospitality and Public Areas:</strong>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Hotels and Restaurants:</strong> Adds elegance and functionality to dining areas and lobbies.</li>
              <li><strong>Hospitals and Clinics:</strong> Hygienic and easy-to-clean solutions for healthcare facilities.</li>
            </ul>
          </div>
        </ul>

        <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Why Choose PVC False Ceiling Panels?</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Combines durability, affordability, and aesthetic versatility in one solution.</li>
          <li>Easy to install, maintain, and customize for various design themes.</li>
          <li>Ideal for both functional and decorative purposes, transforming ceilings into standout features.</li>
        </ul>
      </div>
    </div>


          {/* Advantages Section */}
         

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
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              What is PU (Polyurethane) Wall Covering?
            </h3>
            <div className="p-4">
              <p className="text-gray-700">
              PU (Polyurethane) wall coverings are premium decorative materials known for their versatility and 
              intricate designs. Featuring patterns like leaves, stone textures,
               and Jali. Bring a natural, organic look to interiors with 3D feel.
              </p>
            </div>
          </div>

          {/* Composition Section */}
          <div className="border-t border-gray-300 mt-4">
            <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
              Composition
            </h3>
            <div className="p-4 flex flex-wrap justify-around text-center">
              <div className="p-2 w-1/3">
                <div className="font-bold">Polyurethane Resin</div>
                <div className="text-lg font-semibold text-red-600">
                  70%
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Blowing Agents</div>
                <div className="text-lg font-semibold text-red-600">
                  5%
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="font-bold">Fillers</div>
                <div className="text-lg font-semibold text-red-600">
                  15%
                </div>
              </div>
            </div>
          </div>


          <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-300 bg-red-600 text-white px-4 py-2" colSpan="3">Wooden finsh Grooved</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100 font-bold">
      <td className="border border-gray-300 px-4 py-2">Length</td>
      <td className="border border-gray-300 px-4 py-2">Width</td>
      <td className="border border-gray-300 px-4 py-2">Thickness</td>

    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">120cm</td>
      <td className="border border-gray-300 px-4 py-2">60cm</td>
      <td className="border border-gray-300 px-4 py-2">30mm</td>

    </tr>
 

  </tbody>
</table>


    </div>

          

          {/* Applications Section */}
          <div className="border-t border-gray-300 mt-4">
          <h3 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">
    PU Wall Coverings: Elegant Decorative Panels with Leaf, Stone, and Jali Designs
  </h3>
  <div className="p-4 text-gray-700 space-y-4">
    <p>
      PU (Polyurethane) wall coverings are premium decorative materials known for their versatility and intricate designs. 
      Featuring patterns like leaves, stone textures, and Jali (latticework), these panels add an artistic and luxurious touch 
      to any interior space. They are lightweight, durable, and easy to install, making them a popular choice for both residential 
      and commercial applications.
    </p>

    {/* Key Features */}
    <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Key Features of PU Wall Coverings</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Aesthetic Variety</strong>
        <ul className="list-disc pl-5">
          <li><strong>Leaf Designs:</strong> Bring a natural, organic look to interiors with 3D leaf patterns.</li>
          <li><strong>Stone Textures:</strong> Mimic the rugged beauty of natural stone for a rustic or industrial vibe.</li>
          <li><strong>Jali Patterns:</strong> Intricate lattice designs inspired by traditional architecture, ideal for modern and ethnic themes.</li>
        </ul>
      </li>
      <li><strong>Durable and Long-Lasting</strong>
        <ul className="list-disc pl-5">
          <li>Resistant to moisture, termites, and UV rays, ensuring durability in various environments.</li>
          <li>Maintains its color and texture over time.</li>
        </ul>
      </li>
      <li><strong>Lightweight and Easy Installation</strong>
        <ul className="list-disc pl-5">
          <li>Panels are lightweight, making transportation and installation hassle-free.</li>
          <li>Can be mounted on walls with basic adhesives or mechanical fixtures.</li>
        </ul>
      </li>
      <li><strong>Customizable and Versatile</strong>
        <ul className="list-disc pl-5">
          <li>Available in various sizes, patterns, and finishes to suit diverse design requirements.</li>
          <li>Can be painted or coated for a personalized look.</li>
        </ul>
      </li>
    </ul>

    {/* Advantages */}
     <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Advantages of PU Wall Coverings</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Eco-Friendly:</strong> Made from recyclable materials and free from harmful chemicals.</li>
      <li><strong>Low Maintenance:</strong> Easy to clean with a damp cloth, requiring minimal upkeep.</li>
      <li><strong>Acoustic and Thermal Insulation:</strong> Provides soundproofing and improves indoor thermal efficiency.</li>
      <li><strong>Cost-Effective:</strong> Offers a luxurious look at an affordable price compared to natural materials like stone or wood.</li>
    </ul>

    {/* Applications */}
     <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Applications</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong className="text-red-700">Residential Spaces</strong>
        <ul className="list-disc pl-5">
          <li><strong>Living Rooms:</strong> Create feature walls with leaf or stone designs for a bold statement.</li>
          <li><strong>Bedrooms:</strong> Use Jali patterns as headboards or decorative wall panels.</li>
          <li><strong>Kitchens & Bathrooms:</strong> Moisture-resistant panels for accent walls or backsplashes.</li>
        </ul>
      </li>
      <li><strong className="text-red-700">Commercial Spaces</strong>
        <ul className="list-disc pl-5">
          <li><strong>Offices:</strong> Enhance meeting rooms and reception areas with stylish patterns.</li>
          <li><strong>Retail Stores:</strong> Use as a backdrop for displays or partitions.</li>
        </ul>
      </li>
      <li><strong className="text-red-700">Hospitality and Public Areas</strong>
        <ul className="list-disc pl-5">
          <li><strong>Hotels and Restaurants:</strong> Add elegance with Jali-inspired wall coverings in lobbies or dining areas.</li>
          <li><strong>Theaters and Lounges:</strong> Improve acoustics while adding aesthetic value.</li>
        </ul>
      </li>
    </ul>

    {/* Why Choose PU Wall Coverings */}
     <h4 className="text-lg font-semibold p-4 bg-red-600 text-white border-b border-gray-300">Why Choose PU Wall Coverings?</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li>Combines the durability of polyurethane with artistic designs to suit any interior theme.</li>
      <li>Lightweight and easy to work with, making installation and customization effortless.</li>
      <li>Offers a unique blend of traditional and modern aesthetics with designs like Jali, stone, and leaf.</li>
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