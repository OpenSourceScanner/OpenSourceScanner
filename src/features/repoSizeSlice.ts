// creating a slice for the repo size dropdown
// includes the initial state, reducers, and actions
// actions are exported and used in the component
// reducers are exported and used in the store
// initial state is exported and used in the component
// Path: src/features/repoSizeSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface RepoSizeState {
  value: string;
}

// Define the initial state using that type
const initialState: RepoSizeState = {
  value: '0',
};

export const repoSizeSlice = createSlice({
  name: 'repoSize',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeRepoSize: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    // adding logic to reset the state to the initial state when the submit button is clicked
    resetRepoSize: (state) => {
      state.value = initialState.value;
    },
  },
});

export default repoSizeSlice;
// Other code such as selectors can use the imported `RootState` type
export const selectRepoSize = (state: RootState) => state.repoSize.value;
