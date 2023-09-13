import { configureStore } from '@reduxjs/toolkit';
import technologiesDropdownReducer from './features/technologiesDropdownSlice';
import changeProjectName from './features/projectNameSlice';
import changeStarsCount from './features/starsCountSlice';
import changeForksCount from './features/forksCountSlice';

export const store = configureStore({
  reducer: {
    technologiesDropdown: technologiesDropdownReducer,
    projectName: changeProjectName,
    starsCount: changeStarsCount,
    forksCount: changeForksCount,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
