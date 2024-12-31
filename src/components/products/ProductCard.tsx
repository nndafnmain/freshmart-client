import { Button } from "../ui/button";
import { Card, CardDescription } from "../ui/card";

export const ProductCard = ({
	name,
	price,
}: { name: string; price: string }) => {
	return (
		<Card className="container w-[93%] h-[282px] mx-auto space-y-3 p-1 rounded-sm hover:shadow-lg transition">
			<div className="relative h-40 overflow-hidden w-full">
				<img
					src="/products/prd1.jpg"
					alt="Product Thumbnail"
					className="w-full object-cover h-full"
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</div>
			<CardDescription className="space-y-2 text-xs font-semibold">
				<p className="text-gray-900">{name}</p>
				<p className="text-blue-700">${price}</p>
			</CardDescription>
			<div className="w-full p-0">
				<Button className="w-full bg-blue-800 text-xs">Add to cart</Button>
			</div>
		</Card>
	);
};
