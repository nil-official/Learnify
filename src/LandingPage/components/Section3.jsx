import React from 'react'

const Section3 = () => {
    return (
        <div className='w-full p-8 lg:py-12 text-white flex flex-col items-center bg-[#1d1d1d]'>
            <div className='flex flex-col items-center justify-center gap-4 pb-4'>
                <p className='text-2xl lg:text-3xl font-bold text-center'>
                    Not sure where to get started?
                </p>
                <p className='text-lg lg:text-xl font-bold text-center'>
                    Answer three short questions and we'll recommend the best learning path for your experience level and goals
                </p>
            </div>
            <div className='p-4 w-full flex items-center justify-center'>
                <button
                    className='w-full lg:w-40 text-black text-sm lg:text-[16px] font-bold px-5 py-2 rounded-full bg-lime-500'
                >
                    Take the Quiz
                </button>
            </div>

        </div>
    )
}

export default Section3