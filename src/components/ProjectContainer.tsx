// src/components/ProjectContainer.tsx
import * as React from 'react';
import ProjectHeaderContainer from './ProjectHeaderContainer';
import ReadMeContainer from './ReadMeContainer';

const ProjectContainer: React.FC = () => {
  return (
    <div className='project-container'>
      <ProjectHeaderContainer />
      <ReadMeContainer />
    </div>
  );
};

export default ProjectContainer;
