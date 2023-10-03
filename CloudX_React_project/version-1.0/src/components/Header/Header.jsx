import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Buttonv1, Buttonv2 } from "../Button/Button";
import "./Header.scss";
const Header = () => {
	const signuphandleClick = () => {
		const link = "https://www.cloudx-ai.com/signin/";

			// Open the link in a new tab
			window.open(link, "_blank");
	};
	const loginHandleclick = () => {
		const link = "https://www.cloudx-ai.com/signin/";
			// Open the link in a new tab
			window.open(link, "_blank");
	}
	return (
		<motion.header
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className=" p-4 bg-transparent text-white header-wrapper absolute pt-16 ">
			<div className="container flex justify-between items-center gap-10">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="flex items-center">
					<Link to="/">
						<img
							style={{ width: "156px" }}
							src={logo}
							alt="Logo"
							className="w-10 h-10"
						/>
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					className="flex space-x-4">
					<Buttonv1 onClick={loginHandleclick}>Login</Buttonv1>
					<Buttonv2 onClick={signuphandleClick}>Sign Up</Buttonv2>
				</motion.div>
			</div>
		</motion.header>
	);
};

export default Header;
