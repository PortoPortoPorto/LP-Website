import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Illustrations from './components/Illustrations.jsx';
import Wands from './components/Wands.jsx';
import Contact from './components/Contact.jsx'; 
import Footer from './components/Footer.jsx'; 
import About from './components/About.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { RefsProvider } from './context/RefsContext.jsx';


library.add(fas, fab);

function App() {
  
  return (
    <>
      <RefsProvider>
         <Nav/>
         <Hero/>
         <About/>
         <Products/>
         <Illustrations/>
         <Wands/>
         <Contact/>
         <Footer/>
      </RefsProvider>
    </>
  );
};

export default App;
