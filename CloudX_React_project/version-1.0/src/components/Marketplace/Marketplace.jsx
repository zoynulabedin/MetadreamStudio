import { motion } from "framer-motion";
import marketImg from "../../assets/iPad Pro Mockup 2.png";
import { Buttonv3 } from "../Button/Button";
import Title from "../Title/Title";
import "./Marketplace.scss";
import leftPng from './left.png';
import netPng from "./net.png";
import rightPng from './right.png';
const Marketplace = () => {

	const handleclick = () => {
		const link = "https://www.cloudx-ai.com/signin/";

		// Open the link in a new tab
		window.open(link, "_blank");
	}
  return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="market-wrapper bg-slate-900 w-screen h-screen overflow-auto xllll:overflow-hidden pt-28 xllll:pt-40  relative">
			<div className="container">
				<div className="left-png fixed left-0 bottom-0">
					<img src={leftPng} alt="" />
				</div>
				<div className="right-png fixed right-0 -top-0 -z-10">
					<img src={rightPng} alt="" />
				</div>
				<div className="absolute left-28 top-28 -z-10">
					<img src={netPng} alt="" />
				</div>
				{/* 3 grid item */}
				<div className="grid  xl:grid-cols-2 xll:grid-cols-2 xlll:grid-cols-2 xllll:grid-cols-2 gap-20 pt-16 relative z-50">
					{/* grid item */}
					<div className="grid-item ">
						<Title
							title="CloudX AI Built in Marketplace"
							subtitle="Marketplace"
						/>
						{/* numberic list */}
						<ul className="numeric-list text-white ">
							<motion.li
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
								className="mb-5 mt-5 text-xl">
								<span className="mr-5">1</span>List your Generated Sites for
								Sale once you optimize further
							</motion.li>
							<motion.li
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6 }}
								className="mb-5 mt-5">
								<span className="mr-5">2</span> Sell Links on the sites you
								generated using Cloud X List sites for sale that you generated
								outside the software
							</motion.li>
							<motion.li
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.7 }}
								className="mb-5 mt-5">
								<span className="mr-5">3</span>List sites for sale that you
								generated outside the software
							</motion.li>
							<motion.li
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8 }}
								className="mb-5 mt-5">
								<span className="mr-5">4</span>Offer SEO products and services
							</motion.li>
						</ul>
						<Buttonv3 onClick={handleclick}>Sign Up</Buttonv3>
					</div>
					<div className="grid-item -mt-10">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.9 }}
							className="market-img">
							<img src={marketImg} alt="" />
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Marketplace