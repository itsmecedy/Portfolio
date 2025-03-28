import React, { useEffect } from "react";
import AOS from "aos";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contacts() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);
  return (
    <div id="contact" data-aos="fade-up">
      <div className="max-w-[80rem] flex justify-center items-center mx-auto px-5 py-20 md:py-24 flex-col gap-10 ">
        <p className=" text-lg font-semibold">
          Ready to collaborate? Exciting projects start with a simple 'Hello
          👋!'
        </p>
        <div className=" flex items-center flex-row gap-2 text-left ">
          <FaLocationDot className=" text-3xl text-blue-600" />
          <p>Pasig 1608, Metro Manila, Philippines</p>
        </div>
        <div className=" flex items-center flex-row gap-2 text-left bg-">
          <MdEmail className=" text-3xl text-blue-600" />
          <a
            href="mailto:cedrickcmancio@gmail.com"
            className=" hover:text-blue-600"
          >
            cedrickcmancio@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
