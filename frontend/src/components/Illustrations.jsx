import React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import RefsContext from '../context/RefsContext.jsx';


const Illustrations = () => {
	const [ currentImage, setCurrentImage ] = useState('/ill1.png');
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
			{id: 1, name: 'ill1', link: '/ill1.png', sepia: 'sepia-ill1.png'},
			{id: 2, name: 'ill2', link: '/ill2.png', sepia: 'sepia-ill2.png'},
			{id: 3, name: 'ill3', link: '/ill3.png', sepia: 'sepia-ill3.png'},
			{id: 4, name: 'ill4', link: '/ill4.png', sepia: 'sepia-ill4.png'},
			{id: 5, name: 'ill5', link: '/ill5.png', sepia: 'sepia-ill5.png'},
			{id: 6, name: 'ill6', link: '/ill6.png', sepia: 'sepia-ill6.png'},
			{id: 7, name: 'ill7', link: '/ill7.png', sepia: 'sepia-ill7.png'},
			{id: 8, name: 'ill8', link: '/ill8.png', sepia: 'sepia-ill8.png'},
			{id: 9, name: 'ill9', link: '/ill9.png', sepia: 'sepia-ill9.png'},
			{id: 10, name: 'ill10', link: '/ill10.png', sepia: 'sepia-ill10.png'},
			{id: 11, name: 'ill11', link: '/ill11.png', sepia: 'sepia-ill11.png'},
			{id: 12, name: 'ill12', link: '/ill12.png', sepia: 'sepia-ill12.png'}
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
		}, 5000);
	}

//Handle Image Popout in new window
	const imagePopout = () => {
		const width = window.innerWidth * 0.5;
		const height = window.innerHeight * 0.95;
		const left = (window.innerWidth - width) / 2;
		const top = (window.innerHeight - height) / 2;
		window.open(currentImage, '', `width=${width},height=${height},left=${left},top=${top}resizable=yes,toolbar=no,scrollbar=no`);
	};

//ClassNames 
	const chev = ' transition-all ease-in-out duration-500 text-5xl text-[#735534] hover:text-orange-100 cursor-pointer'
	const imgVis = 'transition-opacity ease-in-out duration-1000 delay-0 absolute top-4 left-[20%] h-[750px] select-none cursor-pointer' 
	const imgInvis = 'transition-opacity ease-in-out duration-1000 delay-0 absolute top-4 left-[20%] h-[750px] select-none cursor-pointer opacity-0'

	return (
		<>
			<div className='w-[100%] flex items-center justify-center'>
				<h1 className= 'font-comorant text-2xl text-[#ad9574] border-b-2 border-[#ad9574] 
								pb-1 flex items-center justify-center w-[200px]'>ILLUSTRATIONS</h1>
			</div>
			<div ref={illustrationsRef} className='h-[760px] w-[100%] mb-[20px] bg-orange-200 flex items-center justify-center'
				 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false)}}>
				<div className='h-[760px] w-[90%] m-[5%] bg-orange-200 flex items-center justify-around'>
					<FontAwesomeIcon icon={faChevronLeft}  className={chev}
									 onClick={() => handlePrevImage()}/>		
						<div className='h-[760px] w-[50%] bg-orange-200 relative'>
							{images.map(image => 
								<img key={image.id} src={image.sepia} 
								className={ imageId.current === image.id ? imgVis : imgInvis }/>
							)}
							{images.map(image => 
								<img key={image.id} src={image.link} 
								className={ imageId.current === image.id && isHovered ? imgVis : imgInvis}
								onClick={() => imagePopout()}/>
							)}	
						</div>													
					<FontAwesomeIcon icon={faChevronRight} className={chev}
									 onClick={() => handleNextImage()}/>
				</div>
			</div>
			<div className='w-[100%] flex items-start justify-center'><h2 className={ isHovered ?
					`font-comorant text-xl text-[#ad9574] pb-3 transition-all duration-1000 ` 
					: ` font-comorant text-xl text-[#ad9574] pb-3 transition-all duration-1000 opacity-0`}>
					CLICK TO ENLARGE
				</h2>
			</div>				
		</>
	)
}

export default Illustrations

