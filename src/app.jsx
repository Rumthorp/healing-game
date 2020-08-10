import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import './game/main';
import store from './redux/configureStore';
import { addTest, subtractTest } from './redux/features/testSlice';
import './styles/main.scss';

const App = () => {
  return null;
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('react-root')
);
