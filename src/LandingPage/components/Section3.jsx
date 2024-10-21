import React from 'react'

const Section3 = () => {
    return (
        <div className='w-full h-[250px] text-white flex flex-col items-center' style={{ backgroundColor: '#1d1d1d' }}>
            <div className='flex flex-col items-center justify-center gap-4 p-8 mt-4'>
                <p className='text-3xl font-bold'>
                    Not sure where to get started?
                </p>
                <p>
                    Answer three short questions and we'll recommend the best learning path for your experience level and goals
                </p>
            </div>
            <div>
                <button
                    style={{ ontSize: '12px', fontWeight: '650', padding: '6px 18px' }}
                    className='text-black rounded-full bg-lime-500'
                >
                    Take the Quiz
                </button>
            </div>

        </div>
    )
}

export default Section3