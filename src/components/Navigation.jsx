import React from "react";
import { HiMenu } from "react-icons/hi";

function Navigation() {
  const navItems = [
    { id: "#about", label: "About" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];
  return (
    <nav className=" w-full">
      <div className="flex justify-between text-center text-xl px-5 md:text-2xl md:py-5  max-w-[1280px] mx-auto ">
        <a href="#" className="my-auto font-semibold hover:text-blue-700">
          Cedy
        </a>
        <HiMenu className="md:hidden h-10 w-10 hover:text-blue-700 " />
        <ul className="hidden md:flex gap-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.id} className="hover:text-blue-700">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
