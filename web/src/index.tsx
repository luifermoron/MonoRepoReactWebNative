import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './presenters/Home/App';
import * as serviceWorker from './serviceWorker';
import { configureStore, appConfig } from "core";
import storage from 'redux-persist/lib/storage';

ReactDOM.render(
  <React.StrictMode>
    { appConfig(App, configureStore(storage)) }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
