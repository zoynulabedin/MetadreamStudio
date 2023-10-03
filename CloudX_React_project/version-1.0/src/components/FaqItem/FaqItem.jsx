import  { useState } from "react";
import "./FaqItem.scss";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const FaqItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className=" rounded-md shadow-md my-2 faq-item">
			<div
				className="flex justify-between items-center p-4 cursor-pointer"
				onClick={toggleOpen}>
				<h3 className="text-lg font-semibold text-white">{question}</h3>
				<div
					className={`transition-transform transform ${
						isOpen ? "rotate-0" : "rotate-0"
					}`}>
					{isOpen ? (
						<AiOutlineMinusCircle className="w-6 h-6 text-white" />
					) : (
						<AiOutlinePlusCircle className="w-6 h-6 text-white" />
					)}
				</div>
			</div>
			{isOpen && <div className="p-4 faq-des text-white">{answer}</div>}
		</div>
	);
};

export default FaqItem;
