import React from "react";
import github from "../assets/experience/github.png";
import linkedin from "../assets/experience/linkedin.png";
import cv from "../assets/experience/cv.png";


const Contact = () => {

  const social =[
    {
      id: 1,
      src: github,
      href: "https://github.com/Riche2000",
    },
    {
      id: 2,
      src: linkedin,
      href: "https://www.linkedin.com/in/ricardosanch/",
    },
    {
      id: 3,
      src: cv,
      href: "/CV_Ricardo.pdf",
      download: true,
    }
  ]

  return (
    <div name="contact" className="w-full h-full pt-24 pb-24 bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col my-auto p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form action="https://getform.io/f/598afcc0-5ab4-4e1f-89a8-befe8d960833" method="POST" className=" flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
            <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
            <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
          </form>
        </div>
      </div>
      <div className="md:hidden w-full grid grid-cols-3 sm:grid-cols-8 gap-8 text-center py-1 px-12 sm:px-0">
      {social.map(({id, src, href, download}) => (
              <div key={id}>
                <a href={href} download={download} target="_blank" rel="noreferrer"><img src={src} alt="" className="py-10 w-20 mx-auto px-5"/></a>
              </div>
            ))}    
      </div>
    </div>
  );
};

export default Contact;