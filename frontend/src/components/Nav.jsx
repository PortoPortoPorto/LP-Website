import React from 'react'


const navButton = 'h-[50px] w-[120px] bg-orange-200 hover:bg-orange-100 flex items-center justify-center cursor-pointer rounded-md text-lg font-semibold text-orange-400'
//Nav could be perpetually at the top of the screen, and cycle up or down to wherever the selected section lay 
const Nav = () => {
	return (
		<>
			<div className='h-[80px] w-[100%] bg-orange-200 flex justify-around items-center'>
				<div className='text-4xl flex justify-center font-semibold italic p-7'>Lisa Porter</div> 
				<div className={navButton}>About</div>
				<div className={navButton}>Oracle</div>
				<div className={navButton}>Tarot</div>
				<div className={navButton}>Illustrations</div>
				<div className={navButton}>Wands</div>
				<div className={navButton}>Contact</div>
			</div>

		</>
	)
}

export default Nav