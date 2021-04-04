import React from "react";
import M1Skill from "./M1Skill";

const Skill = () => {
  return (
    <section
      className="text-gray-200 bg-black"
      id="skill"
      style={{
        background: "#091c29",
      }}
      id="skill"
    >
      <h1 className="text-xxl font-bold justify-center">Skills</h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex mb-4"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <M1Skill
          header="Problem Solving & DSA"
          description="5⭐ Problem Solving at Hackerrank. 2⭐ at Codechef."
        />
        <M1Skill
          header="WebDesign"
          description="Intermediate proficiency in HTML 5, CSS, JavaScript, Bootstrap, ReactJS, TailwindCSS. 
                Ability to structure all the files in a clean way. "
        />
        <M1Skill
          header="Development Backend"
          description="Intermediate proficiency in Node.js, Express.js and MongoDB. 
                      Ability to handle API's and use JSON Document."
        />
      </div>
    </section>
  );
};

export default Skill;
