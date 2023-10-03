import React from 'react'
import { motion } from 'framer-motion'
import Title from '../Title/Title'
import amazonLogo from "./amazon.svg"
import adobeLogo from "./adobe.png"
import microsftLogo from "./microsoft.png"
import circleLogo from "./circle.png"
import googleCloudLogo from "./googlecloud.png"
import { Link } from 'react-router-dom'
import "./Cloudprovider.scss";
const logosData = [
    {
      id: 1,
      src: amazonLogo,
      alt: 'Logo 1',
      link: 'https://example.com/logo1',
    },
    {
        id: 2,
        src: adobeLogo,
        alt: 'Logo 2',
        link: 'https://example.com/logo1',
      },
      {
        id: 3,
        src: microsftLogo,
        alt: 'Logo 3',
        link: 'https://example.com/logo1',
      },
      {
        id: 4,
        src: circleLogo,
        alt: 'Logo 2',
        link: 'https://example.com/logo1',
      },
      {
        id: 5,
        src: googleCloudLogo,
        alt: 'Logo 5',
        link: 'https://example.com/logo1',
      },
    
  ];

const CloudProvider = () => {
  
  return (
    <>
       <motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="cloud__providers pb-28">
			<div className="container text-center  mt-10">
				<h4 className='text-white text-xl30 pb-16 pt-16'>Cloud Providers</h4>
                <div className="grid xllll:grid-cols-6 xlll:grid-cols-6 xll:grid-cols-6 xl:grid-cols-4 lgl:grid-cols-4 lg:grid-cols-3 mdl:grid-cols-3 md:grid-cols-3 justify-center items-center space-x-4 gap-10 mx-auto">
                    {logosData.map((logo) => (
                        <Link
                        key={logo.id}
                        href={logo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-md h-auto hover:opacity-75 transition-opacity"
                        />
                        </Link>
                    ))}
                    </div>
			</div>
			
	
		</motion.div> 
    </>
  )
}

export default CloudProvider