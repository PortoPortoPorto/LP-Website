import React from 'react';
import { useState, useEffect, useContext } from 'react';
import RefsContext from '../context/RefsContext.jsx';


const Wands = () => {

const [isHovered1, setIsHovered1] = useState(false);
const [isHovered2, setIsHovered2] = useState(false);
const [isHovered3, setIsHovered3] = useState(false);
const visible = 'absolute top-0 left-0 transition-all ease-in-out duration-1000 delay-100 opacity-100 rounded-md cursor-pointer h-[450px] ring ring-orange-200'
const invisible = ' absolute top-0 left-0 transition-all ease-in-out duration-1000 delay-100 opacity-0 rounded-md  cursor-pointer h-[450px]'

//global reference to component for scrolling purposes
const { wandsRef } = useContext(RefsContext);


	return (
		<>
			<div ref={wandsRef} className = 'h-[650px] w-[100%] bg-black flex-col items-center justify-center'>		
				<div className=' font-comorant h-[550px] w-[100%] bg-black flex items-start pt-16 justify-between p-1 ml-10'>
					<div className='relative w-[30%]' onMouseOver={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
						<img src='/sepia-wands.png' alt='wands' className= 'rounded-md  cursor-pointer h-[450px] '/> 
						<img src='/wands.jpg' alt='wands' className={isHovered1 ? visible : invisible}/>
					</div>
					<div className='relative w-[30%]' onMouseOver={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
						<img src='/sepia-wands3.png' alt='wands' className= 'rounded-md  cursor-pointer h-[450px] '/> 
						<img src='/wands3.jpg' alt='wands' className={isHovered3 ? visible : invisible}/>
					</div>
					<div className='relative w-[30%]' onMouseOver={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
						<img src='/sepia-wands2.png' alt='wands' className= 'rounded-md  cursor-pointer h-[450px] '/> 
						<img src='/wands2.jpg' alt='wands' className={isHovered2 ? visible : invisible}/>
					</div>
				</div>
				<div className= 'flex items-center justify-center'>
					<button className= ' transition ease-in-out duration-500 text-2xl italic text-[#735534] hover:text-orange-100'>More..</button>
				</div>
			</div>			
		</>
	)
}

export default Wands