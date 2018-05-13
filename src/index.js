import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css';

import './index.css';
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
