import { useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Illustrations from './components/Illustrations.jsx';
import Wands from './components/Wands.jsx';
import Contact from './components/Contact.jsx'; 
import Footer from './components/Footer.jsx'; 

function App() {
  
  return (
    <>
     <Nav/>
     <Hero/>
     <Products/>
     <Illustrations/>
     <Wands/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
