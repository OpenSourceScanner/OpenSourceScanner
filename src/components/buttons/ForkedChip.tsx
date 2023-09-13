import React from 'react';
import Chip from '@mui/material/Chip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ForkedChipProps {
  label: string;
}

const ForkedChip: React.FC<ForkedChipProps> = ({ label }) => {
  return (
    <Chip
      icon={<ContentCopyIcon style={{ color: 'white' }} />}
      label={label}
      style={{
        backgroundColor: '#004400',
        color: 'white',
      }}
    />
  );
};

export default ForkedChip;
