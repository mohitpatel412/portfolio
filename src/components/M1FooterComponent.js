import React, { Component } from "react";

const Footer = () => {
  return (
    <div
      className="text-gray-600 body-font bg-black"
      id="footer"
      style={{
        background: "#000000",
      }}
    >
      <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center">
        <span className="inline-flex sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            target="_blank"
            title="instagram"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
            className="text-green-400 ml-3 hover:text-pink-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            target="_blank"
            title="linkedin"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/"
            className="text-green-400 ml-3 hover:text-blue-600"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          <a
            target="_blank"
            title="mail"
            href="mailto:someone@gmail.com"
            rel="noopener noreferrer"
            className="text-green-400 ml-3 hover:text-red-600"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            title="mail"
            href="https://github.com"
            rel="noopener noreferrer"
            className="text-green-400 ml-3 mr-3 hover:text-white"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </span>
      </div>
      <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col justify-center text-green-400">
        <a
          href="/"
          className="mx-3 text-green-400 hover:text-yellow-600 hover:no-underline"
        >
          Home
        </a>
        <a
          href="/"
          className="mx-3 text-green-400 hover:text-yellow-600 hover:no-underline"
        >
          About
        </a>
        <a
          href="/"
          className="mx-3 text-green-400 hover:text-yellow-600 hover:no-underline"
        >
          Skills
        </a>
        <a
          href="/"
          className="mx-3 text-green-400 hover:text-yellow-600 hover:no-underline"
        >
          Experience
        </a>
        <a
          href="/"
          className="mx-3 text-green-400 hover:text-yellow-600 hover:no-underline"
        >
          Contact
        </a>
      </div>
      <div>
        <p className="text-md text-green-400 sm:py-2 sm:mt-0 mt-4">
          © 2021 Copyright —
          <a
            href="https://noidea.com/"
            className="text-green-400 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mohit Patel
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
