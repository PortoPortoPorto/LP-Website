import React from 'react';
import { useState, useEffect } from 'react';

//Maybe the hero can have a video on the left side? Got to think about what to put here... discuss with mum
const Hero = () => {

const [isHovered, setIsHovered ] = useState(false);
//variables as classes to toggle transition from sepia to color image
const visible = 'transition-opacity ease-in-out duration-1000 delay-100 absolute top-0 left-0 w-full h-full object-cover opacity-90';
const visibleBg = 'transition-opacity ease-in-out duration-1000 delay-100 absolute top-0 left-0 w-full h-full object-cover opacity-10';
const invisible= 'transition-opacity ease-in-out duration-1000 delay-100 absolute top-0 left-0 w-full h-full object-cover opacity-0';

	return (
		<>
			<div className=' font-comorant mt-[80px] h-[750px] w-[100%] bg-orange-200 flex items-center justify-start p-1'
				 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<div className=' relative w-[50%] h-[600px] overflow-hidden'>
					<img src='/sepia-goddess-back.png' alt='sepia-goddess-back' className={visible}/>
					{isHovered ? <img src='/goddess-back.jpg' alt='goddess-back' className={visible}/> : 
								 <img src='/goddess-back.jpg' alt='goddess-back' className={invisible}/> }
				</div>
				<div className='w-[50%] h-[600px] overflow-hidden relative' id='layer-container'>
					<div className='ml-[180px]  ' id='hero-background'>
						<img src='/sepia-goddess-back.png' alt='sepia-goddess-back' className={visibleBg}/>
						{isHovered ? <img src='/goddess-back.jpg' alt='goddess-back' className={visibleBg}/> : 
								 	 <img src='/goddess-back.jpg' alt='goddess-back' className={invisible}/> }		
					</div>	
					<div className=' w-[90%] h-[100%] p-10 text-3xl font-semibold text-[#735534] flex items-center italic'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin sapien vitae venenatis finibus. Duis vel.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero