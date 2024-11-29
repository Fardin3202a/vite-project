import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio-section').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
        <div className=' w-screen h-screen flex justify-center items-center flex-col'>
            <img className=' opacity-90 -z-20 max-w-screen max-h-screen absolute top-12' src="/vite-project/src/assets/Mainbg.png" alt="" />
            <img className=' -z-10 max-w-[1020px] max-h-[650px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="./src/assets/Vector.png" alt="" />
            <h1 className=' font-poppins font-semibold text-7xl text-transparent bg-clip-text bg-gradient-to-tl from-Secondary to-Primary'>Fardin Ahmed</h1>
            <h1 className=' font-poppins font-semibold text-5xl text-gray-800 leading-tight'>Turning ideas into impactful digital experiences</h1>
            <p className=' w-[960px] h-[136px] font-roboto text-text text-lg text-center leading-tight'>I'm here to help you build modern, responsive, and user-friendly web solutions using HTML, CSS, JavaScript, and React. With a strong focus on design and functionality, I use tools like Tailwind CSS to bring your ideas to life.</p>
            <Button handlClick={scrollToPortfolio} extraStyle=' font-poppins w-52 h-14 bg-gradient-to-tl from-Secondary to-Primary text-white flex flex-row gap-3 justify-center items-center'>Explore Projects <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button>
        </div>
    </div>
  )
}
export default Main