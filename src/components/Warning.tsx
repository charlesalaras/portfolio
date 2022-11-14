import * as React from "react";
import "../styles/util.css";
import { motion } from "framer-motion";

export default function Alert(props: any): JSX.Element {
    return(
        <motion.div 
            className="warning"
            exit={{top: "-9vh"}}
        >
            <div className="warning-text">
            🚧 Alert! This website is currently being revamped, and data on here may be deprecated / non-functional.
            </div>
            <button className="warning-close" onClick={() => props.closeFunc(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </motion.div>
    );
}
