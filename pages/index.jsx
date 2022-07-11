import { createClient } from "next-sanity/";
import Script from "next/script";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Header from "/components/BlogHeader";
import Hero from "/components/Hero";
import Services from "/components/Services";
import Footer from "/components/Footer";
import Contact from "/components/Contact";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function Home({ blogs, port, skills, work, expe }) {
	const client = createClient({
		projectId: "9w7gf952",
		dataset: "production",
		useCdn: false,
	});
	const profiles = {
		name: [
			"H",
			"e",
			"l",
			"l",
			"o",
			" ",
			"I",
			`'`,
			"m",
			" ",
			"S",
			"y",
			"e",
			"d",
			" ",
			"A",
			"d",
			"e",
			"e",
			"b",
		],
		desc: `A passionate Web and Graphics designer who loves turning bold ideas into impactful and memorable experiences. `,
		image: `assets/img/Me4.jpg`,
	};
	const builder = imageUrlBuilder(client);

	return (
		<>
			<>
				<Script src="/assets/js/main.js"></Script>

				<Header />
				<br />
				<br />
				<br />
				<Hero />
				<div className="bg-gray-100 text-white" id="about">
					<div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
						<div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
							<h2 className="font-header text-4xl uppercase text-primary sm:text-5xl lg:text-6xl">
								Who am I?
							</h2>
							<h4 className="pt-6 text-xl  text-shadowfont-medium text-black sm:text-2xl lg:text-3xl">
								 {profiles.name}, a Web & Graphics Designer.
							</h4>
							<p className="pt-6 font-body leading-relaxed text-grey-20">
								{profiles.desc}
							</p>
							<div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
								<div className="flex items-center justify-center sm:justify-start">
									<p className="font-body text-lg uppercase text-grey-20">
										Connect with me
									</p>
									<div className="hidden sm:block">
										<i className="bx bx-chevron-right text-2xl text-primary"></i>
									</div>
								</div>
								<div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
									<a href="https://instagram.com/prokximus">
										<i className="bx bxl-instagram text-2xl text-gray-500 hover:text-black transition duration-200 hover:scale-125 hover:rotate-360"></i>
									</a>
									<a href="https://twitter.com/prokximus" className="pl-4">
										<i className="bx bxl-twitter text-2xl text-gray-500 hover:text-black transition duration-200 hover:scale-125 hover:rotate-360"></i>
									</a>
									<a
										href="https://github.com/SyedAdeebWebDesigning"
										className="pl-4"
									>
										<i className="bx bxl-github text-2xl text-gray-500 hover:text-black transition duration-200 hover:scale-125 hover:rotate-360"></i>
									</a>
									<a
										href="https://www.facebook.com/s.a.abidi.9/"
										className="pl-4"
									>
										<i className="bx bxl-facebook-square text-2xl text-gray-500 hover:text-black transition duration-200 hover:scale-125 hover:rotate-360"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
							{skills.map((item) => {
								return (
									<div key={item._id} className="pt-6">
										<div className="flex items-end justify-between">
											<h4 className="font-body uppercase text-black">
												{item.skill}
											</h4>
											<h3 className="font-body text-3xl font-bold text-primary-main">
												{item.value}%
											</h3>
										</div>
										<div className="mt-2 h-3 w-full rounded-full bg-lila">
											<div
												className="h-3 rounded-full bg-gradient-to-o"
												style={{ width: `${item.value}%` }}
											></div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
			</>
			<>
				<div>
					<Services />
					<div className="container py-20 md:py-20 bg-gray-50" id="portfolio">
						<h2 className="text-center mb-10 font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
							My Recent Projects
						</h2>
						<div className="group grid lg:grid-cols-2 xsm:flex-col  space-x-4 lg:flex-row">
							{port.map((item) => {
								return (
									<div className="my-10" key={item._id}>
										{" "}
										<a href={item.link} target="1">
											<img
												src={`${builder.image(item.image).width(2800).url()}`}
												className="hover:scale-105 transition-all duration-200 mx-auto w-[1200px] grayscale-50 cursor-pointer hover:grayscale-0 h-[50%] lg:h-[400px] bg-transparent rounded-md px-4 py-2"
											/>
										</a>
										<div className="p-6 md:flex items-center justify-between text-center lg:text-left lg:mx-5">
											<h1 className="title-font text-2xl uppercase mt-3 font-medium text-gray-900 mb-3">
												{item.title}
											</h1>
											<div className="flex items-center flex-wrap justify-center md:justify-start">
												<a
													id="btn-1"
													disabled={false}
													href={item.code}
													target="1"
													className="text-[#ffa42c] py-2 rounded-lg hover:text-[#d78b28] transition-all duration-200 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0"
												>
													<button
														className="disabled:text-red-500 flex items-center disabled:hover:bg-white px-4 py-2 rounded-lg"
														disabled={item.cd}
													>
														View Code
														<svg
															className="w-4 h-4 ml-2"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth="2"
															fill="none"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M5 12h14"></path>
															<path d="M12 5l7 7-7 7"></path>
														</svg>
													</button>
												</a>
												<a
													id="btn-2"
													href={item.link}
													target="1"
													className="text-[#ffa42c] py-2 rounded-lg hover:text-[#d78b28] transition-all duration-200 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0"
												>
													<button
														className="disabled:text-red-500 flex items-center disabled:hover:bg-white px-4 py-2 rounded-lg"
														disabled={item.ld}
													>
														View Project
														<svg
															className="w-4 h-4 ml-2"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth="2"
															fill="none"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M5 12h14"></path>
															<path d="M12 5l7 7-7 7"></path>
														</svg>
													</button>
												</a>
											</div>
										</div>
										<div className="flex justify-evenly flex-col lg:flex-row items-center">
											<p className="text-center text-gray-600 lg:text-left lg:mx-11 leading-relaxed">
												{item.desc.slice(0, 66)}
												<br />
											</p>
											<p className="flex text-center  space-x-2 items-center text-gray-600 lg:text-left lg:mx-11 leading-relaxed mb-3">
												<strong className="mr-2">
													{" "}
													<BsCalendar2DateFill />{" "}
												</strong>{" "}
												{item.createdAt.slice(0, 10)}.<br />
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="container py-16 md:py-20" id="work">
						<h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
							My work experience
						</h2>
						<h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
							Here's what I did before freelancing
						</h3>

						<div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
							{work.map((item) => {
								return (
									<div key={item._id}>
										<span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

										<div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
											<div className="md:w-2/5">
												<div className="flex justify-center md:justify-start">
													<span className="shrink-0">
														<img
															src={`/assets/img/${item.logo}.jpeg`}
															className="h-auto w-12 grayscale-0"
															alt="company logo"
														/>
													</span>
													<div className="relative ml-3 hidden w-full md:block">
														<span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
													</div>
												</div>
											</div>
											<div className="md:w-3/5">
												<div className="relative flex md:pl-18">
													<span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block z-10 "></span>

													<div className="mt-1 flex">
														<i className="bx bxs-right-arrow hidden text-primary-main md:block"></i>
														<div className="group md:-mt-1 md:pl-8">
															<span className="block font-body font-bold text-grey-40">
																{item.from} - {item.to}
															</span>
															<span className="block cursor-pointer hover:scale-y-150 transition-all duration-200 pt-2 font-header text-xl font-bold uppercase text-primary-main">
																{item.title}.
															</span>
															<div className="pt-2 group">
																<span className="block truncate whitespace-normal opacity-100 font-body text-black">
																	{item.desc}
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<div
							className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
							style={{
								backgroundImage: "url(/assets/img/experience-wave.svg)",
							}}
							id="statistics"
						>
							<div className="container">
								<div className="mx-auto w-5/6 bg-white box-shadow py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
									<div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
										{expe.map(item => {
											return (
												<div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
													<div>
														<img
															src={`/assets/img/icon-${item.icon}.svg`}
															className="mx-auto h-12 w-auto md:h-20"
															alt="icon project"
														/>
													</div>
													<div className="pt-5 md:pl-5 md:pt-0">
														<h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
															{item.value}
														</h1>
														<h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
															{item.title}
														</h4>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-grey-50" id="blog">
						<div className="container py-16 md:py-20">
							<h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
								I also like to write
							</h2>
							<h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
								Check out my latest posts!
							</h4>
							<a
								href="/blogs"
								className="pt-3 flex justify-center text-center w-full text-primary-main text-base font-medium uppercase cursor-pointer hover:scale-125 transition-all duration-200 sm:text-base lg:text-xl"
							>
								View all blogs
							</a>
							<div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
								{blogs.map((item) => {
									return (
										<Link
											key={item.slug.current}
											href={"/blogs/" + item.slug.current}
											className="shadow"
										>
											<div>
												<div
													style={{
														backgroundImage: `url(${builder
															.image(item.blogimage)
															.width(2800)
															.url()})`,
													}}
													className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
												>
													<span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
													<span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">
														Read More
													</span>
												</div>
												<div className="bg-white py-6 px-5 xl:py-8">
													<span className="block font-body text-lg font-semibold text-black">
														{item.title}
													</span>
													<span className="block truncate pt-2 font-body text-grey-20">
														{item.metadesc}
													</span>
												</div>
											</div>
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<Contact />
				<Footer />
			</>
		</>
	);
}

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: "9w7gf952",
		dataset: "production",
		useCdn: false,
	});

	const query = `*[_type == "blog"][0...3]`;
	const blogs = await client.fetch(query);

	const portquery = `*[_type == 'portfolio'][0...4]`;
	const port = await client.fetch(portquery);

	const skillquery = `*[_type == 'skills']`;
	const skills = await client.fetch(skillquery);

	const workquery = `*[_type == 'work'][0...3]`;
	const work = await client.fetch(workquery);

	const expequery = `*[_type == 'experience']`
	const expe = await client.fetch(expequery);

	// console.log(expe);

	return {
		props: {
			blogs,
			port,
			skills,
			work,
			expe
		},
	};
}
