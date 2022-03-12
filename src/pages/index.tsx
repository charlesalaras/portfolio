import * as React from "react";
import "../styles/styles.css";

import NavBar from "../components/NavBar";
import Socials from "../components/Socials";

import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Credits from "./Credits";

export default function App(): JSX.Element {
    return(
        <div className="app">
            <NavBar/>
            <Socials/>
            <Landing/>
            <About/>
            <Projects/>
            <Contact/>
            <Credits/>
        </div>
    );
}
