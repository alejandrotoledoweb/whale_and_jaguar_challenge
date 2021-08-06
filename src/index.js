import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import Routes from './routes';
import { myStore } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
