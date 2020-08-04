import {
  INCREMENT_NUMBER
} from '../actions/actionTypes';

const initialState = {
  number: 0
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_NUMBER :
      return Object.assign({}, state, {
        number: state.number += 1
      });
  }

  return state;
};

export default testReducer
