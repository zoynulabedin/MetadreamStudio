import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Buttonv1, Buttonv2 } from '../Button/Button';
import logo from "../../assets/logo.svg";
import "./MobileMenu.scss";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickMobile = () => {
    setMenuOpen(!menuOpen);
  };

    const signuphandleClick = () => {
		const link = "https://www.cloudx-ai.com/signin/";
			window.open(link, "_blank");
	};
	const loginHandleclick = () => {
		const link = "https://www.cloudx-ai.com/signin/";
			window.open(link, "_blank");
	}


  
  return (
    <motion.header
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" bg-transparent relative text-white header-wrapper-mobile "
    >
      <div className="flex align-middle justify-between items-center absolute w-full p-3">
        <div className="logo mt-5">
          {!menuOpen && <img src={logo} alt="" />}
        </div>
        <button onClick={handleClickMobile} className='close-btn mt-5'>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      </div>
      {menuOpen && (
        
         <div className="container  text-center mx-auto gap-10 pt-16">
        <motion.div style={{margin:"auto"}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Link to="/">
            <img
              style={{ width: "156px" }}
              src={logo}
              alt="Logo"
              className="w-10 h-10 block mx-auto mb-9"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="menu"
        >
          <ul className="block">
            <li className='mb-5'>
              <Link to="/">Home</Link>
            </li>
            <li className='mb-5'>
              <Link to="/features">Features</Link>
            </li>
            <li className='mb-5'>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className='mb-5'>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex space-x-4 justify-center mt-16 pb-16"
        >
          <Buttonv1 onClick={loginHandleclick}>Login</Buttonv1>
          <Buttonv2 onClick={signuphandleClick}>Sign Up</Buttonv2>
        </motion.div>
      </div>
       
      )}
      
    </motion.header>
  );
};

export default MobileMenu;
