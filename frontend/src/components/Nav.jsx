import React, { useContext } from 'react';
import RefsContext from '../context/RefsContext.jsx';


const navButton = 'font-comorant h-[50px] w-[120px] bg-orange-200 transition ease-in-out duration-500 hover:text-orange-100 flex items-center justify-center cursor-pointer rounded-md text-2xl text-[#735534]'
//Nav could be perpetually at the top of the screen, and cycle up or down to wherever the selected section lay 
const Nav = () => {
	
//get all refs from RefsContext 
	const {
		aboutRef,
		productsRef,
		illustrationsRef,
		wandsRef,
		contactRef
	} = useContext(RefsContext);

	const scrollToSection = (ref, off) => {
		window.scrollTo({
			top: ref.current.offsetTop - off,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div className='fixed top-0 left-0 h-[80px] w-[100%] bg-orange-200 flex justify-around items-center z-10 opacity-95'>
				<div className='text-4xl flex justify-center font-semibold italic p-7 font-comorant'>Lisa Porter</div> 
				<div className={navButton} onClick={() => scrollToSection(aboutRef, 100)}>About</div>
				<div className={navButton} onClick={() => scrollToSection(productsRef, 1600)}>Tarot</div>
				<div className={navButton} onClick={() => scrollToSection(productsRef, 850)}>Oracle</div>
				<div className={navButton} onClick={() => scrollToSection(productsRef, 130)}>Martians</div>
				<div className={navButton} onClick={() => scrollToSection(illustrationsRef, 120)}>Illustrations</div>
				<div className={navButton} onClick={() => scrollToSection(wandsRef, 100)}>Wands</div>
				<div className={navButton} onClick={() => scrollToSection(contactRef, 100)}>Contact</div>
			</div>

		</>
	)
}

export default Nav