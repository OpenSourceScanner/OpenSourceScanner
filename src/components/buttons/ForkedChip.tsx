import React from 'react';
import Chip from '@mui/material/Chip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ForkedChipProps {
  forks: string;
}

const ForkedChip: React.FC<ForkedChipProps> = ({ forks }) => {
  return (
    <Chip
      icon={<ContentCopyIcon style={{ color: 'white' }} />}
      label={`Forks: ${forks}`}
      style={{
        backgroundColor: '#004400',
        color: 'white',
      }}
    />
  );
};

export default ForkedChip;
