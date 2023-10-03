import FaqItem from "../FaqItem/FaqItem";
import Title from "../Title/Title";
import "./Faqs.scss";
import leftPng from "./left-shape.png";
import rightPng from "./right-shadow.png";
import netPNG from "./net.png";
import { motion } from "framer-motion";
const Faqs = () => {
	const faqData = [
		{
			question: "Who's the ideal client for CloudX?",
			answer:
				"If you are an agency owner or a solo preneuer who does seo this software is perfect for you. You cna use This software to create money site sites as your tier ones or standalone ranking properties.",
		},
		{
			question: "Is there a limit to how many tasks or projects I can have?",
			answer:
				"If you are an agency owner or a solo preneuer who does seo this software is perfect for you. You cna use This software to create money site sites as your tier ones or standalone ranking properties.",
		},
		{
			question: "Is there a Refund Policy?",
			answer:
				"If you are an agency owner or a solo preneuer who does seo this software is perfect for you. You cna use This software to create money site sites as your tier ones or standalone ranking properties.",
		},
		{
			question: "Why wouldn't I just hire a full-time developer?",
			answer:
				"If you are an agency owner or a solo preneuer who does seo this software is perfect for you. You cna use This software to create money site sites as your tier ones or standalone ranking properties.",
		},
		{
			question: "How long does it take to complete a development task?",
			answer:
				"If you are an agency owner or a solo preneuer who does seo this software is perfect for you. You cna use This software to create money site sites as your tier ones or standalone ranking properties.",
		},
	];
  return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="faq-wrapper bg-slate-900 w-screen h-screen overflow-auto pt-56 relative z-10">
			<div className="container">
				{/* 3 grid item */}
				<div className="grid grid-cols-1 gap-20">
					{/* grid item */}
					<div className="grid-item">
						<Title title="Frequently Asked Questions" subtitle="FAQs" />
					</div>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
				className="container mt-6">
				{faqData.map((item, index) => (
					<FaqItem key={index} question={item.question} answer={item.answer} />
				))}
			</motion.div>
			<div className="absolute left-0 bottom-0 -z-10">
				<img src={leftPng} alt="" />
			</div>
			<div className="absolute right-0 bottom-0 -z-10">
				<img src={rightPng} alt="" />
			</div>
			<div className="absolute left-28 top-24 -z-10">
				<img src={netPNG} alt="" />
			</div>
		</motion.div>
	);
}

export default Faqs