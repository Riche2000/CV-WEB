import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
           <div>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About me</p>
            </div> 
            <p className='text-xl mt-8'>
            I was born in Mexico on July 21, 2000
            </p>
            <br />
            <p className='text-xl'>
            I am an intern in computer systems engineering. During my career as a student, I perfected my skills in software technologies in languages ​​such as Python, Java, JavaScript, and C#. Some of the skills that I have acquired through my education at the university, research and development of personal projects are:
            <li className='mt-5'>Network knowledge.</li>
            <li>Creation and management of structured databases (SQL).</li>
            <li>Administration of Linux-based operating systems.</li>
            <li>Documentation.</li>
            <li>Web development using HTML5, CSS and JavaScript.</li>
            <li>Knowledge of cloud computing (Cloud), especially Microsoft Azure.</li>
            </p>
        </div>
    </div>
  )
}

export default About