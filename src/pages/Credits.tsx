import * as React from "react";
import { motion } from "framer-motion";
import "../styles/credits.css";

export default function Credits(): JSX.Element {
    return(
        <div className="credits">
            <motion.div className="header">
                {"CREDITS"}
            </motion.div>
            <motion.div className="gallery">
            
            </motion.div>
            <motion.div className="blank">
            
            </motion.div>
            <motion.div className="gallery">
            
            </motion.div>
        </div>
    );
}
