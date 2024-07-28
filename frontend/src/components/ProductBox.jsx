import React from 'react';
import { useState, useEffect, useContext } from 'react';
import RefsContext from '../context/RefsContext.jsx';
import { Link } from 'react-router-dom';

const ProductBox = ({name, image, bwImage, description, link}) => {

const [isHovered, setIsHovered ] = useState(false);

//classes for visual transitions (sepia -> color)
const visible = 'transition-opacity ease-in-out duration-1000 delay-100 h-[550px] rounded-md absolute top-0 left-[7%] opacity-100 outline outline-4 outline-orange-100 shadow-lg '
const invisible = 'transition-opacity ease-in-out duration-1000 delay-100 h-[550px] rounded-md absolute top-0 left-[7%] opacity-0 outline outline-4 outline-orange-200 shadow-lg '

//global reference to component for scrolling purposes
const { productsRef } = useContext(RefsContext);

	return (
		<>
		<div ref={productsRef} className=' font-comorant h-[550px] w-[full] m-[100px] bg-orange-200 relative rounded-md cursor-pointer'
		 	 onMouseEnter={() => setIsHovered(true)}
		 	 onMouseLeave={() => setIsHovered(false)}>
			 <Link to={link}>
				 <img className= 'h-[550px] rounded-md absolute top-0 left-[7%] opacity-100 shadow-lg' src={bwImage}/> 
				 {isHovered ? <img className={visible}src={image}/> :			 			 
				 			  <img className={invisible}src={image}/>}
			 </Link>
		</div>	
		</>
	)
}

export default ProductBox