// creating a slice for the stars count
// includes the initial state, reducers, and actions
// actions are exported and used in the component
// reducers are exported and used in the store
// initial state is exported and used in the component
// Path: src/features/starsCountSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

// Define a type for the slice state
interface StarsCountState {
  value: string;
}

// Define the initial state using that type
const initialState: StarsCountState = {
  value: '0',
};

export const starsCountSlice = createSlice({
  name: 'starsCount',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeStarsCount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    // adding logic to reset the state to the initial state when the submit button is clicked
    resetStarsCount: (state) => {
      state.value = initialState.value;
    },
  },
});

export default starsCountSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectStarsCount = (state: RootState) => state.starsCount.value;
