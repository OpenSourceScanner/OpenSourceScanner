// creating a slice of the project search
// includes the initial state, reducers, and actions
// actions are exported and used in the component
// reducers are exported and used in the store
// initial state is exported and used in the component
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface ProjectSearchState {
  value: string[];
}

// Define the initial state using that type
const initialState: ProjectSearchState = {
  value: [],
};

export const projectSearchSlice = createSlice({
  name: 'projectSearch',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeProjectSearch: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectProjectSearch = (state: RootState) =>
  state.projectSearch.value;

export default projectSearchSlice;
