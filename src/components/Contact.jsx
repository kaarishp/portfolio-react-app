import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Avatar from '../assets/newavatar.png';

const IconLink = ({ href, icon, label, iconSize = 'lg' }) => (
  <a href={href} className="flex items-center justify-center gap-2 text-xl hover:text-blue-300 transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} size={iconSize}/> {label}
  </a>
);

const Contact = () => {
  return (
    <div name='contact' className='flex flex-col justify-center items-center text-gray-300 bg-[#0c133a] px-8 py-12'>
      <h1 className='font-bold text-7xl mb-10 mt-10 truncate'>Let's Connect</h1>
      <div className='text-center mb-8'>
        <h2 className='text-xl mb-6 max-w-xl mx-auto'>Reaching out to say hello, or eager to collaborate on something extraordinary? I'm here and ready to listen. Get in touch, and let's join forces to craft something truly amazing together!</h2>
        <img src={Avatar} alt="Avatar" className="inline-block h-24 w-24 md:h-48 md:w-48 rounded-full border-4 border-white mb-6"/>
      </div>
      <div className='flex justify-center gap-8 mb-8'>
        <IconLink href="mailto:kaarishsivaguru@gmail.com" icon={faEnvelopeSolid} label="" iconSize="2x" />
        <IconLink href="https://www.linkedin.com/in/kaarish-parameswaran-815862265/" icon={faLinkedin} label="" iconSize="2x" />
        <IconLink href="https://github.com/kaarishp" icon={faGithub} label="" iconSize="2x" />
      </div>
      <div>
        <a href="../assets/KaarishResume.pdf" target="_blank" rel="noopener noreferrer" className='mt-4 bg-red-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition duration-300 ease-in-out mr-2'>View Resume</a> 
      </div>
      <div className='mt-10 py-4'>
        <p>Copyright <FontAwesomeIcon icon={faCopyright} /> Kaarish Parameswaran 2024</p>
      </div>
    </div>
  );
};

export default Contact;
