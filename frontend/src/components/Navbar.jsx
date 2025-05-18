import React, { use } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const currPath = useLocation()
  return (
    <div className='flex flex-row h-10 mb-2 justify-between text-[#3A5A40]  '>
      <NavLink to="/" className='text-2xl flex flex-row libre-baskerville-regular-italic '>
        <img className='' src={logo} alt="" />
        <p className='ml-2 mt-2 text-3xl rammentto-one [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] '>Aashna</p>
        </NavLink>

      <div className='hamburger  flex flex-row space-x-16 text-xl font-serif'>
        <p className={`mt-2 pl-4 pr-4  flex flex-col justify-center item-center cursor-pointer rounded-2xl  ${currPath.pathname==="/"?"bg-[#3A5A40] text-white shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)] hover:bg-[#344E41]":"hover:text-[#588157] "}`}><NavLink to="/">Home</NavLink></p>
        <p className={`mt-2 pl-4 pr-4  flex flex-col justify-center item-center cursor-pointer rounded-2xl  ${currPath.pathname==="/aboutMe"?"bg-[#3A5A40] text-white shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)] hover:bg-[#344E41]":"hover:text-[#588157]"}`}><NavLink to="/aboutMe">About Me</NavLink></p>
        <p className={`mt-2 pl-4 pr-4  flex flex-col justify-center item-center cursor-pointer rounded-2xl  ${currPath.pathname==="/resume"?"bg-[#3A5A40] text-white shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)] hover:bg-[#344E41]":"hover:text-[#588157]"}`}><NavLink to="/resume">Resume</NavLink></p>
        <p className={`mt-2 pl-4 pr-4  flex flex-col justify-center item-center cursor-pointer rounded-2xl  ${currPath.pathname==="/contact"?"bg-[#3A5A40] text-white shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)] hover:bg-[#344E41]":"hover:text-[#588157]"}`}><NavLink to="/contact">Contact</NavLink></p>

      </div>
    </div>
  )
}

export default Navbar
