import React from 'react';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';

interface StarChipProps {
  stars: string;
}

const StarChip: React.FC<StarChipProps> = ({ stars }) => {
  return (
    <Chip
      icon={<StarIcon style={{ color: 'white' }} />}
      label={`Stars: ${stars}`}
      style={{
        backgroundColor: '#004400',
        color: 'white',
      }}
    />
  );
};

export default StarChip;
