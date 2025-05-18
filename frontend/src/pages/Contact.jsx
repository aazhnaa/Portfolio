import React from 'react'
import { BsGithub } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <p className='Inknut-Antiqua text-[#3A5A40] text-2xl'>
        <p className='mt-4 text-center'>You can contact me anywhere here:</p>
        <ul className='grid grid-cols-3 gap-10 ml-32 mr-32 mt-10'>
          <a target="_blank" href="https://github.com/aazhnaa" className='cursor-pointer pt-28 pb-28 flex flex-col justify-center items-center bg-gray-100 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg'>
            <BsGithub className='text-[8rem]' />github.com/aazhnaa
          </a>
          <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=aashnarose12@gmail.com" className='cursor-pointer pt-28 pb-28 flex flex-col justify-center items-center bg-gray-100 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg'>
            <IoMail className='text-[8rem]' /> aashnarose12@gmail.com
          </a>
          <a   className='cursor-pointer pt-28 pb-28 flex flex-col justify-center items-center bg-gray-100 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg'>
            <IoIosCall className='text-[8rem]' />
            +91 6205283562
          </a>
        </ul>
      </p>
    </>
  )
}

export default Contact

