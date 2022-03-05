import React, { useState, Fragment } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

//FIXME: Pass Scroll Position for Usage
export default function Popout() {
    const sections = ["HOME", "ABOUT", "PROJECTS", "CONTACT", "CREDITS"];
    return(
        <Fragment>
        <AnimatePresence>
                <motion.div
                    className="popout"
                    animate={{ width: '30vw' }}
                    exit={{ width: '0%' }}
                >
                    <LayoutGroup>
                        {sections.map((section) => (
                            <motion.li
                                key={section}
                                className="section"
                                onClick={() => console.log("Change Section!")}
                                layout
                            >
                                {section}

                            </motion.li>
                        ))}
                    </LayoutGroup>
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