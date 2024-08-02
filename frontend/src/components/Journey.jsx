import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import {faAmazon} from '@fortawesome/free-brands-svg-icons';

const Journey = () => {

const [isHovered, setIsHovered ] = useState(false);
const visible = 'transition-opacity ease-in-out duration-1000 delay-100 absolute top-0 left-10 opacity-100'
const invisible = 'transition-opacity ease-in-out duration-1000 delay-100 absolute top-0 left-10 opacity-0'




	return (
		<>
		 <div className='h-[100%] w-[100%] bg-[#201D46] text-[#201D46]'>
			<div className='h-[50px] w-[100%] flex items-center justify-center'>
				<Link to='/'><button className='w-[140px] mt-9 p-2 text-[#f3e8ff] text-xl border-2 border-[#f3e8ff] rounded-lg hover:bg-[#f3e8ff] hover:text-[#201D46] 
		 	 		transition-all ease-in-out duration-1000 delay-100 font-comorant'>HOME</button>
		 		</Link>				
			</div>
			<div className='w-[95%] m-[2.5%] h-[500px] flex items-start justify-center'>
				<img src= './public/goddess-header.png' alt='' className=' rounded-md shadow-xl'/>
			</div>

			<div className= ' m-[50px] mx-[6.6%] h-[650px] w-[1650px] shadow-xl rounded-md bg-custom-image-7 flex flex-col items-center'>
				<div className= 'w-[500px] border-b-2 border-black flex items-center justify-center'>
					<h1 className='p-4 text-3xl'>Embark on your Journey</h1>
				</div>
				<div className='w-[100%] h-[550px] mt-2  flex items-between justify-around'>
					<div className='w-[50%] h-[90%] p-[100px] flex flex-col items-center text-xl italic'>
						<p className= 'leading-relaxed mt-1'>Lisa Porter invites you to take a journey with the Goddesses, in this stunning 39-card oracle deck. </p>
						<p className= 'leading-relaxed mt-4'>Journey to the Goddess Realm draws upon the ancient wisdom of dieties from a wide range of cultures,
						   to guide you intuitively towards a greater conscious awareness. </p>
						<p className= 'leading-relaxed mt-4'>Each goddess brings with her eternal truths, as explored in ancient mythologies whose themes resonate 
						   to this day. </p>
						<p className= 'leading-relaxed mt-4'>Let the ancient feminine wisdom of this diverse pantheon illuminate the path through your personal life journey.</p>
					</div>
					<div className= 'w-[30%] p-2 flex items-center justify-center'>
						<img src = './public/goddess1.jpg' alt= '' className= 'h-[550px] rounded-3xl p-2'/>
					</div>
				</div>
			</div>

			<div className= ' m-[50px] mx-[6.6%] h-[650px] w-[1650px] shadow-xl rounded-md bg-custom-image-7 flex flex-col items-center'>
				<div className= 'w-[300px] border-b-2 border-black flex items-center justify-center'>
					<h1 className='p-4 text-3xl'>FEATURES</h1>
				</div>
				<div className='w-[100%] h-[550px] mt-2  flex items-between justify-around'>
					<div className= 'w-[30%] p-2 flex items-center justify-center'>
						<img src = './public/goddess2.jpg' alt= '' className= 'h-[550px] rounded-3xl p-2'/>
					</div>					
					<div className='w-[50%] h-[90%] pl-[100px] flex items-center text-xl italic'>
						<ul className= 'text-2xl'>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>39 magnificent hand-drawn cards</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>36 Godesses from a variety of cultures</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>3 confirmation cards</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>48-page guidebook</li>
						</ul>
					</div>
				</div>
			</div>


			<div className= ' m-[50px] mx-[6.6%] h-[350px] w-[1650px] shadow-xl rounded-md bg-custom-image-4 flex flex-col items-center'>
				<div className= 'w-[300px] border-b-2 border-black flex items-center justify-center'>
					<h1 className='p-4 text-3xl'>Purchase</h1>
				</div>
				<div className='h-[200px] w-[100%] flex items-around justify-center'>
					<div className='h-[200px] w-[350px] relative p-4 m-7 cursor-pointer'
						 onMouseEnter={() => setIsHovered(true)}
						 onMouseLeave={() => setIsHovered(false)}>
						<a href= 'https://www.usgamesinc.com/journey-to-the-goddess-realm.html' target="_blank" rel="noopener noreferrer" >
							<img  src='./public/us-games-purple.png' alt='' className={visible}/>
							{isHovered ? <img className={visible} src='./public/us-games.png'/> : 
										 <img className={invisible} src='./public/us-games.png'/> }
						</a>
					</div>
					<div className='h-[200px] w-[350px] flex items-center justify-center p-4 m-7 cursor-pointer text-[#201D46] hover:text-blue-500'>
						<a href= 'https://www.amazon.com.au/Journey-Goddess-Realm-Lisa-Porter/dp/1572817305' target="_blank" rel="noopener noreferrer" >
							<FontAwesomeIcon icon={faAmazon} className='text-5xl transition-all ease-in-out duration-500'/>
						</a>
					</div>
				</div>
			</div>


			<div className='h-[90px] w-[100%] flex items-center justify-center'>			
				<Link to='/'><button className='w-[140px] p-2 text-[#f3e8ff] text-xl border-2 border-[#f3e8ff] rounded-lg hover:bg-[#f3e8ff] hover:text-[#201D46] 
		 	 		transition-all ease-in-out duration-1000 delay-100 font-comorant'>HOME</button>
		 		</Link>	
			</div>	
		 </div>	
		</>
	)
}

export default Journey