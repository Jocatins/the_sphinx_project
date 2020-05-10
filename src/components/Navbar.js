import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const Navbar = () => {
    const { projects } = useContext(ProjectContext);
    return ( 
        <div className="navbar">
        <h1> The Sphinx Project</h1>
        <p>We have { projects.length } projects running...</p>
        </div>
     );
}
 
export default Navbar;