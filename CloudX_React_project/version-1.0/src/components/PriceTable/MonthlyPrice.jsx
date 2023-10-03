
import "../../App.css";
import checkSvg from "../../assets/check-circle 4.svg";
import { motion } from "framer-motion";
import "./MonthlyPrice.scss";

// eslint-disable-next-line react/prop-types
const MonthlyPrice = ({ detailList }) => {

  return (
		<>
			<div className="w-full">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="max-w-full h-[475px] bg-[#ffffff1a] border border-gray-700 mt-5">
					<div className="p-0">
						<h2 className="text-xl text-[#ffffff99] p-4 package-title font-semibold text-center">
							Agency Level
						</h2>
						<hr className="bg-[#1f09091a] border border-gray-700" />
						<p className="mb-1.5 text-[#ffffffcc] text-base font-normal leading-6">
							<div className="flex justify-center items-center mt-10">
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
					<button className="btn_gen_addClas text-white rounded-lg px-4 py-2 w-full">
						Subscribe now
					</button>
				</div>
			</div>
		</>
	);
};

export default MonthlyPrice;
