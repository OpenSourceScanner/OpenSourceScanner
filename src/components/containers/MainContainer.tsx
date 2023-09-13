import * as React from 'react';
import TitleContainer from './TitleContainer';
import ProjectSearchContainer from './ProjectSearch';
import ProjectsContainer from './ProjectsContainer';
import Grid from '@mui/material/Grid';

const MainContainer: React.FC<{}> = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TitleContainer />
        </Grid>
        <Grid item xs={12}>
          <ProjectSearchContainer />
        </Grid>
        <Grid item xs={12}>
          <ProjectsContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default MainContainer;
