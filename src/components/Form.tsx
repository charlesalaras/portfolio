import * as React from "react";
import { motion } from "framer-motion";

export default function Form(): JSX.Element {
    return(
        <motion.div className="form">
            <form>
                <div>
                <label htmlFor="name">Full Name:</label>
                <br></br>
                    <input type="text" id="name" name="name" placeholder="Full Name"/>
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <br></br>
                    <input type="email" id="email" name="email" placeholder="Email Address"/>
                </div>
                <label htmlFor="subject">Subject Matter:</label>
                <div>
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
                </div>
                <div style={{height: "60%"}}>
                <label htmlFor="body">Message Body</label>
                <br></br>
                    <textarea placeholder="Enter message here..."></textarea>
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <input type="submit" value="Submit"/>
                </div>
            </form>
        </motion.div>
    );
}
