import * as React from "react";
import { useState } from "react";

interface FilterProps {
    updater: (arg1: string, arg2: boolean) => void,
    value: { [key: string]: boolean; }
}

export default function Filter(props: FilterProps): JSX.Element { 
    return(
        <div className="project-filter">
            <button
                className={'motion-graphics'}
                onClick={() => props.updater('motion-graphics', props.value['motion-graphics'])}>
                <i className='motion-graphics'></i>
                MOTION GRAPHICS
            </button>
            <button 
                className={'video-production'}
                onClick={() => props.updater('video-production', props.value['video-production'])}>
                VIDEO PRODUCTION
            </button>
            <button 
                className={'metalworking'}
                onClick={() => props.updater('metalworking', props.value['metalworking'])}>
                METALWORKING
            </button>
            <button 
                className={'web-dev'}
                onClick={() => props.updater('web-dev', props.value['web-dev'])}>
                WEB DEV
            </button>
            <button 
                className={'programming'}
                onClick={() => props.updater('programming', props.value['programming'])}>
                PROGRAMMING
            </button>
            <button 
                className={'woodworking'}
                onClick={() => props.updater('woodworking', props.value['woodworking'])}>
                WOODWORKING
            </button>
            <button 
                className={'hardware'}
                onClick={() => props.updater('hardware', props.value['hardware'])}>
                HARDWARE
            </button>
        </div>
    );
}
