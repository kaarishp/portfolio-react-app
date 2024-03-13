import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/newlogo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}}/>
        </div>

        {/* // Webwsite Menu */}
        <ul className='hidden md:flex'>     
          <li><Link to='home' smooth={true} duration={500} className='relative inline-block text-gray-300 hover:text-white after:content-[""] after:block after:w-0 after:h-0.5 after:bg-red-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full'>Home</Link></li>
          <li><Link to='about' smooth={true} duration={500} className='relative inline-block text-gray-300 hover:text-white after:content-[""] after:block after:w-0 after:h-0.5 after:bg-red-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full'>About</Link></li>
          <li><Link to='skills' smooth={true} duration={500} className='relative inline-block text-gray-300 hover:text-white after:content-[""] after:block after:w-0 after:h-0.5 after:bg-red-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full'>Skills</Link></li>
          <li><Link to='work' smooth={true} duration={500} className='relative inline-block text-gray-300 hover:text-white after:content-[""] after:block after:w-0 after:h-0.5 after:bg-red-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full'>Work</Link></li>
          <li><Link to='contact' smooth={true} duration={500} className='relative inline-block text-gray-300 hover:text-white after:content-[""] after:block after:w-0 after:h-0.5 after:bg-red-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full'>Contact</Link></li>
        </ul>
        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


        {/* // Mobile Menu */}
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }>
          <li className='py-6 text-4xl'><Link onClick={() => setNav(false)} to='home' smooth={true} duration={500}>Home</Link></li>
          <li className='py-6 text-4xl'><Link onClick={() => setNav(false)} to='about' smooth={true} duration={500}>About</Link></li>
          <li className='py-6 text-4xl'><Link onClick={() => setNav(false)} to='skills' smooth={true} duration={500}>Skills</Link></li>
          <li className='py-6 text-4xl'><Link onClick={() => setNav(false)} to='work' smooth={true} duration={500}>Work</Link></li>
          <li className='py-6 text-4xl'><Link onClick={() => setNav(false)} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar