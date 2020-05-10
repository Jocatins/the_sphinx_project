import React, { useContext, useState } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const NewProjectForm = () => {
    const { dispatch } = useContext ( ProjectContext );
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const  handleSubmit  = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_PROJECT', project: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    };
    return ( 
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="project title" value={title}
            onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="author" value={author}
            onChange={(e) => setAuthor(e.target.value)} required />
        <input type="submit" value="add new project" />
        </form>
    );
}

export default NewProjectForm;