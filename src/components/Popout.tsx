import React, { useState, Fragment } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import * as styles from "./popout.module.css";

interface PopoutProps {
    realSection: number,
    navFunc: any
}

export default function Popout(props: PopoutProps): JSX.Element {
    const sections = [
        {key: "HOME", value: 1}, 
        {key: "ABOUT", value: 2}, 
        {key: "PROJECTS", value: 3}, 
        {key: "CONTACT",  value: 4},
        {key: "CREDITS", value: 5}
    ];
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
                                key={section.key}
                                className={props.realSection == section.value ? `${styles.selected}` : ""}
                                onClick={() => props.navFunc(section.value)}
                                layout
                            >
                                {section.key}

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
