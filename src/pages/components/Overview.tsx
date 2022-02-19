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
            return <Slideshow content={props.view.media.content}></Slideshow>;
        }
        else if(mediaType == 'video') {
            return <Video content={props.view.media.content}></Video>;
        }
        return null;
    }

    return(
        <div className="empty-view">
            {props.open ?  
                <div className={props.view.node.category}>
                    {props.view.node.title}
                    {renderMedia}
                </div> : 
                <div className="blank">
                    Select a project to view.
                </div>
            }
        </div>
    );
}
