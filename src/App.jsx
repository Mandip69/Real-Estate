import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import Contact from './pages/contact/contact'	  
import PropertyList from './pages/property/PropertyList';
import Blog from './pages/blog/BlogPage';
function App() {
  return (
    <Router>
     <Navbar /> 

     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/AboutPage" element={<AboutPage />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/PropertyList" element={<PropertyList />} />
     <Route path="/BlogPage" element={<Blog />} />
     </Routes>

     <Footer />
     </Router>
  )
}

export default App
