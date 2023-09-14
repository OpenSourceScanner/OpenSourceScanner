import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface ProjectSearchState {
  value: any;
}

// Define the initial state using that type
const initialState: ProjectSearchState = {
  value: {},
};

export const ProjectDivSlice = createSlice({
  name: 'projectDetails',
  initialState,
  reducers: {
    changeProjectDetails: (state, action: PayloadAction<object>) => {
      state.value = action.payload;
    },
  },
});

export const changeProjectDetails = (state: RootState) =>
  state.projectDetails.value;

export default ProjectDivSlice;
