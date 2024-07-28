import React from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RefsContext from '../context/RefsContext.jsx';


const Contact = () => {

//global reference to component for scrolling purposes
const { contactRef } = useContext(RefsContext);

	return (
		<>
			<div ref={contactRef} className=' font-comorant h-[500px] w-[100%] bg-orange-200 flex flex-col items-center justify-around'>
				<h1 className= 'p-7 text-4xl italic font-light text-black border-b-2 border-black'>CONTACT</h1>
				<div className=' cursor-pointer text-2xl font-light italic flex justify-center text-[#735534] p-5 transform ease-in-out duration-500 hover:text-orange-100'>lisaportergallery@hotmail.com</div>
				<div className='h-[100px] w-[100%] flex items-center justify-center'>
					<FontAwesomeIcon icon="fa-brands fa-youtube" className='text-[#735534] transform ease-in-out duration-500 hover:text-orange-100 cursor-pointer text-6xl ' />
				</div>
				<div className='h-[100px] w-[100%] flex items-center justify-center'>
					<FontAwesomeIcon icon="fa-brands fa-etsy" className='text-[#735534] transform ease-in-out duration-500  hover:text-orange-100 cursor-pointer text-6xl ' />
				</div>			
			</div>							
		</>
	)
}

export default Contact