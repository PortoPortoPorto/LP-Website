import React from 'react';
import { useState, useEffect, useContext } from 'react';
import RefsContext from '../context/RefsContext.jsx';
import { Link } from 'react-router-dom';


const Wands = () => {

const [isHovered, setIsHovered] = useState(false);
const visible = 'transition-opacity ease-in-out duration-1000 delay-100 h-[500px] rounded-md absolute top-0 left-[2%] opacity-100 outline outline-4 outline-orange-100 shadow-lg '
const invisible = 'transition-opacity ease-in-out duration-1000 delay-100 h-[500px] rounded-md absolute top-0 left-[2%] opacity-0 outline outline-4 outline-orange-200 shadow-lg '


//global reference to component for scrolling purposes
const { wandsRef } = useContext(RefsContext);


	return (
		<>
			<div ref={wandsRef} className = 'font-comorant h-[500px] w-[full] m-[100px] bg-orange-200 relative rounded-md cursor-pointer'
		 	 onMouseEnter={() => setIsHovered(true)}
		 	 onMouseLeave={() => setIsHovered(false)}>
		 	 	<Link to={'/store'}>
		 	 		 <img className= 'h-[500px] rounded-md absolute top-0 left-[2%] opacity-100 shadow-lg' src= './public/sepia-wands-banner.png'/> 
				 {isHovered ? <img className={visible}src='./public/wands-banner.png'/> :			 			 
				 			  <img className={invisible}src='./public/wands-banner.png'/>}					
				</Link>
			</div>			
		</>
	)
}

export default Wands