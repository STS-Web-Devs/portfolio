import Head from "next/head";
import "../styles/globals.css";
import "../styles/burger.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
        		<meta charSet="utf-8" />

        		<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        		<meta
          		content="width=device-width, initial-scale=1, shrink-to-fit=no"
          		name="viewport" />

        		<meta property="og:title" content="Homepage | Atom Template" />

        		<meta property="og:locale" content="en_US" />

        		<link
          		rel="canonical"
          		href="//" />
				

        		<meta
          		property="og:url"
          		content="//" />

        		<meta
          		name="description"
          		content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        		<meta name="theme-color" content="#5540af" />

        		<meta property="og:site_name" content="Atom Template" />

        		<meta property="og:image" content="//assets/img/social.jpg" />

        		<meta name="twitter:card" content="summary_large_image" />

        		<meta name="twitter:site" content="@tailwindmade" />

        		<link
          		crossOrigin="crossOrigin"
          		href="https://fonts.gstatic.com"
          		rel="preconnect" />

        		<link
          		as="style"
          		href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          		rel="preload" />

        		<link
          		href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          		rel="stylesheet" />

        		<link
          		href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          		rel="stylesheet" />

        		<link
          		crossOrigin="anonymous"
          		href="/assets/styles/main.min.css"
          		media="screen"
          		rel="stylesheet" />

        		<script
          		defer
          		src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        		></script>

        		<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
				<title>Syed Adeeb</title>
				<link rel="icon" href="/logo.png" />

      		</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
