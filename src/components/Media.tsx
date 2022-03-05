import { useState } from "react";
import { StaticImage } from "gatsby";
import { motion } from "framer-motion";

interface MediaProps {
    content: string[]
}
// FIXME: Use a dynamic image instead (how to get src from gatsby query?)
export function Slideshow(props: MediaProps): JSX.Element {
    return(
        <motion.div>
            <motion.button className="slide">
            </motion.button>
            <motion.button className="slide">
            </motion.button>
            {props.content.map((source) => (
                <StaticImage src={source}></StaticImage>
            ))}
        </motion.div>
    );
}

export function Video(props: MediaProps): JSX.Element {
    return(
        <motion.div>
            Hello!
        </motion.div>
    );
}
