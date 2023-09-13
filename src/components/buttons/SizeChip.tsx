import React from 'react';
import Chip from '@mui/material/Chip';
import MemoryIcon from '@mui/icons-material/Memory';

interface SizeChipProps {
  label: string;
}

const SizeChip: React.FC<SizeChipProps> = ({ label }) => {
  return (
    <Chip
      icon={<MemoryIcon style={{ color: 'white' }} />}
      label={label}
      style={{
        backgroundColor: '#004400',
        color: 'white',
      }}
    />
  );
};

export default SizeChip;
