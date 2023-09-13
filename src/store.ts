import { configureStore } from '@reduxjs/toolkit';
import technologiesDropdownReducer from './features/technologiesDropdownSlice';
import changeProjectName from './features/projectNameSlice';

export const store = configureStore({
  reducer: {
    technologiesDropdown: technologiesDropdownReducer,
    projectName: changeProjectName,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
