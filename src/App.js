import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import UnderConstruction from './Pages/Construction.jsx';
import SimpleDry from './Pages/SimpleDry.jsx';
import FloatingButtons from './Pages/Components/FloatingButtons.jsx';
import Products from './Pages/Products.jsx';

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


        

   
      </Routes>
      <FloatingButtons /> {/* Add Floating Buttons Component */}
    </Router>
  );
}

export default App;
