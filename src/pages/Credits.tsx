import * as React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/credits.css";

interface sectionProps {
    section: number
}
export default function Credits(props: sectionProps): JSX.Element {
    const creditsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        if(props.section === 5) {
            creditsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[props.section]);
    return(
        <div ref={creditsRef} className="credits section">
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
