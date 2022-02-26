import { motion } from "framer-motion";
import InfoBox from "./components/InfoBox";
// Use StaticImage from gatsby

export default function About(): JSX.Element {
    return(
        <div className="about">
            <motion.div className="header">
                {"ABOUT"}
            </motion.div>
            <motion.div className="blank">
            </motion.div>
            <InfoBox/>
        </div>
    );
}
