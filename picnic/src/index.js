import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configure_store';
// import './index.css';

ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
