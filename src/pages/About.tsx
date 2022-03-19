import * as React from "react";
import { motion } from "framer-motion";
import InfoBox from "../components/InfoBox";
import "../styles/about.css";

// Use StaticImage from gatsby

export default function About(): JSX.Element {
    return(
        <div className="about section">
            <motion.div 
                className="header">
                    {"ABOUT"}
            </motion.div>
            <motion.div 
                className="blank">
                    {"Text goes here"}
            </motion.div>
            <InfoBox/>
        </div>
    );
}
