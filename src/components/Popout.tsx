import React, { useState, Fragment } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import * as styles from "./popout.module.css";

interface PopoutProps {
    section: number
}

export default function Popout(props: PopoutProps): JSX.Element {
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
                                className={sections[props.section - 1] == section ? `${styles.selected}` : ""}
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
