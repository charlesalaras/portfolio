import * as React from "react";
import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import "../styles/styles.css";

import NavBar from "../components/NavBar";
import Socials from "../components/Socials";

import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Credits from "../components/Credits";

export default function App(): JSX.Element {
    const [section, setSection] = useState(1); // Controlled by Scrolling
    const [navSection, setnavSection] = useState(1); // Controlled by Navigation
    const { scrollYProgress } = useViewportScroll();

    useEffect(() => scrollYProgress.onChange(v => {
        if(v < 0.2) {
            return setSection(1);
        }
        else if(v >= 0.2 && v < 0.4) {
            return setSection(2);
        }
        else if(v >= 0.4 && v < 0.6) {
            return setSection(3);
        }
        else if(v >= 0.6 && v < 0.8) {
            return setSection(4);
        }
        else if(v >= 0.8 && v <= 1) {
            return setSection(5);
        }
    }), [scrollYProgress]);
    return(
        <div className="app">
            <NavBar scrollSection={section} navFunc={setnavSection}/>
            <Socials/>
            <Landing section={navSection}/>
            <About section={navSection}/>
            <Projects section={navSection}/>
            <Contact section={navSection}/>
            <Credits section={navSection}/>
        </div>
    );
}
