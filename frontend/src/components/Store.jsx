import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import {faEtsy} from '@fortawesome/free-brands-svg-icons';

const Store = () => {

const [isHovered, setIsHovered ] = useState(false);


	return (
		<>	
		  <div className='h-[100%] w-[100%] bg-stone-500 text-[#DCC5A4]'>
			<div className='h-[50px] w-[100%] flex items-center justify-center'>			
				<Link to='/'><button className='w-[120px] mt-9 p-2 text-2xl border-2 border-[#877f7a] rounded-md hover:border-[#ad9574] hover:text-[#ad9574]
		 	 		transition-all ease-in-out duration-1000 font-comorant'>HOME</button>
		 		</Link>	
			</div>
			<div className='w-[95%] m-[2.5%] h-[500px] flex items-start justify-center'>
				<img src= './public/wands-banner.png' alt='' className=' rounded-md shadow-xl'/>
			</div>

			<div className= ' m-[50px] mx-[6.6%] h-[650px] w-[1650px] shadow-xl rounded-md bg-custom-image-2 flex flex-col items-center'>
				<div className= 'w-[300px] border-b-2 border-[#DCC5A4] flex items-center justify-center'>
					<h1 className='p-4 text-3xl'>WRITE-UP HEADER</h1>
				</div>
				<div className='w-[100%] h-[550px] mt-2 flex items-between justify-around'>
					<div className='w-[40%] h-[90%] p-[100px] flex items-center text-xl italic'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin sapien vitae venenatis finibus. Duis vel.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin sapien vitae venenatis finibus. Duis vel.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin sapien vitae venenatis finibus. Duis vel.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin sapien vitae venenatis finibus. Duis vel.</p>
					</div>
					<div className= 'w-[30%] p-2 flex items-center justify-center'>
						<img src = './public/wands2.jpg' alt= '' className= 'h-[550px] rounded-3xl p-2'/>
					</div>
				</div>
			</div>

			<div className= ' m-[50px] mx-[6.6%] h-[650px] w-[1650px] shadow-xl rounded-md bg-custom-image-2 flex flex-col items-center'>
				<div className= 'w-[300px] border-b-2 border-[#DCC5A4] flex items-center justify-center'>
					<h1 className='p-4 text-3xl'>FEATURES HEADER</h1>
				</div>
				<div className='w-[100%] h-[550px] mt-2  flex items-between justify-around'>
					<div className= 'w-[30%] p-2 flex items-center justify-center'>
						<img src = './public/wands3.jpg' alt= 'wands3' className= 'h-[550px] rounded-3xl p-2'/>
					</div>					
					<div className='w-[50%] h-[90%] pl-[100px] flex items-center text-xl italic'>
						<ul className= 'text-2xl'>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>Lorem ipsum dolor sit amet,</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>consectetur adipiscing elit</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>Praesent sollicitudin sapien vitae venenatis</li>
							<li className= 'p-3'><FontAwesomeIcon icon={faSun} className='pr-3'/>Duis vel.</li>
						</ul>
					</div>
				</div>
			</div>


			<div className= ' m-[50px] mx-[6.6%] h-[350px] w-[1650px] shadow-xl rounded-md bg-custom-image-1 flex flex-col items-center'>
				<div className= 'w-[300px] border-b-2 border-[#DCC5A4] flex items-center justify-center'>
					<h1 className='p-4 text-3xl'>Purchase</h1>
				</div>
				<div className='h-[200px] w-[100%] flex items-around justify-center'>
					<div className='h-[200px] w-[350px] flex items-center justify-center p-4 m-7 cursor-pointer hover:text-[#ad9574]'>
						<a href= 'https://www.amazon.com.au/Mystic-Martian-Oracle-Lisa-Porter/dp/192594655X' target="_blank" rel="noopener noreferrer" >
							<FontAwesomeIcon icon={faEtsy} className='text-5xl transition-all ease-in-out duration-500'/>
						</a>
					</div>
				</div>
			</div>


			<div className='h-[90px] w-[100%] flex items-center justify-center'>			
				<Link to='/'><button className='w-[120px] p-2 text-2xl border-2 border-[#877f7a] rounded-md hover:border-[#ad9574] hover:text-[#ad9574]
		 	 		transition-all ease-in-out duration-1000 font-comorant'>HOME</button>
		 		</Link>	
			</div>
		  </div>		
		</>
	)
}
export default Store