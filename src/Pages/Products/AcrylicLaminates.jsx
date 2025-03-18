import React from 'react';

function AcrylicLaminates() {
  // Google Drive Embedded File Link
  const embedDriveLink = "https://drive.google.com/file/d/1aO5bQXMC4f-HDiS5KiFuX58HFwz2Y7GN/preview"; 
  const downloadLink = "https://drive.google.com/uc?export=download&id=1aO5bQXMC4f-HDiS5KiFuX58HFwz2Y7GN";

  return (
    <div className="md:flex flex-col items-center justify-center mt-5 min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 px-4 py-8 montserrat">
      {/* Page Title with decorative elements */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-red-700 relative">
          <span className="inline-block px-2 py-1 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
            Acrylic Laminates Product
          </span>
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-3 rounded-full"></div>
      </div>
      
      {/* Embedded Google Drive Content with improved styling */}
      <div className="w-full max-w-5xl md:h-auto h-[300px] aspect-video rounded-xl shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 pointer-events-none rounded-xl"></div>
        <iframe 
          src={embedDriveLink} 
          className="w-full h-[300px] md:h-full"
          allow="autoplay"
        ></iframe>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-blue-500"></div>
      </div>

      {/* Action Buttons with improved styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-md sm:max-w-lg">
        <a 
          href={embedDriveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 text-center flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
          View Product
        </a>

        <a 
          href={downloadLink} 
          download
          className="px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-green-600 transition duration-300 text-center flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Download Product
        </a>
      </div>
    </div>
  );
}

export default AcrylicLaminates;