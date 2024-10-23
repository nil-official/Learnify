import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-[800px]'>

            <div className='h-full flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-8 items-center'>
                    <div className='flex flex-col gap-2 items-center'>
                        <p style={{ textShadow: '0 0 20px rgba(0, 0, 0, .75)' }} className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                            Gain Practical Tech Skills from Experts You Can Trust
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
    )
}

export default Header