import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

export default function InfoBox(): JSX.Element {
    return(
        <motion.div className="info-box">
            <StaticImage src="../../images/" alt="Portrait"></StaticImage>

        </motion.div>
    );
}
