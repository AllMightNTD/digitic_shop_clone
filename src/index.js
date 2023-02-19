import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import mainReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';

const container = document.getElementById('root');
const root = createRoot(container);
const store = createStore(mainReducer, applyMiddleware(thunk));
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
