import React from 'react'
import logo from '../assets/abtme2.png'
const AboutMe = () => {
  return (
    <>
      <div className="abt-me flex p-4 justify-center text-div">
        <img src={logo} className="h-40" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className=" Inknut-Antiqua text-xl text-[#3A5A40]  w-[80%] text-center">
          <p className='mt-4'>
            My name is Aashna Roseline Bara and I'm a curious student developer with a passion for problem
          solving and continuous learning. I love building things that are not
          just functional but also meaningful — whether it’s a web app, a side
          project, or a new skill. I enjoy tackling challenges that make me
          think critically and creatively. My interests lie in full-stack web development, UI designing and machine learning (I'm really new to machine learning and I still am exploring the field).I’m always exploring new tools and technologies to expand my toolkit.
          </p>
          <p className='mt-4'>
            
          When I’m not coding, you can find me randomly scribbling and sketching on a sketchbook while I'm jamming to music or while a youtube video is playing on the background.
          </p>
          
          <p className='mt-4'>
            I’m excited to grow, collaborate, and contribute to projects that make a
          difference. I enjoy collaborating with others and believe that the best ideas often come from diverse perspectives.
          </p>
        </p>
      </div>
    </>
  );
}

export default AboutMe
