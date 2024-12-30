import { Link } from "react-router-dom";
import { Input } from "../ui/input";

const navs = [
	{ title: "Home", icon: "/navs/home.svg", to: "/home" },
	{ title: "Search", icon: "/navs/search.svg", to: "/search" },
	{ title: "Wishlist", icon: "/navs/wish.svg", to: "/wishlist" },
	{ title: "Cart", icon: "/navs/cart.svg", to: "/cart" },
	{ title: "Account", icon: "/navs/acc.svg", to: "/account" },
];

export const MobileNav = () => {
	return (
		<header className="container space-y-2 p-2">
			{/* TOP NAV */}
			<section className="flex items-center justify-between">
				<div className="flex flex-col gap-1">
					<p className="text-[10px] font-normal text-gray-300">
						Delivery address
					</p>
					<p className="text-xs font-medium text-gray-900">
						Salatiga City, Central Java
					</p>
				</div>
				<div className="flex items-center gap-4">
					<img
						src="/headers/wishlist.svg"
						alt="Wishlist icon"
						width={24}
						height={24}
					/>
					<img
						src="/headers/cart.svg"
						alt="Cart icon "
						width={24}
						height={24}
					/>
				</div>
			</section>
			<section className="flex">
				<Input className="h-8 text-xs" placeholder="Search for items..." />
			</section>
			{/* BOTTOM NAV */}
			<section className="fixed bottom-0 left-0 right-0 z-0 border p-2">
				<div className="flex items-center justify-between">
					{navs.map((nav, idx) => {
						return (
							<Link
								key={idx}
								to={nav.to}
								className="flex flex-col items-center"
							>
								<img src={nav.icon} className="h-5 w-5" alt="Icon" />
								<p className="text-[9px] font-medium">{nav.title}</p>
							</Link>
						);
					})}
				</div>
			</section>
		</header>
	);
};
