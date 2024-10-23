import React from 'react'
import data from '../data/mnc.json'

const Section5 = () => {
    return (
        <div className='w-full h-[350px] text-white flex flex-col items-center justify-center' style={{ backgroundColor: '#1d1d1d' }}>

            <div className='flex flex-col gap-4 items-center pb-4'>
                <p className='text-3xl font-bold'>
                    Learn Straight from Experts Who Shape the Modern Web
                </p>
                <p className='text-xl font-bold'>
                    Our courses are taught by developers from these top companies (and more)
                </p>
            </div>
            <div className='flex items-center justify-center gap-8 py-6'>
                {data.map((mnc, index) => {
                    return (
                        <div key={index} className='relative w-[130px] cursor-pointer'>
                            <img
                                src={mnc.image}
                                alt={mnc.alt}
                            />
                        </div>
                    )
                })}
            </div>
            <div className='pt-4'>
                <button
                    style={{ fontSize: '14px', fontWeight: '650', padding: '6px 18px' }}
                    className='text-black rounded-full bg-lime-500'
                >
                    Get Full Access
                </button>
            </div>

        </div>
    )
}

export default Section5