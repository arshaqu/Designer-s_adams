import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import UnderConstruction from './Pages/Construction.jsx';
import SimpleDry from './Pages/SimpleDry.jsx';
import FloatingButtons from './Pages/Components/FloatingButtons.jsx';
import Products from './Pages/Products.jsx';
import ExteriorCladding from './Pages/Products/ExteriorCladding.jsx';
import HplExteriorLaminate from './Pages/Products/HplExteriorLaminate.jsx';
import PvcSoffit from './Pages/Products/PvcSoffit.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
     

        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="*" element={<UnderConstruction/>} />
        <Route path="/simpletry" element={<SimpleDry/>} />
        <Route path="/products" element={<Products/>} />        
        <Route path='/exterior_cladding' element={<ExteriorCladding/>} />
        <Route path='/hpl_exterior' element={<HplExteriorLaminate/>} />
        <Route path='/pvc_soffit' element={<PvcSoffit/>} />


        

   
      </Routes>
      <FloatingButtons /> {/* Add Floating Buttons Component */}
    </Router>
  );
}

export default App;
