import React from 'react';

interface TagsContainerProps {
  tags: string[]; 
}

const TagsContainer: React.FC<TagsContainerProps> = ({ tags }) => {
  return (
    <div className="tags-container">
      <div className="tags-header">Tags</div>
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagsContainer;
