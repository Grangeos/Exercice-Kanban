import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import smoothscroll from 'smoothscroll-polyfill';
import './css/bootstrap.css';
import './css/main.css';
import './css/fonts.css';

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
