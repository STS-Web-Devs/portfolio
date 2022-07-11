import React from 'react'

function Hero() {
    const profiles = {
        name: ['H','e','l','l','o',' ','I',`'`,'m',' ','S','y','e','d',' ','A','d','e','e','b',],
        desc: `A passionate Web and Graphics designer who loves turning bold ideas into impactful and memorable experiences. `,
        image: `assets/img/Me4.jpg`,
      }
  return (
		<div>
			<div
				className="relative bg-cover bg-center bg-no-repeat py-8"
				style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
			>
				<div className="absolute inset-0 z-20 bg-gradient-to-r opacity-95 bg-cover bg-center bg-no-repeat"></div>

				<div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
					<div className="flex flex-col items-center justify-center lg:flex-row">
						<div className="rounded-full border-8 border-primary shadow-xl">
							<img
								src={profiles.image}
								className="h-28 rounded-full md:h-48"
								alt="author"
							/>
						</div>
						<div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
							<div className="flex items-center space-x-4 text-yellow-400">
								<div className="flex text-center font-header text-2xl  text-white sm:text-left sm:text-5xl md:text-6xl cursor-pointer">
									<h1 className="hover:text-[#ffb936] hover:animate-pulse text-shadow ml-4 cursor-pointer transition duration-100 hover:scale-125">
										{profiles.name[0]}
									</h1>
									<h1 className="hover:text-[#f3b137] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[1]}
									</h1>
									<h1 className="hover:text-[#fcbd47] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[2]}
									</h1>
									<h1 className="hover:text-[#ffa600ee] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[3]}
									</h1>
									<h1 className="hover:text-[#ffa600f0] hover:animate-pulse text-shadow  cursor-pointer transition duration-100 hover:scale-125">
										{profiles.name[4]}
									</h1>
									<h1 className="hover:text-[#ffb936] hover:animate-pulse text-shadow mx-2 cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[5]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[6]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[7]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow  mr-4 cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[8]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow  cursor-pointer transition duration-100 hover:scale-125">
										{profiles.name[9]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125">
										{profiles.name[10]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[11]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125">
										{profiles.name[12]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow mr-4 cursor-pointer transition duration-100 hover:scale-125">
										{profiles.name[13]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[14]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[15]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125">
										{profiles.name[16]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[17]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[18]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow cursor-pointer transition duration-100 hover:scale-125">
										{profiles.name[19]}
									</h1>
									<h1 className="hover:text-[orange] hover:animate-pulse text-shadow  cursor-pointer transition duration-100 hover:scale-125 ">
										{profiles.name[20]}
									</h1>
								</div>
							</div>
							<div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
								<div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
									<p className="font-body text-lg uppercase text-white">
										Let's connect
									</p>
									<div className="hidden sm:block">
										<i className="bx bx-chevron-right text-3xl text-yellow"></i>
									</div>
								</div>
								<div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
									<a href="https://instagram.com/prokximus">
										<i className="bx bxl-instagram text-2xl text-white hover:text-yellow transition duration-1duration-100 hover:scale-125 hover:rotate-360"></i>
									</a>
									<a href="https://twitter.com/prokximus" className="pl-4">
										<i className="bx bxl-twitter text-2xl text-white hover:text-yellow transition duration-1duration-100 hover:scale-125 hover:rotate-360"></i>
									</a>
									<a
										href="https://github.com/SyedAdeebWebDesigning"
										className="pl-4"
									>
										<i className="bx bxl-github text-2xl text-white hover:text-yellow transition duration-1duration-100 hover:scale-125 hover:rotate-360"></i>
									</a>
									<a
										href="https://www.facebook.com/s.a.abidi.9/"
										className="pl-4"
									>
										<i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow transition duration-1duration-100 hover:scale-125 hover:rotate-360"></i>
									</a>
								</div>
							</div>
							{/* <a href="" className=" mt-24 text-xl uppercase bg-purple-600 py-2 px-4">View Blogs </a> */}
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
}

export default Hero