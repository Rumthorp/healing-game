import { configureStore, combineReducers } from '@reduxjs/toolkit';

import sceneManagerSlice from './scenes/sceneManagerSlice';
import blobStatsSlice from './blobStatsSlice';
import updateSlice from './updateSlice';

// export const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('state');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state', serializedState);
//   } catch {
//     // ignore write errors
//   }
// };

// const preloadedState = loadState();

const reducer = combineReducers({
  sceneManager: sceneManagerSlice,
  blobStats: blobStatsSlice,
  update: updateSlice
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware({
      serializableCheck: false
    });
  }
});


export default store;