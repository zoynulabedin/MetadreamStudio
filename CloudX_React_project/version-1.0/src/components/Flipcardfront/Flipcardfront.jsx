import { motion } from "framer-motion";
import "./Flipcardfront.scss";

// eslint-disable-next-line react/prop-types
const Flipcardfront = ({ icon, text, onClick }) => {
	return (
		<motion.button
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="custom-button pointer-events-auto "
			onClick={onClick}>
			<img
				style={{ width: "70x" }}
				src={icon}
				alt="Button Icon"
				className="button-icon"
			/>
			<span className="button-text md:text-xl30 lgl:text-xl30  xllll:text-xxl40">{text}</span>
		</motion.button>
	);
};

export default Flipcardfront;
