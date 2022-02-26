import Form from "./components/Form";
import { motion } from "framer-motion";

export default function Contact():JSX.Element {
    return(
        <div className="contact">
            <motion.div className="header">
                {"CONTACT"}
            </motion.div>
            <Form></Form>
        </div>
    );
}
