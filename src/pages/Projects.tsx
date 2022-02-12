import { useState } from "react";
import Filter from "./components/Filter";
import ProjectList from "./components/ProjectList";
import Overview from "./components/Overview";

export default function Projects(): JSX.Element {
    const [filter, setFilter] = useState({
        'motion-graphics': false,
        'video-production': false,
        'metalworking': false,
        'web-dev': false,
        'programming': false,
        'woodworking': false,
        'hardware': false
    });
    const [search, setSearch] = useState("");
    const [selection, setSelection] = useState("");
    
    function handleFilter(newSetting: string, value: boolean): void {
        setFilter(filter =>({ ...filter, [newSetting]: !value}));
    }
    function handleSelection(newSelection: string): void {
        setSelection(newSelection);
    }

    return(
        <div className="projects">
        <div className="header">PROJECTS</div>
        <Filter updater={handleFilter} value={filter}/>
        <input 
            type="text" 
            className="search-bar" 
            autoComplete="off" 
            placeholder="Search" 
            value={search} 
            onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
        />
        <ProjectList updater={handleSelection} value={filter} param={search}/>
        <Overview view={selection}/>
        </div>
    );
}
