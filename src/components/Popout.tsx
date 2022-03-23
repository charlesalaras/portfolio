import React, { useState, Fragment } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import * as styles from "./popout.module.css";

//FIXME: Pass Scroll Position for Usage
export default function Popout() {
    const sections = ["HOME", "ABOUT", "PROJECTS", "CONTACT", "CREDITS"];
    return(
        <Fragment>
        <AnimatePresence>
                <motion.div
                    className={styles.popout}
                    animate={{ width: '25vw' }}
                    exit={{ width: '0%' }}
                >
                    <LayoutGroup>
                        {sections.map((section) => (
                            <motion.li
                                key={section}
                                className="popout-list"
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
