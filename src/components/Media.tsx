import { useState } from "react";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";

interface MediaProps {
    content: string[]
}
// FIXME: Use a dynamic image instead (how to get src from gatsby query?)
export function Slideshow(props: MediaProps): JSX.Element {
    return(
        <Carousel>
            {props.content.map((source) => {
                <Carousel.Item>
                <img src={source}/>
                </Carousel.Item>
            })}
        </Carousel>
    );
}

export function Video(props: MediaProps): JSX.Element {
    return(
        <iframe src={props.content[0]}></iframe>
    );
}
