import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import blobStatsSlice from './slices/blobStatsSlice';
import updateSlice from './slices/updateSlice';

const rootReducer = combineReducers({
  blobStats: blobStatsSlice,
  update: updateSlice
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
