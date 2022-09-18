import * as React from "react";
import { motion } from "framer-motion";

export default function InfoBox(): JSX.Element {
    return(
        <motion.div className="about-bio">
            <h1>Name</h1>
            <p>Charles Alaras</p>
            <h1>Alma Mater</h1>
            <p>UCR 2023</p>
            <h1>Favorite Color</h1>
            <p>Blue</p>
            <h1>Proficient Programs</h1>
            <p>Premiere Pro, Word, Blender, After Effects, Fusion 360, Solidworks</p>
            <h1>Programming Languages</h1>
            <p>C, C++, Python, HTML, CSS, JavaScript</p>
            <h1>Frameworks</h1>
            <p>React, Svelte, Flask</p>
        </motion.div>
    );
}
