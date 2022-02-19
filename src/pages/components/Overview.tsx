import { useState } from "react";
import {Slideshow} from "./Media";
import {Video} from "./Media";

interface OVProps {
   view: any,
   open: boolean,
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
            {props.view ? 
                <div className="blank">
                    Select a project to view.
                </div> :
                <div className={props.view.node.category}>
                    {renderMedia}
                </div>
            }
        </div>
    );
}
