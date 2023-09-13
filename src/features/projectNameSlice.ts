// creating a slice for the project name
// includes the initial state, reducers, and actions
// actions are exported and used in the component
// reducers are exported and used in the store
// initial state is exported and used in the component
//
// Path: src/features/projectNameSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface ProjectNameState {
  value: string;
}

// Define the initial state using that type
const initialState: ProjectNameState = {
  value: 'Any',
};

export const projectNameSlice = createSlice({
  name: 'projectName',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeProjectName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    // adding logic to reset the state to the initial state when the submit button is clicked
    resetProjectName: (state) => {
      state.value = initialState.value;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectProjectName = (state: RootState) => state.projectName.value;

export default projectNameSlice;
