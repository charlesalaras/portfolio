import Hello from "./components/Hello";
import { motion } from "framer-motion";

export default function Landing(): JSX.Element {
    const text1 = "I'm";
    const name = "Charles Alaras";
    return(
        <div className="landing">
            <Hello/>
            <div className="title-1">
                {text1}
            </div>
            <motion.div
                className="name"
            >
                {name}
            </motion.div>
        </div>
    );
}
