import React from 'react'
import data from '../data/tech.json'

const Section1 = () => {
  return (
    <div className='w-full p-8 lg:py-12 text-white bg-[#1d1d1d]'>
      <div className='flex flex-col items-center justify-center gap-12 p-12'>

        <div className='flex flex-col gap-4 items-center'>
          <p className='text-4xl font-bold'>
            Gain Practical Tech Skills from Experts You Can Trust
          </p>
          <p>
            JavaScript, React, and TypeScript to Node.js and Backend (Next.js, SpringBoot, Docker, & More)
          </p>
        </div>

        <div className='flex gap-8'>
          {data.map((tech, index) => {
            return (
              <img
                key={index}
                src={tech.image}
                alt={tech.alt}
                width={80}
                className='cursor-pointer transform transition-transform duration-200 hover:scale-110'
              />
            )
          })}
        </div>

        <div>
          <p>Popular Learning Paths: Beginner • Professional • Fullstack</p>
        </div>

      </div>
    </div>
  )
}

export default Section1