
import MenuItem from "../MenuItem/MenuItem";
import SocialIcon from "../SocialIcon/SocialIcon";
import "./Footer.scss";
import leftPNg from "./left.png";
import rightPng from "./right.png";
import { motion } from "framer-motion";
const Products = [
	{ title: "HR Cloud", link: "/" },
	{ title: "Finance Cloud", link: "/" },
	{ title: "Procurement Cloud", link: "/" },
	{ title: "First Capital", link: "/" },
];

const Company = [
	{ title: "About Us", link: "/" },
	{ title: "Careers", link: "/" },
	{ title: "Press", link: "/" },
	{ title: "Partners", link: "/" },
];

const Resources = [
	{ title: "Success Stories", link: "/" },
	{ title: "Whitepapers", link: "/" },
	{ title: "Webinars", link: "/" },
	{ title: "Documentation", link: "/" },
];

const QuickLinks = [
	{ title: "Terms of Use", link: "/terms" },
	{ title: "Privacy Policy", link: "/privacy" },
	{ title: "Contact Support", link: "/contact" },
	{ title: "FAQs", link: "/faqs" },
];


const Footer = () => {
  return (
		<>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				id="bottom"
				className="footer__wrapper relative w-full h-screen overflow-auto z-10 pt-32 pb-10">
				{/* grid 4 column using tailwindcss */}

				<div className="container grid sml:text-center sml:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 lgl:grid-cols-4 xl:grid-cols-4 xll:grid-cols-4 xlll:grid-cols-4 xllll:grid-cols-4 gap-4 mt-16">
					{/* widget item */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="footer__col">
						<div className="widget-item">
							<h4 className="widget-title">Company</h4>
							<MenuItem widgetItems={Company} />
						</div>
					</motion.div>
					{/* widget item end */}
					{/* widget item */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7 }}
						className="footer__col">
						<div className="widget-item">
							<h4 className="widget-title">Resources</h4>
							<MenuItem widgetItems={Resources} />
						</div>
					</motion.div>
					{/* widget item end */}
					{/* widget item */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.9 }}
						className="footer__col">
						<div className="widget-item">
							<h4 className="widget-title">Quick links</h4>
							<MenuItem widgetItems={QuickLinks} />
						</div>
					</motion.div>
					{/* widget item end */}
					{/* widget item */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.1 }}
						className="footer__col">
						<div className="widget-item">
							<h4 className="widget-title">Products</h4>
							<MenuItem widgetItems={Products} />
						</div>
					</motion.div>
					{/* widget item end */}
				</div>
				{/* grid 4 column using tailwindcss end */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.7 }}
					className="container grid grid-cols-2 gap-10 mt-20">
					<div className="footer__col text-right footer__copywrite">
						<p className="text-white">
							copyright cloudx-ai.com. All rights reserved 2023.
						</p>
					</div>
					<div className="footer__col">
						<div className="flex space-x-4">
							<SocialIcon type="facebook" url="https://www.facebook.com/" />
							<SocialIcon type="twitter" url="https://twitter.com/" />
							<SocialIcon type="telegram" url="https://telegram.org/" />
							<SocialIcon type="linkedin" url="https://www.linkedin.com/" />
						</div>
					</div>
				</motion.div>
				<div className="absolute left-0 bottom-0">
					<img src={leftPNg} alt="" />
				</div>
				<div className="absolute right-0 bottom-0">
					<img src={rightPng} alt="" />
				</div>
			</motion.div>
		</>
	);
}

export default Footer