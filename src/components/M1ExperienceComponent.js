import React from "react";
import M1Experience from "./M1Experience";

const Experience = () => {
  return (
    <section
      className="text-gray-500 body-font bg-black"
      id="experience"
      style={{
        background: "#091c29",
      }}
    >
      <h1 className="text-xxl font-bold justify-center pt-3 text-white">
        Experience
      </h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex mb-2"></div>
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <M1Experience
          org="IoT Lab KIIT"
          role="Trainee Web Developer"
          date="February,2021 - Present"
        />
        <M1Experience
          org="KIIT Robotics Society"
          role="Web Developer"
          date="September,2020 - Present"
        />
      </div>
    </section>
  );
};

export default Experience;
