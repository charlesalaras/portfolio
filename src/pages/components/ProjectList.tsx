import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProjectData } from "../hooks/project-data";

type ProjectsProps = {
    updater: (arg1: string) => void,
    value: { [key: string]: boolean },
    param: string
}

type ListElement = {
    node: { [key: string]: string }
}

export default function ProjectList(props: ProjectsProps): JSX.Element {
    const { data } = useProjectData();
    // If Filters Enabled, Filter Data
    const arr = (data.edges).filter(calculateFilter);
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
/*
    const calculateCategory = (category: string) => {
        // Is Every Element the Same?

        const allEqual = (arr: boolean[]) => arr.every(v => v === arr[0]);
        if(allEqual(Object.values(props.value))) {
            return true;
        }
        // Is the Lone the Same?
        else if(props.value[category]) {
            return true;
        }
        // None Are the Same
        return false;
    }
*/
    return(
        <div className="empty">
            <AnimatePresence>
            {arr.map((project: ListElement) => (
                <motion.div
                    className={project.node.category}
                    key={project.node.slug}
                    onClick={() => props.updater(project.node.slug)}
                >
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}
