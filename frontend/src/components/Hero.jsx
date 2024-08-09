import React from 'react';
import { useState, useEffect } from 'react';


//Maybe the hero can have a video on the left side? Got to think about what to put here... discuss with mum
const Hero = () => {


const [isHovered, setIsHovered ] = useState(false);
//variables as classes to toggle transition from sepia to color image
const visible = 'transition-opacity ease-in-out duration-[1500ms] delay-100 absolute top-0 left-0 w-full h-full object-cover opacity-90';
const visibleBg = 'transition-opacity ease-in-out duration-[1500ms] delay-100 absolute top-0 left-0 w-full h-full object-cover opacity-10';
const invisible= 'transition-opacity ease-in-out duration-[1500ms] delay-100 absolute top-0 left-0 w-full h-full object-cover opacity-0';

	return (
		<>
			<div className=' font-comorant mt-[80px] h-[880px] w-[100%] bg-orange-200 relative cursor-pointer
							 transition-all ease-in-out duration-500'
				 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				 <img src='./sepia-hero-art.png' className={visible}/>
				{ isHovered ? <img className={visible} src='./hero-art.png'/> : <img className={invisible} src='./hero-art.png'/>}
			</div>
		</>
	)
}

export default Hero