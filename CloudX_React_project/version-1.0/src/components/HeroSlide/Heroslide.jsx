import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Buttonv3 } from "../Button/Button";
import "./Heroslide.scss";
import leftPng from "./left-shape.png";
import loopPng from "./loop.png";
import rightPng from "./right-shape.png";
const Heroslide = () => {
	

	const handleDemoClick = () => {
		const link =
				"https://calendly.com/d/24r-x72-gvz/cloudx-ai-product-demo-call?month=2023-08";

			// Open the link in a new tab
			window.open(link, "_blank");
	}
	// eslint-disable-next-line no-unused-vars
	const handleScrolldown = (handleScrolldown) => {};
  return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="heroslide-wrapper bg-slate-900 w-screen h-screen overflow-auto xllll:overflow-hidden pt-40  md:pt-36 mdl:pt-36 lg:pt-36 lgl:pt-36 xl:pt-36 xll:pt-36 xllll:pt-36 ">
			<div className="container">
				<div className="left-png absolute -z-10 left-0 bottom-0">
					<img src={leftPng} alt="" />
				</div>
				<div className="right-png absolute -z-10 right-0 -top-40">
					<img src={rightPng} alt="" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mt-16 mdl:mt-16 lg:mt-16 lgl:mt-16 xl:mt-16">
					<div className="flex items-center">
						<div className="slide-content">
							<motion.h1
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.7 }}>
								Generate <br />
								<span className="gradient-hero-text">Authority SEO Cloud</span>
								Websites
							</motion.h1>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8 }}
								className="text-white60  text-2xl text-slightly-dark">
								Tired of building cloud sites that cant convert? Now with the
								power of AI, CloudX AI Generates Money Site Quality Assets on
								demand for Local SEO, National SEO and E-commerce.
							</motion.p>

							<Buttonv3 onClick={handleDemoClick}>
								Book Demo
								<HiOutlineArrowRight />
							</Buttonv3>
						</div>
					</div>
					<div className="flex space-x-4 mt-10 pb-16 ">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="loop-img">
							<img
								style={{ maxWidth: "100%" }}
								id="loopPng"
								src={loopPng}
								alt=""
							/>
						</motion.div>
					</div>
				</div>
			</div>
			{/* <div className="container ">
				<div
					className={`fixed inset-0 flex justify-center z-50 items-center  ${
						showIcon ? "opacity-100" : "opacity-0"
					} transition-opacity duration-300`}>
					<div className="w-12 h-12 bg-transparent rounded-full flex justify-center items-center animate-bounce absolute bottom-5">
						<Link
							to="/sitegenerator"
							className="z-50 relative"
							onClick={handleScrolldown}>
							<BsMouse className="text-white text-5xl" />
						</Link>
					</div>
				</div>
			</div> */}
		</motion.div>
	);
}

export default Heroslide