import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Title = ({ title, subtitle }) => {
	return (
		<div className="title-component">
			<motion.h4
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="relative text-xl font-normal leading-normal text-white before:block before:content-[''] before:w-14 before:h-[1px] before:bg-white before:absolute before:left-[-70px] before:top-1/2 before:-translate-y-1/2">
				{subtitle}
			</motion.h4>
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				className="text-2xl md:text-4xl mdl:text-4xl lg:text-4xl lgl:text-4xl xl:text-4xl xll:text-4xl xlll:text-4xl xllll:text-5xl font-semibold leading-16 tracking-wider text-white">
				{title}
			</motion.h2>
		</div>
	);
};

export default Title;
