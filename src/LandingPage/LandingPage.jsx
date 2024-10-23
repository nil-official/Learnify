import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div>
      <div className='w-full h-[550px] md:h-[600px] lg:h-[800px] relative'>
        <img src='images/learning.jpg' className="h-full w-full object-cover" />
        <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent'></div>
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>

      <div className="absolute top-0 w-full flex flex-col justify-center">
        <Navbar />
        <Header />
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      <Footer />

    </div>
  )
}

export default LandingPage