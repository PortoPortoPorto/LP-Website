import React, { useContext } from 'react';
import RefsContext from '../context/RefsContext.jsx';


const navButton = 'font-comorant font-light h-[50px] w-[130px] bg-orange-200 border-b-2 border-orange-200 transition-all ease-in-out duration-500 hover:text-[#ad9574] hover:border-[#ad9574] flex items-center justify-center cursor-pointer text-xl text-[#735534]'
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
		if(ref === '') {
			window.scrollTo({
				top:0,
				behavior: 'smooth',
			});
		} else {
			window.scrollTo({
				top: ref.current.offsetTop - off,
				behavior: 'smooth',
		});
		}
	};

	return (
		<>
			<div className='fixed top-0 left-0 h-[80px] w-[100%] bg-orange-200 flex justify-around items-center z-10 opacity-95'>
				<div className='text-4xl flex justify-center font-semibold italic p-7 font-comorant cursor-pointer'
				     onClick={() => scrollToSection('', 0)}>Lisa Porter</div> 
				<div className={navButton} onClick={() => scrollToSection(aboutRef, 100)}>ABOUT</div>
				<div className={navButton} onClick={() => scrollToSection(productsRef, 1600)}>TAROT</div>
				<div className={navButton} onClick={() => scrollToSection(productsRef, 850)}>ORACLE</div>
				<div className={navButton} onClick={() => scrollToSection(productsRef, 130)}>MARTIANS</div>
				<div className={navButton} onClick={() => scrollToSection(illustrationsRef, 120)}>ILLUSTRATIONS</div>
				<div className={navButton} onClick={() => scrollToSection(wandsRef, 100)}>WANDS</div>
				<div className={navButton} onClick={() => scrollToSection(contactRef, 100)}>CONTACT</div>
			</div>

		</>
	)
}

export default Nav