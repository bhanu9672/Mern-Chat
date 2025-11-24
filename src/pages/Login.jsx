import { useState } from 'react'
import assets from '../assets/assets'

function Login() {
	const [currState, setCurrState] = useState("Sing up");
	return (
		<div
			className="min-h-screen bg-cover flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl"
		>
			{/* ------------------- Left Area ----------------- */}
			<img src={assets.logo_big} alt='' className='w-[min(30vw, 250px)]' />

			{/* ------------------- Right Area ----------------- */}
			<form
				className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'
			>
				<h2 className='font-medium text-2xl flex justify-between items-center'>
					{currState}
					<img src={assets.arrow_icon} alt='' className='w-5 cursor-pointer' />
				</h2>
			</form>

		</div>
	)
}

export default Login