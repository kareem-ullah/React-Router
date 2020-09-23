import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CustomRouter from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CustomRouter />,document.getElementById('root'));


serviceWorker.unregister();
