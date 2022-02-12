import { useState } from "react";
import { useProjectData } from "../hooks/project-data";
import Slideshow from "./Media";
import Video from "./Media";

interface OVProps {
   view: string 
}

export default function Overview(props: OVProps): JSX.Element {
    const { data } = useProjectData();
    const selection = data.filter(obj => (obj.node.title === props.view));

    const renderMedia = () => {
        const mediaType = selection[0].node.media.type;
        if(mediaType == 'slideshow') {
            return <Slideshow content={selection[0].node.media.content}></Slideshow>;
        }
        else if(mediaType == 'video') {
            return <Video content={selection[0].node.media.content}></Video>;
        }
        return null;
    }

    return(
        <div className="empty-view">
            {props.view ? 
                <div className="blank">
                    Select a project to view.
                </div> :
                <div className={selection[0].node.category}>
                </div>
            }
        </div>
    );
}
