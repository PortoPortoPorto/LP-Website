import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Store = () => {

	const [isHovered, setIsHovered ] = useState({1: false, 2: false, 3: false});


	const wands = [
		{ id: 1, 
		  name: 'First Wand', 
		  img: '/wands.jpg', 
		  sepia: '/sepia-wands.png', 
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget diam lacus.',
		  price: 199},

		{ id: 2, 
		  name: 'Second Wand', 
		  img: '/wands2.jpg', 
		  sepia: '/sepia-wands2.png', 
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget diam lacus.',
		  price: 175},

		{ id: 3, 
		  name: 'Third Wand', 
		  img: '/wands3.jpg', 
		  sepia: '/sepia-wands3.png', 
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget diam lacus.',
		  price: 240}
	];

	//function to dynamically update state of the wands object. Takes id and a boolean
	const alterState = (id, boolean) => {
		setIsHovered((prevState) => ({
			...prevState,
			[id]: boolean
		}));
		console.log(isHovered);
	}


	return (
		<>
		  <div className='flex items-center justify-center p-5 text-2xl'>
		 	 <Link to='/'><button className='w-[140px] p-2 border-2 border-orange-100 rounded-lg'>Back</button></Link>
		  </div>
		  <div className='m-[5%] mt-[30px] h-[1200px] border-[5px] border-[#241201] bg-black rounded-3xl flex flex-col items-center justify-start'>
				<div className='h-[100px] w-[15%] flex items-center justify-center text-4xl italic text-orange-200 border-b border-orange-200'>WANDS</div>
				<p className='italic text-2xl text-orange-200 p-10 ml-10 mr-10'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget diam lacus. Etiam maximus leo turpis.
					 Etiam ullamcorper cursus nunc at lobortis. Sed porta, libero non luctus lacinia, massa lorem.
				</p>
				{wands.map(wand => <div className='h-[280px] w-[80%] ml-[10%] mr-[10%] mt-[15px] p-4 rounded-xl cursor-pointer hover:bg-orange-200
									hover:text-black text-2xl italic text-orange-200 border-b border-orange-200 flex items-center justify-between'
										key={wand.id} onMouseEnter={() => alterState(wand.id, true)} onMouseLeave={() => alterState(wand.id, false)}>
										<h1>{wand.name}</h1>
										<img src={wand.img} className='h-[200px] rounded-xl'/>
										<div className='text-xl italic m-5 h-[250px] flex flex-col justify-start items-center'>
											<h1 className='pt-[40px]'>{wand.description}</h1>
											{isHovered[wand.id] === true ? <div className='text-3xl pt-[75px]'>Shop</div> : ''}
										</div>
	
									</div>)}

		  </div>
		</>
	)
}

export default Store