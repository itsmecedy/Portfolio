import React from "react";
import portfolio from "/assets/portfolio.png";
import MichiRamen from "/assets/michi-ramen.png";
import MiniChallenges from "/assets/MiniChallenges.png";
import ABCMotorShop from "/assets/abc-motor-shop.jpg";
import CoronPalawan from "/assets/coron-palawan.png";
import FrontendMentorProj from "/assets/frontend-mentor-projects.png";
import Pokedex from "/assets/pokedex.png";
import WeatherApp from "/assets/weather-app.png";
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
        "Welcome to my web portfolio, the gateway to my world as a frontend developer. Explore a showcase of my skills and projects that serves as a visual testament to my journey. Each project tells a unique story of creativity and innovation, showcasing my dedication to crafting engaging and innovative digital experiences.",
      techStack: ["HTML", "CSS", "JS", "React", "CSS", "Tailwind"],
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
      name: "Coron Palawan",
      date: "November 2022",
      image: CoronPalawan,
      code: "https://github.com/itsmecedy/Coron-Palawan",
      link: "https://palawan-website.netlify.app",
      description:
        "Check out my Coron Palawan website, a project shaped by my HTML, CSS, and SaSS learning journey with guidance from Emmanuel Santiago's tutorial. Come along and experience the charm of Coron through my web development perspective!",
      techStack: ["HTML", "CSS", "Sass"],
    },
    {
      id: 3,
      name: "Michi Ramen Clone",
      date: "November 2022",
      image: MichiRamen,
      code: "https://github.com/itsmecedy/MichiRamen",
      link: "https://michi-ramen-github.netlify.app/",
      description:
        "This is a clone website inspired by Michi Ramen where I practiced my HTML and CSS skills. The project was all about practicing web design and development, with a particular focus on improving my web responsiveness skills. Venturing through GitHub and Netlify, I made this project come alive, marking a meaningful step in my journey towards becoming a skilled web developer.",
      techStack: ["HTML", "CSS", "Tailwind"],
    },
    {
      id: 4,
      name: "Mini Challenges",
      date: "January 2023",
      image: MiniChallenges,
      code: "https://github.com/itsmecedy/mini-challenges",
      link: "https://minichallenges.netlify.app/",
      description:
        "These beginner projects really made a difference in my coding journey. They were like stepping stones, helping me feel more comfortable and confident in my coding skills. Instead of feeling intimidated, I'm now excited to kick off new projects. Thanks to Andy Sterkowitz's guidance, learning JavaScript has become a fun and rewarding adventure.",
      techStack: ["React", "CSS", "Tailwind"],
    },
    {
      id: 5,
      name: "Frontend Mentor Projects",
      date: "February 2025",
      image: FrontendMentorProj,
      code: "https://github.com/itsmecedy/frontend-mentor-projects-",
      link: "https://frontend-mentor-projects-itsmecedy.netlify.app/",
      description:
        "I worked on these Frontend Mentor projects to improve my layout, interactivity, and responsiveness skills. I practiced Sass for better styling structure, TailwindCSS for speed, and React for building interactive components. It was a great way to apply what Ive learned and get more comfortable with modern frontend tools.",
      techStack: ["HTML", "CSS", "JS", "TailwindCSS", "ReactJS"],
    },
    {
      id: 6,
      name: "Pokedex",
      date: "October 2024",
      image: Pokedex,
      code: "https://github.com/itsmecedy/Pokemon",
      link: "https://itzmecedy-pokedex.netlify.app/",
      description:
        "An interactive Pokédex that allows users to search for Pokémon and view their stats, abilities, and types. Built using PokeAPI to fetch real-time Pokémon data.",
      techStack: ["HTML", "CSS", "JavaScript", "SCSS", "PokeAPI"],
    },
    {
      id: 7,
      name: "Weather App",
      date: "February 2025",
      image: WeatherApp,
      code: "https://github.com/itsmecedy/weather-app",
      link: "https://itzmecedy-weather-app.netlify.app/",
      description:
        "A weather application that provides real-time weather updates along with a 5-day forecast, showing temperature trends and conditions. Built using OpenWeatherMap API.",
      techStack: ["HTML", "CSS", "JavaScript", "SCSS", "OpenWeatherMap API"],
    },

    // Add more projects here
  ];
  // Sorting logic: Keep 0 & 1 first, then reverse the rest
  const sortedProjects = [
    projects[0],
    projects[1],
    ...projects.slice(2).reverse(),
  ];

  return (
    <div id="projects" className="bg-[#f9f9f9]">
      <div className=" max-w-[80rem] flex justify-center mx-auto pt-16 md:pt-20 px-5 flex-col">
        <p className=" flex text-4xl text-gray-800 mb-2">Projects</p>
        {sortedProjects.map((project) => (
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
