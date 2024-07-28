import React from 'react';
import { useState, useEffect } from 'react';
import ProductBox from './ProductBox.jsx';

const productData = [
		{id: 1,
		 name: 'Mystical Realm Tarot', 
		 boxImage: '/color-tarot-banner.png', 
		 bwBoxImage: '/sepia-tarot-banner.png',
		 link: '/tarot'
		},
		{id: 2, 
		 name: 'Journey to the Goddess Realm', 
		 boxImage: '/color-goddess-banner.png', 
		 bwBoxImage: '/sepia-goddess-banner.png',
		 link: '/journey'
		},
		{id: 3, 
		 name: 'Mystic Martians', 
		 boxImage: '/color-martians-banner.png', 
		 bwBoxImage: '/sepia-martians-banner.png',
		 link: '/martians'
		}	
	];

const Products = () => {

	return (
		<>
			<div className='w-[full] bg-orange-200'>
				{productData.map((p) => (<ProductBox key={p.id} name={p.name} image={p.boxImage} bwImage={p.bwBoxImage} 
													 description={p.description} link={p.link}/>))}
			</div>	
		</>
	)
}

export default Products

