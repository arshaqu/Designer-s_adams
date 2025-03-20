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
import FoamBoards from './Pages/Products/FoamBoards.jsx';
import PvcFalseCeiling from './Pages/Products/PvcFalseCeiling.jsx';
import WpvcPastel from './Pages/Products/WpvcPastel.jsx';
import AcrylicLaminates from './Pages/Products/AcrylicLaminates.jsx';
import PvcFlueidPanels from './Pages/Products/PvcFlueidPanels.jsx';
import CharcolePanels from './Pages/Products/CharcolePanels.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
     

        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/simpletry" element={<SimpleDry/>} />
        <Route path="/products" element={<Products/>} />        
        <Route path='/exterior_cladding' element={<ExteriorCladding/>} />
        <Route path='/hpl_exterior' element={<HplExteriorLaminate/>} />
        <Route path='/pvc_soffit' element={<PvcSoffit/>} />
        <Route path='/foam_board' element={<FoamBoards/>} />
        <Route path='/pvc_ceiling' element={<PvcFalseCeiling/>} />
        <Route path='/wpvc_pastel' element={<WpvcPastel/>} />
        <Route path='/acrylic_laminates' element={<AcrylicLaminates/>} />
        <Route path='/pvc_flutedplanels' element={<PvcFlueidPanels/>} />
        <Route path='/charcole_panels' element={<CharcolePanels/>} />

                  

        <Route path="*" element={<UnderConstruction/>} />
   
      </Routes>
      <FloatingButtons /> 
    </Router>
  );
}

export default App;
