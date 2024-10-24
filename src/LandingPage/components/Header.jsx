import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='w-full h-[85vh]'>
            <Navbar />
            <div className='relative h-full'>
                <img src='images/learning.jpg' className="h-full w-full object-cover" />
                <div className='absolute top-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent'></div>
                <div className='absolute top-0 w-full h-full bg-black opacity-50'></div>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-8 items-center'>
                        <div className='flex flex-col gap-2 items-center'>
                            <p style={{ textShadow: '0 0 20px rgba(0, 0, 0, .75)' }} className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                                In-Depth Frontend & Fullstack Courses
                            </p>
                            <p style={{ textShadow: '0 0 20px rgba(0, 0, 0, .75)' }} className="text-3xl lg:text-5xl font-bold text-white">
                                Your Path to Senior Developer and Beyond
                            </p>
                        </div>
                        <div className='flex gap-8'>
                            <button className="bg-lime-500 hover:bg-lime-400 text-white font-semibold py-2 px-6 rounded">
                                Browse Our Courses
                            </button>
                            <button className="bg-transparent border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-white font-semibold py-2 px-6 rounded">
                                View Learning Paths
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header