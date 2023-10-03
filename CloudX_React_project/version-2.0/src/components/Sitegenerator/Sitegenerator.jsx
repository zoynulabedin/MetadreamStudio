import cityPng from "./city.png";
import StatePng from "./state.png";
import affiliatePng from "./affiliate.png";
import nationalPng from "./national.png";
import directoryPng from "./directory.png";
import newsSite from "./news.png";
import {motion} from "framer-motion";
import "./Sitegenerator.scss";
import Module from "../Module/Module";
import leftShpe from "./left-shpe.png";
import rightShape from "./rights-shape.png";
const Sitegenerator = () => {
	
return (
	<motion.div
		initial={{ y: 100, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
		className="sitegenerator-wrapper bg-slate-900  pt-36 pb-48 relative z-10">
      <div className="absolute top-0 left-0 -z-10">
        <img src={leftShpe}  alt="" />
      </div>
		<div className="container text-center">
		<p className=" [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-[32px]   xllll:text-[60px] xlll:text-[55px] xll:text-[50px] xl:text-[45px] lgl:text-[45px] lg:text-[45px] tracking-[-0.60px] leading-[45px]">
        Site Creation Modules To Fit Your Goals
      </p>
		</div>
		<div className="container mt-10">	
		<div className="block xllll:flex xlll:flex xll:flex xl:flex lgl:flex lg:flex mdl:flex ">
      {/* Left Column (8/12) */}
      <div className="w-full xllll:w-7/12 p-4">
       <Module icon={cityPng} title="City Sites " desc="City sites feature top 12 directory listings that includes your google business profile embed and link."/>
      </div>

      {/* Right Column (4/12) */}
      <div className=" w-full xllll:w-5/12 p-4">
	  <Module icon={StatePng} title="State Sites" desc="State sites feature 100 top city pages with a top 12 directory listings per city. "/>
      </div>
    </div>

	<div className="block xllll:flex xlll:flex xll:flex xl:flex lgl:flex lg:flex mdl:flex ">
      {/* Left Column (8/12) */}
      <div className="w-full xllll:w-5/12 p-4">
       <Module icon={affiliatePng} title="Affiliate Sites" desc="Create high converting affiliate product review sites that link to your affiliate products"/>
      </div>

      {/* Right Column (4/12) */}
      <div className="w-full xllll:w-7/12 p-4">
	  <Module icon={nationalPng} title="National Sites" desc="Mass Page Website that features a state page for each state and top 100 cities per state. 5,000 page website"/>
      </div>
    </div>


	<div className="block xllll:flex xlll:flex xll:flex xl:flex lgl:flex lg:flex mdl:flex ">
      {/* Left Column (8/12) */}
      <div className="w-full xllll:w-7/12 p-4">
       <Module icon={directoryPng} title="Directory Site" desc="Create a mass directory site for any category and sell sponsored listings"/>
      </div>

      {/* Right Column (4/12) */}
      <div className="w-full xllll:w-5/12 p-4">
	  <Module icon={newsSite} title="News Sites" desc="Create News websites and add to google news index. "/>
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <img src={rightShape}  alt="" />
      </div>
    </div>
		</div>
	</motion.div>
);
}

export default Sitegenerator