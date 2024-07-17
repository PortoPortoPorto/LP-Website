import React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import RefsContext from '../context/RefsContext.jsx';


const Illustrations = () => {
	const [ currentImage, setCurrentImage ] = useState('/tarot1.jpg');
	const [ isHovered, setIsHovered ] = useState(false);

	//global reference to component for scrolling purposes
	const { illustrationsRef } = useContext(RefsContext);

	//useRef for current Image Id -> to be used to find currentImage in handler functions
	const imageId = useRef(1);

	//useRef to allow access to setInterval for image autoslider 
	const intervalRef = useRef(null);

	//useRef to create a reference for as a prop for TransitionGroup / CSSTransition 
	const imageRef = useRef(null)

	const images = [
			{id: 1, name: 'Two of Swords', link: '/tarot1.jpg', sepia: 'sepia-tarot1.png'},
			{id: 2, name: 'The Fool', link: '/tarot2.jpg', sepia: 'sepia-tarot2.png'},
			{id: 3, name: 'Three of Cups', link: '/tarot3.jpg', sepia: 'sepia-tarot3.png'},
			{id: 4, name: 'The High Priestess', link: '/tarot4.jpg', sepia: 'sepia-tarot4.png'},
			{id: 5, name: 'The Sun', link: '/tarot5.jpg', sepia: 'sepia-tarot5.png'},
			{id: 6, name: 'Lakshmi', link: '/goddess1.jpg', sepia: 'sepia-goddess1.png'},
			{id: 7, name: 'Greys', link: '/mystic-image1.jpg', sepia: 'sepia-mystic.png'}
		];

	const handleNextImage = () => {
		if(imageId.current === images.length) {
			imageId.current = 1;
		} else {
			imageId.current ++;
		}	
		setCurrentImage(images.find((i) => i.id === imageId.current).link);
		resetAutoSlider();		
	}

	const handlePrevImage = () => {
		if(imageId.current === 1) {
			imageId.current = images.length;
		} else {
			imageId.current --;
		}	
		setCurrentImage(images.find((i) => i.id === imageId.current).link);
		resetAutoSlider();
	}

//trigger autoSlider reset on mouseHover 
	useEffect(() => {
		if(isHovered === false)return;
		else{
			resetAutoSlider();
		return () => clearInterval(intervalRef.current);
		}
	}, [isHovered]);

//Clear any existing autoslider intervals and start new interval 
	const resetAutoSlider = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
				handleNextImage();
		}, 4000);
	}



	return (
		<>
			<div ref={illustrationsRef} className='h-[700px] w-[100%] mt-[110px] mb-[110px] bg-orange-200 flex items-center justify-center'
				 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false)}}>
				<div className='h-[630px] w-[90%] bg-orange-200 flex items-center justify-around'>
					<FontAwesomeIcon icon={faChevronLeft}  className='text-5xl text-[#735534] hover:text-orange-100 cursor-pointer'
									 onClick={() => handlePrevImage()}/>		
						<div className='h-[100%] w-[60%] bg-orange-200 relative'>
							{images.map(image => 
								<img key={image.id} src={isHovered ? image.link : image.sepia} 
								className={ imageId.current === image.id ? 'transition-opacity ease-in-out duration-1000 absolute top-4 left-[30%] h-[650px] rounded-3xl select-none' 
								: 'transition-opacity ease-in-out duration-1000 absolute top-4 left-[30%] h-[650px] rounded-3xl select-none opacity-0' }/>
							)}
						</div>														
					<FontAwesomeIcon icon={faChevronRight} className='text-5xl text-[#735534] hover:text-orange-100 cursor-pointer'
									 onClick={() => handleNextImage()}/>
				</div>
			</div>	
		</>
	)
}

export default Illustrations

