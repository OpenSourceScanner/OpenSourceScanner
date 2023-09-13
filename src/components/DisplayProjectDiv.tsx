// creating a component to be displayed in the projects container
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from 'material-ui/styles/typography';

type DisplayProjectDivProps = {
  description: string;
  name: string;
  stars: number;
  url: string;
  forks: number;
  language: string;
  size: number;
};

const DisplayProjectDiv: React.FC<{}> = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};
