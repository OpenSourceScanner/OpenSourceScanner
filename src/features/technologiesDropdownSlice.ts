// creating a slice for the technologies dropdown
// includes the initial state, reducers, and actions
// actions are exported and used in the component
// reducers are exported and used in the store
// initial state is exported and used in the component

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface TechnologiesDropdownState {
  value: string;
}

// Define the initial state using that type
const initialState: TechnologiesDropdownState = {
  value: '0',
};

export const technologiesDropdownSlice = createSlice({
  name: 'technologiesDropdown',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeTechnology: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    // adding logic to reset the state to the initial state when the submit button is clicked
    resetTechnology: (state) => {
      state.value = initialState.value;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectTechnology = (state: RootState) =>
  state.technologiesDropdown.value;
// exporting the actions
export const { changeTechnology, resetTechnology } =
  technologiesDropdownSlice.actions;

export default technologiesDropdownSlice;
