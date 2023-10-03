import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navigation() {
  const navItems = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 text-white">
              ItsMeCedy💻
            </a>
          </div>
          <ul className="hidden md:flex gap-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation when menu is open */}
      {isOpen && (
        <ul className="md:hidden">
          {navItems.map((item) => (
            <li key={item.id} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href={item.id}
                onClick={toggleMenu}
                className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
