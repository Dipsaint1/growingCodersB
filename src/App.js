import React from 'react';
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App(){
  return(
    <>
      <Router>
      <Contact />
        <Routes>
          <Route path='/' exact element={<Footer />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
