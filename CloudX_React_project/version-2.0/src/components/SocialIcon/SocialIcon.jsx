
import { FaFacebook, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa";
import "./SocialIcon.scss";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SocialIcon = ({ type, url }) => {
	let IconComponent;

	switch (type) {
		case "facebook":
			IconComponent = FaFacebook;
			break;
		case "twitter":
			IconComponent = FaTwitter;
			break;
		case "telegram":
			IconComponent = FaTelegram;
			break;
		case "linkedin":
			IconComponent = FaLinkedin;
			break;
		default:
			return null;
	}

	return (
		<Link
			to={url}
			target="_blank"
			rel="noopener noreferrer"
			className="text-white text-base20">
			<IconComponent className="w-6 h-6" />
		</Link>
	);
};

export default SocialIcon;
