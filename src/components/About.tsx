import * as React from "react";
import {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import InfoBox from "./InfoBox";
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
                    {"My name is Charles Alaras! I began coding in 2019, after a long time loving all things technology, and learning how to build and engineer projects. My love for video games was fostered at a very young age, watching my older siblings play video games. The Nintendo Wii was the first official console I remember owning, playing games like Super Smash Bros. Brawl and Mario Kart Wii. My mother always loves telling the story that I knew how to operate a VCR since I was three years old. Since middle school, I was enamored by the field of content creation, and was making my own let's play videos since I was 10 years old. In high school, I enrolled in a STEM based 4 year course where I learned woodworking, welding, CAD, and electrical engineering. To me, this was the most valuable class I ever took in high school, as it taught me fundamental skills of engineering and made me realize my passion of creating things. From this experience, I decided I wanted to pursue Computer Engineering. While I thought the field of software was awesome, I loved coming into my shop in high school in the early morning and being able to physically build and create. Thus, I chose Computer Engineering to also learn more about the hardware side of computers. My end goal is to be able to build and create everything from electronics, graphics cards, movies, music, synthesizers, and everything in between."}
            </motion.div>
            <InfoBox/>
        </div>
    );
}
