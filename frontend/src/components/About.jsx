import React from 'react';
import { useState, useEffect, useContext } from 'react';
import RefsContext from '../context/RefsContext.jsx';


const About = () => {

const [isHovered, setIsHovered ] = useState(false);
const visible = 'transition-opacity ease-in-out duration-1000 delay-100 h-[550px] ml-[150px] rounded-xl opacity-100 absolute top-10 left-0';
const invisible = 'transition-opacity ease-in-out duration-1000 delay-100 h-[550px] ml-[150px] rounded-xl opacity-0 absolute top-10 left-0';
const aboutStyles = `h-[650px] w-[95%] ml-[2.5%] flex items-center justify-around p-1 pl-[200px] 
					 font-comorant border border-2 border-[#735534] rounded-xl cursor-pointer transition-colors ease-in-out duration-1000 delay-100 transition-[border] ease-in-out duration-1000 delay-100 `;

//global reference to component for scrolling purposes
const { aboutRef } = useContext(RefsContext);

	return (
		<>
			<div ref={aboutRef} className={`h-[650px] w-[80%] mt-[100px] ml-[10%] flex items-center justify-around p-2 pl-[200px] font-comorant 
				  border border-2 border-[#735534] rounded-xl cursor-pointer transition-all ease-in-out duration-1000 delay-100 
				  ${isHovered ? ' bg-orange-100 border-orange-50 shadow-xl ' : 'bg-orange-200'}`}
				 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<div className='w-[50%] h-[90%] text-[#735534] flex items-center'>
					<div className='flex flex-col items-center'>	
						<h1 className='p-10 pb-5 pt-0 text-4xl font-light'>Hi, I'm Lisa.</h1>
						<p className='p-10 py-5 font-normal text-2xl leading-relaxed italic '>
							I'm an illustrator, author of oracle decks and a wandmaker. </p>
						<p className='p-10 py-2 font-normal text-xl leading-relaxed not-italic'>	
							I was born in rural Western Australia and have lived in the Melbourne area for the past decade.
						</p>
						<p className='p-10 py-2 font-normal text-xl leading-relaxed not-italic'>	
							I've worked with Rockpool Publishing and US Games Systems to share my oracle and tarot decks with the world. 
						</p>
						<p className='p-10 py-2 font-normal text-xl leading-relaxed not-italic'>
							My creative endeavours extend beyond the enchanting universe of diviniation cards. I'm also a passionate wand-maker.
						</p>
						<p className='p-10 py-2 font-normal text-xl leading-relaxed not-italic'>
							I'm inspired by life and hope to provide inspiritation to others through my work. 
						</p>
					</div>
				</div>
				<div className='w-[40%] h-[100%] relative'>
					<img src='/sepia-profile.png' alt= '' className='h-[550px] ml-[150px] rounded-xl absolute top-10 left-0'/>
					{isHovered ? <img src='/profile.jpg' alt='' className={visible}/> : <img src='/profile.jpg' alt='' className={invisible}/> }
				</div>
			</div>	
		</>
	)
}

export default About