import { Button } from "../ui/button";

export const Banner = () => {
	return (
		<article className="container mt-3 h-40 w-full rounded-none bg-white shadow-sm border border-blue-100">
			<div className="grid h-full grid-cols-2 items-center gap-1">
				<img src="/banners/bnr.png" alt="Banner" />
				<div className="space-y-1">
					<p className="text-xl font-semibold text-gray-800">
						Fresh & Healthy Organic Food
					</p>
					<p className="text-[10px] text-gray-800">
						Free shipping on all your order. we deliver, you enjoy
					</p>
					<Button className="h-6 w-full text-[9px] text-white bg-blue-600">
						Shop now
					</Button>
				</div>
			</div>
		</article>
	);
};
