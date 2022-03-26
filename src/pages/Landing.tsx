import * as React from "react";
import { useEffect, useRef } from "react";
import Hello from "../components/Hello";
import { motion } from "framer-motion";
import "../styles/landing.css";

interface sectionProps {
    section: number,
}

export default function Landing(props: sectionProps): JSX.Element {
    const text1 = "I'm";
    const name = "Charles Alaras";

    const homeRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        if(props.section === 1) {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[props.section]);
    return(
        <div ref={homeRef} className="landing section">
            <Hello/>
            <div className="title-1">
                {text1}
            </div>
            <motion.div
                className="name"
            >
                {name}
            </motion.div>
        </div>
    );
}
