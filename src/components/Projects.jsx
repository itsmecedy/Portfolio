import React from "react";
import portfolio from "/assets/portfolio.png";
import MichiRamen from "/assets/michi-ramen.png";
import MiniChallenges from "/assets/MiniChallenges.png";
import ABCMotorShop from "/assets/abc-motor-shop.jpg";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 0,
      name: "My Portfolio",
      date: "January 2024",
      image: portfolio,
      code: "https://github.com/itsmecedy/Portfolio",
      link: "https://mancio-portfolio.netlify.app/",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem quas ipsa voluptatibus. Placeat, fugiat odio dicta corporis nulla eveniet tempora id iure, vel sunt ipsam itaque consectetur earum",
      techStack: ["React", "CSS", "Tailwind"],
    },
    {
      id: 1,
      name: "ABC Motor Parts Store",
      date: "December 2021",
      image: ABCMotorShop,
      description:
        " This is the product of our thesis made with Python, Django, REST, HTML, CSS, JS, ReactJs, TailwindCSS entitled Online Sales and Inventory for ABC Motor Parts The system designed and constructed a Web Based Sales and Inventory to increase efficiency and improve services provided to the customers through better application of technology.",
      techStack: [
        "React",
        "HTML",
        "CSS",
        "JS",
        "TailwindCSS",
        "Python",
        "Django",
        "REST",
      ],
    },
    {
      id: 2,
      name: "Mini Challenges",
      date: "January 2023",
      image: MiniChallenges,
      code: "https://github.com/itsmecedy/mini-challenges",
      link: "https://minichallenges.netlify.app/",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem quas ipsa voluptatibus. Placeat, fugiat odio dicta corporis nulla eveniet tempora id iure, vel sunt ipsam itaque consectetur earum",
      techStack: ["React", "CSS", "Tailwind"],
    },
    {
      id: 3,
      name: "Michi Ramen Clone",
      date: "November 2022",
      image: MichiRamen,
      code: "https://github.com/itsmecedy/MichiRamen",
      link: "https://michi-ramen-github.netlify.app/",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem quas ipsa voluptatibus. Placeat, fugiat odio dicta corporis nulla eveniet tempora id iure, vel sunt ipsam itaque consectetur earum",
      techStack: ["HTML", "CSS", "Tailwind"],
    },
    {
      id: 4,
      name: "Coron Palawan",
      date: "November 2022",
      image: MichiRamen,
      code: "https://github.com/itsmecedy/Coron-Palawan",
      link: "https://palawan-website.netlify.app",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem quas ipsa voluptatibus. Placeat, fugiat odio dicta corporis nulla eveniet tempora id iure, vel sunt ipsam itaque consectetur earum",
      techStack: ["HTML", "CSS", "Sass"],
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
