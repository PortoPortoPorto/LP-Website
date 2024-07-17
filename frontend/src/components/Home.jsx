import React from 'react';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Products from './Products.jsx';
import Illustrations from './Illustrations.jsx';
import Wands from './Wands.jsx';
import Contact from './Contact.jsx'; 
import Footer from './Footer.jsx'; 
import About from './About.jsx';

const Home = () => {
	return (
		<>
         <Nav/>
         <Hero/>
         <About/>
         <Products/>
         <Illustrations/>
         <Wands/>
         <Contact/>
         <Footer/>			
		</>
	)
}

export default Home