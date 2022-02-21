import React, { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popout() {
    return(
        <Fragment>
        <AnimatePresence>
                <motion.div
                    className="popout"
                    animate={{ width: '30vw' }}
                    exit={{ width: '0%' }}
                >
                    <button className="section">{"HOME"}</button>
                    <button className="section">{"ABOUT"}</button>
                    <button className="section">{"PROJECTS"}</button>
                    <button className="section">{"CONTACT"}</button>
                    <button className="section">{"CREDITS"}</button>
                </motion.div>
        </AnimatePresence>
        <AnimatePresence>
                <motion.div
                    className="overlay"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                </motion.div>
        </AnimatePresence>
        </Fragment>
    );
}
