import React, { useState } from "react";
// import {Link} from "gatsby"

const Navigation = () => {
  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <div className="bg-black text-green-500">
        <button type="button" className="block lg:hidden" onClick={handleClick}>
          <svg
            className="h-8 w-8 fill-current"
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

        <ul className={`lg:flex ${isOpen ? "block" : "hidden"} `}>
          <div className="ml-auto sm:flex">
            <li>
              <a href="/" className="mx-3 hover:no-underline ">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="mx-3 hover:no-underline ">
                About
              </a>
            </li>
            <li>
              <a href="/" className="mx-3 hover:no-underline ">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="mx-3 hover:no-underline ">
                Experience
              </a>
            </li>
            <li>
              <a href="/" className="mx-3 hover:no-underline ">
                Contact
              </a>
            </li>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
