import React from 'react'
import data from '../data/tech.json'

const Section1 = () => {
  return (
    <div className='w-full p-8 lg:py-12 text-white bg-[#1d1d1d]'>
      <div className='flex flex-col items-center justify-center gap-10 lg:gap-12 py-4'>
        <div className='flex flex-col gap-4 items-center'>
          <p className='text-2xl lg:text-4xl font-bold text-center'>
            Gain Practical Tech Skills from Experts You Can Trust
          </p>
          <p className='text-sm lg:text-lg font-bold text-center'>
            JavaScript, React, and TypeScript to Node.js and Backend (Next.js, SpringBoot, Docker, & More)
          </p>
        </div>

        <div className='flex flex-wrap gap-6 lg:gap-8 w-full md:w-[70%] justify-center'>
          {data.map((tech, index) => {
            return (
              <img
                key={index}
                src={tech.image}
                alt={tech.alt}
                className='w-12 lg:w-16 xl:w-20 cursor-pointer transform transition-transform duration-200 hover:scale-110'
              />
            )
          })}
        </div>

        <div>
          <p className='text-center'>
            Popular Learning Paths:
            <a href="#" className='text-lime-500 cursor-pointer'> Beginner</a> • 
            <a href="#" className='text-lime-500 cursor-pointer'> Professional</a> • 
            <a href="#" className='text-lime-500 cursor-pointer'> Fullstack</a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Section1