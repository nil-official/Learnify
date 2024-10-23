import React from 'react'
import data from '../data/mnc.json'

const Section5 = () => {
    return (
        <div className='w-full p-8 lg:py-12 bg-[#1d1d1d] text-white flex flex-col items-center justify-center'>
            <div className='flex flex-col w-full gap-4 items-center justify-center pb-4'>
                <p className='text-2xl lg:text-3xl font-bold text-center'>
                    Learn Straight from Experts Who Shape the Modern Web
                </p>
                <p className='text-lg lg:text-xl font-bold text-center'>
                    Our courses are taught by developers from these top companies (and more)
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-8 py-6 lg:flex-row'>
                {data.map((mnc, index) => {
                    return (
                        <div key={index} className='w-[90px] lg:w-[130px] cursor-pointer'>
                            <img
                                src={mnc.image}
                                alt={mnc.alt}
                            />
                        </div>
                    )
                })}
            </div>
            <div className='pt-4 w-full flex items-center justify-center'>
                <button
                    className='w-full lg:w-40 text-black text-sm lg:text-[16px] font-bold px-5 py-2 rounded-full bg-lime-500'
                >
                    Get Full Access
                </button>
            </div>
        </div>
    )
}

export default Section5