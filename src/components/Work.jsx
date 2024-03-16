import React from 'react'
import ProjectImg from '../assets/weatherapp.png'
import Quiz from '../assets/quizapp.png'
import Chat from '../assets/newchat.png'
import Grocecy from '../assets/listerapp.png'
import Capstone from '../assets/newcap.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</p>
                <p className='py-6 text-2xl'>Check out some of my recent work</p>
            </div>

            {/* Container for the projects */}
            <div
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Project 1 */}
                <div 
                style={{backgroundImage: `url(${ProjectImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            Weather App
                        </span>
                    {/* Project Description with Padding */}
                    <p className='text-center text-white mt-2 px-4'>
                    An intuitive Weather App built with React JS, leveraging API data to provide real-time weather updates and forecasts.
                    </p>
        
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/kaarishp/WeatherApp.git">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
                </div>
                {/* Project 2 */}
                <div 
                style={{backgroundImage: `url(${Quiz})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            React JS Quiz
                        </span>
                        {/* Updated Project Description */}
                        <p className='text-center text-white mt-2 px-4'>
                            Engaging quiz application built with React JS, featuring dynamic questions and instant feedback.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/kaarishp/QuizReactApp.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Project 3 */}
                <div 
                style={{backgroundImage: `url(${Chat})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            Chat App
                        </span>
                        {/* Project Description with Padding */}
                        <p className='text-center text-white mt-2 px-4'>
                        A dynamic Chat App developed with React JS and Socket.IO, enabling real-time messaging and seamless communication between users.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/kaarishp/ChatApp.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Project 4 */}
                <div 
                style={{backgroundImage: `url(${Grocecy})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            Grocery List App
                        </span>
                        {/* Project Description with Padding */}
                        <p className='text-center text-white mt-2 px-4'>
                        A streamlined Grocery List App designed with SwiftUI, offering an elegant and efficient way to organize shopping lists on iOS devices.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/kaarishp/ShopListerPlus.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Project 5 */}
                <div 
                style={{backgroundImage: `url(${Capstone})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                            AI Call Assist
                        </span>
                        {/* Project Description with Padding */}
                        <p className='text-center text-white mt-2 px-4'>
                        AI Call Assist, a cutting-edge solution built with React Native and advanced AI implementation, revolutionizes customer service through automated, intelligent call handling.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/alialoraebi/capstone.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://drive.google.com/drive/folders/1F0w0Qibnl9nFFYUsF6liWdMWGthtdrbX?usp=sharing">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Document</button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Project 6 */}
                <div 
                // style={{backgroundImage: `url(${ProjectImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <h1 className='font-bold text-4xl text-center'>E-Commerce Coming Soon....</h1>
                    {/* Hover Effect */}
                    {/* <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project Title
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work