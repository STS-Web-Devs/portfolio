import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
const HamburgerMenu = () => (
	<div className="relative p-2">
		<Menu
			customBurgerIcon={<HamburgerIcon />}
			width={"auto"}
			className="-left-0 top-12"
		>
			<Links />
		</Menu>
	</div>
);

const HamburgerIcon = () => (
	<div className="p-1/2">
		<svg
			className="w-8 h-8 text-gray-100"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="3"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	</div>
);

export const Links = () => (
	<div className="flex-col justify-around items-center mt-4 cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
		<Link href="/#about">
			<a className="font-bold py-2 px-4 hover:underline bg-transparent">About</a>
		</Link>
		<Link href="/#services">
			<a className="font-bold py-2 px-4 hover:underline bg-transparent">Services</a>
		</Link>
		<Link href="/#portfolio">
			<a className="font-bold py-2 px-4 hover:underline bg-transparent">Projects</a>
		</Link>
		<Link href="/#work">
			<a className="font-bold py-2 px-4 hover:underline bg-transparent">Work</a>
		</Link>
		<Link href="/#statistics">
			<a className="font-bold py-2 px-4 hover:underline bg-transparent">Statistics</a>
		</Link>
		<Link href="/#blog">
			<a className="font-bold py-2 px-4 hover:underline bg-transparent">Blog</a>
		</Link>
		<Link href="/#contact">
			<a className="font-bold py-2 px-4 hover:underline bg-transparent">Contact</a>
		</Link>
	</div>
);

export default HamburgerMenu;
