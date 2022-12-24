import React from 'react'
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import nextjs from "../assets/experience/nextjs.png";
import graphql from "../assets/experience/graphql.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import android from "../assets/experience/Android.png";
import azure from "../assets/experience/Azure.png";
import bootstrap from "../assets/experience/Bootstrap.png";
import cisco from "../assets/experience/cisco.png";
import csharp from "../assets/experience/csharp.png";
import python from "../assets/experience/python.png";
import java from "../assets/experience/Java.png";
import windows from "../assets/experience/Windows.png";
import linux from "../assets/experience/Linux.png";
import oraclesql from "../assets/experience/OracleSQL.png";
import scrum from "../assets/experience/scrum.png";
import powerbi from "../assets/experience/Powerbi.png";

const Experience = () => {
    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: reactImage,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
      },
      {
        id: 6,
        src: nextjs,
        title: "Next JS",
        style: "shadow-white",
      },
      {
        id: 7,
        src: graphql,
        title: "GraphQL",
        style: "shadow-pink-400",
      },
      {
        id: 8,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
      {
        id: 9,
        src: android,
        title: "Android",
        style: "shadow-green-400",
      },
      {
        id: 10,
        src: azure,
        title: "Azure",
        style: "shadow-blue-600",
      },
      {
        id: 11,
        src: bootstrap,
        title: "Bootstrap",
        style: "shadow-purple-600",
      },
      {
        id: 12,
        src: cisco,
        title: "Cisco",
        style: "shadow-blue-500",
      },
      {
        id: 13,
        src: csharp,
        title: "C#",
        style: "shadow-pink-500",
      },
      {
        id: 14,
        src: python,
        title: "Python",
        style: "shadow-blue-600",
      },
      {
        id: 15,
        src: java,
        title: "Java",
        style: "shadow-red-500",
      },
      {
        id: 16,
        src: windows,
        title: "Windows",
        style: "shadow-blue-500",
      },
      {
        id: 17,
        src: linux,
        title: "Linux",
        style: "shadow-gray-400",
      },
      {
        id: 18,
        src: oraclesql,
        title: "Oracle SQL",
        style: "shadow-orange-500",
      },
      {
        id: 17,
        src: scrum,
        title: "SCRUM",
        style: "shadow-gray-400",
      },
      {
        id: 18,
        src: powerbi,
        title: "Power BI",
        style: "shadow-yellow-500",
      }
    ];
  
    return (
      <div
        name="experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full h-scrren"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>
  
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;