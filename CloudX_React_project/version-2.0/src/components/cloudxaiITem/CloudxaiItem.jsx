// src/components/Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowLeft from  "./left.png"
import arrowRight from  "./right.png"
import './CloudxaiItem.scss'
import {BsArrowRight} from 'react-icons/bs'
const SliderItem = ({ image, title, description, link }) => {
  return (
    <div className="slider-item mx-4">
      <div className="slide-img">
      <img
        src={image}
        alt={title}
        className="w-472 h-590 flex-shrink-0"
      />
      </div>
      <h2 className="text-white font-Inter text-2xl mdl:text-xl30 font-semibold leading-45 tracking-tighter mt-7">
        {title}
      </h2>
      <p className="text-white font-Inter text-base font-normal mt-2">
        {description}
      </p>
      <a
        href={link}
        className="text-blue-500 font-Inter text-base font-medium mt-2 flex items-center gap-3 "
      >
        Learn More <BsArrowRight/>
      </a>
    </div>
  );
};

const settings = {
  // Slick Slider settings go here
  dots: true,
  infinite: true,
  speed: 500,
  gap: 20,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <img className='Left' src={arrowLeft} alt="" />,
  nextArrow: <img className='Right' src={arrowRight} alt="" />,
  responsive: [
    {
      breakpoint: 768, // Apply these settings on screens wider than 768px
      settings: {
        slidesToShow: 1, // Adjust to your desired number of visible slides
      },
    },
    {
      breakpoint: 1024, // Apply these settings on screens wider than 1024px
      settings: {
        slidesToShow: 3, // Adjust to your desired number of visible slides
      },
    },
    ],
  
};

const SliderComponent = ({ items }) => {
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <SliderItem key={index} {...item} />
      ))}
    </Slider>
  );
};

export default SliderComponent;
