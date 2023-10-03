

import Header from "../Header/Header";

import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.scss";
const Layout = () => {
	const location = useLocation();

	return (
		<>
			<Header />
			<div className="bullet-pointers">
				<Link to="/"
					className={` ${location.pathname === "/" ? "active" : ""}`}>
					<span>Home</span>
				</Link>
				<Link to="/sitegenerator"
					className={`${
						location.pathname === "/sitegenerator" ? "active" : ""
					}`}>
					<span>Sitegenerator</span>
				</Link>
				<Link to="/features"
					className={`${location.pathname === "/features" ? "active" : ""}`}>
					<span>Features</span>
				</Link>
				<Link to="/marketplace"	
					className={`${location.pathname === "/marketplace" ? "active" : ""}`}>
					<span>Marketplace</span>
				</Link>

				<Link to="/videodemo"
					className={`${location.pathname === "/videodemo" ? "active" : ""}`}>
					<span >Video Demo</span>
				</Link>
				<Link to="/pricing"
					className={`${location.pathname === "/pricing" ? "active" : ""}`}>
					<span>Pricing</span>
				</Link>
				<Link to="/faqs"
					className={`${location.pathname === "/faqs" ? "active" : ""}`}>
					<span>Faqs</span>
				</Link>
				<Link to="/footer"
					className={`${location.pathname === "/footer" ? "active" : ""}`}>
					<span>Footer</span>
				</Link>
			</div>
			<Outlet />
		</>
	);
};

export default Layout;
