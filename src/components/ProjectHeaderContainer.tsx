import React from 'react';
import ProjectTitleContainer from './ProjectTitleContainer';
import StarChip from './buttons/StarChip';
import SizeChip from './buttons/SizeChip';
import ForkedChip from './buttons/ForkedChip';
import TagsContainer from './TagsContainer'; 

const tags = ['Tag1', 'Tag2', 'Tag3']; 

const ProjectHeaderContainer: React.FC = () => {
  return (
    <div className="project-header-container">
      <ProjectTitleContainer />
      <div className="star-chip-container">
        <StarChip label="Stars: 5" />
      </div>
      <div className="size-chip-container">
        <SizeChip label="Size: 100 MB" />
      </div>
      <div className="forked-chip-container">
        <ForkedChip label="Forks: 10" />
      </div>
      <TagsContainer tags={tags} /> 
    </div>
  );
};

export default ProjectHeaderContainer;
