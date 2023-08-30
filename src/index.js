import React from 'react';
import './index.css'; // You can remove this if not needed
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();