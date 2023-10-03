import React from 'react'

const Module = ({icon, title, desc}) => {
  return (
    <>
         <div className="bg-white bg-opacity-10 p-8 rounded-3xl border border-transparent border-tranparent hover:border-blue-500 backdrop-filter backdrop-blur-10 shadow-xl">
          <div className="items-center">
            <div className="w-24 h-20 flex-shrink-0 text-blue-500">
              
              <img src={icon} alt="" />
            </div>
            <div className="ml-4 mt-10">
            
            {title &&   <h1 className="text-white text-opacity-90 font-inter font-semibold text-4xl xllll:text-5xl mb-5">
			  {title}
              </h1>}
            
            {desc &&    <p className="text-white text-opacity-70 font-inter font-normal text-2xl leading-10">
			 {desc}
              </p>}
           
            </div>
          </div>
        </div>
    </>
  )
}

export default Module