import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const ProjectDetails = ({ project }) => {
    const { dispatch } = useContext( ProjectContext );
    return ( 
        <li onClick={() => dispatch({type: 'REMOVE_PROJECT', id: project.id})}>
        <div className="title">{ project.title }</div>
        <div className="author">{ project.author }</div>
        </li>
     );
}

export default ProjectDetails;