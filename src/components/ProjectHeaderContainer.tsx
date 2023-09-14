import * as React from 'react';
import ProjectTitleContainer from './ProjectTitleContainer';
import StarChip from './buttons/StarChip';
import SizeChip from './buttons/SizeChip';
import ForkedChip from './buttons/ForkedChip';
import TagsContainer from './TagsContainer';
import { useSelector } from 'react-redux';

const ProjectHeaderContainer: React.FC = () => {
  const repoInfo = useSelector((state: any) => state.projectDetails.value);
  console.log('repoInfo', repoInfo)
  const tags = Object.keys(repoInfo.dependencies);


  console.log('repoInfo', repoInfo)
  return (
    <div className='project-header-container'>
      <ProjectTitleContainer url={repoInfo.url} />
      <div className='star-chip-container'>
        <StarChip stars={repoInfo.stars} />
      </div>
      <div className='size-chip-container'>
        <SizeChip size={repoInfo.size} />
      </div>
      <div className='forked-chip-container'>
        <ForkedChip forks={repoInfo.forks} />
      </div>
      <TagsContainer tags={tags} />
    </div>
  );
};

export default ProjectHeaderContainer;
