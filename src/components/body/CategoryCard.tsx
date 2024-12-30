export const CategoryCard = ({
	img,
	title,
}: { img: string; title: string }) => {
	return (
		<article>
			<section className="border shadow-md w-24 h-24 space-y-1 mx-auto">
				<img src={img} alt={title} className="max-w-full object-fill" />
				<p className="text-[9px] font-normal text-center">{title}</p>
			</section>
		</article>
	);
};
