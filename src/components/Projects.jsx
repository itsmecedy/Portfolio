import React from "react";
import aboutImg from "/assets/aboutimg.jpg";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <div id="projects" className="bg-[#f9f9f9]">
      <div className=" max-w-[80rem] flex justify-center items-center mx-auto pt-20 md:pt-24 px-5 flex-col">
        <div className=" flex flex-col justify-start items-start w-full">
          <p className="bold uppercase font-bold text-lg text-blue-600 mb-4 lg:text-left">
            Projects
          </p>
          <p className=" font-semibold text-2xl tracking-tight mb-4 text-left ">
            Each project is a unique piece of development
          </p>
        </div>
        {/* projects */}
        <div className="flex flex-col lg:flex-row mx-auto bg-blue-100 rounded-md py-2 px-3 my-5">
          {/* left side */}
          <div className="flex-1 flex justify-center">
            <img
              className=" rounded-md w-full max-w-2xl h-auto mx-auto "
              src={aboutImg}
            />
          </div>
          {/* right side */}
          <div className="flex-1 flex max-w-xl flex-col justify-center">
            <div className=" text-xl font-semibold mt-5">
              Car Rental <span className=" text-gray-600">(February 2023)</span>
            </div>
            <p className="xl:mx-28 mt-3 text-gray-500">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex justify-center gap-5 py-6">
              <span className="p-1 px-2 rounded shadow-md font-semibold">
                React
              </span>
              <span className="p-1 px-2 rounded shadow-md font-semibold">
                SCSS
              </span>
            </div>
            <div className="flex justify-center gap-5 ">
              <button className="flex items-center space-x-1 hover:text-blue-700 ">
                <p>Code</p>
                <FiGithub />
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-700">
                <p>Live Demo</p>
                <FaExternalLinkAlt />
              </button>
            </div>
          </div>
        </div>
        {/* project2 */}
        <div className="flex flex-col lg:flex-row mx-auto bg-blue-100 rounded-md py-2 px-3 my-5">
          {/* left side */}
          <div className="flex-1 flex justify-center">
            <img
              className=" rounded-md w-full max-w-2xl h-auto mx-auto "
              src={aboutImg}
            />
          </div>
          {/* right side */}
          <div className="flex-1 flex max-w-xl flex-col justify-center">
            <div className=" text-xl font-semibold mt-5">
              Car Rental <span className=" text-gray-600">(February 2023)</span>
            </div>
            <p className="xl:mx-28 mt-3 text-gray-500">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex justify-center gap-5 py-6">
              <span className="p-1 px-2 rounded shadow-md font-semibold">
                React
              </span>
              <span className="p-1 px-2 rounded shadow-md font-semibold">
                SCSS
              </span>
            </div>
            <div className="flex justify-center gap-5 ">
              <button className="flex items-center space-x-1 hover:text-blue-700 ">
                <p>Code</p>
                <FiGithub />
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-700">
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
