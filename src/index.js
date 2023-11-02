import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import './styles/index.css';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <HashRouter baseline={process.env.PUBLIC_URL}>
        <App />
        </HashRouter>
  </React.StrictMode>
);