import React, {useState, Fragment} from "react";
import Popout from "./Popout";
import house from "./icons/bi/house-fill.svg";
import info from "./icons/bi/info-circle-fill.svg";
import kanban from "./icons/bi/kanban-fill.svg";
import contact from "./icons/bi/pencil-square.svg";
import stars from "./icons/bi/list-stars.svg";
import x from "./icons/bi/x.svg";
import list from "./icons/bi/list.svg";

// FIXME: Change Bootstrap Icons to be SVGs
export default function NavBar() {
    const[scrollPos, setScrollPos] = useState(1);
    const[listPopout, setPopout] = useState(false);

    return(
        <Fragment>
            <div className="navbar">
                <div className="under-button">
                    <button
                        type="button"
                        className="list"
                        onClick={() => setPopout(!listPopout)}
                    >
                        {listPopout ? 
                            <img src={x}></img> : <img src={list}></img>
                        }
                    </button>
                </div>
                <img src={house}></img> 
                <img src={house}></img>
                <img src={house}></img>
                <img src={house}></img>
                <img src={house}></img>
            </div>
            {listPopout && (<Popout></Popout>)}
        </Fragment>
    );
}
