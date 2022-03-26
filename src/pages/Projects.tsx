import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Filter from "../components/Filter";
import ProjectList from "../components/ProjectList";
import Overview from "../components/Overview";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/projects.css";

interface sectionProps {
    section: number
}
export default function Projects(props: sectionProps): JSX.Element {
    const [filter, setFilter] = useState({
        'motion-graphics': false,
        'video-production': false,
        'metalworking': false,
        'web-dev': false,
        'programming': false,
        'woodworking': false,
        'hardware': false
    });
    const data = useStaticQuery(graphql`
query MyQuery {
  allDataJson {
    edges {
      node {
        title
        slug
        description
        date
        category
        byline
        tools {
          icon
          name
        }
        notes {
          note
          icon
        }
        media {
          static
          preview
          link
          main {
            content
            type
          }
        }
      }
    }
  }
} 
    `);
    const projectsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        if(props.section === 3) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[props.section]);
    const [search, setSearch] = useState("");
    const [selection, setSelection] = useState("");
    
    function handleFilter(newSetting: string, value: boolean): void {
        setFilter(filter =>({ ...filter, [newSetting]: !value}));
    }
    function handleSelection(newSelection: string): void {
        setSelection(newSelection);
    }

    return(
        <div ref={projectsRef} className="projects section">
        <div className="project-heading header">PROJECTS</div>
        <Filter updater={handleFilter} value={filter}/>
        <input 
            type="text" 
            className="project-search" 
            autoComplete="off" 
            placeholder="Search" 
            value={search} 
            onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
        />
        <ProjectList 
            updater={handleSelection} 
            value={filter} 
            param={search} 
            data={ data.allDataJson.edges }
        />
        <Overview 
            view={ data.allDataJson.edges.find((o: any) => o.node.slug === selection) }
            open={selection != ""}
            updater={handleSelection}
        />
        </div>
    );
}
