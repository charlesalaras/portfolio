import * as React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/credits.css";

interface sectionProps {
    section: number
}
export default function Credits(props: sectionProps): JSX.Element {
    const creditsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        if(props.section === 5) {
            creditsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[props.section]);
    return(
        <div ref={creditsRef} className="credits section">
            <motion.div className="header">
                {"CREDITS"}
            </motion.div>
            <div className="innerCredits">
            <motion.div className="gallery">
            
            </motion.div>
            <motion.div className="blank blurb">
                <p>
                {"If you've made it this far, thank you for looking through my website. In all honesty, I've been working on this for roughly a year. Over that year, I unfortunately ended up disliking this website a bit. There's a lot wrong with it. I created this website when I was new to web dev, and I ambitiously wanted to create something in React. I had heard about Gatsby from somewhere, and thought it would be an awesome way to build my website. At first it was, and it taught me everything I know about React. However, the learning curve of doing React + CSS + HTML + Gatsby + Framer Motion all together became a burden. I also ended up disliking how my website looked and regret that I did not find out about component frameworks like MUI sooner (although maybe that would've made the development time even longer). I wanted to add a blog on top of all this, which was a recipe for even more disaster. In 2022, I finally decided to take a look at Svelte and had the bittersweet epiphany that it does everything I want and more in one small, performant pacakage. So eventually this website will look entirely different. I also learned about Material Design and will try to follow its philosophy more closely so I can give the website more cohesion. One thing that is nice is designing this website taught me how interesting UI/UX design is (it also taught me that I really need to find a graphic design course). In any case, I'm just glad this website finally got made and is live, no matter what state its in. After all, I get a domain out of this."} 
                </p>
                <p>
                {"A massive thank you to all the professors that have taught me in my journey, and to the mentors I met along the way."}
                </p>
            </motion.div>
            <motion.div className="gallery">
            
            </motion.div>
            </div>
        </div>
    );
}
