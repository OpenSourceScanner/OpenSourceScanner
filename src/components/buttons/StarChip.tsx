import React from 'react';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';

interface StarChipProps {
  label: string;
}

const StarChip: React.FC<StarChipProps> = ({ label }) => {
  return (
    <Chip
      icon={<StarIcon style={{ color: 'white' }} />}
      label={label}
      style={{
        backgroundColor: '#004400',
        color: 'white',
      }}
    />
  );
};

export default StarChip;
