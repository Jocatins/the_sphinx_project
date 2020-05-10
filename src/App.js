import React from 'react';
import ProjectContextProvider from './contexts/ProjectContext';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import NewProjectForm from './components/ProjectForm';

function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
      <Navbar/>
      <ProjectList/>
      <NewProjectForm/>
      </ProjectContextProvider>
    </div>
  );
}

export default App;
