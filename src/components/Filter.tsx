import * as React from "react";
import { useState } from "react";


interface FilterProps {
    updater: (arg1: string, arg2: boolean) => void,
    value: { [key: string]: boolean; }
}

export default function Filter(props: FilterProps): JSX.Element { 
    return(
        <div>
            <button onClick={() => props.updater('motion-graphics', props.value['motion-graphics'])}>
                MOTION GRAPHICS
            </button>
            <button onClick={() => props.updater('video-production', props.value['video-production'])}>
                VIDEO PRODUCTION
            </button>
            <button onClick={() => props.updater('metalworking', props.value['metalworking'])}>
                METALWORKING
            </button>
            <button onClick={() => props.updater('web-dev', props.value['web-dev'])}>
                WEB DEV
            </button>
            <button onClick={() => props.updater('programming', props.value['programming'])}>
                PROGRAMMING
            </button>
            <button onClick={() => props.updater('woodworking', props.value['woodworking'])}>
                WOODWORKING
            </button>
            <button onClick={() => props.updater('hardware', props.value['hardware'])}>
                HARDWARE
            </button>
        </div>
    );
}
