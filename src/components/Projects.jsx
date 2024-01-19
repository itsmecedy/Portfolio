import React from "react";
import portfolio from "/assets/portfolio.png";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "My Portfolio",
      date: "January 2023",
      image: portfolio,
      code: "https://github.com/itsmecedy/Portfolio",
      link: "https://mancio-portfolio.netlify.app/",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem quas ipsa voluptatibus. Placeat, fugiat odio dicta corporis nulla eveniet tempora id iure, vel sunt ipsam itaque consectetur earum",
      techStack: ["React", "CSS", "Tailwind"],
    },
    {
      id: 2,
      name: "Project 2",
      date: "February 2023",
      image: portfolio,
      code: "https://github.com/",
      link: "https://www.facebook.com/",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem quas ipsa voluptatibus. Placeat, fugiat odio dicta corporis nulla eveniet tempora id iure, vel sunt ipsam itaque consectetur earum",
      techStack: ["React", "CSS", "Tailwind"],
    },

    {
      id: 3,
      name: "Project 3",
      date: "February 2023",
      image: portfolio,
      code: "https://github.com/",
      link: "https://www.facebook.com/",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem quas ipsa voluptatibus. Placeat, fugiat odio dicta corporis nulla eveniet tempora id iure, vel sunt ipsam itaque consectetur earum",
      techStack: ["React", "CSS", "Tailwind"],
    },
    // Add more projects as needed
  ];

  return (
    <div id="projects" className="bg-[#f9f9f9]">
      <div className=" max-w-[80rem] flex justify-center items-center mx-auto pt-20 md:pt-24 px-5 flex-col">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row mx-auto shadow-xl bg-white rounded-md py-3 px-4 my-5"
          >
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
              <div className="flex justify-center gap-5 py-6">
                {project.techStack.map((tech, index) => (
                  <p
                    key={index}
                    className="p-1 px-2 rounded shadow-md font-semibold"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex justify-center gap-5 pb-3 ">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1 hover:text-blue-700 hover:drop-shadow-md"
                >
                  <p>Code</p>
                  <FiGithub />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1 hover:text-blue-700 hover:drop-shadow-md"
                >
                  <p>Live Demo</p>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
