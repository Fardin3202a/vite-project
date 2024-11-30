import React from 'react'
import Button from './Button'
import ProgressBar from './ProgressBar'

const About = () => {
  return (
    <div className=' z-50'>
          <div id='about-section' className=' w-screen h-screen flex flex-row relative'>
      <img className=' absolute max-w-1/2 max-h-screen' src="./public/assets/AboutBg.png" alt="" />
      <img className=' absolute max-w-[960px] max-h-[550px] top-36' src="./public/assets/Vector.png" alt="" />
      <div className=' w-1/2 h-screen flex flex-col justify-center items-center z-10'>
        <div className=' border-2 border-dashed border-lightText w-[60%] h-72 rounded-3xl flex flex-col justify-center items-start p-10'>
          <h1 className=' text-3xl font-bold text-Primary'>About me</h1>
          <p className=' text-text'>Hi there! 👋 I’m Fardin, a passionate web developer specializing in HTML, CSS, JavaScript, React, and Tailwind CSS. As a college student with a keen interest in technology, I love bringing ideas to life through clean, user-friendly, and responsive designs.</p>
          <Button extraStyle=' font-poppins bg-gray-800 text-white w-32 h-10 mt-6'><a href="mailto:fardin3202amailto:fardin@gmail.com?subject=Work%20Opportunity&body=Hello%20Fardin,@gmail.com">Hire me</a></Button>
        </div>
      </div>
      <div className="right w-1/2 h-screen flex justify-center items-center relative">
          <ProgressBar/>
      </div>
    </div>
    </div>
  )
}

export default About
