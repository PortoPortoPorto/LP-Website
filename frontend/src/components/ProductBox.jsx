import React from 'react';
import { useState, useEffect, useContext } from 'react';
import RefsContext from '../context/RefsContext.jsx';

const ProductBox = ({name, image, bwImage, description}) => {

const [isHovered, setIsHovered ] = useState(false);

//classes for visual transitions (sepia -> color)
const visible = 'transition-opacity ease-in-out duration-1000 delay-100 h-[550px] rounded-md absolute top-0 left-[7%] opacity-100 '
const invisible = 'transition-opacity ease-in-out duration-1000 delay-100 h-[550px] rounded-md absolute top-0 left-[7%] opacity-0 '

//global reference to component for scrolling purposes
const { productsRef } = useContext(RefsContext);

	return (
		<>
		<div ref={productsRef} className=' font-comorant h-[550px] w-[full] m-[100px] bg-orange-200 relative rounded-md cursor-pointer'
		 	 onMouseEnter={() => setIsHovered(true)}
		 	 onMouseLeave={() => setIsHovered(false)}>
			 <img className= 'h-[550px] rounded-md absolute top-0 left-[7%] opacity-100' src={bwImage}/> 
			 {isHovered ? <img className={visible}src={image}/> :			 			 
			 			  <img className={invisible}src={image}/>}
		</div>	
		</>
	)
}

export default ProductBox