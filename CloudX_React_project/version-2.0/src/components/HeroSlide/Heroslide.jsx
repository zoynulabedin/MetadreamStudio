import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Buttonv3 } from "../Button/Button";
import "./Heroslide.scss";

import bg from "./bg.png";
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
		<motion.div id="home"
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="heroslide-wrapper bg-slate-900 md:pt-36 mdl:pt-36 lg:pt-36 lgl:pt-36 xl:pt-36 xll:pt-36 xllll:pt-56 xllll:pb-56 " style={{backgroundImage: `url(${bg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
			<div className="container">
				<div className="flex">
					<div className="w-11/12">
						<div className="slide-content text-center md:text-left w-full pt-36 xllll:pt-20 xlll:pt-20 xl:pt-20">
							<motion.h1
							className="text-center md:text-left"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.7 }} >
								Generate
								<span className="color-hero-text md:text-left">SEO <span className="lg:block">Optimized Websites</span></span>
								Using AI
							</motion.h1>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8 }}
								className="text-white60 mt-10 text-center md:text-left  text-2xl font-Inter xllll:w-6/12 xlll:w-6/12 xll:w-6/12 xl:w-6/12">
								CloudX AI is Secret SEO Weapon that generates well designed Tier 1 Websites for Lead Gen, Client SEO, Affiliate Marketing and Bloggers using The Power of AI 
							</motion.p>

					
							<div className="w-[244px] h-[60px] mt-10 mx-auto md:float-left">
									<div onClick={handleDemoClick} className="h-[60px] rounded-[12px] [background:linear-gradient(180deg,rgb(212.5,188.1,28.33)_0%,rgb(18.65,110.17,248.63)_100%)] hover:[background:linear-gradient(45deg,rgb(212.5,188.1,28.33)_0%,rgb(18.65,110.17,248.63)_100%)] hover:cursor-pointer">
									<div className="relative w-[185px] h-[24px] top-[18px] left-[30px]">
										<HiOutlineArrowRight className="absolute w-[19px] h-[14px] top-[5px] left-[164px] text-white" />
										<div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
										Sign Up For Free
										</div>
									</div>
									</div>
								</div>

						</div>
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