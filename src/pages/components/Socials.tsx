import React, { useState } from "react";
import {motion} from "framer-motion";
import linkedin from "./icons/bi/linkedin.svg";
import github from "./icons/bi/github.svg";
import chat from "./icons/bi/chat-left-text-fill.svg";
// FIXME: Insert Blog Domain
export default function Socials(): JSX.Element {
    return(
        <div className="socials">
                <motion.a 
                    className="social"
                    animate={{ opacity: '70%' }}
                    whileHover={{ scale: 1.5, opacity: '100%' }}
                    initial={ false }
                    href="https://www.linkedin.com/in/charles-alaras"
                >
                    <img src={linkedin}></img>
                </motion.a>
                <motion.a 
                    className="social"
                    animate={{ opacity: '70%' }}
                    whileHover={{ scale: 1.5, opacity: '100%' }}
                    initial={ false }
                    href="https://www.github.com/charlesalaras"
                >
                    <img src={github}></img>
                </motion.a>
                <motion.a 
                    className="social"
                    animate={{ opacity: '70%' }}
                    whileHover={{ scale: 1.5, opacity: '100%' }}
                    initial={ false }
                    href="#"
                >
                    <img src={chat}></img>
                </motion.a>
        </div>
    );
}
