import { Link } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";

// !TODO: FIX THE 'TO' ROUTING
const categories = [
	{
		img: "/categories/frt.svg",
		title: "Fruits",
		to: "/",
	},
	{
		img: "/categories/vgt.svg",
		title: "Vegetables ",
		to: "/",
	},
	{
		img: "/categories/meat.svg",
		title: "Meat",
		to: "/",
	},
	{
		img: "/categories/sncks.svg",
		title: "Snacks",
		to: "/",
	},
	{
		img: "/categories/fish.svg",
		title: "Fish",
		to: "/",
	},
	{
		img: "/categories/wnd.svg",
		title: "Water and Drinks",
		to: "/",
	},
	{
		img: "/categories/sncks.svg",
		title: "Snacks",
		to: "/",
	},
	{
		img: "/categories/wnd.svg",
		title: "Water and Drinks",
		to: "/",
	},
];

export const Category = () => {
	return (
		<main className="container mt-5">
			<p className="text-base mb-4 underline decoration-blue-600 decoration-2">
				Shop by category
			</p>
			<div className="grid grid-cols-4 gap-3 w-full">
				{categories.map((category, idx) => {
					return (
						<Link to={category.to} key={idx}>
							<CategoryCard img={category.img} title={category.title} />
						</Link>
					);
				})}
			</div>
		</main>
	);
};
