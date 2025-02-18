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
            I'm Cedrick Mancio an aspiring front-end website developer based in
            Philippines .
          </p>
          <p className="text-neutral-500 lg:text-left">
            As an aspiring front-end developer, I possess a diverse skill set
            including HTML, CSS, Sass,TailwindCSS, JavaScript, and ReactJS. I
            excel in creating and maintaining responsive websites, ensuring a
            seamless user experience. My strength lies in crafting dynamic and
            engaging interfaces by writing clean, optimized code and employing
            cutting-edge development tools. A collaborative team player, I
            thrive in working with cross-functional teams to deliver outstanding
            web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
