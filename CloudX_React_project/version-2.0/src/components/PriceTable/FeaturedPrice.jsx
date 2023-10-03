
import { motion } from "framer-motion";
import "../../App.css";
import checkSvg from "../../assets/check-circle 4.svg";
import "./FeaturesPrice.scss";

const FeaturedPrice = ({ detailList }) => {


  return (
		<>
			<div className="w-full">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.7 }}
					className="max-w-full h-[475px] bg-transparent shadow-none  border border-gray-100 border-opacity-20 mt-5">
					<div className="p-0">
						<h2 className="text-xl text-[#ffffff] p-4 text-center">
							Solopreneur - 500 Credits
						</h2>
						<hr className="bg-[#ffffff30] border-gray-700 border-opacity-20" />
						<p className="mb-1.5 text-[#ffffffcc] text-base font-normal leading-6">
							<div className="flex justify-center items-center mt-10 pb-20">
								<div>
									{detailList.map((item, index) => (
										<div key={index} className="flex mt-5">
											<img
												src={checkSvg}
												style={{ width: "24px", height: "24px" }}
											/>
											<p className="ml-4">{item}</p>
										</div>
									))}
								</div>
							</div>
						</p>
					</div>
				</motion.div>

				<div className="mt-8 text-center">
					<button className="featured_btn_gen w-full text-white rounded-lg px-4 py-2">
						Subscribe now
					</button>
				</div>
			</div>
		</>
	);
};

export default FeaturedPrice;
