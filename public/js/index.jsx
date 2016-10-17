import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/index.jsx';
import todoApp from './reducers/index.js';

const store = createStore(todoApp);
const root = document.getElementById('wrapper');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);