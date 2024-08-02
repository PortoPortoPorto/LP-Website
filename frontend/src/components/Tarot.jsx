import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import {faAmazon} from '@fortawesome/free-brands-svg-icons';

const Tarot = () => {

const [isHovered, setIsHovered ] = useState(false);
const visible = 'transition-opacity ease-in-out duration-1000 delay-100 absolute top-0 left-0 opacity-100'
const invisible = 'transition-opacity ease-in-out duration-1000 delay-100 absolute top-0 left-0 opacity-0'


	return (
		<>
			<div className='h-[50px] w-[100%] flex items-center justify-center'>
				<Link to='/'><button className='w-[140px] mt-9 p-2 text-[#826F63] text-xl border-2 border-[#826F63] shadow-md rounded-lg hover:bg-[#826F63] hover:text-orange-100 
		 	 		transition-all ease-in-out duration-1000 delay-100 font-comorant'>HOME</button>
		 		</Link>				
			</div>
			<div className='w-[95%] m-[2.5%] h-[500px] flex items-start justify-center'>
				<img src= './public/tarot-header.png' alt='' className=' rounded-md shadow-xl'/>
			</div>

			<div className= ' m-[50px] mx-[6.6%] h-[650px] w-[1650px] shadow-xl rounded-md bg-custom-image-6 flex flex-col items-center'>
				<div className= 'w-[500px] border-b-2 border-[#826F63] flex items-center justify-center'>
					<h1 className='p-4 text-3xl text-[#826F63]'>JOURNEY INTO THE UNKNOWN</h1>
				</div>
				<div className='w-[100%] h-[550px] mt-1  flex items-between justify-around'>
					<div className='w-[50%] h-[90%] p-[100px] flex flex-col items-start text-xl italic text-[#826F63]'>
						<p className= 'leading-relaxed mt-1'>Based on the classic Raider-Waite tarot, Mystical Realm Tarot invites you to embark
						on The Fool's Journey of personal discovery. </p>
						<p className= 'leading-relaxed mt-3'>The Fool's journey represents each of our individual journeys through life, 
						which we share and experience together. </p>
						<p className= 'leading-relaxed mt-3'>Through the vivid, unique and diverse style of Lisa Porter's hand-drawn illustrations, you 
						will be guided along the myriad paths of self exploration. </p>
						<p className= 'leading-relaxed mt-3'>The themes and messages of Mystical Realm Tarot are timeless, and remain relevant to this day.</p> 
						<p className= 'leading-relaxed mt-3'>Take the first step on your journey into the unknown with The Fool.</p>
					</div>
					<div className= 'w-[30%] p-2 flex items-center justify-center'>
						<img src = './public/tarot6.jpg' alt= '' className= 'h-[550px] rounded-3xl p-2'/>
					</div>
				</div>
			</div>

			<div className= ' m-[50px] mx-[6.6%] h-[650px] w-[1650px] shadow-xl rounded-md bg-custom-image-6 flex flex-col items-center'>
				<div className= 'w-[300px] border-b-2 border-[#826F63] flex items-center justify-center'>
					<h1 className='p-4 text-3xl text-[#826F63]'>FEATURES</h1>
				</div>
				<div className='w-[100%] h-[550px] mt-2  flex items-between justify-around'>
					<div className= 'w-[30%] p-2 flex items-center justify-center'>
						<img src = './public/tarot5.jpg' alt= '' className= 'h-[550px] rounded-3xl p-2'/>
					</div>					
					<div className='w-[50%] h-[90%] pl-[100px] flex items-center text-xl italic text-[#826F63]'>
						<ul className= 'text-2xl'>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>78 magnificent hand-drawn cards</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>142 page full-colour guide book</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>Information on Spreads, symbolism and etymology of cards</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>Keywords for ease of interperetation</li>
						</ul>
					</div>
				</div>
			</div>


			<div className= ' m-[50px] mx-[6.6%] h-[350px] w-[1650px] shadow-xl rounded-md bg-custom-image-5 flex flex-col items-center'>
				<div className= 'w-[300px] border-b-2 border-[#826F63] flex items-center justify-center'>
					<h1 className='p-4 text-3xl text-[#826F63]'>Purchase</h1>
				</div>
				<div className='h-[200px] w-[100%] flex items-around justify-center'>
					<div className='h-[200px] w-[350px] relative p-4 m-7 cursor-pointer'
						 onMouseEnter={() => setIsHovered(true)}
						 onMouseLeave={() => setIsHovered(false)}>
						<a href= 'https://www.rockpoolpublishing.com/mystical-realm-tarot' target="_blank" rel="noopener noreferrer" >
							<img  src='./public/sepia-rockpool.png' alt='' className={visible}/>
							{isHovered ? <img className={visible} src='./public/rockpool.png'/> : 
										 <img className={invisible} src='./public/rockpool.png'/> }
						</a>
					</div>
					<div className='h-[200px] w-[350px] flex items-center justify-center p-4 m-5 cursor-pointer text-[#826F63] hover:text-blue-400'>
						<a href= 'https://www.amazon.com.au/Mystical-Realm-Tarot-Lisa-Porter/dp/1925946568' target="_blank" rel="noopener noreferrer" >
							<FontAwesomeIcon icon={faAmazon} className='text-5xl transition-all ease-in-out duration-500'/>
						</a>
					</div>
				</div>
			</div>


			<div className='h-[90px] w-[100%] flex items-center justify-center'>			
				<Link to='/'><button className='w-[140px] p-2 text-[#826F63] text-xl border-2 border-[#826F63] shadow-md rounded-lg hover:bg-[#826F63] hover:text-orange-100 
		 	 		transition-all ease-in-out duration-1000 delay-100 font-comorant'>HOME</button>
		 		</Link>	
			</div>		
		</>
	)
}

export default Tarot