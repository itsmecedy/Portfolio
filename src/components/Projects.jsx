import React from "react";
import aboutImg from "/assets/aboutimg.jpg";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <div id="projects" className="h-screen w-full md:h-screen bg-blue-500">
      <div className="border max-w-[1280px] flex flex-col mx-auto  ">
        <p>Projects</p>
        <p>Each project is a unique piece of development</p>
        {/* projects */}
        <div className="border max-w-[1200px] flex flex-col lg:flex-row mx-auto">
          {/* left side */}
          <div className="flex-1 flex justify-center px-5">
            <img
              className=" rounded-2xl w-full max-w-2xl h-auto mx-auto "
              src={aboutImg}
            />
          </div>
          {/* right side */}
          <div className="flex-1 flex max-w-xl flex-col">
            <div>
              Car Rental <span>February 2023</span>
            </div>
            <p>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className=" space-x-2">
              <span>React</span>
              <span>SCSS</span>
            </div>
            <div className=" flex justify-center space-x-5">
              <button className="flex items-center space-x-1">
                <p>Code</p>
                <FiGithub />
              </button>
              <button className="flex items-center space-x-1">
                <p>Live Demo</p>
                <FaExternalLinkAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
