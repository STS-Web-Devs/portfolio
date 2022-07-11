import React from 'react'

function Footer() {
  return (
		<div className="bg-gradient-to-r">
			<div className="container flex flex-col justify-between py-6 sm:flex-row">
				<p className="text-center font-body text-white md:text-left">
					© Copyright 2022. All right reserved, PROKXIMUS.
				</p>
				<div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
					<a href="https://instagram.com/prokximus">
						<i className="bx bxl-instagram text-2xl text-white hover:text-[white] transition duration-200 hover:scale-125 hover:rotate-360"></i>
					</a>
					<a href="https://twitter.com/prokximus" className="pl-4">
						<i className="bx bxl-twitter text-2xl text-white hover:text-[white] transition duration-200 hover:scale-125 hover:rotate-360"></i>
					</a>
					<a href="https://github.com/SyedAdeebWebDesigning" className="pl-4">
						<i className="bx bxl-github text-2xl text-white hover:text-[white] transition duration-200 hover:scale-125 hover:rotate-360"></i>
					</a>
					<a href="https://www.facebook.com/s.a.abidi.9/" className="pl-4">
						<i className="bx bxl-facebook-square text-2xl text-white hover:text-[white] transition duration-200 hover:scale-125 hover:rotate-360"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer