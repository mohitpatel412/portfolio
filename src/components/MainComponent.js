import React, { useState} from 'react';
import About from './AboutComponent';
import Experience from './ExperienceComponent';
import Footer from './FooterComponent';
import Skill from './SkillComponent';
import Navbar from './Header1Component';
import Dropdown  from './NavbarDropdown';
import Hero from './HeroCompoent';
import Contact from './ContactComponent';

function Main(){

        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
          setIsOpen(!isOpen);
        };

        
        return (
            <div>
                {/* <Navigation /> */}
                <Navbar toggle={toggle}/>
                <Dropdown isOpen={isOpen} toggle={toggle} />
                <Hero />
                <About />
                <Skill />
                <Experience />
                <Contact />
                <Footer />
            </div>
        )
}

export default Main;