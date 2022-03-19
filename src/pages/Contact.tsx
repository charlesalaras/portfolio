import * as React from "react";
import Form from "../components/Form";
import { motion } from "framer-motion";
import "../styles/contact.css";

export default function Contact(): JSX.Element {
    return(
        <div className="contact section">
            <motion.div className="header">
                {"CONTACT"}
            </motion.div>
            <Form></Form>
        </div>
    );
}
