import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector, useDispatch } from 'react-redux';

import store from './redux/configureStore';
import { increment_number } from './redux/actions/testActions';

const testLoop = () => {
  // const dispatch = useDispatch();
  // dispatch(increment_number);
  requestAnimationFrame(testLoop);
}

requestAnimationFrame(testLoop);


const App = () => {
  const number = useSelector(state => state.test.number);
  return (
    <div>
      hello world
      {number}
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
