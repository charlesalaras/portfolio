import * as React from "react";
import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import "../styles/styles.css";

import NavBar from "../components/NavBar";
import Socials from "../components/Socials";

import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Credits from "./Credits";

export default function App(): JSX.Element {
    const [section, setSection] = useState(1);
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
            <NavBar section={section}/>
            <Socials/>
            <Landing/>
            <About/>
            <Projects/>
            <Contact/>
            <Credits/>
        </div>
    );
}
