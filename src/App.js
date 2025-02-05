import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import UnderConstruction from './Pages/Construction.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
     

        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="*" element={<UnderConstruction/>} />

        


   
      </Routes>
    </Router>
  );
}

export default App;
