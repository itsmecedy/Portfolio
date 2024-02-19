import React, { useState, useEffect } from "react";
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
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-[80rem] mx-auto px-5 ">
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
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
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
      <div>
        <button onClick={toggleMenu}>Toggle Menu</button>
        {isOpen && (
          <ul
            ref={navRef}
            className="absolute top-16 left-0 w-full bg-gray-800 z-50"
          >
            {navItems.map((item, index) => (
              <li key={index} className="px-4 py-2">
                <Link
                  to={item.path}
                  onClick={toggleMenu}
                  className="text-white hover:bg-gray-700 rounded block w-full text-center"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
