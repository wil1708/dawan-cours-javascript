import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './redux/testRedux'
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store/store'

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);