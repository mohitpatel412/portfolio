import React, { useState } from "react";

const Navbar = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglepath = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className="flex justify-between items-center h-16 bg-black text-green-400 shadow-sm text-md sticky"
      role="navigation"
    >
      <a href="/" className="pl-8 text-green-400 hover:no-underline text-xl">
        PortFolio
      </a>
      <button
        type="button"
        className="block lg:hidden"
        onClick={() => {
          toggle();
          togglepath();
        }}
      >
        <svg
          className="h-8 w-8 fill-current ml-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen && (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          )}
          {!isOpen && (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>
      <div className="pr-8 md:block hidden">
        <a
          href="/"
          className="p-4 text-green-400 hover:no-underline hover:text-yellow-500"
        >
          Home
        </a>
        <a
          href="#about"
          className="p-4 text-green-400 hover:no-underline hover:text-yellow-500"
        >
          About
        </a>
        <a
          href="#skill"
          className="p-4 text-green-400 hover:no-underline hover:text-yellow-500"
        >
          Skills
        </a>
        <a
          href="#experience"
          className="p-4 text-green-400 hover:no-underline hover:text-yellow-500"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="p-4 text-green-400 hover:no-underline hover:text-yellow-500"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
