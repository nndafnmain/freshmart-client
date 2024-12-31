export const CategoryCard = ({
	img,
	title,
}: { img: string; title: string }) => {
	return (
		<article className="space-y-2">
			<section className="rounded-sm shadow-sm p-2 bg-white border border-blue-50">
				<img
					src={img}
					alt={title}
					className="max-w-full object-fill w-11 h-11 mx-auto"
				/>
			</section>
			<p className="text-[9px] font-normal text-center">{title}</p>
		</article>
	);
};
