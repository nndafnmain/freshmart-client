import { Banner } from "@/components/body/Banner";
import { Category } from "@/components/body/Category";
import { MobileNav } from "@/components/headers/MobileNav";
import { ProductCard } from "@/components/products/ProductCard";
import { Products } from "@/components/products/Products";

export default function Home() {
	return (
		<main>
			<div className="block md:hidden">
				<MobileNav />
			</div>
			<Banner />
			<div className="block md:hidden">
				<Category />
			</div>
			<Products />
		</main>
	);
}
