import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import testSlice from './features/testSlice';

const rootReducer = combineReducers({
  test: testSlice
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
