import * as React from 'react';
import GitHubButton from './buttons/GitHubButton';
import {useNavigate} from 'react-router-dom'

interface ProjectTitleProps {
  url: string;
}

const ProjectTitleContainer: React.FC<ProjectTitleProps> = ({url}) => {
  const navigate = useNavigate()

  return (
    <div className='project-title-container'>
      <button className="go-back" onClick={() => navigate('/')}>GO BACK</button>
      <GitHubButton url={url}  />
    </div>
  );
};

export default ProjectTitleContainer;
