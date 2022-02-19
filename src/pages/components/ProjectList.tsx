import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectsProps = {
    // Sets the selected project (if any)
    updater: (arg1: string) => void,
    // Gives the filter for rendering
    value: { [key: string]: boolean },
    // Gives the search parameter
    param: string,
    // Gives array of projects
    data: any // Define this better
}

type ListElement = {
    node: { [key: string]: string }
}

export default function ProjectList(props: ProjectsProps): JSX.Element {
    // If Filters Enabled, Filter Data
    const arr = (props.data).filter(calculateFilter);
    // Checks if Project should be displayed
    function calculateFilter(arrElement: ListElement): boolean {
        // Are all filters true or false?
        const allEqual = (arr: boolean[]) => arr.every(v => v === arr[0]);
        if(arrElement.node.title.includes(props.param)) {
            if(allEqual(Object.values(props.value))) {
                return true;
            }
            else if(props.value[arrElement.node.category]) {
                return true;
            }
        }
        return false;
    }
    return(
        <div className="empty">
            <AnimatePresence>
            {arr.map((project: ListElement) => (
                <motion.div
                    className={project.node.category}
                    key={project.node.slug}
                    onClick={() => props.updater(project.node.slug)}
                >
                {project.node.title}
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}
