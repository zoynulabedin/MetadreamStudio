import Header from "../Header/Header";

import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.scss";
import Heroslide from "../HeroSlide/Heroslide";
import Sitegenerator from "../Sitegenerator/Sitegenerator";

import Footer from "../Footer/Footer";
import CloudProvider from "../CloudProvider/CloudProvider";
import FreeCloud from "../FreeCloud/FreeCloud";
import Testimonial from "../Testimonial/Testimonial";
import Cloudxaislider from "../CloudxaiSlider/Cloudxaislider";
const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Heroslide />
      <CloudProvider />
      <Sitegenerator />
      <Cloudxaislider/>
      <Testimonial />
      <FreeCloud />
      <Footer />
    </>
  );
};

export default Layout;
