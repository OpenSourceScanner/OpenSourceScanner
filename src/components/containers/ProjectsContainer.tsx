import * as React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState } from '../../store';

const ProjectsContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const state = useSelector((state: RootState) => state);
  // fetching the state from the store for project search
  const projectSearch = useSelector((state: RootState) => state.projectSearch);
  // fetching the state from the store for project search
  console.log('projectSearch', projectSearch);
  return (
    <>
      <h1>Projects Container</h1>
    </>
  );
};

export default ProjectsContainer;
