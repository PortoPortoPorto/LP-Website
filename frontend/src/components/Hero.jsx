import React from 'react'

const Hero = () => {
	return (
		<>
			<div className='h-[600px] w-[100%] bg-orange-100 flex items-center justify-around p-1'>
				<div className='w-[50%]'><img src='./public/martians.jpg' alt= ''/></div>
				<div className='w-[30%] h-[80%] text-3xl font-semibold text-orange-400 flex items-center italic'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin sapien vitae venenatis finibus. Duis vel.</p>
				</div>
			</div>
		</>
	)
}

export default Hero