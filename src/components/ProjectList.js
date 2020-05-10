import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import ProjectDetails from './ProjectDetails';

const ProjectList = () => {
    const { projects } = useContext( ProjectContext );
    return projects.length ? ( 
        <div className="project-list">
        <ul>
        { projects.map(project => {
            return ( <ProjectDetails project={project} key={project.id}/>);
        })}
        </ul>
        </div>
     ) : (
        <div className="empty">No projects running now.. :)</div>
     )
}
 
export default ProjectList;