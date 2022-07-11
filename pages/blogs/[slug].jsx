import { useRouter } from "next/router";
import Head from "next/head";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Header from "../../components/BlogHeader";
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import Footer from "../../components/Footer";

// import Blogs from "../blogs";

const Post = ({ blog, blogs, author }) =>
{
	const router = useRouter()
	const { slug } = router.query
	const client = createClient({
		projectId: "9w7gf952",
		dataset: "production",
		useCdn: false
	});
	const builder = imageUrlBuilder(client)

	return (
		<>
			<>
				<Head>
					<meta charset="utf-8" />

					<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

					<meta
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
						name="viewport"
					/>

					<title>{ slug }</title>

					<meta
						property="og:title"
						content="How to become a frontend developer | Atom Template"
					/>

					<meta property="og:locale" content="en_US" />

					<link rel="canonical" href="//post" />

					<meta property="og:url" content="//post" />

					<meta
						name="description"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>


					<meta name="theme-color" content="#5540af" />

					<meta property="og:site_name" content="Atom Template" />

					<meta property="og:image" content="//assets/img/social.jpg" />

					<meta name="twitter:card" content="summary_large_image" />

					<meta name="twitter:site" content="@tailwindmade" />

					<link
						crossorigin="crossorigin"
						href="https://fonts.gstatic.com"
						rel="preconnect"
					/>

					<link
						as="style"
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
						rel="preload"
					/>

					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>

					<link
						href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
						rel="stylesheet"
					/>

					<link
						crossorigin="anonymous"
						href="/assets/styles/main.min.css"
						media="screen"
						rel="stylesheet"
					/>

					<script
						defer
						src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
					></script>

					<script
						defer
						src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
					></script>

					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
					/>
				</Head>
				<Header />
				<br />
				<div className = "container w-full mx-auto text-xl md:text-2xl">
					<div className="container w-full py-6 md:py-10">
						<div className="mx-auto max-w-4xl">
							<div className="">
								<h1 className="pt-5 pb-10 font-body text-3xl font-semibold text-primary sm:text-xl md:text-2xl xl:text-4xl">
									{ blog.title }
								</h1>
								<div className="sm:block hidden ">
									{ author.map((item) =>
									{
										return (
											<div key={ item.id } className="shadow flex"><div>
												<div style={ { "backgroundImage": `url(${ builder.image(item.image).width(1000).url() || '/assets/img/post-01.png' })` } }
													className="group relative rounded-full bg-cover bg-center bg-no-repeat h-24 w-24">

												</div>
											</div>
												<div className="bg-white py-6 px-5 xl:py-8 items-center">
													<div className="block pt-2 font-body text-grey-20">{ ' Uploaded by ' }</div>
													<div className="block font-body text-lg font-semibold text-black my-auto">{ item.title }</div>
												</div>
											</div>
										)
									}) }
								</div>
							</div>
							{ blogs.map((item) =>
							{
								return (
									<div
										key={item.slug.current}
										href={"/blogs/" + item.slug.current}
										className="shadow w-full "
									>
										<div>
											<div
												style={{
													backgroundImage: `url(${
														builder.image(item.blogimage).width(1000).url() ||
														"/assets/img/post-01.png"
													})`,
												}}
												layout="fill"
												className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 hidden md:block"
											></div>
											<div className="bg-white py-6 px-5 xl:py-8">
												<span className="block font-body text-lg font-semibold text-black">
													{item.title}
												</span>
												{/* <span className="md:block pt-2 font-body text-grey-20 hidden">{ (item.metadesc).slice(0, 100) }...</span> */}
												<div className="home flex items-center">
													<div className="bg-white py-6  pt-2 font-body text-grey-20">
														<PortableText
															// Pass in block content straight from Sanity.io
															content={item.content}
															projectId="9w7gf952"
															dataset="production"
															// Optionally override marks, decorators, blocks, etc. in a flat
															// structure without doing any gymnastics
															serializers={{
																h1: (props) => (
																	<h1 style={{ color: "red" }} {...props} />
																),
																li: ({ children }) => (
																	<li className="special-list-item">
																		{children}
																	</li>
																),
															}}
														/>
													</div>
													<br />
												</div>
											</div>
										</div>
									</div>
								);
							}) }
						</div>
					</div>
				</div>
				<Footer />
			</>
		</>
	);
};

export default Post;

export const getServerSideProps = async (context) =>
{
	const { slug } = context.query;
	// console.log(slug);

	const client = createClient({
		projectId: "9w7gf952",
		dataset: "production",
		useCdn: false,
	});
	// All queries   
	const query = `*[_type == 'blog' && slug.current == '${ slug }'][0]`;
	const blog = await client.fetch(query);

	const Blogquery = `*[_type == "blog" && slug.current == '${slug}']`;
	const blogs = await client.fetch(Blogquery);

	const Authorquery = `*[_type == "author"]`;
	const author = await client.fetch(Authorquery);

	// //console.log(blogs)
	// //console.log(author)


	return {
		props: {
			blog, blogs, author
		},
	};
};
