import { motion } from "framer-motion";
import InfoBox from "../components/InfoBox";
import * as styles from "../styles/about.module.css";

// Use StaticImage from gatsby

export default function About(): JSX.Element {
    return(
        <div className="about">
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
