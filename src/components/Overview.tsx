import * as React from "react";
import { useState } from "react";
import {Slideshow} from "./Media";
import {Video} from "./Media";

interface OVProps {
   // The selection (if existent)
   view: any,
   // Is selection not empty
   open: boolean,
   // Updates Selection
   updater: (arg1: string) => void
}
// FIXME: Just grab the GraphQL node, no need to re-query
export default function Overview(props: OVProps): JSX.Element {

    const renderMedia = () => {
        const mediaType = props.view.media.type;
        if(mediaType == 'slideshow') {
            return <Slideshow content={props.view.media}></Slideshow>;
        }
        else if(mediaType == 'video') {
            return <Video content={props.view.media}></Video>;
        }
        return null;
    }

    const tools = props.view.node.tools.map((tool) =>
        <li key={tool.name}><img src={tool.icon}></img> {tool.name}</li>
    );

    const notes = props.view.node.notes.map((note) =>
        <li key={note.note}><img src={note.icon}></img> {note.note}</li>
    );

    return(
        <div className="blank project-view">
            {props.open ? 
                <div className="inset">
                <div className={props.view.node.category}>
                    <button onClick={() => props.updater("")} className="close">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                    </button>
                    <h1>{props.view.node.title}</h1>
                    {renderMedia}
                    <h2>About</h2>
                    <p>{props.view.node.description}</p>
                    <h2>Tools</h2>
                    <ul>
                        {tools}
                    </ul>
                    <h2>Notes</h2>
                    <ul>
                        {notes}
                    </ul>
                </div></div> : 
                <div>
                    Select a project to view.
                </div>
            }
        </div>
    );
}
