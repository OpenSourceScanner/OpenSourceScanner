import React from 'react';
import Button from '@mui/material/Button';

const GitHubButton: React.FC = () => {
  return (
    <Button variant="contained" className="github-button" style={{ backgroundColor: '#004400', color: 'white' }}>
      GitHub Repo
    </Button>
  );
};

export default GitHubButton;
