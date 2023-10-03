import React from "react";
import bg from "./bg.png";
import { motion } from "framer-motion";
import { Buttonv4 } from "../Button/Button";
import { BsArrowRight } from "react-icons/bs";
import leftPng from "./left.png";
import rightPng from "./right.png";
import "./FreeCloud.scss";
const FreeCloud = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="freeCloud-wrapper bg-black relative z-10  pt-16 "
    >
     
      <div className="container text-center">
        <div
          className="bg-wrapper text-cenet"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full">
            <h1 className=" text-white text-xxl40 lgl:text-xxxl80 font-SpaceGratestk">
              Try CloudX free today
            </h1>
            <p className=" text-white mb-10 font-Inter">
              Build your website in a few time and get access to the only cloudX
              <br />
              made for small businesses. Free for 90 days.
            </p>
            <Buttonv4>
              Book Now <BsArrowRight />
            </Buttonv4>
            
          </div>
        </div>
       
      </div>
    	<div className="absolute left-0 bottom-0 -z-10">
				<img className="w-96" src={leftPng} alt="" />
			</div>
      <div className="absolute right-0 bottom-0 -z-10">
				<img className="w-96" src={rightPng} alt="" />
			</div>
    </motion.div>
  );
};

export default FreeCloud;
