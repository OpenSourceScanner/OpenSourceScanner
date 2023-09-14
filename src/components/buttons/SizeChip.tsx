import React from 'react';
import Chip from '@mui/material/Chip';
import MemoryIcon from '@mui/icons-material/Memory';

interface SizeChipProps {
  size: string;
}

const SizeChip: React.FC<SizeChipProps> = ({ size }) => {
  return (
    <Chip
      icon={<MemoryIcon style={{ color: 'white' }} />}
      label={`Size: ${size}MB`}
      style={{
        backgroundColor: '#004400',
        color: 'white',
      }}
    />
  );
};

export default SizeChip;
