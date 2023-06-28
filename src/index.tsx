import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';


const rootElement: any = document.querySelector("body");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <App />
);