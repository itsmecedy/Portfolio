import React from "react";
import aboutImg from "/assets/aboutimg.jpg";

export default function About() {
  return (
    <div id="about">
      <div className=" max-w-[80rem] flex justify-center items-center mx-auto px-5 py-20 md:py-24 flex-col lg:flex-row gap-10 ">
        <div className="lg:w-1/2 flex justify-center ">
          <img className="rounded-2xl w-full max-w-lg " src={aboutImg} />
        </div>
        <div className="lg:w-1/2 w-full md:w-[600px] ">
          <p className="bold uppercase font-bold text-lg text-blue-600 mb-4 lg:text-left">
            about me
          </p>
          <p className="font-semibold text-2xl tracking-tight mb-4 lg:text-left ">
            A dedicated Front-end Developer based in Belgrade, Serbia 📍
          </p>
          <p className="text-neutral-500 lg:text-left">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
