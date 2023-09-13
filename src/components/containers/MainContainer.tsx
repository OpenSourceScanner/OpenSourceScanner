import * as React from 'react';
import TitleContainer from './TitleContainer';
import ProjectSearchContainer from './ProjectSearch';

const MainContainer: React.FC<{}> = () => {
  return (
    <>
      <TitleContainer />
      <ProjectSearchContainer />
    </>
  );
};

export default MainContainer;
