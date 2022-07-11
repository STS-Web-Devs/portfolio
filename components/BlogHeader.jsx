import Link from "next/link";
import HamBurger, { Links } from "../components/HamBurger";

function Header() {
	return (
		<div className="sm:w-full z-50 top-0 w-[100%] fixed overflow-x-hidden py-3 bg-gradient-to-r">
			<div className="container flex items-center justify-around">
				<div>
					<a
						href="/"
						className="flex items-center space-x-2 text-yellow-500 font-semibold"
					>
						<h1 className="font-semibold flex items-center text-3xl text-white">
							 PROKXIMUS
						</h1>
					</a>
				</div>

				<div className="max-w-full h-8 lg:h-8 flex justify-between items-center mb-4 text-white rounded-md ">
					<div className="flex lg:hidden items-center mt-4 ">
						<HamBurger />
					</div>
					<div className="hidden lg:flex">
						<Links />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
