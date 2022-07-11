import Link from 'next/link';

function Header() {
  return (
		<div className="w-full z-50 top-0 py-3 sm:py-5 absolute ">
			<div className="container flex items-center justify-between">
				<div>
					<a
						href="/"
						className="flex items-center space-x-2 text-yellow-500 font-semibold"
					>
						<h1 className="font-semibold text-3xl text-white">PROKXIMUS</h1>
					</a>
				</div>
				<div className="hidden lg:block">
					<ul className="flex items-center">
						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
								<Link href="#about">About</Link>
							</span>

							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>

						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
								<Link href="#services">Services</Link>
							</span>

							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>

						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
								<Link href="#portfolio">Portfolio</Link>
							</span>

							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>

						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
								<Link href="#work">Work</Link>
							</span>

							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>

						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
								<Link href="#statistics">Statistics</Link>
							</span>

							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>

						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
								<Link href="#blog">Blog</Link>
							</span>

							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>

						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
								<Link href="#contact">Contact</Link>
							</span>

							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>
					</ul>
				</div>
				<div className="block lg:hidden">
					<button>
						
						<i className="bx bx-menu text-4xl text-white"></i>
						<div className={`hidden lg:block`}>
							<ul className="flex items-center">
								<li className="group pl-6">
									<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
										<Link href="#about">About</Link>
									</span>

									<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
								</li>

								<li className="group pl-6">
									<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
										<Link href="#services">Services</Link>
									</span>

									<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
								</li>

								<li className="group pl-6">
									<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
										<Link href="#portfolio">Portfolio</Link>
									</span>

									<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
								</li>

								<li className="group pl-6">
									<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
										<Link href="#client">Clients</Link>
									</span>

									<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
								</li>

								<li className="group pl-6">
									<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
										<Link href="#work">Work</Link>
									</span>

									<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
								</li>

								<li className="group pl-6">
									<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
										<Link href="#statistics">Statistics</Link>
									</span>

									<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
								</li>

								<li className="group pl-6">
									<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
										<Link href="#blog">Blog</Link>
									</span>

									<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
								</li>

								<li className="group pl-6">
									<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
										<Link href="#contact">Contact</Link>
									</span>

									<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
								</li>
							</ul>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header