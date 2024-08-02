import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import {faAmazon} from '@fortawesome/free-brands-svg-icons';

const Martians = () => {

const [isHovered, setIsHovered ] = useState(false);
const visible = 'transition-opacity ease-in-out duration-1000 delay-100 absolute top-0 left-0 opacity-100'
const invisible = 'transition-opacity ease-in-out duration-1000 delay-100 absolute top-0 left-0 opacity-0'


	return (
		<>	
		  <div className='h-[100%] w-[100%] bg-gray-400'>	
			<div className='h-[50px] w-[100%] flex items-center justify-center'>
				<Link to='/'><button className='w-[140px] mt-6 p-2 text-gray-300 font-comorant text-xl border-2 border-gray-300 rounded-lg hover:bg-[#362f27] hover:bg-gray-500
		 	 		transition-all ease-in-out duration-1000 delay-100'>HOME</button>
		 		</Link>	
			</div>
			<div className='w-[95%] m-[2.5%] h-[500px] flex items-start justify-center'>
				<img src= './public/martians-header.png' alt='' className=' rounded-md shadow-xl'/>
			</div>

			<div className= ' m-[50px] mx-[6.6%] h-[650px] w-[1650px] shadow-xl rounded-md bg-custom-image-8 flex flex-col items-center'>
				<div className= 'w-[500px] border-b-2 border-black flex items-center justify-center'>
					<h1 className='p-4 text-3xl'>OPEN YOUR CONSCIOUSNESS</h1>
				</div>
				<div className='w-[100%] h-[550px]  flex items-between justify-around'>
					<div className='w-[50%] h-[90%] p-[100px] mt-6 flex flex-col items-start justify-center text-xl italic'>
						<p className= 'leading-relaxed mt-1'>All of us are cosmic entities, born into the universe and seeking enlightenment. There are ancient beings from the 
						   sky who have visited and observed us for eternity. </p>
						<p className= 'leading-relaxed mt-4'>Mystic Martian Oracle is a carefully-curated collection of otherworldly, transcendental species. Each card is a 
						   gorgeous symbolic representation of eternal achetypes, with keywords extending to all facets of conscious, unconscious, physical and metaphysical life. </p> 
						<p className= 'leading-relaxed mt-4'>The range of alien species explored in Mystic Martians is complex and interconnected. They are a channel for our 
						   individual and collective lives, as observers and guardians. </p>
						<p className= 'leading-relaxed mt-4'>Lisa Porter invites you to open your mind, expand your horizons and welcome the eternal wisdom of 
						   these Great Sky Beings into your personal realm.</p>
					</div>
					<div className= 'w-[30%] p-2 mt-4 flex items-center justify-center'>
						<img src = './public/mystic-image1.jpg' alt= '' className= 'h-[550px] rounded-3xl p-2'/>
					</div>
				</div>
			</div>

			<div className= ' m-[50px] mx-[6.6%] h-[650px] w-[1650px] shadow-xl rounded-md bg-custom-image-8 flex flex-col items-center'>
				<div className= 'w-[300px] border-b-2 border-black flex items-center justify-center'>
					<h1 className='p-4 text-3xl'>FEATURES</h1>
				</div>
				<div className='w-[100%] h-[550px] mt-2  flex items-between justify-around'>
					<div className= 'w-[30%] p-2 flex items-center justify-center'>
						<img src = './public/mystic-image5.jpg' alt= '' className= 'h-[550px] rounded-3xl p-2'/>
					</div>					
					<div className='w-[50%] h-[90%] pl-[100px] flex items-center text-xl italic'>
						<ul className= 'text-2xl'>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>40 beautifully unique, hand-drawn cards</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>Wide spectrum of alien species and sacred geometry</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>128-page full-colour guidebook</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>Exploration of spreads, origins, symbolism and keywords</li>
						</ul>
					</div>
				</div>
			</div>


			<div className= ' m-[50px] mx-[6.6%] h-[350px] w-[1650px] shadow-xl rounded-md bg-custom-image-3 flex flex-col items-center'>
				<div className= 'w-[300px] border-b-2 border-black flex items-center justify-center'>
					<h1 className='p-4 text-3xl'>Purchase</h1>
				</div>
				<div className='h-[200px] w-[100%] flex items-around justify-center'>
					<div className='h-[200px] w-[350px] relative p-4 m-7 cursor-pointer'
						 onMouseEnter={() => setIsHovered(true)}
						 onMouseLeave={() => setIsHovered(false)}>
						<a href= 'https://www.rockpoolpublishing.com/mystical-realm-tarot' target="_blank" rel="noopener noreferrer" >
							<img  src='./public/gray-rockpool.png' alt='' className={visible}/>
							{isHovered ? <img className={visible} src='./public/rockpool.png'/> : 
										 <img className={invisible} src='./public/rockpool.png'/> }
						</a>
					</div>
					<div className='h-[200px] w-[350px] flex items-center justify-center p-4 m-5 cursor-pointer text-gray-600 hover:text-blue-500'>
						<a href= 'https://www.amazon.com.au/Mystic-Martian-Oracle-Lisa-Porter/dp/192594655X' target="_blank" rel="noopener noreferrer" >
							<FontAwesomeIcon icon={faAmazon} className='text-5xl transition-all ease-in-out duration-500'/>
						</a>
					</div>
				</div>
			</div>


			<div className='h-[90px] w-[100%] flex items-center justify-center'>			
				<Link to='/'><button className='w-[140px] p-2 text-gray-300 font-comorant text-xl border-2 border-gray-300 rounded-lg hover:bg-[#362f27] hover:bg-gray-500
		 	 		transition-all ease-in-out duration-1000 delay-100'>HOME</button>
		 		</Link>	
			</div>
		  </div>		
		</>
	)
}

export default Martians