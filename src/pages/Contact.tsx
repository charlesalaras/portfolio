import * as React from "react";
import { useEffect, useRef } from "react";
import Form from "../components/Form";
import { motion } from "framer-motion";
import "../styles/contact.css";

interface sectionProps {
    section: number
}
export default function Contact(props: sectionProps): JSX.Element {
    const contactRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        if(props.section === 4) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[props.section]);
    return(
        <div ref={contactRef} className="contact section">
            <motion.div className="header">
                {"CONTACT"}
            </motion.div>
            <Form></Form>
        </div>
    );
}
