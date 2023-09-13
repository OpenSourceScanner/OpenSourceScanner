import React from 'react';

const ReadMeContainer: React.FC = () => {
  // Fake README text
  const readmeText = `
    # My Project README

    Welcome to my project! This is a README file with some sample content.
    
    ## Getting Started
    
    To get started with this project, follow these steps:
    
    1. Clone the repository.
    2. Install the dependencies using npm or yarn.
    3. Run the project with npm start.
    
    ## Features
    
    - Feature 1
    - Feature 2
    - Feature 3
    
    ## License
    
    This project is licensed under the XYZ License.
  `;


  const readmeStyles = {
    backgroundColor: '#111',
    borderRadius: '10px',
    border: '1px solid white',
    padding: '20px',
    color: 'white',
    maxWidth: '1000px',
    margin: '0 auto', 
  };

  return (
    <div className="readme-container" style={readmeStyles}>
      <pre>{readmeText}</pre>
    </div>
  );
};

export default ReadMeContainer;
