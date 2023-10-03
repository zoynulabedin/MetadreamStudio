import Title from "../Title/Title";
import "./Features.scss";
import AiPng from "../../assets/ai.png";

import { motion } from "framer-motion";
import Png2 from "./2.png";
import Png3 from "./3.png";
const Features = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="features-wrapper bg-slate-900 object-cover lg:bg-slate-900 w-screen xll:h-screen h-screen pt-48 relative z-10"
    >
      <div className="container">
        <Title title="Other Awesome Features" subtitle="Features" />
      </div>
      <div className="container  mt-16">
        {/* 3 grid item */}
        <div className="grid md:grid-cols-2 mdl:grid-cols-2  xl:grid-cols-2 xll:grid-cols-3 xlll:grid-cols-3 xllll:grid-cols-3 gap-20">
          {/* grid item */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid-item p-3"
          >
            <div className="features__wrapper">
              <img className="w-full" src={AiPng} alt="" />
              <h4 className="features__title mt-3 mb-3">AI Assisted Content</h4>
              <p className="features__desc">
                Connect your Open AI API to generate foundational content for
                all your sites.
              </p>
            </div>
          </motion.div>
          {/* grid item end*/}
          {/* grid item */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid-item p-3"
          >
            <div className="features__wrapper">
              <img className="w-full" src={Png2} alt="" />
              <h4 className="features__title mt-3 mb-3">
                Hand Designed UI UX Themes
              </h4>
              <p className="features__desc">
                In-House designer who will design high converting themes you can
                apply to your sites
              </p>
            </div>
          </motion.div>
          {/* grid item end*/}
          {/* grid item */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="grid-item p-3"
          >
            <div className="features__wrapper">
              <img className="w-full" src={Png3} alt="" />
              <h4 className="features__title mt-3 mb-3">
                HTML Friendly Editor
              </h4>
              <p className="features__desc">
                HTML friendly editor allows you to make changes to your cloud
                site and reupload.
              </p>
            </div>
          </motion.div>
          {/* grid item end*/}
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
