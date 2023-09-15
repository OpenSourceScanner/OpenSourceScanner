import React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

interface GitHubBtnProps {
  url: string;
}

const GitHubButton: React.FC<GitHubBtnProps> = ({url}) => {

  const openRepoLink = () => {
    const newWindow = window.open(url, '_blank', 'nonpener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  return (
    <a href={url} target="_blank" rel="nonpener,noreferrer" style={{textDecoration: "none"}}>
      <Button variant="contained" className="github-button" style={{ backgroundColor: '#004400', color: 'white' }}>
        GitHub Repo
      </Button>
    </a>
  );
};

export default GitHubButton;
