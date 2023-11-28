import React from "react";
import heroImg from "/assets/aboutimg.jpg";

function About() {
  return (
    <div
      id="about"
      className="flex justify-center py-20 px-5 md:px-10 items-center flex-col lg:flex-row gap-10 max-w-[1280px] mx-auto "
    >
      <div className=" lg:w-1/2 flex justify-end ">
        <img className=" rounded-2xl w-full max-w-lg mx-auto " src={heroImg} />
      </div>
      <div className="lg:w-1/2 w-full md:w-[600px] ">
        <p className="bold uppercase font-bold text-lg text-blue-600 mb-4">
          about me
        </p>
        <p className=" font-semibold text-2xl tracking-tight mb-4 ">
          A dedicated Front-end Developer based in Belgrade, Serbia 📍
        </p>
        <p className=" text-neutral-500">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
}

export default About;
