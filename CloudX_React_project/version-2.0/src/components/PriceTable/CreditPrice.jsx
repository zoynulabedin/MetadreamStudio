
import "../../App.css";

import "./CreditPrice.scss";
import checkSvg from "../../assets/check-circle 4.svg";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const CreditPrice = ({ detailList }) => {



  return (
		<>
			<div className="w-full">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.9 }}
					className="max-w-full h-[475px] bg-[#ffffff1a] mt-5">
					<div className="p-0">
						<h2 className="text-xl text-[#ffffff99] p-4 package-title font-semibold text-center">
							One Time Credits
						</h2>
						<hr className="bg-[#ffffff1a]" />
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

				<div className="mt-8">
					<div className="grid grid-cols-2 gap-3 justify-between">
						<div>
							<input
								id="credit_number"
								className="bg-neutral-900 p-2 border w-full border-neutral-800 rounded-md"
								placeholder="QTY: 100 Credits"
							/>
						</div>
						<div>
							<button
								type="submit"
								className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg px-4 py-2 w-full">
								Subscribe now
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreditPrice;
