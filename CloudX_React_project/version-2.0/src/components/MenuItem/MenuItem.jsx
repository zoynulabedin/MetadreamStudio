
import { Link } from "react-router-dom";
import "./MenuItem.scss";
// eslint-disable-next-line react/prop-types
const MenuItem = ({ widgetItems }) => {
	return (
		<ul className="widget-list">
			{widgetItems.map((widget, index) => (
				<li className="widget-list__item" key={index}>
					<Link className="widget-link text-white text-xs16" to={widget.link}>
						{widget.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default MenuItem;
