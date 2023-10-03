import { motion } from "framer-motion";
import "./Button.scss";
// eslint-disable-next-line react/prop-types
export const Buttonv1 = ({ children, onClick }) => {
	return (
		<button
			className={`text-white px-4 py-2 custom-button-v1 relative z-50 cursor-pointer`}
			onClick={onClick}>
			{children}
		</button>
	);
};

// eslint-disable-next-line react/prop-types
export const Buttonv2 = ({ children, onClick }) => {
	return (
		<button
			className={`text-white px-4 py-2 custom-button-v2`}
			onClick={onClick}>
			{children}
		</button>
	);
};

// eslint-disable-next-line react/prop-types
export const Buttonv3 = ({ children, onClick }) => {
	return (
		<motion.button
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			onClick={onClick}
			className="flex align-middle text-white cust-btn  mt-10  bg-gradient-to-r from-pink-500 via-transparent to-blue-500">
			{children}
		</motion.button>
	);
};
