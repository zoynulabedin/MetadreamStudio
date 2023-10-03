import React from 'react'
import Slider from 'react-slick';
import slider1 from "./1.png"
import slider2 from "./2.png"
import slider3 from "./3.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from '../cloudxaiITem/CloudxaiItem';
import leftShpe from "./left-shape.png";
import rightShape from "./right-shape.png";
const sliderItems = [
  {
    image: slider1,
    title: 'Utilize The Domain Power of Tier 1 Cloud Sites',
    description: 'We use the top cloud providers to host the websites generated which gi',
    link: 'https://example.com/1',
  },
  {
    image: slider2,
    title: 'Build High Quality Contextual Backlinks and Citations',
    description: 'Ask questions, gain helpful insights, and generate SEO website using AI...           ',
    link: 'https://example.com/2',
  },
  {
    image: slider2,
    title: 'Site Generate are Easy From CloudX AI',
    description: 'Ask questions, gain helpful insights, and generate SEO website using AI...',
    link: 'https://example.com/2',
  },
  {
    image: slider3,
    title: 'Site Generate are Easy From CloudX AI',
    description: 'Ask questions, gain helpful insights, and generate SEO website using AI...',
    link: 'https://example.com/2',
  },
];
const Cloudxaislider = () => {
  return (
    <>
  <div className="cloudaiSlider-wrapper relative z-10">
    <div className="absolute left-0 top-0 -z-10">
      <img src={leftShpe} alt="" />
    </div>
    <div className="absolute right-0 bottom-0 -z-10">
      <img src={rightShape} alt="" />
    </div>
  <div className="container pb-28 pt-24">
        <div className="section-title mb-10">
        <h1 className=" text-[32px] font-SpaceGratestk text-center mdl:text-left font-bold text-transparent lgl:text-[60px] tracking-[-0.70px] lgl:leading-[64px] ">
          <span className="text-white">Use Cases That Can Be Applied Using </span>
          <span className="text-[#126ef8]">CloudX AI</span>
        </h1>
        <p className=" text-[24px] text-center font-Inter font-normal text-[#ffffffb2] lgl:text-[34px] mdl:text-left ">
          Lets explore the  different use cases this application has to offer.
        </p>
        </div>

        <div className="slider-wrapper">
      <SliderComponent items={sliderItems} />
    </div>

    </div>
  </div>
 
  
    </>
  )
}

export default Cloudxaislider