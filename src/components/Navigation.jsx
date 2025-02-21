import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navigation() {
  const navItems = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md fixed w-full z-50">
      <div className="max-w-[80rem] mx-auto px-5">
        <div
          className="flex items-center justify-between h-16"
          data-aos="fade-down"
        >
          <a href="#home" className="text-white text-xl font-semibold">
            ItsMeCedy💻
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-5">
            {navItems.map((item) => (
              <li key={item.id} className="flex">
                <a
                  href={item.id}
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm transition-all duration-300 transform hover:scale-105"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none transition-transform duration-300"
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with animation */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-900 text-white shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        data-aos="fade-down"
      >
        <ul className="space-y-3 py-5">
          {navItems.map((item) => (
            <li key={item.id} className="text-center">
              <a
                href={item.id}
                onClick={toggleMenu}
                className="block px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md transition-all duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
