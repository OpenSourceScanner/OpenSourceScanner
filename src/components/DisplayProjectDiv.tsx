// creating a component to be displayed in the projects container
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from 'material-ui/styles/typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectDivSlice } from '../features/displayProjectDivSlice';
import { useNavigate } from 'react-router-dom';

type DisplayProjectDivProps = {
  description: string;
  name: string;
  stars: number;
  url: string;
  forks: number;
  language: string;
  size: number;
};

type DisplayProjectDivComponentProps = {
  repo: DisplayProjectDivProps;
};

// const DisplayProjectDiv: React.FC<DisplayProjectDivComponentProps> = (repo) => {
const DisplayProjectDiv: any = ({ repo }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { description, fullName, stars, url, forks, language, size } = repo;

  const handleRepoClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/repoInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({ fullName }),
      });
      const repoInfo = await response.json();

      dispatch(ProjectDivSlice.actions.changeProjectDetails({...repoInfo, ...repo}));
      navigate('/repo');

      return;
    } catch (err) {
      return {
        log: 'Error in handleRepoClick function',
        status: 500,
        message: { err: `An error occurred: ${err}` },
      };
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} fontSize={32}>
          {fullName}
        </Grid>
        <Grid item xs={10} fontSize={20}>
          {description}
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={handleRepoClick}
            variant='contained'
            size='large'
            fullWidth
          >
            More Info
          </Button>
        </Grid>
        <Grid item xs={6}>
          Language: {language}
        </Grid>
        <Grid item xs={2}>
          Stars: {stars}
        </Grid>
        <Grid item xs={2}>
          Forks: {forks}
        </Grid>
        <Grid item xs={2}>
          Size: {(Number(size)/1000).toFixed(2)}MB
        </Grid>
      </Grid>
    </>
  );
};

export default DisplayProjectDiv;
