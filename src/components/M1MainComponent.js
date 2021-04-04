import React, { useState } from "react";
import About from "./M1AboutComponent";
import Experience from "./M1ExperienceComponent";
import Footer from "./M1FooterComponent";
import Skill from "./M1SkillComponent";
import Navbar from "./M1HeaderComponent";
import Dropdown from "./M1NavbarDropdown";
import Hero from "./M1HeroComponent";
import Contact from "./M1ContactComponent";
// import Blog from "./M1BlogComponent";
import M2Hero from "./M2HeroComponent";
import M3Hero from "./M3HeroComponent";

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <Navigation /> */}
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      {/* <M2Hero />
      <M3Hero /> */}
      <About />
      <Skill />
      <Experience />
      <Contact />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
}

export default Main;
