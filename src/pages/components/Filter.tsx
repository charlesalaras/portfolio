import { useState } from "react";


interface FilterProps {
    updater: (arg1: string, arg2: boolean) => void,
    value: { [key: string]: boolean; }
}

export default function Filter(props: FilterProps): JSX.Element { 
    return(
        <div>
            <button onClick={() => props.updater('motion-graphics', props.value['motion-graphics'])}></button>
            <button onClick={() => props.updater('video-production', props.value['video-production'])}></button>
            <button onClick={() => props.updater('metalworking', props.value['metalworking'])}></button>
            <button onClick={() => props.updater('web-dev', props.value['web-dev'])}></button>
            <button onClick={() => props.updater('programming', props.value['programming'])}></button>
            <button onClick={() => props.updater('woodworking', props.value['woodworking'])}></button>
            <button onClick={() => props.updater('hardware', props.value['hardware'])}></button>
        </div>
    );
}
