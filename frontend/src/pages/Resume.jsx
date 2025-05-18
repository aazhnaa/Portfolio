import React from 'react'

const Resume = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <p className='Inknut-Antiqua text-xl '>To see my works <a className='text-[#588157] hover:text-[#3A5A40]' href="https://github.com/aazhnaa?tab=repositories" target="_blank"> Click here</a>.</p>
      <p className='Inknut-Antiqua text-xl'>My resume : <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#588157] "
      >
        View Resume
      </a> </p>
    </div>
  )
}

export default Resume
