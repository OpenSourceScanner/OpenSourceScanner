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
      label={`Size: ${(Number(size)/1000).toFixed(2)}MB`}
      style={{
        backgroundColor: '#004400',
        color: 'white',
      }}
    />
  );
};

export default SizeChip;
