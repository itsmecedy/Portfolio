import React, { useEffect } from "react";
import AOS from "aos";
import { projects } from "../data/Projects";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  // Sorting logic: Keep 0 & 1 first, then reverse the rest
  const sortedProjects = [
    projects[0],
    projects[1],
    projects[2],
    ...projects.slice(3).reverse(),
  ];

  return (
    <div id="projects" className="bg-[#f9f9f9]">
      <div className=" max-w-[80rem] flex justify-center mx-auto pt-16 md:pt-20 px-5 flex-col">
        <p className=" flex text-4xl text-gray-800 mb-2">Projects</p>
        {sortedProjects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            className="flex flex-col lg:flex-row mx-auto shadow-xl bg-white rounded-md py-3 px-4 my-5"
          >
            {/* Hover me bubble (only for first project) */}
            {index === 0 && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow-md before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-blue-500">
                Hover Me!
              </div>
            )}
            {/* left side */}
            <div className="flex-1 flex justify-center">
              <div className="wrapperScroll">
                <img className="imgScroll" src={project.image} />
              </div>
            </div>
            {/* right side */}
            <div className="flex-1 flex max-w-xl flex-col justify-center">
              <div className=" text-xl font-semibold mt-5 px-2">
                {project.name}
                <span className=" text-gray-600 pl-2">{project.date}</span>
              </div>
              <p className="xl:mx-28 mt-3 px-2 text-gray-500">
                {project.description}
              </p>
              <div className="flex justify-center gap-5 py-6 flex-wrap">
                {project.techStack.map((tech, index) => (
                  <p
                    key={index}
                    className="p-1 px-2 rounded shadow-md font-semibold"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              {/* Projects link and github repositories */}
              <div className="flex justify-center gap-5 pb-3 ">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 hover:text-blue-700 hover:drop-shadow-md"
                  >
                    <p>Code</p>
                    <FiGithub />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 hover:text-blue-700 hover:drop-shadow-md"
                  >
                    <p>Live Demo</p>
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
