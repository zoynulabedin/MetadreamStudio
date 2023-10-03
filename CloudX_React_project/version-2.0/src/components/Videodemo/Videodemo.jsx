import videoUrl from "../../assets/demo.mp4";
import playIcon from "../../assets/play.png";
import posterImage from "./poster.png";
import Title from "../Title/Title";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./Videodemo.scss";
import leftShape from "./left-shape.png";
import rightShp from "./right-shp.png";
import toprightShp from "./Ellipse 9.png";
import netPng from "./net.png"
import { motion } from "framer-motion";
const Videodemo = () => {
  return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="video-wrapper bg-slate-900 w-screen h-screen overflow-auto sm:fixed mdl:relative lg:pt-10 lg:pb-24 z-10">
			<div className="container">
				{/* 3 grid item */}
				<div className="grid grid-cols-1">
					{/* grid item */}
					<div className="grid-item mt-64  mdl:mt-32">
						<Title
							title="Check Out CloudX AI Generating a City Site"
							subtitle="Video Demo"
						/>
						<div className="container mt-12 min-h-screen">
							<div className="flex justify-left w-full mx-auto ">
								<VideoPlayer
									className="w-full"
									videoUrl={videoUrl}
									posterImage={posterImage}
									playIcon={playIcon}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute -left-96 bottom-0 -z-10">
				<img src={leftShape} alt="" />
			</div>
			<div className="absolute right-0 bottom-0 -z-10">
				<img src={rightShp} alt="" />
			</div>
			<div className="absolute right-0 top-0 -z-10">
				<img src={toprightShp} alt="" />
			</div>
			<div className="absolute left-24 top-24 -z-10">
				<img src={netPng} alt="" />
			</div>
		</motion.div>
	);
}

export default Videodemo