import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import SocialIcon from "../SocialIcon/SocialIcon";
import "./Footer.scss";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
const Products = [
  { title: "HR Cloud", link: "/" },
  { title: "Finance Cloud", link: "/" },
  { title: "Procurement Cloud", link: "/" },
  { title: "First Capital", link: "/" },
];

const Company = [
  { title: "About Us", link: "/" },
  { title: "Careers", link: "/" },
  { title: "Press", link: "/" },
  { title: "Partners", link: "/" },
];

const Resources = [
  { title: "Success Stories", link: "/" },
  { title: "Whitepapers", link: "/" },
  { title: "Webinars", link: "/" },
  { title: "Documentation", link: "/" },
];

const QuickLinks = [
  { title: "Terms of Use", link: "/terms" },
  { title: "Privacy Policy", link: "/privacy" },
  { title: "Contact Support", link: "/contact" },
  { title: "FAQs", link: "/faqs" },
];

const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="bottom"
        className="footer__wrapper relative w-full  z-10  pb-10"
      >
        {/* grid 4 column using tailwindcss */}

        <div className="container  grid grid-cols-2 md:grid md:grid-cols-4  mt-16">
          {/* widget item */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="footer__col text-left"
          >
            <div className="widget-item">
              <h4 className="widget-title">Company</h4>
              <MenuItem widgetItems={Company} />
            </div>
          </motion.div>
          {/* widget item end */}
          {/* widget item */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="footer__col text-left"
          >
            <div className="widget-item">
              <h4 className="widget-title">Resources</h4>
              <MenuItem widgetItems={Resources} />
            </div>
          </motion.div>
          {/* widget item end */}
          {/* widget item */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="footer__col text-left"
          >
            <div className="widget-item">
              <h4 className="widget-title">Quick links</h4>
              <MenuItem widgetItems={QuickLinks} />
            </div>
          </motion.div>
          {/* widget item end */}
          {/* widget item */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1 }}
            className="footer__col text-left"
          >
            <div className="widget-item">
              <h4 className="widget-title">Products</h4>
              <MenuItem widgetItems={Products} />
            </div>
          </motion.div>
          {/* widget item end */}
        </div>
        {/* grid 4 column using tailwindcss end */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="container flex justify-between gap-10 mt-20"
        >
          <div className="footer__col text-right footer__copywrite">
            <div className="footer-logo">
              <Link>
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="footer__col text-right">
            <div className="flex space-x-4">
              <SocialIcon type="facebook" url="https://www.facebook.com/" />
              <SocialIcon type="twitter" url="https://twitter.com/" />
              <SocialIcon type="telegram" url="https://telegram.org/" />
              <SocialIcon type="linkedin" url="https://www.linkedin.com/" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Footer;
