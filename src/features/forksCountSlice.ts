// Creating a slice for the forks count
// includes the initial state, reducers, and actions
// actions are exported and used in the component
// reducers are exported and used in the store
// initial state is exported and used in the component
// Path: src/features/forksCountSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface ForksCountState {
  value: string;
}

// Define the initial state using that type
const initialState: ForksCountState = {
  value: '0',
};

export const forksCountSlice = createSlice({
  name: 'forksCount',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeForksCount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    // adding logic to reset the state to the initial state when the submit button is clicked
    resetForksCount: (state) => {
      state.value = initialState.value;
    },
  },
});

export default forksCountSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectForksCount = (state: RootState) => state.forksCount.value;
