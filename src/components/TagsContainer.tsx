import React from 'react';
import Chip from '@mui/material/Chip';

interface TagsContainerProps {
  tags: string[];
}

const TagsContainer: React.FC<TagsContainerProps> = ({ tags }) => {
  return (
    <div className="tags-container">
      <div className="tags-header" style={{ fontSize: '25px', textDecoration: 'underline', marginBottom: '10px' }}>
        Tags
      </div>
      <div className="tag-chips">
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            style={{
              backgroundColor: '#006400',
              color: 'white',
              margin: '2px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TagsContainer;
