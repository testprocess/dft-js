import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store'

import App from './App';

const rootElement: any = document.getElementById("app");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);