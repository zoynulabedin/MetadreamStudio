import ReactFlipCard from "reactjs-flip-card";
import affPng from "../../assets/affiliate.png";
import cityPng from "../../assets/city.png";
import nationalPng from "../../assets/national.png";
import directoryPNG from "../../assets/directory.png";
import statePng from "../../assets/state.png";
import Flipcarback from "../Flipcardback/Flipcardback";
import Flipcardfront from "../Flipcardfront/Flipcardfront";
import Title from "../Title/Title";
import {motion} from "framer-motion";
import "./Sitegenerator.scss";
import rpng from "./r.png";
import spng from "./s.png";
import rs from "./rs.png";
import sr from "./sr.png";
const Sitegenerator = () => {
	
return (
	<motion.div
		initial={{ y: 100, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
		className="sitegenerator-wrapper bg-slate-900 w-screen h-screen overflow-auto xllll:overflow-hidden pt-36 xll:pt-36 xll:pb-28 xlll:pt-48 xlll:pb-48 xllll:pt-56 xllll:pb-56  relative z-10">
		<div className="container">
			<Title
				title="Adding Diversity To Site Creation"
				subtitle="Site Generator"
			/>
		</div>
		<div className="container mt-10">
			{/* 3 grid item */}
			<div className="grid grid-cols-1 gap-10 justify-center md:justify-center md:align-middle md:text-center  mdl:grid-cols-2 lg:grid-cols-2 lgl:grid-cols-2 xl:grid-cols-2 xll:grid-cols-2 xlll:grid-cols-3 xllll:grid-cols-3 md:gap-20 ">
				<div className="grid-item z-40 mb-5 mdl:mb-8 lg:mb-10 lgl:mb-24 xl:mb-24 xll:mb-24 xlll:mb-24 xllll:mb-24">
					<ReactFlipCard 
						frontComponent={<Flipcardfront icon={cityPng} text="City Sites" />}
						backComponent={
							<Flipcarback
								icon={cityPng}
								title="City Sites"
								text="City sites feature top 12 listings that includes your google business profile embed and link."
							/>
						}
					/>
				</div>
				<div className="grid-item z-40 mb-5 mdl:mb-8 lg:mb-10 lgl:mb-24 xl:mb-24 xll:mb-24 xlll:mb-24 xllll:mb-24">
					<ReactFlipCard
						frontComponent={
							<Flipcardfront icon={statePng} text="State Sites" />
						}
						backComponent={
							<Flipcarback
								icon={cityPng}
								title="State Sites"
								text="State sites feature 100 top city pages with a top 12 listings per city. "
							/>
						}
					/>
				</div>
				<div className="grid-item z-40 mb-5 mdl:mb-8 lg:mb-10 lgl:mb-24 xl:mb-24 xll:mb-24 xlll:mb-24 xllll:mb-24">
					<ReactFlipCard
						frontComponent={
							<Flipcardfront icon={nationalPng} text="National Sites" />
						}
						backComponent={
							<Flipcarback
								icon={nationalPng}
								title="National Sites"
								text="Mass Page Website that features a state page for each state and top 100 cities per state. 5,000 page website"
							/>
						}
					/>
				</div>
				<div className="grid-item z-40 mb-5 mdl:mb-8 lg:mb-10 lgl:mb-24 xl:mb-24 xll:mb-24 xlll:mb-24 xllll:mb-24">
					<ReactFlipCard
						frontComponent={
							<Flipcardfront icon={affPng} text="Affiliate Sites" />
						}
						backComponent={
							<Flipcarback
								icon={affPng}
								title="Affiliate Sites"
								text="Create high converting affiliate product review sites that link to your affiliate products"
							/>
						}
					/>
				</div>
				<div className="grid-item z-40 mb-5 mdl:mb-8 lg:mb-10 lgl:mb-24 xl:mb-24 xll:mb-24 xlll:mb-24 xllll:mb-24">
					<ReactFlipCard
						frontComponent={
							<Flipcardfront icon={directoryPNG} text="Directory Site" />
						}
						backComponent={
							<Flipcarback
								icon={directoryPNG}
								title="Directory Site"
								text="Create a mass directory site for any category and sell sponsored listings"
							/>
						}
					/>
				</div>
				<div className="grid-item z-40 mb-5 mdl:mb-8 lg:mb-10 lgl:mb-24 xl:mb-24 xll:mb-24 xlll:mb-24 xllll:mb-24">
					<ReactFlipCard
						frontComponent={<Flipcardfront icon={affPng} text="News Sites" />}
						backComponent={
							<Flipcarback
								icon={affPng}
								title="News Sites"
								text="Create News websites and add to google news index."
							/>
						}
					/>
				</div>
			</div>
			<div className="site-shape-left absolute left-0 bottom-0 -z-10">
				<img src={spng} alt="" />
			</div>
			<div className="site-shape-left absolute left-0 bottom-0 -z-10">
				<img src={sr} alt="" />
			</div>
			<div className="site-shape-right absolute right-0 top-0 -z-10">
				<img src={rpng} alt="" />
			</div>
			<div className="site-shape-right absolute right-0 bottom-0 -z-10">
				<img src={rs} alt="" />
			</div>
		</div>
	</motion.div>
);
}

export default Sitegenerator