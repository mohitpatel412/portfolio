import React from "react";
import { a } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-black text-blue-600"
          : "hidden"
      }
      onClick={toggle}
    >
      <a href="/" className="p-2">
        Home
      </a>
      <a href="#about" className="p-2">
        About
      </a>
      <a href="#skill" className="p-2">
        Skills
      </a>
      <a href="#experience" className="p-2">
        Experience
      </a>
      <a href="#contact" className="p-2">
        Contact
      </a>
    </div>
  );
};

export default Dropdown;
