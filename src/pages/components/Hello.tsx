// FIXME: Cannot find the files referenced, sampler doesn't work because buffer is not set
// Potentially: useEffect + useRef on sampler.

import React, { useState, useEffect, useRef, Fragment } from "react";
import * as Tone from "tone";

import G4 from "../../assets/G.wav";
import A4 from "../../assets/A.wav";
import B4 from "../../assets/B.wav";
import C5 from "../../assets/Csharp.wav";
import E5 from "../../assets/E.wav";
import F5 from "../../assets/Fsharp.wav";


export default function Hello(): JSX.Element {
    const passcode = ***REMOVED***;
    const [unlock, setLock] = useState(false);
    const [currIndex, setIndex] = useState(0);
    const [isLoaded, setLoaded] = useState(false);
    const [currLetter, setLetter] = useState(-1);
    const sampler = useRef(null);

    useEffect(() => {
        sampler.current = new Tone.Sampler(
            {
                G4,
                A4,
                B4,
                C5,
                E5,
                F5
            }).toDestination();
    }, []);

    function playNote(note: number, freq: string) {
        setLetter(note);
        sampler.current.triggerAttackRelease(freq, 0.15);
        if(note === passcode[currIndex]) {
            setIndex(currIndex + 1);
            if(currIndex >= 12) {
                setLock(true);
            }
        }
        else {
            setIndex(0);
            setLock(false);
        }
    }
    return(
        <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90.37" width='30vw'>
        <path 
            className={currLetter == 1 ? "_h" : "hello _h"} 
            d="M415.52,544.29H391.46V510.88H362.79v33.41H338.72v-87h24.07v32.38h28.67V457.25h24.06Z"
            transform="translate(-338.72 -455.71)"
            fill={currLetter == 1 ? "#FF7276" : "#FFFFFF"}
            onClick={() => playNote(1, "G4")}
        />
        <path 
            className={currLetter == 2 ? "_e" : "hello _e"}
            d="M447.27,519.58a7.69,7.69,0,0,0,1.28,4.61,8.33,8.33,0,0,0,3.32,2.75,15.09,15.09,0,0,0,4.48,1.28,35.17,35.17,0,0,0,4.74.32,43.44,43.44,0,0,0,5.18-.32,54.37,54.37,0,0,0,5.38-.89,36.22,36.22,0,0,0,4.86-1.41,17.52,17.52,0,0,0,3.78-1.86h.51l-1.28,16.26a32.46,32.46,0,0,1-11.26,4.35,64.25,64.25,0,0,1-13.06,1.41,39.19,39.19,0,0,1-11.45-1.66,26,26,0,0,1-9.48-5.13,24.19,24.19,0,0,1-6.4-9,33.17,33.17,0,0,1-2.36-13.18,37,37,0,0,1,2.56-14,34.25,34.25,0,0,1,6.84-10.88,31.5,31.5,0,0,1,9.92-7.11,29,29,0,0,1,22.79-.45,26,26,0,0,1,8.51,5.7,26.73,26.73,0,0,1,5.5,8.13,23.47,23.47,0,0,1,2,9.53,45,45,0,0,1-.39,5.25,23.27,23.27,0,0,1-1.66,6.27Zm16.64-10c.17-3-.52-5.31-2.05-7a7.13,7.13,0,0,0-5.38-2.49,7.93,7.93,0,0,0-6,2.75,11.19,11.19,0,0,0-3,6.72Z"
            transform="translate(-338.72 -455.71)"
            fill={currLetter == 2 ? "#FFAA4D" : "#FFFFFF"}
            onClick={() => playNote(2, "A4")}
        />
        <path 
            className={currLetter == 3 ? "_l1" : "hello _l1"}
            d="M515.36,455.71v88.58h-23V457.63Z" 
            transform="translate(-338.72 -455.71)"
            fill={currLetter == 3 ? "#FFE900" : "#FFFFFF"}
            onClick={() => playNote(3, "B4")}
        />
        <path 
            className={currLetter == 4 ? "_l2" : "hello _l2"}
            d="M549.92,455.71v88.58h-23V457.63Z" 
            transform="translate(-338.72 -455.71)"
            fill={currLetter == 4 ? "#44D62C" : "#FFFFFF"}
            onClick={() => playNote(4, "C5")}
        />
        <path
            className={currLetter == 5 ? "_o" : "hello _o"}
            d="M620.58,514.85a30.79,30.79,0,0,1-2.44,12.22,31.06,31.06,0,0,1-16.51,16.58,30,30,0,0,1-12,2.43,33.07,33.07,0,0,1-12-2.18,29,29,0,0,1-9.86-6.27,29.46,29.46,0,0,1-6.66-9.85,33,33,0,0,1-2.43-12.93A34.35,34.35,0,0,1,561,501.92a31.62,31.62,0,0,1,6.47-10.18,29.63,29.63,0,0,1,21.63-9.15A32.74,32.74,0,0,1,601.82,485a29.91,29.91,0,0,1,10,6.72A30.33,30.33,0,0,1,618.27,502,35.28,35.28,0,0,1,620.58,514.85Zm-23-.39q0-7-2.12-10.36a6.47,6.47,0,0,0-5.69-3.33q-3.47,0-5.76,3.45t-2.31,10.24q0,7.31,2.31,10.37a7,7,0,0,0,5.88,3.07c2,0,3.74-1.08,5.32-3.26S597.54,519.07,597.54,514.46Z" 
            transform="translate(-338.72 -455.71)"
            fill={currLetter == 5 ? "#00AADA" : "#FFFFFF"}
            onClick={() => playNote(5, "E5")}
        />
        <path
            className={currLetter == 6 ? "_exclam" : "hello _exclam"}
            d="M656.29,487.33l-2.56,26.49H638.62l-2.69-26.36-2.81-30.21h25.6ZM634.53,532.9a11.13,11.13,0,0,1,3.32-8.2,11.49,11.49,0,0,1,8.45-3.32q5.9,0,9,3.64a12.65,12.65,0,0,1,3.07,8.39,12.13,12.13,0,0,1-.89,4.61,12,12,0,0,1-2.43,3.77,10.84,10.84,0,0,1-3.72,2.5,12.45,12.45,0,0,1-4.73.89,11.77,11.77,0,0,1-8.71-3.32A12.11,12.11,0,0,1,634.53,532.9Z" 
            transform="translate(-338.72 -455.71)"
            fill={currLetter == 6 ? "#EA27C2" : "#FFFFFF"}
            onClick={() => playNote(6, "F5")}
        />
    </svg>
    <br></br>
    {unlock ? <h1>Unlocked!</h1> : <div></div>}
    </Fragment>
    );
}
