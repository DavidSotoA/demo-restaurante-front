import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
