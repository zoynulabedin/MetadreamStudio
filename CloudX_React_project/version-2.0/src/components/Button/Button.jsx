import { motion } from "framer-motion";
import "./Button.scss";

// eslint-disable-next-line react/prop-types
export const Buttonv1 = ({ children, onClick }) => {
  return (
    <button
      className={`text-white px-4 py-2 custom-button-v1 relative z-50 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// eslint-disable-next-line react/prop-types
export const Buttonv2 = ({ children, onClick }) => {
  return (
    <button className={`px-4 py-2 custom-button-v2`} onClick={onClick}>
      {children}
    </button>
  );
};

// eslint-disable-next-line react/prop-types
export const Buttonv3 = ({ children, onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={onClick}
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        gap: "10px",
      }}
      className="flex align-baseline text-white  mt-10 z-20 bg-gradient-to-r from-fuchsia-500 to-blue-500 p-4"
    >
      {children}
    </motion.button>
  );
};

export const Buttonv4 = ({ children, onClick }) => {
  return (
    <button
      className={`flex justify-center text-center mx-auto text-white px-4 py-2 custom-button-v4 relative z-50 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
