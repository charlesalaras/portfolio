import * as React from "react";
import Hello from "../components/Hello";
import { motion } from "framer-motion";
import "../styles/landing.css";

export default function Landing(): JSX.Element {
    const text1 = "I'm";
    const name = "Charles Alaras";
    return(
        <div className="landing section">
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
