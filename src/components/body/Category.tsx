import { Link } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";

// !TODO: FIX THE 'TO' ROUTING
const categories = [
	{
		img: "/categories/fruits.png",
		title: "Fruits",
		to: "/",
	},
	{
		img: "/categories/veggies.png",
		title: "Vegetables ",
		to: "/",
	},
	{
		img: "/categories/mnf.png",
		title: "Meat & Fish",
		to: "/",
	},
	{
		img: "/categories/snacks.png",
		title: "Snacks",
		to: "/",
	},
	{
		img: "/categories/drinks.png",
		title: "Beverages",
		to: "/",
	},
	{
		img: "/categories/bnh.png",
		title: "Beauty & Health",
		to: "/",
	},
	{
		img: "/categories/bnb.png",
		title: "Bread & Bakery",
		to: "/",
	},
	{
		img: "/categories/cooking.png",
		title: "Cooking",
		to: "/",
	},
];

export const Category = () => {
	return (
		<main className="container mt-5 space-y-2">
			<p className="text-lg">Shop by category</p>
			<div className="grid grid-cols-4 gap-y-5">
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
