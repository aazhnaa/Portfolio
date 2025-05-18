import React from 'react'
import pfp from '../assets/me.pfp.jpg'
const Home = () => {
  return (
    <>
      <div className='grid grid-rows-[2fr_1fr] '>
        <div className='grid grid-cols-2 gap-4 w-full pb-8'>
        <div className="for-text text-[#3A5A40] pt-10 pl-20 pb-10">
          <h1 className='rammentto-one  text-[70px] leading-tight [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]'>Hi, This is Aashna </h1>
          <p className='Space-Mono text-lg '>ASPIRING FULL STACK DEVELOPER </p>
        </div>
        <div className="for-pic  mt-4 flex flex-col justify-center items-center">
            <img src={pfp} className=' w-80 h-80 rounded-[50%]' alt="" />
        </div>
      </div>

      <div className='bg-[#3A5A40] text-div'>
        <p className='pl-20  pr-20 pt-4 text-xl Inknut-Antiqua text-white'>I'm a student developer exploring the full stack, from intuitive frontends to scalable backends. Apart from building practical web applications, I also enjoy creating fun projects and learning through hands-on projects. I enjoy diving into problems that make me think. Every new challenge is an opportunity to learn something new and push my limits.  Exploring new ideas and technologies keeps me inspired.</p>
      </div>

      </div>
    </>
  )
}

export default Home
