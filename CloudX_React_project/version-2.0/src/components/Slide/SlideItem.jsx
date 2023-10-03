
const SlideItem = ({ slide }) => {
	return (
		<div id={`slide-${slide.alt}`} className="h-screen w-screen flex-shrink-0">
			<img
				src={slide.image}
				alt={slide.alt}
				className="object-cover h-full w-full"
			/>
		</div>
	);
};

export default SlideItem;
