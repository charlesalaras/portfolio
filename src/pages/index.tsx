import * as React from "react"
import "./styles.css"

import Hello from "./components/Hello";
import NavBar from "./components/NavBar";
import Projects from "./Projects";

export default function App(): JSX.Element {
    return(
        <div>
            <Hello/>
            <NavBar/>
            <Projects/>
        </div>
    );
}
