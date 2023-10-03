import {DefaultPlayer as Video} from "react-html5video";
import "react-html5video/dist/styles.css";
import {motion} from "framer-motion";
// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ videoUrl, posterImage, playIcon }) => {


	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7 }}
			className="player-wrapper">
			<Video
				loop
				muted
				poster={posterImage}
				controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}>
				<source src={videoUrl} type="video/mp4" />
			</Video>
		</motion.div>
	);
};

export default VideoPlayer;


