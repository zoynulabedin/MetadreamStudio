import "./Flipcardback.scss";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Flipcarback = ({ icon, title, text }) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="flipcardback-wrapper pointer-events-auto">
				<div className="flex justify-center gap-1 title__wrapper">
					<img
						style={{ width: "70x" }}
						src={icon}
						alt="Button Icon"
						className="button-icon"
					/>
					<h3 className="flip__title">{title}</h3>
				</div>
				<p className="flip__back__text">{text}</p>
			</motion.div>
		</>
	);
};

export default Flipcarback;
