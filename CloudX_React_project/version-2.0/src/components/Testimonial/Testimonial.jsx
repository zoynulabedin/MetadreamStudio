import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from  "./left.png"
import arrowRight from  "./right.png"
import './Testimonial.scss'
const testimonialData = [
  {
    id: 1,
    name: "Angel Cruz",
    designation: "CEO and Owner",
    description:
      "One of the best things about CloudX is the ability to send daily reports that are extremely customizable. Some of my clients have different levels of understanding of how internet marketing works so CloudX gives you the ability to transform the report and tailor it based on what you want to show each separate client.",
    date: "2023-09-14 10:30 AM",
  },
  {
    id: 2,
    name: "John Milton",
    designation: "UX Designer",
    description:
      "CloudX has an impressive set of features, super competitive pricing, great API, and the best rank tracking accuracy in the industry. The UI is very intuitive and the smart use of small diagrams, sparklines and graphs make it easy to follow the progress of your SEO work",
    date: "2023-09-15 03:45 PM",
  },
  {
    id: 3,
    name: "Salma Sarkar",
    designation: "Product Manager",
    description:
      "What I like the most about CloudX is the visual representation of rankings, especially the overall average position and evolution for specific keywords. In a split second, I can see how well we perform for a certain time period. It is a user-friendly, yet powerful tool that does the job!!",
    date: "2023-09-16 09:15 AM",
  },
  {
    id: 4,
    name: "Alice Johnson",
    designation: "Product Manager",
    description:
      "What I like the most about CloudX is the visual representation of rankings, especially the overall average position and evolution for specific keywords. In a split second, I can see how well we perform for a certain time period. It is a user-friendly, yet powerful tool that does the job!!",
    date: "2023-09-16 09:15 AM",
  },
  {
    id: 5,
    name: "Alice Johnson",
    designation: "Product Manager",
    description:
      "What I like the most about CloudX is the visual representation of rankings, especially the overall average position and evolution for specific keywords. In a split second, I can see how well we perform for a certain time period. It is a user-friendly, yet powerful tool that does the job!!",
    date: "2023-09-16 09:15 AM",
  },
];

const Testimonial = () => {
  const settings = {
   // Slick Slider settings go here
   dots: true,
   infinite: true,
   speed: 500,
   centerPadding: '60px',
   slidesToShow: 3,
   centerMode: false,
   slidesToScroll: 3,
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
        slidesToShow: 2, // Adjust to your desired number of visible slides
      },
    },
    {
      breakpoint: 1200, // Apply these settings on screens wider than 1024px
      settings: {
        slidesToShow: 3, // Adjust to your desired number of visible slides
      },
    },
    ],
  
 
  };

  return (
    <div className="container">
 <div className="testimonial-wrapper  pb-24">
      <h1 className="text-white font-SpaceGratestk text-xl30 mdl:text-xxxl50 text-center mb-12">
        What Other’s Are Saying
      </h1>
      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="p-10 testimonial-item mx-4">
            
              <p className="text-lg font-semibold text-white font-SpaceGratestk text-xl30 mb-3">{testimonial.name}</p>
              <p className=" text-lg24 text-blue-500 font-normal font-Inter">{testimonial.designation}</p>
              <p className="mt-4 font-Inter text-20 font-normal text-white60">{testimonial.description}</p>
              <p className="text-white mt-4 font-Inter">{testimonial.date}</p>
            
          </div>
        ))}
      </Slider>
    </div>
    </div>
   
  );
};

export default Testimonial;
