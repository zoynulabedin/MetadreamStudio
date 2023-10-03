import CreditPrice from "../PriceTable/CreditPrice";
import FeaturedPrice from "../PriceTable/FeaturedPrice";
import MonthlyPrice from "../PriceTable/MonthlyPrice";
import Title from "../Title/Title";
import "./Pricing.scss";
import leftPng from "./left-shadow.png";
import rightPng from "./right-shadow.png";
import netPng from "./net.png";
import { motion } from "framer-motion";
const Pricing = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="price-wrapper bg-slate-900 w-screen h-screen overflow-auto  pt-48 pb-24 z-10"
    >
      <div className="container">
        {/* 3 grid item */}
        <div className="grid grid-cols-1 gap-20">
          {/* grid item */}
          <div className="grid-item">
            <Title title="Put the Power in your hands" subtitle="Pricing" />
          </div>
        </div>
      </div>
      <div className="container mt-10">
        {/* 3 grid item */}
        <div className="grid lg:grid-cols-2 lgl:grid-cols-2 xl:grid-cols-2 xll:grid-cols-3 xlll:grid-cols-3 xllll:grid-cols-3 gap-20">
          {/* price item */}
          <div className="grid-item monthly__package">
            <p className="Package__title">Monthly Package</p>
            <p className="package__price mt-2">
              <span>$499 </span>/ per month
            </p>
            <MonthlyPrice
              detailList={[
                "Unlimited City Sites",
                "Unlimited State Sites",
                "Unlimited National Sites",
                "Unlimited Affiliate Sites",
                "Priority Access to Software updates",
                "Access to 10+ Cloud Sites",
                "Open AI API",
                "Hand Designed UI UX Themes",
              ]}
            />
          </div>
          <div className="grid-item monthly__package_feature monthly__package">
            <p className="Package__feature">Purchase Credits</p>
            <p className="package__price_credit mt-2">1 Credit = $1.00</p>
            <CreditPrice
              detailList={[
                "City Site 50 Credits",
                "State Site 100 Credits",
                "National Sites  200 Credits",
                "Affiliate Product Sites 150 Credits",
                "Open AI API",
                "Hand Designed UI UX Themes",
                "Access to 10+ Cloud Sites",
              ]}
            />
          </div>
          <div className="grid-item monthly__package">
            <p className="Package__title">Monthly Package</p>
            <p className="package__price mt-2">
              <span>$199 </span>/ per month
            </p>
            <FeaturedPrice
              detailList={[
                "City Site 50 Credits",
                "State Site 100 Credits",
                "National Sites 200 Credits",
                "Affiliate Product Sites 150 Credits",
                "Open AI API",
                "Hand Designed UI UX Themes",
                "Access to 10+ Cloud Sites",
              ]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
