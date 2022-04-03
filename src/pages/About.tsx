import * as React from "react";
import {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import InfoBox from "../components/InfoBox";
import "../styles/about.css";

// Use StaticImage from gatsby
interface sectionProps {
    section: number
}
export default function About(props: sectionProps): JSX.Element {
    const aboutRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        if(props.section === 2) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[props.section]);
    return(
        <div ref={aboutRef} className="about section">
            <motion.div 
                className="header">
                    {"ABOUT"}
            </motion.div>
            <motion.div 
                className="blank about-body">
                    {"Text goes here"}
            </motion.div>
            <InfoBox/>
        </div>
    );
}
