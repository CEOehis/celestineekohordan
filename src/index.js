import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
if(module.hot) module.hot.accept();
