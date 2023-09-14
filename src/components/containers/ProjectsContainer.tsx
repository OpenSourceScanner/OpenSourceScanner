import * as React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState } from '../../store';
import DisplayProjectDiv from '../DisplayProjectDiv';

const ProjectsContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const state = useSelector((state: RootState) => state);
  // fetching the state from the store for project search
  const projectSearch = useSelector(
    (state: RootState) => state.projectSearch.value
  );

  const titleStyle = {
    backgroundColor: 'hsl(0, 0%, 10%)',
    color: 'white',
  };

  return (
    <>
      <h1 style={titleStyle}>Projects</h1>
      {projectSearch.map((repo, i) => (
        <DisplayProjectDiv key={i} repo={repo} />
      ))}
    </>
  );
};

export default ProjectsContainer;
