import React from "react";

const About = () => {
  return (
    <section
      className="text-gray-400 body-font bg-black"
      id="about"
      style={{
        background: "#091c29",
      }}
    >
      <h1 className="text-xxl font-bold justify-center pt-3 text-white">
        About
      </h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex mb-2"></div>
      </div>
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-28 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src="images/mohit1.jpg"
                  alt="Profile Photo"
                  className="h-24 w-52"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-400 text-lg">
                  Mohit Patel
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base"></p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                I am learning HTML, CSS, Javascript and MERN stack.{" "}
              </p>
              <p className="leading-relaxed text-lg mb-4">
                I am a 3rd year B.Tech undergraduate, I want to pursue my career
                in Web Development. I'm learning MERN stack. I am a technology
                enthusiast , maybe not the most skilled one but skilled enough
                to learn and implement things for the benefit of your company.{" "}
              </p>
              <a className="text-indigo-500 inline-flex items-center" href="/">
                <button className="bg-white text-black px-4 py-2 rounded font-bold">
                  <a href="./resume/MohitResume.pdf" download="MohitResume.pdf">
                    RESUME
                  </a>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
