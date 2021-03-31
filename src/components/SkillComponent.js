import React from "react";
import M1Skill from "./M1Skill";

const Skill = () => {
  return (
    <section
      className="text-gray-200 bg-black"
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
          header="WebDesign"
          description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book."
        />
        <M1Skill
          header="IntegratonWeb"
          description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text
        used in laying out print, graphic or web designs. The passage is
        attributed to an unknown typesetter in the 15th century who is
        thought to have scrambled parts of Cicero's De Finibus Bonorum
        et Malorum for use in a type specimen book."
        />
        <M1Skill
          header="Development Backend"
          description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text
        used in laying out print, graphic or web designs. The passage is
        attributed to an unknown typesetter in the 15th century who is
        thought to have scrambled parts of Cicero's De Finibus Bonorum
        et Malorum for use in a type specimen book."
        />
      </div>
    </section>
  );
};

export default Skill;
