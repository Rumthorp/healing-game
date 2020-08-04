import { combineReducers } from 'redux';

import testReducer from './testReducer';

const combinedReducers = combineReducers({
  test: testReducer
});

export default combinedReducers;
