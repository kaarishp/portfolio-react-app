import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Full Stack Developer', 'Data Scientist', 'Mobile Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);
  
  return (
    <div name='home' className='w-full h-screen bg-[#0c133a]'>

      {/* // Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600 font-bold text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kaarish Parameswaran</h1>
        {/* <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold transition-opacity duration-1000 ease-in-out opacity-0 md:opacity-100"
        style={{ animation: 'fadeInOut 5s linear infinite' }}> {texts[currentIndex]} </h1> */}
        <p className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a {texts[currentIndex]}</p>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>As a software developer, I excel at solving complex problems with precision and innovation, delivering high-quality solutions that drive positive change. </p>
        <div>
        <button to='work' className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-red-600 hover:border-red-600'>
          View Work 
        <span className='group-hover duration-300'>
          <HiArrowNarrowRight className='ml-3'/>
        </span>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home