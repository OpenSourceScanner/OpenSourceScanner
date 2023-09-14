import { configureStore } from '@reduxjs/toolkit';
import technologiesDropdownSlice from './features/technologiesDropdownSlice';
import changeProjectNameSlice from './features/projectNameSlice';
import changeStarsCountSlice from './features/starsCountSlice';
import changeForksCountSlice from './features/forksCountSlice';
import repoSizeSlice from './features/repoSizeSlice';
import projectSearchSlice from './features/projectSearchSlice';
import projectDiveSlice from './features/displayProjectDivSlice';

export const store = configureStore({
  reducer: {
    technologiesDropdown: technologiesDropdownSlice.reducer,
    projectName: changeProjectNameSlice.reducer,
    starsCount: changeStarsCountSlice.reducer,
    forksCount: changeForksCountSlice.reducer,
    repoSize: repoSizeSlice.reducer,
    projectSearch: projectSearchSlice.reducer,
    projectDetails: projectDiveSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
