import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Kaarish Parameswaran, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I have a strong passion for developing outstanding software that positively impacts 
                the lives of those around me. Currently in my sixth semester of the Computer Programming
                and Analysis program at George Brown College, I excel in designing software solutions for 
                a diverse range of clients, from individuals and small businesses to large corporations. 
                My dedication to excellence in my academic and professional pursuits has been recognized with 
                inclusion on the Dean's Honour List.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;