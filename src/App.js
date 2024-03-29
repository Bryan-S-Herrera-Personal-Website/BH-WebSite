// React Stuff
import React,{ useEffect, useState } from 'react'; 
import "./index.css";
import { Route, Routes } from "react-router-dom";
// import routes
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";


// Main component
function App() {
  return (
    
    // renderize all the components with her url
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </>
  );
}

export default App;