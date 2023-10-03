import { createBrowserRouter } from "react-router-dom";

import Heroslide from "../HeroSlide/Heroslide";
import Sitegenerator from "../Sitegenerator/Sitegenerator";
import Features from "../Features/Features";
import Marketplace from "../Marketplace/Marketplace";
import Videodemo from "../Videodemo/Videodemo";
import Pricing from "../Pricing/Pricing";
import Faqs from "../Faqs/Faqs";
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Heroslide />,
			},
			{
				path: "/sitegenerator",
				element: <Sitegenerator />,
			},
			{
				path: "/features",
				element: <Features />,
			},
			{
				path: "/marketplace",
				element: <Marketplace />,
			},
			{
				path: "/videodemo",
				element: <Videodemo />,
			},
			{
				path: "/Pricing",
				element: <Pricing />,
			},
			{
				path: "/faqs",
				element: <Faqs />,
			},
			{
				path: "/footer",
				element: <Footer />,
			},
		],
	},
]);
export default router;