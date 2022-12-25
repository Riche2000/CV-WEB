import React from 'react'
import mexico from "../assets/languages/mexico.png";
import usa from "../assets/languages/usa.png";


const About = () => {

  const language =[
    {
      id: 1,
      src: mexico,
      title: "Spanish",
      
    },
    {
      id: 2,
      src: usa,
      title: "English",
      
    }
  ]

  return (
    <div name="about" className='w-full h-full pt-28 pb-40 bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg my-auto p-4 mx-auto flex flex-col justify-center w-full h-full'>
           <div>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About me</p>
            </div> 
            <p className='text-xl mt-10'>
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
            <p className="py-5 mt-5 text-xl">Languages</p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-8 gap-8 text-center py-1 px-12 sm:px-0">
            {language.map(({id, src, title}) => (
              <div key={id}>
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}    
          </div>
        </div>
    </div>
  )
}

export default About