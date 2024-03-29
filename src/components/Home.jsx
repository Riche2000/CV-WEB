import React from 'react'
import MyImage from '../assets/yo.png'
import {TbArrowRightCircle} from "react-icons/tb"
import {Link} from 'react-scroll'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-blue-900 via-sky-800 to-cyan-700">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount:0.5}} transition={{duration:0.5}} variants={{hidden: {opacity:0, x: -50}, visible: {opacity: 1, x: 0}}} className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-6xl font-bold text-white">
                    I'm a Full Stack Developer
                </h2>
                <p className="text-white py-4 max-w-md">
                I am a computer systems engineer focused on
                software development, machine learning, data analysis and
                cloud computing.
                </p>
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount:0.5}} transition={{delay: 0.2, duration:0.5}} variants={{hidden: {opacity:0, x: -50}, visible: {opacity: 1, x: 0}}}>
                    <Link to='portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300">
                        <TbArrowRightCircle size={25} className="ml-1"/>
                        </span>
                    </Link>
                </motion.div>
            </motion.div>
            <div>
            <img src={MyImage} alt="my profile" className="mt-12 md:mt-0 mx-auto w-2/3 md:w-auto" /> 
            </div>
        </div>
    </div>
  )
}

export default Home