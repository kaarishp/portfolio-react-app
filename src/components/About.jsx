import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio'); 

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 flex flex-col items-center py-10'>
      <div className='max-w-4xl w-full px-4 mt-12'>
        <div className='text-center'>
          <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-red-600'>
            About
          </p>
        </div>
        {/* Tabs for Bio, Experinence, Education, Awards */}
        <div className='flex flex-wrap justify-center my-4 md:my-6'>
          <button onClick={() => openTab('bio')} className={`px-3 py-2 m-1 text-sm md:px-4 md:py-2 md:mx-1 md:text-base rounded ${activeTab === 'bio' ? 'bg-red-600 text-white' : 'bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white'}`}>
            Bio
          </button>
          <button onClick={() => openTab('experience')} className={`px-3 py-2 m-1 text-sm md:px-4 md:py-2 md:mx-1 md:text-base rounded ${activeTab === 'experience' ? 'bg-red-600 text-white' : 'bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white'}`}>
            Experience
          </button>
          <button onClick={() => openTab('education')} className={`px-3 py-2 m-1 text-sm md:px-4 md:py-2 md:mx-1 md:text-base rounded ${activeTab === 'education' ? 'bg-red-600 text-white' : 'bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white'}`}>
            Education
          </button>
          <button onClick={() => openTab('awards')} className={`px-3 py-2 m-1 text-sm md:px-4 md:py-2 md:mx-1 md:text-base rounded ${activeTab === 'awards' ? 'bg-red-600 text-white' : 'bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white'}`}>
            Awards
          </button>
        </div>
        <div className='bg-[#112240] p-6 rounded-lg shadow-lg'>
          {activeTab === 'bio' && (
            <div className='tab-content'>
              <p className='text-xl text-center'>I'm Kaarish, a product-focused Software Engineer based in Toronto, dedicated to fostering a culture of collaboration and openness. For me, teamwork is the cornerstone of success.<br></br><br></br>My drive lies in melding the technical prowess 
              and aesthetic appeal of digital products. I'm committed to enhancing user experiences, crafting visually appealing designs, and developing clean, accessible, and human-friendly code. Detail-oriented, I believe in the philosophy that simplicity is the ultimate sophistication, echoing 
              John Maeda's Laws Of Simplicity.<br></br><br></br> My joy comes from creating, learning, innovating, and contemplating ways to improve. Away from the keyboard, I'm often found at the gym working on personal growth, or unwinding by watching NBA games.</p>
            </div>
          )}
          {activeTab === 'experience' && (
            <div className='text-gray-300'>
              <h2 className='text-2xl font-bold mb-4'>Experience</h2>
              <div>
                <h3 className='text-xl font-semibold'>Dixie Bloor Neighbourhood Centre - Mentor</h3>
                <p className='italic'>Mississauga, Ontario (October 2020 - June 2021)</p>
                <ul className='list-disc list-inside ml-4'>
                  <li>To encourage involvement and growth in order to build a pleasant and healthy community climate.</li>
                  <li>Identify and discuss community issues and concerns, plan and provide community programs and services, and encourage community engagement.</li>
                  <li>Develop relationships with the youth while building trust, coaching, and educating them to make positive life changes.</li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === 'education' && (
            <div className='text-gray-300'>
            <h2 className='text-2xl font-bold mb-4'>Education</h2>
            <div className='space-y-4'>
              <div>
                <h3 className='text-xl font-semibold'>Harold M. Brathwaite Secondary School (Sept 2017 - June 2021)</h3>
                <p className='italic'>Ontario Secondary School Diploma</p>
                <ul className='list-disc list-inside ml-4'>
                  <li>Computer Science</li>
                  <li>Advanced Functions</li>
                  <li>English</li>
                  <li>Computer Engineering</li>
                </ul>
              </div>
              
              {/* George Brown College */}
              <div>
                <h3 className='text-xl font-semibold'>George Brown College (Sept 2021 - April 2024)</h3>
                <p className='italic'>Computer Programming and Analysis</p>
                <ul className='list-disc list-inside ml-4'>
                  <li>Full Stack Development I</li>
                  <li>Data Science</li>
                  <li>Machine Learning</li>
                  <li>Full Stack Development</li>
                  <li>DevOps</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Advanced Database Development</li>
                  <li>IT Essentials</li>
                </ul>
              </div>
            </div>
          </div>
          )}
          {activeTab === 'awards' && (
            <div className='text-gray-300'>
              <h2 className='text-2xl font-bold mb-4'>Awards</h2>
              <ul className='list-disc list-inside ml-4'>
                <li className='mb-4'>
                  <span className='font-semibold'>Deans’ Honour List (x4) - George Brown College</span> (Fall 2021 - Fall 2023)
                  <ul className='ml-6 mt-1'>
                    <li>Given to students in the College of Engineering & Physical Sciences who make the Dean’s Honours List by maintaining an 80% or higher average in the Fall 2023 semester.</li>
                  </ul>
                </li>
                <li className='mb-4'>
                  <span className='font-semibold'>Ontario Scholar</span> - Harold M. Brathwaite Secondary School (June 2021)
                    <ul className='ml-6 mt-1'>
                      <li>Recognized for achieving an average of 80% or higher in six Grade 12 university preparation courses.</li>
                    </ul>
                  </li>
                </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;