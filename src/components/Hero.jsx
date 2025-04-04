import React, { useEffect } from "react";
import AOS from "aos";
import heroImg from "../assets/cedy.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwindcss.png";
import sass from "../assets/sass.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import Resume from "../assets/documents/Mancio-Resume.pdf";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const images = [html, css, javascript, react, sass, tailwind];
  const imageElements = images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Image ${index}`}
      className=" h-12 md:h-16"
    />
  ));
  return (
    <div id="home" className="bg-[#f9f9f9] md:h-screen">
      <div className=" max-w-[80rem] flex justify-center items-center mx-auto px-5 pt-20 md:pt-24 lg:pt-40 flex-col lg:flex-row gap-10">
        {/* left side in big screen */}
        <div className="flex-1 flex justify-center px-5 " data-aos="fade-right">
          <img
            loading="lazy"
            src={heroImg}
            alt="heroImg.png"
            id="heroimg"
            className="h-auto w-full max-w-sm lg:max-w-lg"
          />
        </div>
        {/* right side in big screen */}
        <div
          className="flex-1 lg:pt-20 px-5 md:px-20 lg:px-5  space-y-3 md:space-y-4"
          data-aos="fade-left"
        >
          <p className="font-semibold text-2xl md:text-3xl">
            Front-End Web Developer💻
          </p>
          <p className="text-slate-500 md:text-2xl lg:text-3xl  ">
            Hi I'm Cedrick Mancio. A passionate aspiring front-end developer👋.
          </p>

          <div className=" flex justify-center items-center gap-10 lg:flex-col">
            <div className="justify-center gap-3 flex text-slate-700 text-5xl lg:text-6xl ">
              <a
                href="https://www.facebook.com/hillo.cabello/"
                target="_blank"
                rel="noreferrer"
                className=" hover:text-blue-700"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/cedrick-mancio/"
                target="_blank"
                rel="noreferrer"
                className=" hover:text-blue-700 "
              >
                <AiFillLinkedin />
              </a>
            </div>
            <div className="">
              <a
                href={Resume}
                target="_blank"
                rel="noreferrer"
                className=" hover:bg-blue-700 bg-blue-600 hover:shadow-md px-3 py-2 rounded-md text-white lg:text-3xl text-lg"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row justify-center items-center mt-5 pb-20 lg:mt-8 space-y-3 md:space-y-0 md:space-x-5 "
        data-aos="fade-up"
      >
        <p className="xl:text-xl border-b-2 md:border-b-0 md:border-r-2 md:pr-5 border-black font-semibold">
          Tech Stack
        </p>
        <div className="flex ">
          <div className="flex gap-6 flex-wrap justify-center ">
            {imageElements}
          </div>
        </div>
      </div>
    </div>
  );
}
