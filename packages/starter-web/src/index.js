import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';
import {enableLogging} from 'mobx-logger';

enableLogging();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
