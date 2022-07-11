import React from 'react'

function Contact() {
  return (
		<div>
			<div className="container py-16 md:py-20" id="contact">
				<h2 className="text-center font-header text-4xl font-semibold rfont-semibold text-primary uppercase sm:text-5xl lg:text-6xl">
					Contact me
				</h2>
				<h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
					Have Any Questions?
				</h4>
				<div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
					<p className="font-body text-grey-10">
						Feel free to contace me on any questions. I'll respond as soon as I
						find something useful to
					</p>
				</div>
				<form className="mx-auto w-full pt-10 sm:w-3/4"></form>
				<div className="flex flex-col pt-16 lg:flex-row">
					<div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
						<div className="flex items-center">
							<i className="bx bx-phone text-2xl text-grey-40"></i>
							<p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
								My Phone
							</p>
						</div>
						<a
							href="tel:+917895341037"
							className="pt-2 text-left font-body font-semibold text-primary-main lg:text-lg"
						>
							(+91) 78953 41037
						</a>
					</div>
					<div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
						<div className="flex items-center">
							<i className="bx bx-envelope text-2xl text-grey-40"></i>
							<p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
								My Email
							</p>
						</div>
						<a
							href="mailto:prokximus@gmail.com"
							className="pt-2 text-left font-body font-semibold text-primary-main lg:text-lg"
						>
							prokximus@gmail.com
						</a>
					</div>
					<div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
						<div className="flex items-center">
							<i className="bx bx-map text-2xl text-grey-40"></i>
							<p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
								My Address
							</p>
						</div>
						<p className="pt-2 text-left font-body font-semibold text-primary-main lg:text-lg">
							Alig Apartment Aligarh IND
						</p>
					</div>
				</div>
				<div className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d881.4370945831054!2d78.06852992077035!3d27.909693962277125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4f907870af7%3A0x956a9a84aecb5c13!2sAlig%20Apartments!5e0!3m2!1sen!2sin!4v1657468757491!5m2!1sen!2sin"
						className="pt-2 mx-auto h-[100%] w-full"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>

			<div className="relative bg-cover bg-center bg-no-repeat bg-blend-multiply py-5 mt-20"></div>
		</div>
	);
}

export default Contact