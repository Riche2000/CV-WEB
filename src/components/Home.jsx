import React from 'react'
import MyImage from '../assets/yo.png'
import {TbArrowRightCircle} from "react-icons/tb"
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-6xl font-bold text-white">
                    I'm a Full Stack Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                I am a computer systems engineering intern focused on
                software development, machine learning, data analysis and
                cloud computing.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300">
                        <TbArrowRightCircle size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
            <div className='hidden md:flex relative left-40 z-0 ml-20 before:absolute before:-top-9 before:-left-9 before:rounded-2xl before:w-2/3 before:h-full before:border-2 before:border-sky-500 before:z-[-1]'>
               <img src={MyImage} alt="my profile" className=" rounded-2xl md:mt-0 w-2/3 md:w-100" /> 
            </div>
            <img src={MyImage} alt="my profile" className="md:hidden rounded-2xl mt-12 md:mt-0 mx-auto w-2/3 md:w-100" />
            </div>
        </div>
    </div>
  )
}

export default Home