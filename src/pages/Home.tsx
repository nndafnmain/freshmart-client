import { Banner } from "@/components/body/Banner";
import { Category } from "@/components/body/Category";
import { MobileNav } from "@/components/headers/MobileNav";

export default function Home() {
	return (
		<main>
			<div className="block md:hidden">
				<MobileNav />
			</div>
			<Banner />
			<Category />
		</main>
	);
}
