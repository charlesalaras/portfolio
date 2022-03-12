import * as React from "react";
import { motion } from "framer-motion";

export default function Form(): JSX.Element {
    return(
        <motion.div className='center'>
            <form >
                <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" placeholder="Full Name"/>
                <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email Address"/>
                <label htmlFor="subject">Subject Matter:</label>
                    <input type="radio" id="motion-graphics" name="subject" value="Motion Graphics"/>
                <label htmlFor="motion-graphics">Motion Graphics</label>
                    <input type="radio" id="video-production" name="subject" value="Video Production"/>
                <label htmlFor="video-production">Video Production</label>
                    <input type="radio" id="metalworking" name="subject" value="Metalworking"/>
                <label htmlFor="metalworking">Metalworking</label>
                    <input type="radio" id="web-dev" name="subject" value="Web Dev"/>
                <label htmlFor="web-dev">Web Dev</label>
                    <input type="radio" id="programming" name="subject" value="Programming"/>
                <label htmlFor="programming">Programming</label>
                    <input type="radio" id="woodworking" name="subject" value="Woodworking"/>
                <label htmlFor="woodworking">Woodworking</label>
                    <input type="radio" id="hardware" name="subject" value="Hardware"/>
                <label htmlFor="hardware">Hardware</label>
                <label htmlFor="body">Message Body</label>
                    <textarea placeholder="Enter message here..."></textarea>
                <input type="submit" value="Submit"/>
            </form>
        </motion.div>
    );
}
